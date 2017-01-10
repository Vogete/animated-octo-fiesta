/**
 * This is a class for the indiviual words.
 */
class Word {
    
    private _word : string;
    public get word() : string {
        return this._word;
    }
    public set word(v : string) {
        this._word = v;
    }
    
    private _translations : [Translation];
    public get translations() : [Translation] {
        return this._translations;
    }
    public set translations(v : [Translation]) {
        this._translations = v;
    }

    constructor(word: string, translations?: [Translation]) {
        this._word = word;
        this._translations = translations;
    }

}

/**
 * A translation for a word. It contains the translation and its language.
 */
class Translation {
    
    private _word : string;
    public get word() : string {
        return this._word;
    }
    public set word(v : string) {
        this._word = v;
    }
    
    
    private _language : string;
    public get language() : string {
        return this._language;
    }
    public set language(v : string) {
        this._language = v;
    }
    

    constructor(word: string, language: string) {
        this._word = word;
        this._language = language;
    }
}

let translation1 = new Translation("Hello", "English");

let MyWord = new Word("Sziaaaaaa", [translation1]);
console.log(MyWord);
