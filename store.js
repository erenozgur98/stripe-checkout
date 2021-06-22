if (document.readtState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    };

    // let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    // for (let i = 0; i < quantityInputs.length; i++) {
    //     let input = quantityInputs[i];
    //     input.addEventListener('change', quantityChanged);
    // };

    // let addToCartButtons = document.getElementsByClassName('shop-item-button');
    // for (let i = 0; i < addToCartButtons.length; i++) {
    //     let button = addToCartButtons[i];
    //     input.addEventListener('change', addToCartClicked);
    // };

    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {

}

function removeCartItem(e) {
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(e) {

}

function addToCartClicked(e) {

}

function addItemToCard(title, price, imageSrc) {

}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');

    let total = 0;

    for (let i = 0; i< cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = `$${total}`;

}