const TICKET_PRICE = 550;

const totalSeatEl = document.getElementById('total-seat');
const selectedSeatEl = document.getElementById('selected-seat');
const totalPriceEl = document.getElementById('total-price-span');
const couponInput =  document.getElementById('coupon-input');

let totalSelectedSeat =[];
function showAvailableSeat(event) {
    
    if (totalSelectedSeat.includes(event.innerText)) {
        return alert('Seat is already booked');
    }
    else if (totalSelectedSeat.length > 3) {
        return alert('Maximum seat booked');
    }
    else{
        totalSelectedSeat.push(event.innerText);
        totalSeatEl.innerText -= 1;
        selectedSeatEl.innerText = totalSelectedSeat.length;
        event.classList.add('bg-primary','text-white')

        document.getElementById('no-seat-booked').classList.add('hidden');
       const bookedSeatContainer = document.createElement('div');
       bookedSeatContainer.className ='flex justify-between items-center text-gray-400';

       bookedSeatContainer.innerHTML = `
       <li>${event.innerText}</li>
       <li>Economy</li>
       <li>550</li>  
        `;
        document.getElementById('booked-seat-list').appendChild(bookedSeatContainer);
        totalPriceEl.innerText = (TICKET_PRICE * totalSelectedSeat.length).toFixed(2);

        if (totalSelectedSeat.length > 0) {
            document.getElementById('passenger-name-input').removeAttribute('disabled');
            document.getElementById('phone-number-input').removeAttribute('disabled');
        }

        if (totalSelectedSeat.length === 4) {
            document.getElementById('coupon-input').removeAttribute('disabled');
            document.getElementById('coupon-input-btn').removeAttribute('disabled');
        }

    }
    
};

// coupon button

document.getElementById('coupon-input-btn').addEventListener('click',function(){
      const couponInputValue = couponInput.value;
      const couponSaveEl = document.getElementById('coupon-save-price-span');
      const grandTotalPriceEl = document.getElementById('grand-price-span');
      if (couponInputValue !== 'NEW15' && couponInputValue !== 'Couple 20') {
        return alert('Invalid coupon')
      }
      else{
            document.getElementById('coupon-save-price-container').classList.remove('hidden');
            document.getElementById('coupon-save-price-container').classList.add('flex');
        if (couponInputValue === 'NEW15') {
            
            const couponSave = (Number(totalPriceEl.innerText) * 15 / 100).toFixed(2);
            const grandTotal = (Number(totalPriceEl.innerText) - couponSave).toFixed(2);
            couponSaveEl.innerText = couponSave;
            grandTotalPriceEl.innerText = grandTotal;
        }
        else if (couponInputValue === 'Couple 20') {
            const couponSave = (Number(totalPriceEl.innerText) * 20 / 100).toFixed(2);
            const grandTotal = (Number(totalPriceEl.innerText) - couponSave).toFixed(2);
            couponSaveEl.innerText = couponSave;
            grandTotalPriceEl.innerText = grandTotal;
        }
        document.getElementById('coupon-input-div').classList.remove('flex');
        document.getElementById('coupon-input-div').classList.add('hidden');
        
      }

})

// passenger input number function

document.getElementById('phone-number-input').addEventListener('input',function(e){
       if (e.target.value.length >= 11) {
      document.getElementById('next-btn').removeAttribute('disabled')
   }
})
document.getElementById('continue-btn').addEventListener('click',function(){
    window.location.reload()
})



