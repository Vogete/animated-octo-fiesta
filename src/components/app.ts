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

    public Word: string;
    public Translations : [Translation];
    public WordLanguage : string;

    constructor(word: string, translations?: [Translation]) {
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

// loading files
window.onload = function() {
		var fileInput = <HTMLInputElement>document.getElementById('inp-wordList');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					// fileDisplayArea.innerText = reader.result;
                    convertFromTxt(reader.result);                    
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
}


let WordList: Word[] = [];


function convertFromTxt(wordFile:string) {

    let lines = wordFile.split("\r\n");

    for (var i = 0; i < lines.length; i++) {
        let line = lines[i].split("  ");
        
        WordList.push( new Word( line[0], [ new Translation(line[1]) ] ) );

    }

    console.log(WordList);
    
}
