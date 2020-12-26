const price = 2700
const macbook = {
    price,
    getPrice() {
        console.log(this.price)
    },
    setOffer(offer) {
        this.price -= offer
    },
    getFinalPrice() {
        return this.price * 1.16
    },
    *discount(offer) {
        let price = this.getFinalPrice()
        while (true) {
            yield price -= offer
        }
    }
}

document.querySelector('#price').textContent = macbook.price

macbook.setOffer(500)

document.querySelector('#offer').textContent = macbook.price
document.querySelector('#final-price').textContent = macbook.getFinalPrice()

const makeAnOffer = macbook.discount(15)

document.querySelector('#make-offer').addEventListener('click', () => {
    document.querySelector('#final-price').textContent = makeAnOffer.next().value
})