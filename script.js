document.addEventListener('DOMContentLoaded', function() {
    const offerBoxes = document.querySelectorAll('.offer-box');
    const totalPriceElement = document.getElementById('total');
    
    offerBoxes.forEach(box => {
        const header = box.querySelector('.box-header');
        const content = box.querySelector('.box-content');
        
        header.addEventListener('click', function() {
            const isActive = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            document.querySelectorAll('.box-content').forEach(c => c.style.maxHeight = null);
            
            if (!isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
        
        box.querySelector('input[type="radio"]').addEventListener('change', updateTotalPrice);
    });

    function updateTotalPrice() {
        const selectedOffer = document.querySelector('input[name="offer"]:checked');
        const totalPrice = selectedOffer.value;
        totalPriceElement.textContent = `$${totalPrice}.00 USD`;
    }
});
