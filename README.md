# Assignment 1 - CS 580
#### Dániel B. Papp
#### 10/04/2021
## Prerequisits
- NodeJs version 14.18.0 (LTS)

## Running the program
```shell
npx http-server
```
_Note that you need to `$ cd` into the root downloaded folder_

## Current known issues
- DFS, A*, Manhattan algorithms are not implemented
- Build is not loading scripts due to CORS blocking
  - The program runs fine in development but `Percel.js` is needed in order to run development
- Characters to create map is different from Required ones 
  - See levels.ts in the github repo to see levels.ts