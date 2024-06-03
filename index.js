document.getElementById('navigateButton').addEventListener('click', function() {
    const selectedCharacter = document.querySelector('input[name="character"]:checked'); //assigns the input that is checked to this variable
    //if a character is selected that the value is taken from selectedCharacter
    if(selectedCharacter){
        const characterValue = selectedCharacter.value;
        window.location.href = 'todo.html?character=' + encodeURIComponent(characterValue); //adds an encoded text string to the url which is the character value.
    }
    else {
        alert('Please select a character');
    }
});