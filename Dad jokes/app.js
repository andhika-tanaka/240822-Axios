const jokes = document.querySelector('#jokes');
const buttonJokes = document.querySelector('button');

const addJokes = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json",
            },
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return (res.data.joke)
    } catch (e) {
        return "No jokes Available";
    };
};

buttonJokes.addEventListener('click', addJokes);