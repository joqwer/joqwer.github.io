var form = document.getElementById("convertForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function convertURL(form) {
    console.log('convertURL ran')
    var output = document.getElementById('result');
    var value = form.textbox.value;
    var enc = btoa(value);
    output.innerText = 'data:text/plain;base64,' + enc;
    console.log('data:text/plain;base64,' + enc);
};