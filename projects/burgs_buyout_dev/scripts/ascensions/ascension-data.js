// Ascension data



const ascUpgradeData = [
    // Initial Node
        {
            name: "Ascension Upgrades", desc: "Unlocks ascension upgrades.", icon: 'incomplete', cost: 1,
            requirement: {upgrade: "None"},
            effect: {type: "Click-Set", clickAmount: 2},
            flavorText: "The Box has opened up to you. Its revelations are enticing, yet dreary. Giving, yet greedy. Do you press on?",
            location: {x:0, y:0}
        },
    // Locations
        {
            name: "The Farm", desc: "Unlocks the Farm, a place where you can grow crops to further boost production.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 0},
            effect: {type: "Dummy", value: "Farm"},
            flavorText: "TODO",
            location: {x:0, y:120}
        },
        {
            name: "The Iceberg", desc: "Unlocks the Iceberg, a place where penguins gather to hear tales of your immense wealth.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 1},
            effect: {type: "Dummy", value: "Iceberg"},
            flavorText: "TODO",
            location: {x:0, y:240}
        },
    // Quickstart & Unshackled Minigames
        {
            name: "Quickstart I", desc: "Start next run with 10 Hydro Hoppers", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 0},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:70, y:50}
        },
        {
            name: "Quickstart II", desc: "Start next run with 15 Hydro Hoppers and 5 Bean Counters", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 3},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:120, y:130}
        },
        {
            name: "Quickstart III", desc: "Start next run with 25 Hydro Hoppers, 10 Bean Counters, and 5 Ice Fishing.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 4},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:170, y:210}
        },
        {
            name: "Unshackled Hydro Hopper", desc: "Unlocks high-level upgrades for Hydro Hopper.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 5},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:263}
        },
        {
            name: "Unshackled Bean Counters", desc: "Unlocks high-level upgrades for Bean Counters.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 6},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:188}
        },
        {
            name: "Unshackled Ice Fishing", desc: "Unlocks high-level upgrades for Ice Fishing.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 7},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:113}
        },
        {
            name: "Unshackled TODO", desc: "Unlocks high-level upgrades for TODO.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 8},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:38}
        },
        {
            name: "Unshackled TODO", desc: "Unlocks high-level upgrades for TODO.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 9},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:-37}
        },
        {
            name: "Unshackled TODO", desc: "Unlocks high-level upgrades for TODO.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 10},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:-112}
        },
        {
            name: "Unshackled TODO", desc: "Unlocks high-level upgrades for TODO.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 11},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:-187}
        },
        {
            name: "Unshackled TODO", desc: "Unlocks high-level upgrades for TODO.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 12},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:250, y:-262}
        },
    // Misc
        {
            name: "Achievements+", desc: "Unlocks additional achievements.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 0},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:-100, y:50}
        },
    // Characters Branch
        {
            name: "Mascot Tracker", desc: "Mascots will occasionally visit Burg, bringing short boosts to your coin production.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 0},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:-60, y:-100}
        },
        {
            name: "Beeker", desc: "Grants a +3% CPS boost.", icon: 'beeker', cost: 5,
            requirement: {upgrade: 15},
            effect: {type: "CPS-Multiplier", mult: 1.03},
            flavorText: "I mean, 3 is close to Pi, right?",
            location: {x:-120, y:-180}
        },
        {
            name: "Sell", desc: "Sell will AFK near your coin, granting a +10% CPS boost.", icon: 'sell', cost: 5,
            requirement: {upgrade: 16},
            effect: {type: "CPS-Multiplier", mult: 1.10},
            flavorText: "The most inactive active CPZ player of all time. Give this man a statue.",
            location: {x:-200, y:-220}
        },
        {
            name: "Puffle Pats", desc: "Allows you to pet your Puffle.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 15},
            effect: {type: "TODO"},
            flavorText: "TODO",
            location: {x:30, y:-160}
        },
        {
            name: "The Meat Puffle", desc: "Mimics the ability of another Puffle, allowing you to have two active at a time.", icon: 'incomplete', cost: 5,
            requirement: {upgrade: 18},
            effect: {type: "TODO"},
            flavorText: "This is really disgusting, actually.",
            location: {x:120, y:-200}
        }
        
];