// Hunt Data



const jan2026Event = {
    title: "Legacy Scavenger Hunt",
    imgSource: "jan2026",
    postcardCredit: "Samster68",
    style: "free",
    randomize: false,
    itemList: [
        {item:"A rocking horse", location:"Lodge Attic"},
        {item:"A golf bag", location:"Ship's Hold"},
        {item:"3 red thumbtacks", location:"Boiler Room"},
        {item:"A jetpack", location:"Beacon"},
        {item:"A large swinging lantern", location:"Mine"},
        {item:"Snow Trekker in a Bottle", location:"Lighthouse"},
        {item:"A white number 6 (by itself)", location:"Beach"},
        {item:"The words 'Fish Dish'", location:"Pizza Parlor"},
        {item:"A pair of big red shoes", location:"Gift Shop"},
        {item:"A picture of 2 pink penguins", location:"Book Room"}
    ],
    roomList: [
        "Beach",
        "Beacon",
        "Boiler Room",
        "Book Room",
        "Cave",
        "Coffee Shop",
        "Dance Lounge",
        "Dock",
        "Dojo",
        "Gift Shop",
        "Ice Rink",
        "Lighthouse",
        "Lodge Attic",
        "Mine",
        "Mine Shack",
        "Night Club",
        "Pizza Parlor",
        "Plaza",
        "Ship's Hold",
        "Ski Hill",
        "Ski Lodge",
        "Ski Village",
        "Snow Forts",
        "Town"
    ]
};



const feb2026Event = {
    title: "February 2026 Scavenger Hunt",
    imgSource: "feb2026",
    postcardCredit: "Samster68",
    style: "linear",
    randomize: true,
    itemList: [],
    roomList: [
        "Beach",
        "Beacon",
        "Boiler Room",
        "Book Room",
        "Cave",
        "Coffee Shop",
        "Dance Lounge",
        "Dock",
        "Dojo",
        "Gift Shop",
        "Ice Rink",
        "Lighthouse",
        "Lodge Attic",
        "Mine",
        "Mine Shack",
        "Night Club",
        "Pizza Parlor",
        "Plaza",
        "Ski Hill",
        "Ski Lodge",
        "Ski Village",
        "Snow Forts",
        "Sports Shop",
        "Town"
    ]
};



// Hunt Styles
// linear - Show one item at a time. An image is revealed when it is correct.
// free - Show every item on the scren at a time. Correct answers are set inlayed.



// NEVER REMOVE ELEMENTS FROM THIS ARRAY
const huntList = [
    jan2026Event,
    feb2026Event
];