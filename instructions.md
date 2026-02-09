# Instructions for Updating Site

This document contains step-by-step instructions on how to add more content to the site following its pre-established formula. Below is a list of the featured sections:

- [Adding more Fan Art](#add-fanart)
- [Adding more Comics](#add-comics)
- [Adding more Scavenger Hunts](#add-scavengerhunts)

##  Adding more Fan Art

1. Place the new image inside `images/fan-art`.
2. Navigate to `data/fan-art-data.js`.
3. Copy an element or line from the array `fanartList` and add it to the end of the array.
4. Update the fields inside the new element including `title` for the name of the art piece, `imgSource` for the name of the file itself, and `fanartCredit` to display the name of its creator.
5. Remember to save!

## Adding more Comics

### Adding Comic Page Images and Data

1. Navigate to `images/comic`. Add a folder with a unique name.
2. Place your images into this folder using the naming format seen in other folders. (It's zero-indexed)
3. Navigate to `data/fan-art-data.js`.
3. Copy an element or line from the array `comicList` and add it to the end of the array.
4. Fill in the fields of the object.
    - `title`: The name of the comic strip.
    - `imgSource`: The new folder created prior.
    - `pages`: The number of images in the folder.
    - `publishDate`: The date it was created. (Purely for the webpage display)
5. Remember to save!

### Linking to the Comic Strip

1. To add the comic to the dropdown, search for `loadComic` in `index.html`.
2. Once you find the lines containing the dropdown items, copy one and fill in your information.
3. The number in the `loadComic(n)` function should be equal to the index of your comic in `comicList`.
4. I also recommend updating the Home Page to reflect the new comic strip.
5. Remember to save!

## Adding more Scavenger Hunts

### Creating the Scavenger Hunt's Data

1. Navigate to `data/hunt-data.js`.
2. Copy one of the large objects and rename it.
3. Fill in the elements of the object.
    - `title`: The name of the scavenger hunt.
    - `imgSource`: Create a folder in `images/item` to hold all of the images for the hunt. Place the name of the folder here.
        - Be sure to add an image called `postcard.png` to this folder.
        - If you are using the linear hunt style, you can add images of each object to this folder.
    - `postcardCredit`: Input the name of the artist that created the postcard.
    - `style`: This can be either of the following:
        - `"linear"`: A linear hunt only shows one object and its image at a time.
        - `"free"`: A free hunt shows every object at a time with no images.
    - `randomize`: Can be either true or false. Determines if the objects should be show to the player in a random order.
    - `itemList`: An array of objects. Each element has the description of what the player is looking for, as well as the room where it is located.
    - `roomList`: By navigating to `data/default-room-list.js`, you can find a default room list to copy for this array. It can then be further motified to add or remove the rooms that will show up on the player's dropdowns.
4. Once you are ready to add your scavenger hunt to the site, find the array `huntList` at the bottom of `hunt-data.js` and add your hunt variable to it.
5. Remember to save!

### Creating the Scavenger Hunt's Page

- TODO