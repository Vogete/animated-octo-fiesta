function UUID() : string {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};


/**
 * This is a class for the indiviual words.
 */
class Word {
    
    // private _word : string;
    // public get word() : string {
    //     return this._word;
    // }
    // public set word(v : string) {
    //     this._word = v;
    // }
    
    // private _translations : [Translation];
    // public get translations() : [Translation] {
    //     return this._translations;
    // }
    // public set translations(v : [Translation]) {
    //     this._translations = v;
    // }
    
    // private _wordLanguage : string;
    // public get wordLanguage() : string {
    //     return this._wordLanguage;
    // }
    // public set wordLanguage(v : string) {
    //     this._wordLanguage = v;
    // }


    private _id : string;
    public get id() : string {
        return this._id;
    }

    public Word: string;
    public Translations : Translation[];
    public WordLanguage : string;

    constructor(word: string, translations?: Translation[]) {
        this._id = UUID();
        this.Word = word;
        this.Translations = translations;
    }

}


/**
 * A translation for a word. It contains the translation and its language.
 */
class Translation {
    
    // private _word : string;
    // public get word() : string {
    //     return this._word;
    // }
    // public set word(v : string) {
    //     this._word = v;
    // }
    
    // private _translationLanguage : string;
    // public get language() : string {
    //     return this._translationLanguage;
    // }
    // public set language(v : string) {
    //     this._translationLanguage = v;
    // }
   
    public Word : string;
    public TranslationLanguage : string;    

    constructor(word: string, language?: string) {
        this.Word = word;
        this.TranslationLanguage = language;
    }
}


export {Word};
export {Translation};
