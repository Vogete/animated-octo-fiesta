import {Word} from "./models";
import {Translation} from "./models";

let WordList : Word[] = [];
let wordSeparator : string = "  ";
let lineSeparator : string = "\r\n";

// loading files
window.onload = function() {
    let fileInput = <HTMLInputElement>document.getElementById('inp-wordList');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0];
        let textType = /text.*/;

        if (file.type.match(textType)) {
            let reader = new FileReader();

            reader.onload = function(e) {
                // fileDisplayArea.innerText = reader.result;
                WordList = convertFromTxt(reader.result);
                
                writeWordsInTable(WordList);
            }

            reader.readAsText(file);            
        } else {
            // fileDisplayArea.innerText = "File not supported!";
            console.log("Error, file not supported");
            
        }
    });
}


function convertFromTxt(wordFile:string) : Word[] {

    let lines = wordFile.split(lineSeparator);
    let convertedWords: Word[] = [];

    for (var i = 0; i < lines.length; i++) {
        let line = lines[i].split(wordSeparator);
        if (line[0].length > 0) {
            // convertedWords.push( new Word( line[0], [ new Translation(line[1]) ] ) );            
            convertedWords.push(createWord( line[0], [ line[1] ] ));
        }
    }
    
    return convertedWords;    
}

function writeWordsInTable(words: Word[]) {
    console.log(words);
    let appendHTML : string = "";
    let tblWordlist =  <HTMLTableSectionElement>document.getElementById("tbl-wordList").getElementsByTagName("tbody")[0];
    for (var i = 0; i < words.length; i++) {
         appendHTML += `<tr><td>${words[i].Word}</td><td>${words[i].Translations[0].Word}</td></tr>`;
                
    }
    tblWordlist.innerHTML = appendHTML;
}

function createWord(word:string, meanings:string[]) : Word {    
    let _translations : Translation[] = [];

    for (var i = 0; i < meanings.length; i++) {
        _translations.push(new Translation(meanings[i]));
    }

    let _newWord = new Word(word, _translations);

    return _newWord;
}
