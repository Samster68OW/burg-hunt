// Ascension data



const ascUpgradeData = [
    // Initial Node
        {
            name: "Ascended Upgrades", desc: "Unlocks ascension upgrades and grants a +100% CPS boost.", icon: 'box', cost: 1,
            requirement: {upgrade: "None"},
            effect: {type: "CPS-Multiplier", mult: 1.00},
            flavorText: "The Box has opened up to you. Its revelations are enticing, yet dreary. Giving, yet greedy. Do you press on?",
            location: {x:0, y:0}
        },
    // Achievements (North Path)
        {
            name: "Achievements+", desc: "Unlocks additional achievements.", icon: 'achievements_plus', cost: 1,
            requirement: {upgrade: 0},
            effect: {type: "Dummy"},
            flavorText: "What? You thought we were done? Not even close! (I spit out a tooth. You wonder how a tooth ended up in a penguin's mouth.)",
            location: {x:0, y:100}
        },
        {
            name: "The Iceberg", desc: "Unlocks the Iceberg, a place where penguins gather to hear tales of your immense wealth.", icon: 'iceberg', cost: 100,
            requirement: {upgrade: 1},
            effect: {type: "Dummy", value: "Iceberg"},
            flavorText: "Access the Iceberg at the top of the screen. Collect Achievements to attract more penguins!",
            location: {x:0, y:200}
        },
    // Unshackled Minigames (East Path)
        {
            name: "Unshackled Hydro Hopper", desc: "Unlocks high-level upgrades for Hydro Hopper.", icon: 'minigame0-asc', cost: 2,
            requirement: {upgrade: 0},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:80, y:50}
        },
        {
            name: "Unshackled Bean Counters", desc: "Unlocks high-level upgrades for Bean Counters.", icon: 'minigame1-asc', cost: 10,
            requirement: {upgrade: 3},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:120, y:100}
        },
        {
            name: "Unshackled Ice Fishing", desc: "Unlocks high-level upgrades for Ice Fishing.", icon: 'minigame2-asc', cost: 10,
            requirement: {upgrade: 4},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:160, y:150}
        },
        {
            name: "Unshackled Puffle Roundup", desc: "Unlocks high-level upgrades for Puffle Roundup.", icon: 'minigame3-asc', cost: 10,
            requirement: {upgrade: 5},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:200, y:200}
        },
        {
            name: "Unshackled Cart Surfer", desc: "Unlocks high-level upgrades for Cart Surfer.", icon: 'minigame4-asc', cost: 666,
            requirement: {upgrade: "Unavailable"},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:250, y:150}
        },
        {
            name: "Unshackled Pizzatron 3000", desc: "Unlocks high-level upgrades for Pizzatron 3000.", icon: 'minigame5-asc', cost: 666,
            requirement: {upgrade: "Unavailable"},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:210, y:100}
        },
        {
            name: "Unshackled Dance Contest", desc: "Unlocks high-level upgrades for Dance Contest.", icon: 'minigame6-asc', cost: 666,
            requirement: {upgrade: "Unavailable"},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:170, y:50}
        },
        {
            name: "Unshackled Snow Trekker", desc: "Unlocks high-level upgrades for Snow Trekker.", icon: 'minigame7-asc', cost: 666,
            requirement: {upgrade: "Unavailable"},
            effect: {type: "Dummy"},
            flavorText: "TODO",
            location: {x:130, y:0}
        },
    // Characters Branch (South Path)
        {
            name: "Mascot Tracker", desc: "Every 5 minutes, a mascot will appear and grant a massive boost for 15 seconds.", icon: 'mascot_tracker', cost: 2,
            requirement: {upgrade: 0},
            effect: {type: "Dummy"},
            flavorText: "The mascot trackers on Zero Nation are so good that they even work in this game!",
            location: {x:-60, y:-80}
        },
        {
            name: "Beeker", desc: "Grants a +300% CPS boost.", icon: 'beeker', cost: 30,
            requirement: {upgrade: 11},
            effect: {type: "CPS-Multiplier", mult: 3.00},
            flavorText: "I mean, 3 is close to Pi, right?",
            location: {x:-120, y:-160}
        },
        {
            name: "Sell", desc: "Sell will AFK near your coin, earning you +50% more coins per click.", icon: 'sell', cost: 5,
            requirement: {upgrade: 12},
            effect: {type: "Click-Multiplier", mult: 0.50},
            flavorText: "The most inactive active CPZ player of all time. Give this man a statue.",
            location: {x:-200, y:-220}
        },
        {
            name: "Puffle Pats", desc: "Allows you to pet your Puffle.", icon: 'pet_puffle', cost: 5,
            requirement: {upgrade: 11},
            effect: {type: "Dummy"},
            flavorText: "I heard that Puffles make squeaking sounds when you pet them.",
            location: {x:0, y:-160}
        },
        {
            name: "The Meat Puffle", desc: "Mimics the ability of another Puffle, allowing you to have two active at a time.", icon: 'meat_puffle', cost: 50,
            requirement: {upgrade: 14},
            effect: {type: "Dummy"},
            flavorText: "This is disgusting, actually. How dare the fanbase vomit this into existence.",
            location: {x:80, y:-225}
        },
    // Quickstart (West Path)
        {
            name: "Quickstart I", desc: "Start the next run with 10 Hydro Hoppers.", icon: 'quickstart1', cost: 1,
            requirement: {upgrade: 0},
            effect: {type: "Quickstart", tier: 1},
            flavorText: "True story: In middle school I made a Five Nights at Freddy's fangame. I made it by taking photos of my plush toys-",
            location: {x:-100, y:25}
        },
        {
            name: "Quickstart II", desc: "Start the next run with 15 Hydro Hoppers and 5 Bean Counters.", icon: 'quickstart2', cost: 3,
            requirement: {upgrade: 16},
            effect: {type: "Quickstart", tier: 2},
            flavorText: "-around my parents' house. I then programmed the camera and movement mechanics for all 5 enemies. The irony is-",
            location: {x:-160, y:100}
        },
        {
            name: "Quickstart III", desc: "Start the next run with 25 Hydro Hoppers, 10 Bean Counters, and 5 Ice Fishing.", icon: 'quickstart3', cost: 10,
            requirement: {upgrade: 17},
            effect: {type: "Quickstart", tier: 3},
            flavorText: "-that it was arguably my most polished game to date. I still haven't beat it nearly 10 years later.",
            location: {x:-210, y:180}
        }
        
];



const ascAchievementData = [

    // Ascensions
        {
            name: "There and Back Again", desc: "Complete your first Ascension.",
            criteria: {type: "Ascensions", amount: 1},
            flavorText: "Opening the box revealed a portal to the outer reaches of the Box Dimension. Who knows what else lies out in the void?"
        },
        {
            name: "IMAGINATION", desc: "Ascend 5 times.",
            criteria: {type: "Ascensions", amount: 5},
            flavorText: "This particular gateway to the box dimension appears to be powered by imagination. How cute."
        },

    // Lifetime Coins
        {
            name: "Richest Ever", desc: "Earn 1 Trillion lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000000000},
            flavorText: "The richest person of all time had a net worth of $800 billion. You just passed that in Club Penguin coins."
        },
        {
            name: "Clicker Legend", desc: "Earn 1 Quadrillion lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000000000000},
            flavorText: "Who would need more than 56 cookies a second?"
        },
        {
            name: "Mass Inflation", desc: "Earn 1 Quintillion lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000000000000000},
            flavorText: "To maintain a family-friendly atmosphere, this is the last coin achievement."
        },

    // Misc
        {
            name: "Your Biggest Fan", desc: "Meet your first mascot.",
            criteria: {type: "Dummy"},
            flavorText: "Burg's Buyout has three different mascots with different effects. I'm sure one of them will be the most hated. Only time will tell which."
        },
        {
            name: "Do not the cat", desc: "Pet your Puffle 50 times.",
            criteria: {type: "Puffle-Pets", amount: 50},
            flavorText: "budder puffle. puffle with da budder. budder puffle. puffle with da budder on him."
        },
        {
            name: "Employment Crisis", desc: "Hire 1000 penguins to play minigames.",
            criteria: {type: "Minigame-Count", amount: 1000},
            flavorText: "The primary criteria for determining the wealth of a nation is by its ability to produce."
        },
        {
            name: "The Outer Rim", desc: "Purchase every ascended upgrade.",
            criteria: {type: "All-Ascended"},
            flavorText: "There's some weird stuff in the outer box dimension. Watch yourself."
        },

    // Endgame
        {
            name: "Thanks for Playing!", desc: "Flip the Iceberg.",
            criteria: {type: "Dummy"},
            flavorText: "Burg will return in Avengers: Doomsday."
        },

];