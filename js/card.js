let total = 0;
let discount = 0;
let cartItemCount = 0;

function handleCLikBtn(target) {
    const productName = target.querySelector("h5").innerText;
    const price = parseFloat(target.querySelector("h6").innerText.split(': ')[1]);
    total += price;
    cartItemCount++;

    const selectedItemContainer = document.getElementById("selected-items");
    const cartItem = document.createElement("p");
    cartItem.textContent = `${cartItemCount}. ${productName}`;
    selectedItemContainer.appendChild(cartItem);

    updateTotalDisplay();

    const existingHr = selectedItemContainer.querySelector("hr");
    if (existingHr) {
        existingHr.remove();
    }

    const hr = document.createElement("hr");
    selectedItemContainer.appendChild(hr);
}

document.getElementById("apply-button").addEventListener("click", function () {
    const couponInput = document.getElementById("coupon-input");
    const couponCode = couponInput.value;

    if (couponCode === "SELL200") {
        applyCouponDiscount();
        alert("Coupon code applied successfully!");
    }
    else {
        alert('Please Apply Coupon code!!');
    }
});

function applyCouponDiscount() {
    discount = total * 0.2; // 20% discount
    updateTotalDisplay();
}

function updateTotalDisplay() {
    const totalElement = document.getElementById("total");
    const discountElement = document.getElementById("discount");
    const finalTotalElement = document.getElementById("final-total");

    totalElement.textContent = total.toFixed(2);
    discountElement.textContent = discount.toFixed(2);

    const finalTotal = total - discount;
    finalTotalElement.textContent = finalTotal.toFixed(2);

    // Enable or disable purchase button based on total
    const btn = document.getElementById('purchase-btn');
    if (total > 0) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', true);
    }

    const couponBtn = document.getElementById('apply-button');

    // Enable or disable Apply button based on total

    if (total >= 200) {
        couponBtn.removeAttribute('disabled',);
    } else {
        couponBtn.setAttribute('disabled', true);
    }
}



document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
})
