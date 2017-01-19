# Word learning web app

This is a very simple word learner web app, and my first attempt using **TypeScript** and **VueJS** (or any JavaScript framework at all).

### To get started

- `npm install`
- `gulp build` (use `gulp watch` for automatic compiling)
- In the `dist` folder open `index.html`

To start learning words, create a simple text file (UTF-8) with a word, and a translation in it. They have to separated by 2 spaces!

### Example

```text
apple  æble
car  bil
potato  kartoffel
man  mand
woman  kvinde
```

*However, you can always add words manually in the app as well, but these are not stored on a refresh, and cannot be exported to a file yet! I recommend creating a txt file based on the previous example.*

The order of the words doesn't matter, because the program will shuffle them every time a new learning session is started. You can also choose which language you want to practice (first form is given and you have to type the second, or vice versa).

### Plans for the future

- Exporting word lists
- Multiple translation language support
- User accounts, save lists there
- UI improvements

Until then, happy learning! :)
