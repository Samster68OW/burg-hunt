// Fan Art and Comic Data



// Postcard Data
// NEVER REMOVE ELEMENTS FROM THIS ARRAY
const postcardList = [
    {
        title: "Legacy Scavenger Hunt", imgSource: "placeholder.png", postcardCredit: "Samster68", showLocked: false,
        postcardDesc: "This postcard is simply a placeholder used while developing the site. If you have this, then Samster68 must see you as a close friend.",
        unlockDesc: ""
    },
    {
        title: "Burg's First Scavenger Hunt", imgSource: "feb2026.png", postcardCredit: "samuel", showLocked: false,
        postcardDesc: "You collected this postcard during the first official scavenger hunt by identifying the locations of Rockhopper's cargo.",
        unlockDesc: ""
    },
    {
        title: "Beeker's Pi Day Puzzle",  imgSource: "mar2026.png", postcardCredit: "Silverpetals", showLocked: false,
        postcardDesc: "You used Beeker's wacky equation to find an estimate of Pi.",
        unlockDesc: ""
    },
    {
        title: "The Iceberg Stargazing Party",  imgSource: "apr2026.png", postcardCredit: "starryskyez", showLocked: false,
        postcardDesc: "You met Burg at the Iceberg Stargazing Party and he gave you this postcard as thanks.",
        unlockDesc: ""
    },
    {
        title: "Burg's Buyout",  imgSource: "buyout2026.png", postcardCredit: "samuel", showLocked: true,
        postcardDesc: "You and Burg collected 1 billion coins to help repair the Migrator.",
        unlockDesc: "Unlock this postcard by completing Burg's Buyout and redeeming the code."
    },
    {
        title: "Burg's Buyout Ending",  imgSource: "buyout_ending.png", postcardCredit: "starryskyez", showLocked: true,
        postcardDesc: "You and Burg collected quintillions of coins and tipped the Iceberg.",
        unlockDesc: "Unlock this postcard by completing The Box Update in Burg's Buyout and redeeming the code."
    }
];



// Comic Data
const comicList = [
    {title: "Burg's Tales: Issue #1", imgSource: "BT-Issue-01", pages: 5, publishDate: "February 7th, 2026"}
];



// Fun Stuff
const funStuffList = [
    {title: "Comedian's Coloring Pages", fileSource: "coloring-pages-set.pdf", publishDate: "April 16th, 2026"}
];



// Secret Code Data
const codeList = [
    {code: "SAMSTERSFRIEND", reward: {type: "postcard", postcardID: 0}, message: "How did you get this code? This is just a placeholder!"},
    {code: "STARGAZERS", reward: {type: "postcard", postcardID: 3}, message: "Thank you for attending the Iceberg Stargazing Party!"},
    {code: "ALPHATESTER", reward: {type: "link", linkURL: "projects/burgs_buyout/index.html"}, message: "Thank you for agreeing to playtest my new little game! Let me know what you think. :)"},
    {code: "COINSRAISED", reward: {type: "postcard", postcardID: 4}, message: "Good job reaching 1 billion coins!"},
    {code: "ICEBERGTIPPED", reward: {type: "postcard", postcardID: 5}, message: "Congratulations on completing Burg's Buyout!"}
];