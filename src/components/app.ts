import {Word} from "./models";
import {Translation} from "./models";
import Vue = require('vue');

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
        addWordToTable(words[i]);        
    }
}

function createWord(word:string, meanings:string[]) : Word {
    let _translations : Translation[] = [];

    for (var i = 0; i < meanings.length; i++) {
        _translations.push(new Translation(meanings[i]));
    }

    let _newWord = new Word(word, _translations);

    return _newWord;
}

function addNewWordFromInput() {
    let _inputWord = (<HTMLInputElement>document.getElementById("txt-newWord"));
    let _inputTranslation = (<HTMLInputElement>document.getElementById("txt-newTranslation"));
    let _word = _inputWord.value;
    let _translation = _inputTranslation.value;

    if (_word.length>0) {
        let _newWord = createWord(_word, [_translation]);    
        WordList.push(_newWord);

        addWordToTable(_newWord);
        console.log(WordList);
        _inputWord.value = "";
        _inputTranslation.value="";        
    }

}

function addWordToTable(_word : Word) {
    let tblWordlist =  <HTMLTableSectionElement>document.getElementById("tbl-wordList").getElementsByTagName("tbody")[0];
    
    let appendHTML = `<tr id='${_word.id}'><td>${_word.Word}</td><td>${_word.Translations[0].Word}</td><td><button class="small button alert btn-deleteWord">Delete</button></td></tr>`;
    
    tblWordlist.insertAdjacentHTML("beforeend", appendHTML);

}

function deleteWord(_word:Word) {
    for (var i = 0; i < WordList.length; i++) {
        if (_word.id === WordList[i].id) {
            WordList.splice(i, 1);
            document.getElementById(_word.id).remove();
        }        
    }

}

var app = new Vue({
    el: "#hellobello",
    data: {
        message: "kukucs"
    }
});

document.getElementById("btn-addWord").addEventListener("click", addNewWordFromInput, false);


