# Color coder

## Usage
`npm install`, then one of the following:

`npm start` for dev mode

`npm run build`, then open build/index.html in your browser or push whole build directory on your http server. The app will run on any path currently.

Once open, let your kid draw an image in the grid. The code will be generated below.

Be default clicking on the tile will change its color to the next one. You can also select specific color on the right.
You can also edit colors in the slots using the edit button.

## Next steps
I have a few features planned (with some preparation already done in the code for some of them):
- code print mode (open new tab that shows only empty grid and code representing prepared image so that it can be printed and shared with a friend)
- adding more colors to the palette
- removing colors from the palette
- changing board dimensions

Considering also fully digital experience, but not sure if age ranges for "kids would be interested" and "kids can be allowed to use app and share online content" actually overlap. If yes:
- "Redo the code" mode: code is fixed, board dimensions and colors are fixed, there is a feedback on which code parts are drawn correctly and which ones are still missing.
- Generating link / QR code. The link then open the app in "redo the code" mode.
- Getting the picture match the code in "redo the code" mode would unlock the ability to create own codes and send it to more friends.
- ???
- Profit :-)
