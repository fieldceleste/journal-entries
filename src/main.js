import { Entry } from './journal';
import '.styles.css';

$(document).ready (function(){
  $('.journalInput').submit(function(event){
    event.preventDefult();
    var inputBody = $("#journal-body").val();
    var inputTitle = $("#journal-title").val();
 var entryNew = new Entry (inputTitle,inputBody);
 entryNew.vowelWords();
 entryNew.getTeaser();
 $(".outputEntry").text("There are" + entryNew.vowelWords + "vowels in your sentence." + "There are" + entryNew.wordCount + "words in your sentence.")

  });
});