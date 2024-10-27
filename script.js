document.getElementById('timeBtn').addEventListener('click', function() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('output').innerText = `Current Time: ${timeString}`;
});

document.getElementById('jokeBtn').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = `Joke: ${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById('output').innerText = 'Failed to fetch a joke.';
        });
});

document.getElementById('factBtn').addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = `Cat Fact: ${data.fact}`;
        })
        .catch(error => {
            document.getElementById('output').innerText = 'Failed to fetch a cat fact.';
        });
});





