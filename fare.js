//Boda fare calculator

const readline = require('readline');

// Set up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fare calculation function
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;          // Fixed base fare in KES
  const chargePerKm = 15;       // Cost per kilometer
  const distance = Number(distanceInKm);

  // Validate input
  if (isNaN(distance) || distance <= 0) {
    console.log("Tafadhali ingiza umbali sahihi kwa kilomita.");
    rl.close();
    return;
  }

  const distanceCharge = distance * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  // Display result
  console.log(`\nUko kwote? Io ni ${distance} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");

  rl.close();
}

// Ask user for distance
rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (answer) => {
  calculateBodaFare(answer);
});


