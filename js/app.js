/**
 * This is a class for the indiviual words.
 */
var Word = (function () {
    function Word(word, translations) {
        this._word = word;
        this._translations = translations;
    }
    Object.defineProperty(Word.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (v) {
            this._word = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "translations", {
        get: function () {
            return this._translations;
        },
        set: function (v) {
            this._translations = v;
        },
        enumerable: true,
        configurable: true
    });
    return Word;
}());
/**
 * A translation for a word. It contains the translation and its language.
 */
var Translation = (function () {
    function Translation(word, language) {
        this._word = word;
        this._language = language;
    }
    Object.defineProperty(Translation.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (v) {
            this._word = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (v) {
            this._language = v;
        },
        enumerable: true,
        configurable: true
    });
    return Translation;
}());
var translation1 = new Translation("Hi", "English");
var MyWord = new Word("Szia", [translation1]);
//# sourceMappingURL=app.js.map