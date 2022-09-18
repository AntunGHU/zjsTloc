// 7'57

// app

// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

// za pozivanje valuea pisemo dot.notation
console.log(fitBitData.totalSteps)

// keysi su uvijek stringovi i pokusaji koristenja brojeva zavrsavaju pretvorbom u string (datatype symbols imaju neke izuzetke ali o tom potom). No pokusaji upisa broja zavrsavaju s brojem po displayu ali da nije broj pokazuje pokusaj dobijanja value-a za takve kljuceve kad se pojavljuje greska!!! sto je dokaz da nije spremljen medju kljuceve kao broj!

// zadnji zarez viska ne zanci nista i js zna!