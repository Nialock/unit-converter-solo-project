let inputNum = document.getElementById("input-num");
let convertBtn = document.getElementById("convert-btn")

let metersFeet = document.getElementById("meters-feet")
let feetMeters = document.getElementById("feet-meters")
let litersGallons = document.getElementById("liters-gallons")
let gallonsLiters = document.getElementById("gallons-liters")
let kilosPounds = document.getElementById("kilos-pounds")
let poundsKilos = document.getElementById("pounds-kilos")

    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */

convertBtn.addEventListener("click", function() {
        // Get the user's input as a number
    let inputValue = parseFloat(inputNum.value)

        if (!isNaN(inputValue)) {
            // Perform the conversions
            let metersToFeet = inputValue * 3.281
            let feetToMeters = inputValue / 3.281
            let litersToGallons = inputValue * 0.26417
            let gallonsToLiters = inputValue / 0.26417
            let kilogramsToPounds = inputValue * 2.20462
            let poundsToKilograms = inputValue / 2.20462

            // Update the text content of the conversion elements
            metersFeet.textContent = inputValue + " meters = " + metersToFeet.toFixed(3) + " feet"
            feetMeters.textContent = inputValue + " feet = " + feetToMeters.toFixed(3) + " meters"
            litersGallons.textContent = inputValue + " liters = " + litersToGallons.toFixed(3) + " gallons"
            gallonsLiters.textContent = inputValue + " gallons = " + gallonsToLiters.toFixed(3) + " liters"
            kilosPounds.textContent = inputValue + " kilograms = " + kilogramsToPounds.toFixed(3) + " pounds"
            poundsKilos.textContent = inputValue + " pounds = " + poundsToKilograms.toFixed(3) + " kilograms"
        } else {
            // Handle the case where the input is not a valid number
            alert("Please enter a valid number.")
        }
    })
