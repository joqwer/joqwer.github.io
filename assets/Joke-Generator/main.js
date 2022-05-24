const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit'


function genJoke() {
    document.getElementById('jokeBtn').disabled = true
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('Network response was not OK: ' + res.status + ' ' + res.statusText);
        }
        return res.json()
    })

    .then(data => {
        if(data.type == 'twopart') {
            document.getElementById('joke').innerHTML = data.setup + '<br>' + data.delivery
        }
        else {
            document.getElementById('joke').textContent = data.joke
        }
    })

    .catch(error => {
        alert(error)
        console.log(error)
    })

    setTimeout(function(){
        document.getElementById('jokeBtn').disabled = false
    },1500);
}