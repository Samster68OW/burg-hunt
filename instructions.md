# Instructions for Updating Site

This document contains step-by-step instructions on how to add more content to the site following its pre-established formula. Below is a list of the featured sections:

- [Using the Control Center](#using-the-control-center)
- [Adding Scavenger Hunts](#adding-scavenger-hunts)
- [Adding Fan Art](#adding-fan-art)
- [Adding Comics](#adding-comics)

## Using the Control Center

The script `control-center.js` controls which scavenger hunts are currently active and advertised.
- `huntList`: This array lists the objects that contain each hunt's data. Adding a new object will add the hunt to the dropdowns and track it during play.
- `activeHunt`: Defaults to false. When a hunt is being advertised, this variable needs to be changed to the index of the hunt in `huntList`.
- `activeHuntStatus`: Defaults to false. When `activeHunt` is a number, this variable becomes relevant.
    - `false`: This means that the selected hunt is coming soon. It cannot be played, but it will be showcased on the Home page and the dropdown.
    - `true`: This means that the selected hunt is active and available to be played. It will be showcased on the Home page and the dropdown.
- `latestVersion`: Displays the latest version of Club Penguin Zero that the website is built for. Controls nothing.

## Adding Scavenger Hunts

### Creating the Scavenger Hunt's Data

1. Navigate to `data/hunt-data.js`.
2. Copy one of the large objects and rename it.
3. Fill in the elements of the object.
    - `title`: The name of the scavenger hunt.
    - `imgSource`: Create a folder in `images/item` to hold all of the images for the hunt. Place the name of the folder here.
        - Be sure to add an image called `postcard.png` to this folder.
        - If you are using the linear hunt style, you can add images of each object to this folder.
    - `availability`: Displays below the button on the hunt's main page. Effects nothing.
    - `postcardEarnedID`: See the below section.
    - `style`: This can be either of the following:
        - `"linear"`: A linear hunt only shows one object and its image at a time.
        - `"free"`: A free hunt shows every object at a time with no images.
    - `randomize`: Can be either true or false. Determines if the objects should be show to the player in a random order.
    - `itemList`: An array of objects. Each element has the description of what the player is looking for, as well as the room where it is located.
    - `roomList`: By navigating to `data/default-room-list.js`, you can find a default room list to copy for this array. It can then be further motified to add or remove the rooms that will show up on the player's dropdowns.
4. Once you are ready to add your scavenger hunt to the site, find the array `huntList` at the top of `control-center.js` and add your hunt variable to it.
5. Remember to save!

###  Adding the Scavenger Hunt's Postcard

1. Place the new image somewhere inside `images/postcard`.
2. Navigate to `data/misc-data.js`.
3. Copy an element or line from the array `postcardList` and add it to the end of the array.
4. Update the fields inside the new element including `title` for the display name of the postcard, `imgSource` for the name of the file itself, and `postcardCredit` to display the name of its creator. Set `alwaysSeen` to true if you want every user to see this postcard at all times.
5. Back in your `hunt-data` variable, `postcardEarnedID` needs to match the index of the postcard element in `postcardList`.
6. Remember to save!

### Creating the Scavenger Hunt's Page

1. Search `index.html` for a div with an id of `page-feb2026`.
2. Copy this entire element and use it as a template. It needs to be pasted elsewhere in the document.
3. Change `feb2026` to something else. We'll call it the huntID.
4. Customize the page however you see fit. Remember to add a button with `onclick="startHunt(n);"` so that users can access the scavenger hunt.
5. The hunt will be added to the dropdown automatically once added to `huntList` in `control-center.js`.
5. Remember to save!

##  Adding Fan Art

1. Place the new image inside `images/fan-art`.
2. Navigate to `data/misc-data.js`.
3. Copy an element or line from the array `fanartList` and add it to the end of the array.
4. Update the fields inside the new element including `title` for the name of the art piece, `imgSource` for the name of the file itself, and `fanartCredit` to display the name of its creator.
5. Remember to save!

## Adding Comics

### Adding Comic Page Images and Data

1. Navigate to `images/comic`. Add a folder with a unique name.
2. Place your images into this folder using the naming format seen in other folders. (It's zero-indexed)
3. Navigate to `data/misc-data.js`.
3. Copy an element or line from the array `comicList` and add it to the end of the array.
4. Fill in the fields of the object.
    - `title`: The name of the comic strip.
    - `imgSource`: The new folder created prior.
    - `pages`: The number of images in the folder.
    - `publishDate`: The date it was created. (Purely for the webpage display)
5. The comic will automatically be added to the dropdown.
6. Remember to save!