// Building Data



const buildingData = [
    {
        name: "Hydro Hopper", baseCost: 15, baseCoinsPerSec: 0.02,
        flavorText: "We can use our coins to hire penguins to play minigames for us! Let's start with Ballistic Bis- I mean Hydro Hopper.",
        img: {hei: 40, wid: 50}
    },
    {
        name: "Bean Counters", baseCost: 100, baseCoinsPerSec: 0.1,
        flavorText: "Penguins love a good cup of coffee. Let's hire some aprons to energize the masses.",
        img: {hei: 40, wid: 42}
    },
    {
        name: "Ice Fishing", baseCost: 500, baseCoinsPerSec: 0.5,
        flavorText: "These penguins need some protein! Hire some penguins to pull Fluffies out of the frozen pond.",
        img: {hei: 40, wid: 43}
    },
    {
        name: "Puffle Roundup", baseCost: 2000, baseCoinsPerSec: 2.0,
        flavorText: "It looks like puffles have invaded the island! We need the Puffle Handlers!",
        img: {hei: 40, wid: 50}
    },
    {
        name: "Cart Surfer", baseCost: 100000, baseCoinsPerSec: 10,
        flavorText: "Cart Surfer is all about high-speed adventures and cool tricks. Why does nobody wear a hard hat?",
        img: {hei: 40, wid: 45}
    },
    {
        name: "Pizzatron 3000", baseCost: 1000000, baseCoinsPerSec: 200,
        flavorText: "TODO",
        img: {hei: 40, wid: 45}
    },
    {
        name: "Dance Contest", baseCost: 2000000, baseCoinsPerSec: 1000,
        flavorText: "The Party Starts Now!",
        img: {hei: 40, wid: 43}
    },
    {
        name: "Snow Trekker", baseCost: 20000000, baseCoinsPerSec: 20000,
        flavorText: "Originally from the Nintendo DS game, Elite Penguin Force, there is no faster way to earn coins on Club Penguin Zero.",
        img: {hei: 40, wid: 42}
    }
];



const upgradeData = [
    // Clicking Upgrades
        {
            name: "Two Flippers", desc: "Earn 2 coins per click.", emoji: 'tap', cost: 150,
            requirement: {type: "Building", building: 1, own: 1},
            effect: {type: "Click-Set", clickAmount: 2},
            flavorText: "You realize you have another flipper, right?"
        },
        {
            name: "Waddlin' Feet", desc: "Earn 4 coins per click.", emoji: 'tap', cost: 400,
            requirement: {type: "Coin-Clicks", amount: 250},
            effect: {type: "Click-Set", clickAmount: 4},
            flavorText: "Use your feet to stomp on the coin!"
        },
        {
            name: "Jackhammer", desc: "Earn 10 coins per click.", emoji: 'tap', cost: 1000,
            requirement: {type: "Coin-Clicks", amount: 500},
            effect: {type: "Click-Set", clickAmount: 10},
            flavorText: "You know what? Just AFK with the Jackhammer. I don't care."
        },
    // Hydro Hopper
        {
            name: "Extra Inner Tube", desc: "Doubles the CPS of Hydro Hopper.", emoji: 'upgrade', cost: 250,
            requirement: {type: "Building", building: 0, own: 10},
            effect: {type: "Building-Mult", building: 0, mult: 2},
            flavorText: "Providing your penguins with an extra inner tube will let them survive longer in shark-infested waters."
        },
        {
            name: "Wakeboard", desc: "Triples the CPS of Hydro Hopper.", emoji: 'upgrade', cost: 1000,
            requirement: {type: "Building", building: 0, own: 20},
            effect: {type: "Building-Mult", building: 0, mult: 3},
            flavorText: "Playing Hydro Hopper with a Wakeboard equipped earns you more coins when jumping over obstacles!"
        },
        {
            name: "Boat Captain", desc: "Your clicks are equal to the CPS of Hydro Hopper.", emoji: 'tap', cost: 3000,
            requirement: {type: "Building", building: 0, own: 25},
            effect: {type: "Click-Building", building: 0},
            flavorText: "Spoke to one of the penguins driving the speedboat. They have no idea where they're going."
        },
    // Bean Counters
        {
            name: "Imported Beans", desc: "Doubles the CPS of Bean Counters.", emoji: 'upgrade', cost: 1200,
            requirement: {type: "Building", building: 1, own: 10},
            effect: {type: "Building-Mult", building: 1, mult: 2},
            flavorText: "Can't a white boy speak a little italiano?"
        },
        {
            name: "Jellybean Counters", desc: "Triples the CPS of Bean Counters.", emoji: 'upgrade', cost: 4000,
            requirement: {type: "Building", building: 1, own: 20},
            effect: {type: "Building-Mult", building: 1, mult: 3},
            flavorText: "The worst minigame for colorblind penguins."
        },
        {
            name: "Vertical Expansion", desc: "Your clicks are equal to the CPS of Bean Counters.", emoji: 'tap', cost: 10000,
            requirement: {type: "Building", building: 1, own: 25},
            effect: {type: "Click-Building", building: 1},
            flavorText: "<b>Vertical expansion</b> is when a company moves to perform a service or produce a good on a few different parts of the supply chain."
        },
    // Ice Fishing
        {
            name: "Deep-Pond Knowledge", desc: "Doubles the CPS of Ice Fishing.", emoji: 'upgrade', cost: 25000,
            requirement: {type: "Building", building: 2, own: 10},
            effect: {type: "Building-Mult", building: 2, mult: 2},
            flavorText: "Teach your penguins how to navigate around all the sea creatures to earn more coins."
        },
        {
            name: "Flashing Lure Fishing Rod", desc: "Triples the CPS of Ice Fishing.", emoji: 'upgrade', cost: 50000,
            requirement: {type: "Building", building: 2, own: 20},
            effect: {type: "Building-Mult", building: 2, mult: 3},
            flavorText: "These grey fish are worth a lot of points!"
        },
        {
            name: "Ace Angler", desc: "Your clicks are equal to the CPS of Ice Fishing.", emoji: 'tap', cost: 100000,
            requirement: {type: "Building", building: 2, own: 25},
            effect: {type: "Click-Building", building: 2},
            flavorText: "You've caught every fish in the pond!"
        },
    // Puffle Roundup
        {
            name: "Scarier Cursor", desc: "Doubles the CPS of Puffle Roundup.", emoji: 'upgrade', cost: 75000,
            requirement: {type: "Building", building: 3, own: 10},
            effect: {type: "Building-Mult", building: 3, mult: 2},
            flavorText: "Interesting how a game about collecting puffles is all about scaring them into their pen."
        },
        {
            name: "New Puffballs", desc: "Triples the CPS of Puffle Roundup.", emoji: 'upgrade', cost: 300000,
            requirement: {type: "Building", building: 3, own: 20},
            effect: {type: "Building-Mult", building: 3, mult: 3},
            flavorText: "Club Penguin had many weird Puffles over the years. There was even an 'Olaf' puffle!"
        },
        {
            name: "My First Friend", desc: "Your clicks are equal to the CPS of Puffle Roundup.", emoji: 'tap', cost: 500000,
            requirement: {type: "Building", building: 3, own: 25},
            effect: {type: "Click-Building", building: 3},
            flavorText: "I tried naming a puffle 'drop table' once. Fortunately CPZ team validates the puffle name data."
        },
    // Cart Surfer
        {
            name: "Oiled Wheels", desc: "Doubles the CPS of Cart Surfer.", emoji: 'upgrade', cost: 400000,
            requirement: {type: "Building", building: 4, own: 5},
            effect: {type: "Building-Mult", building: 4, mult: 2},
            flavorText: "Once Gary got the oil back from the robots, we tried putting it on the minecarts. Makes grinds easier."
        },
        {
            name: "Endless Mode", desc: "Doubles the CPS of Cart Surfer again.", emoji: 'upgrade', cost: 1000000,
            requirement: {type: "Building", building: 4, own: 15},
            effect: {type: "Building-Mult", building: 4, mult: 2},
            flavorText: "You want more points? Just play the game a little longer!"
        },
        {
            name: "Optimized Surfing", desc: "Your clicks are equal to the CPS of Cart Surfer.", emoji: 'tap', cost: 1000000,
            requirement: {type: "Building", building: 4, own: 20},
            effect: {type: "Click-Building", building: 4},
            flavorText: "Alternating between different tricks improves how many points you score overall."
        },
    // Pizzatron 3000
        {
            name: "TODO", desc: "Doubles the CPS of Pizzatron 3000.", emoji: 'upgrade', cost: 1500000,
            requirement: {type: "Building", building: 5, own: 5},
            effect: {type: "Building-Mult", building: 5, mult: 2},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Doubles the CPS of Pizzatron 3000 again.", emoji: 'upgrade', cost: 10000000,
            requirement: {type: "Building", building: 5, own: 10},
            effect: {type: "Building-Mult", building: 5, mult: 2},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Your clicks are equal to the CPS of Pizzatron 3000.", emoji: 'tap', cost: 15000000,
            requirement: {type: "Building", building: 5, own: 15},
            effect: {type: "Click-Building", building: 5},
            flavorText: "TODO"
        },
    // Dance Contest
        {
            name: "TODO", desc: "Doubles the CPS of Dance Contest.", emoji: 'upgrade', cost: 20000000,
            requirement: {type: "Building", building: 6, own: 5},
            effect: {type: "Building-Mult", building: 6, mult: 2},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Triples the CPS of Dance Contest.", emoji: 'upgrade', cost: 100000000,
            requirement: {type: "Building", building: 6, own: 10},
            effect: {type: "Building-Mult", building: 6, mult: 3},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Your clicks are equal to the CPS of Dance Contest.", emoji: 'tap', cost: 200000000,
            requirement: {type: "Building", building: 6, own: 15},
            effect: {type: "Click-Building", building: 6},
            flavorText: "TODO"
        },
    // Snow Trekker
        {
            name: "TODO", desc: "Doubles the CPS of Snow Trekker.", emoji: 'upgrade', cost: 500000000,
            requirement: {type: "Building", building: 7, own: 10},
            effect: {type: "Building-Mult", building: 7, mult: 2},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Your clicks are equal to the CPS of Snow Trekker.", emoji: 'tap', cost: 800000000,
            requirement: {type: "Building", building: 7, own: 15},
            effect: {type: "Click-Building", building: 7},
            flavorText: "TODO"
        },
    // Endgame
        {
            name: "Repair the Migrator", desc: "Repairs the Migrator and grants a x2 CPS boost!", emoji: 'coin', cost: 1000000000,
            requirement: {type: "Building", building: 7, own: 1},
            effect: {type: "CPS-Multiplier", mult: 2},
            flavorText: "We almost have enough coins to repair Rockhopper's ship, the Migrator!"
        }
];



const puffleData = [
    {
        name: "Blue Puffle", desc: "(Passive: Companion) Every coin click makes your clicks stronger. (100 clicks = +1% coins)", emoji: 'blue_puffle', cost: 5000,
        key: 1, flavorText: "Loyal team players. This is the puffle you want to be your best friend."
    },
    {
        name: "Pink Puffle", desc: "(Passive: Commission) Receive 20% of your coins back when purchasing minigames and upgrades.", emoji: 'pink_puffle', cost: 50000,
        key: 2, flavorText: "Athletic and cheerful. I heard they are good with lassos, too."
    },
    {
        name: "Green Puffle", desc: "(Passive: Circus) Every 3 minutes, either your CPS or coins per click will be buffed for 20 seconds.", emoji: 'green_puffle', cost: 300000,
        key: 3, flavorText: "Silly and playful. Always up to shenanigans."
    },
    {
        name: "Black Puffle", desc: "(Passive: Clicker) Clicks the coin twice a second.", emoji: 'black_puffle', cost: 1500000,
        key: 4, flavorText: "This puffle seems to want to do things its own way."
    },
    {
        name: "Purple Puffle", desc: "(Passive: Celebrity) Doubles a random minigame's CPS for 3 minutes. Once the 3 minutes are over, it picks a new one.", emoji: 'purple_puffle', cost: 6000000,
        key: 5, flavorText: "What a diva."
    },
    {
        name: "Red Puffle", desc: "(Passive: Completionist) Applies a CPS multiplier based on how many achievements you have collected. (1 = +3% CPS)", emoji: 'red_puffle', cost: 30000000,
        key: 6, flavorText: "Never backs down from a challenge. He's here to see this mission to its end."
    }
];
let puffleStat = {
    blueMult: 1.0,
    pinkMult: 0.2,
    green: {
        countdown: 1800, // 3 minutes
        currentAbility: 'None',
        timeLeftOnAbility: 0
    },
    purple: {
        countdown: 1800, // 3 minutes
        currentMinigame: 'None',
        timeLeftOnMinigame: 0
    },
    redMult: 1.0
};



const achievementData = [
    // Lifetime Coins
        {
            name: "Welcome, P-num!", desc: "Earn your first coin.",
            criteria: {type: "Coins-Lifetime", amount: 1},
            flavorText: "It takes some time for usernames to be approved. Just enjoy playing the game while the staff work in the background."
        },
        {
            name: "YARRRR!", desc: "Earn 67 lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 67},
            flavorText: "Rockhopper's favorite number."
        },
        {
            name: "Thousandaire", desc: "Earn 1 thousand lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000},
            flavorText: "In Club Penguin Zero you start with 500 coins. Congrats on doubling it."
        },
        {
            name: "At My Limit", desc: "Earn 100 thousand lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 100000},
            flavorText: "This is where I stopped in Zero. This is way more than the average penguin would need."
        },
        {
            name: "At the Game's Limit", desc: "Earn 1 million lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000},
            flavorText: "Club Penguin itself will stop giving you coins at this point. A few penguins have actually achieved this."
        },
        {
            name: "Beyond Reason", desc: "Earn 10 million lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 10000000},
            flavorText: "Your greed sickens me."
        },
        {
            name: "A Thousand Penguins", desc: "Earn 1 billion lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000000},
            flavorText: "I bet Rockhopper doesn't have to pay a cent in taxes."
        },
    // Buildings
        {
            name: "Hydro Hoppin'", desc: "Hire a penguin to play Hydro Hopper.",
            criteria: {type: "Building-Amount", building: 0, amount: 1},
            flavorText: "Hydro Hopper was originally called Ballistic Biscuit."
        },
        {
            name: "Level 8", desc: "Hire 25 penguins to play Hydro Hopper.",
            criteria: {type: "Building-Amount", building: 0, amount: 25},
            flavorText: "How did all this junk wind up in the ocean?"
        },
        {
            name: "Minimum Wage", desc: "Hire a penguin to play Bean Counters.",
            criteria: {type: "Building-Amount", building: 1, amount: 1},
            flavorText: "Finally we can get a nice cup of coffee."
        },
        {
            name: "24 Hour Service", desc: "Hire 25 penguins to play Bean Counters.",
            criteria: {type: "Building-Amount", building: 1, amount: 25},
            flavorText: "One of the richest penguins on the island started this coffee shop. He outsourced the beans oversees and bought out his competition."
        },
        {
            name: "One Fish, Two Fish", desc: "Hire a penguin to play Ice Fishing.",
            criteria: {type: "Building-Amount", building: 2, amount: 1},
            flavorText: "Ice Fishing is my favorite minigame. It's exactly what I imagine cartoon penguins doing in their free time."
        },
        {
            name: "Empty the Pond", desc: "Hire 25 penguins to play Ice Fishing.",
            criteria: {type: "Building-Amount", building: 2, amount: 25},
            flavorText: "What are the sharks going to eat now???"
        },
        {
            name: "Puffball Discovered!", desc: "Hire a penguin to play Puffle Roundup.",
            criteria: {type: "Building-Amount", building: 3, amount: 1},
            flavorText: "I wonder if the puffles will help us earn more coins...?"
        },
        {
            name: "Too many Puffles!", desc: "Hire 25 penguins to play Puffle Roundup.",
            criteria: {type: "Building-Amount", building: 3, amount: 25},
            flavorText: "Great work finding all of these puffles, but what are we suppoed to do with them?"
        },
        {
            name: "Into the Underground", desc: "Hire a penguin to play Cart Surfer.",
            criteria: {type: "Building-Amount", building: 4, amount: 1},
            flavorText: "... and they call it a mine. A <u>MINE!</u>"
        },
        {
            name: "10k Surfer", desc: "Hire 20 penguins to play Cart Surfer.",
            criteria: {type: "Building-Amount", building: 4, amount: 20},
            flavorText: "Did they fix the double obstacles yet, or am I just trash at the game?"
        },
        {
            name: "TODO", desc: "Hire a penguin to play Pizzatron 3000.",
            criteria: {type: "Building-Amount", building: 5, amount: 1},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire 15 penguins to play Pizzatron 3000.",
            criteria: {type: "Building-Amount", building: 5, amount: 15},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire a penguin to play Dance Contest.",
            criteria: {type: "Building-Amount", building: 6, amount: 1},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire 15 penguins to play Dance Contest.",
            criteria: {type: "Building-Amount", building: 6, amount: 15},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire a penguin to play Snow Trekker.",
            criteria: {type: "Building-Amount", building: 7, amount: 1},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire 15 penguins to play Snow Trekker.",
            criteria: {type: "Building-Amount", building: 7, amount: 15},
            flavorText: "TODO"
        },
    // Endgame
        {
            name: "Puffle Rangler", desc: "Unlock every Puffle species.",
            criteria: {type: "Puffles-Purchased"},
            flavorText: "Finally the Puffle Shop can open!"
        },
        {
            name: "Mission Complete!", desc: "Repair the Migrator.",
            criteria: {type: "Upgrade-Purchased", upgrade: 26},
            flavorText: "Congratulations on completing the game! Why not earn a few more coins while you're here?"
        }
];