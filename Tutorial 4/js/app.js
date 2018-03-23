function documentLoaded() {
    console.log('the document is loaded');

}

function selectYes() {

    var theRadio = document.getElementById('radio1');

    theRadio.checked = true;

}

function addTextToTheInputField() {

    var theTextInput = document.getElementById('theTextInput');

    theTextInput.value = 'John ASD';

}

function getFormElements(){
    
    var theForm = document.getElementsByTagName('form')[0];

    var allChildren = theForm.childNodes;
    console.log(allChildren);
    
    // var theChildren = theForm.getElementsByTagName('input');
    var theChildren = theForm.querySelectorAll('input[type=text]');
    console.log(theChildren);

    var documentLevelRadioButtons = document.querySelectorAll('input[type=radio]')
    console.log(documentLevelRadioButtons[1]);

    
}

getFormElements();

function changeFormStylingWithClassName(){

    var theForm = document.getElementsByTagName('form')[0];

    theForm.className = 'formStyling ';

}

function changeFormStylingWithAnotherClassName(){

    var theForm = document.getElementsByTagName('form')[0];

    theForm.className = 'anotherFormStyling ';

}

function changeFormStyling() {

    var theForm = document.getElementsByTagName('form')[0];

    theForm.style.padding = '10px';
    theForm.style.margin = '10px';
    theForm.style.border = '2px solid black';
    theForm.style.backgroundColor = '#ccc';


}

function validateInput() {
    var theInput = document.getElementById('nameInput');

    var theLength = theInput.value.length;

    if(theLength > 5){
        // green
        theInput.className = 'greenBorder';
    }
    else{
        // red
        theInput.className = 'redBorder';

    }

}
























