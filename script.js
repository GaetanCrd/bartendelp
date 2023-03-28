document.addEventListener("DOMContentLoaded", function() {
   
    const quantities = {
        shot: 0,
        meter: 0,
        hardEnergy: 0,
        hardSoft: 0,
        beer: 0,
      };
      
      function updateTotal() {
        const total =
          parseFloat(document.getElementById("priceShot").innerText) * quantities.shot +
          parseFloat(document.getElementById("priceMeter").innerText) * quantities.meter +
          parseFloat(document.getElementById("priceHardEnergy").innerText) * quantities.hardEnergy +
          parseFloat(document.getElementById("priceHardSoft").innerText) * quantities.hardSoft +
          parseFloat(document.getElementById("priceBeer").innerText) * quantities.beer;
        document.getElementById("totalPrice").innerText = total.toFixed(1);
      }
      
      function increment(id) {
        quantities[id]++;
        document.getElementById("quantity" + id.charAt(0).toUpperCase() + id.slice(1)).innerText = quantities[id];
        updateTotal();
      }
      
      function decrement(id) {
        if (quantities[id] > 0) {
          quantities[id]--;
          document.getElementById("quantity" + id.charAt(0).toUpperCase() + id.slice(1)).innerText = quantities[id];
          updateTotal();
        }
      }
      
      function updatePrices() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
    
        let priceShot, priceMeter, priceBeer, priceHardSoft, priceHardEnergy;
    
        if (hours === 23 && minutes >= 30) {
            priceShot = 3.20;
            priceMeter = 25.00;
            priceHardEnergy = 6.00;
            priceHardSoft = 5.20;
            priceBeer = 2.80;
        } else if (hours === 0 && minutes < 30) {
            priceShot = 3.00;
            priceMeter = 23.00;
            priceHardEnergy = 6.80;
            priceHardSoft = 5.60;
            priceBeer = 3.40;
        } else if (hours === 0 && minutes >= 30) {
            priceShot = 2.40;
            priceMeter = 21.00;
            priceHardEnergy = 5.60;
            priceHardSoft = 4.60;
            priceBeer = 2.60;
        } else if (hours === 1 && minutes < 30) {
            priceShot = 3.40;
            priceMeter = 28.00;
            priceHardEnergy = 7.00;
            priceHardSoft = 6.00;
            priceBeer = 3.60;
        } else if (hours === 1 && minutes >= 30 && minutes < 45) {
            priceShot = 3.00;
            priceMeter = 25.00;
            priceHardEnergy = 6.00;
            priceHardSoft = 2.50;
            priceBeer = 3.00;
        } else if (hours === 1 && minutes >= 45) {
            priceShot = 2.80;
            priceMeter = 23.00;
            priceHardEnergy = 5.40;
            priceHardSoft = 4.20;
            priceBeer = 2.60;
        } else if (hours === 2 && minutes < 30) {
            priceShot = 3.40;
            priceMeter = 27.00;
            priceHardEnergy = 6.20;
            priceHardSoft = 5.00;
            priceBeer = 3.20;
        } else if (hours === 2 && minutes >= 30 && minutes < 50) {
            priceShot = 2.60;
            priceMeter = 25.00;
            priceHardEnergy = 3.00;
            priceHardSoft = 4.60;
            priceBeer = 3.00;
        } else if (hours === 2 && minutes >= 50 || hours === 3 && minutes < 30) {
            priceShot = 3.60;
            priceMeter = 30.00;
            priceHardEnergy = 5.60;
            priceHardSoft = 4.20;
            priceBeer = 2.40;
        } else if (hours === 3 && minutes >= 30 && minutes < 45) {
            priceShot = 3.00;
            priceMeter = 15.00;
            priceHardEnergy = 5.80;
            priceHardSoft = 6.20;
            priceBeer = 2.80;
        } else if (hours === 3 && minutes >= 45 || hours === 4 && minutes < 30) {
            priceShot = 2.60;
            priceMeter = 23.00;
            priceHardEnergy = 5.60;
            priceHardSoft = 4.40;
            priceBeer = 3.60;
        } else if (hours === 4 && minutes >= 30 || hours === 5 && minutes < 30) {
            priceShot = 3.00;
            priceMeter = 25.00;
            priceHardEnergy = 6.00;
            priceHardSoft = 5.00;
            priceBeer = 3.00;
        } else {
            // Définir les prix par défaut
            priceShot = 0;
            priceMeter = 0;
            priceBeer = 0;
            priceHardSoft = 0;
            priceHardEnergy = 0;
        }
      
        document.getElementById("priceShot").innerText = priceShot.toFixed(1);
        document.getElementById("priceMeter").innerText = priceMeter.toFixed(1);
        document.getElementById("priceHardEnergy").innerText = priceHardEnergy.toFixed(1);
        document.getElementById("priceHardSoft").innerText = priceHardSoft.toFixed(1);
        document.getElementById("priceBeer").innerText = priceBeer.toFixed(1);
      }
      
      document.getElementById("plusShot").addEventListener("click", () => increment("shot"));
      document.getElementById("minusShot").addEventListener("click", () => decrement("shot"));
      document.getElementById("plusMeter").addEventListener("click", () => increment("meter"));
      document.getElementById("minusMeter").addEventListener("click", () => decrement("meter"));
      document.getElementById("plusHardEnergy").addEventListener("click", () => increment("hardEnergy"));
      document.getElementById("minusHardEnergy").addEventListener("click", () => decrement("hardEnergy"));
      document.getElementById("plusHardSoft").addEventListener("click", () => increment("hardSoft"));
      document.getElementById("minusHardSoft").addEventListener("click", () => decrement("hardSoft"));
      document.getElementById("plusBeer").addEventListener("click", () => increment("beer"));
      document.getElementById("minusBeer").addEventListener("click", () => decrement("beer"));

    function initializeQuantities() {
        for (const id in quantities) {
            document.getElementById("quantity" + id.charAt(0).toUpperCase() + id.slice(1)).innerText = quantities[id];
        }
    }



    function getTimeRemaining() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
      
        let remainingTimeInSeconds;
      
        if (hours === 23 && minutes >= 30) {
          remainingTimeInSeconds = (59 - minutes) * 60 + 60 - seconds;

        } else if (hours === 0 && minutes < 30) {
          remainingTimeInSeconds = (29 - minutes) * 60 + 60 - seconds;

        } else if (hours === 0 && minutes >= 30) {
          remainingTimeInSeconds = (59 - minutes) * 60 + 60 - seconds;

        } else if (hours === 1 && minutes < 30) {
          remainingTimeInSeconds = (29 - minutes) * 60 + 60 - seconds;

        } else if (hours === 1 && minutes >= 30 && minutes < 45) {
          remainingTimeInSeconds = (44 - minutes) * 60 + 60 - seconds;
          
        } else if (hours === 1 && minutes >= 45) {
          remainingTimeInSeconds = (59 - minutes) * 60 + 60 - seconds;

        } else if (hours === 2 && minutes < 30) {
          remainingTimeInSeconds = (29 - minutes) * 60 + 60 - seconds;

        } else if (hours === 2 && minutes >= 30 && minutes < 50) {
          remainingTimeInSeconds = (49 - minutes) * 60 + 60 - seconds;
          
        } else if (hours === 2 && minutes >= 50) {
            remainingTimeInSeconds = (89 - minutes) * 60 + 60 - seconds;        
        } else if (hours === 3 && minutes < 30) {
          remainingTimeInSeconds = (29 - minutes) * 60 + 60 - seconds;

        } else if (hours === 3 && minutes >= 30 && minutes < 45) {
          remainingTimeInSeconds = (44 - minutes) * 60 + 60 - seconds;

        } else if (hours === 3 && minutes >= 45) {
          remainingTimeInSeconds = (89 - minutes) * 60 + 60 - seconds;        
        } else if (hours === 4 && minutes < 30) {
          remainingTimeInSeconds = (29 - minutes) * 60 + 60 - seconds;
          
        } else {
          remainingTimeInSeconds = 0;
        }
      
        const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
        const remainingSeconds = remainingTimeInSeconds % 60;
      
        document.getElementById("timer").innerText = remainingMinutes.toString().padStart(2, '0') + ":" + remainingSeconds.toString().padStart(2, '0');
      }

    

    updatePrices();
    initializeQuantities();
    updateTotal();

    setInterval(getTimeRemaining, 1000);

    setInterval(updatePrices, 1000);
    setInterval(updateTotal, 1000);


      


});
        
