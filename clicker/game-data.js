// Building Data



const buildingData = [
    {
        name: "Hydro Hopper", baseCost: 15, baseCoinsPerSec: 0.02,
        flavorText: "stuff"
    },
    {
        name: "Bean Counters", baseCost: 100, baseCoinsPerSec: 0.1,
        flavorText: ""
    },
    {
        name: "Puffle Roundup", baseCost: 1000, baseCoinsPerSec: 1,
        flavorText: ""
    }, // Unlocks Puffles
    {
        name: "Ice Fishing", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: ""
    },
    {
        name: "Cart Surfer", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: ""
    },
    {
        name: "Pizzatron 3000", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: ""
    },
    {
        name: "Dance Contest", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: ""
    },
    {
        name: "Snow Trekker", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: ""
    }
];



const upgradeData = [
    {
        name: "Two Flippers", desc: "Earn 2 coins per click.", cost: 200,
        requirement: {type: "Building", building: 1, own: 1},
        effect: {type: "Click-Set", clickAmount: 2},
        flavorText: "You realize you have another flipper, right?"
    },
    {
        name: "Extra Inner Tube", desc: "Doubles the CPS of Hydro Hopper.", cost: 300,
        requirement: {type: "Building", building: 0, own: 10},
        effect: {type: "Building-Mult", mult: 2},
        flavorText: "Providing your penguins with an extra inner tube will let them survive more shark-infested waters."
    },
    {
        name: "Wakeboard", desc: "Doubles the CPS of Hydro Hopper again.", cost: 1000,
        requirement: {type: "Building", building: 0, own: 25},
        effect: {type: "Building-Mult", mult: 2},
        flavorText: ""
    }
];



const puffleData = [
    {
        name: "Blue Puffle", desc: "Doubles the coins earned per click.", cost: 0,
        num: 1, flavorText: ""
    },
    {
        name: "Pink Puffle", desc: "", cost: 0,
        num: 2, flavorText: ""
    },
    {
        name: "Green Puffle", desc: "", cost: 0,
        num: 3, flavorText: ""
    },
    {
        name: "Black Puffle", desc: "", cost: 0,
        num: 4, flavorText: ""
    },
    {
        name: "Purple Puffle", desc: "", cost: 0,
        num: 5, flavorText: ""
    },
    {
        name: "Red Puffle", desc: "", cost: 0,
        num: 6, flavorText: ""
    }
];
// Puffle Ideas (toggle them using the numpad)
    // Receive 20% of your coins back when purchasing buildings & upgrades
    // Passive income multiplier
    // Has a multiplier that becomes stronger as you unlock more stamps (CC milk)



const abilityData = [
    {name: ""}
];