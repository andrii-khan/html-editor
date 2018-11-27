;(function(){
    let textArea = document.getElementById('ba-text-area');
    let blockDiv = document.getElementById('ba-show');

document.body.addEventListener('keydown', show);
function show(event) {
    console.log(event);
    
    if(event.keyCode == 69 && event.ctrlKey){
        event.preventDefault();
        textArea.style.display = "block";
        blockDiv.style.display = "none";
        textArea.value = blockDiv.innerHTML;
        textArea.focus();
    }   
    if(event.keyCode == 83 && event.ctrlKey) {
        event.preventDefault();
        textArea.style.display = "none";
        blockDiv.style.display = "block";
        blockDiv.innerHTML = textArea.value;
    }
    if(event.keyCode == 27){
        event.preventDefault();
        blockDiv.style.display = "block";
        textArea.style.display = "none";
    }
}

})();
