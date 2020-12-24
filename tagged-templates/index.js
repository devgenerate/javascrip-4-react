function render(component, container) {
    container.innerHTML = component
}

const allowedTags = ['div', 'h1', 'section']
const styled = {}

allowedTags.forEach(tag => {
    styled[tag] = function getStyled(styles) {
        return function getStyledComponent(content) {
            return `
                <${tag} style="${styles}">
                    ${content}
                </${tag}>
            `
        }
    }
})

const TitleStyled = styled.section`
    color: violet;
    text-shadow: 2px 2px 0 blue;
`

render(TitleStyled("Testing h1"), document.querySelector("#app"))