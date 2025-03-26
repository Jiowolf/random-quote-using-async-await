const BLOCKQUOTE_SELECT = document.querySelector ('blockquote');
const IMG_SELECT = document.querySelector ('img');
const NAME_SELECT = document.querySelector ('#name');
const NBR_QUOTE_SELECT = document.querySelector ('#nbrQuote');
const BUTTON_SELECT = document.querySelector ('#newQuote');


async function fetchAPI() {
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();
    return data;
    }

async function displayQuote() {
    const data = await fetchAPI();
    BLOCKQUOTE_SELECT.innerHTML = `"${data.quote}"`;
    IMG_SELECT.src = data.photo;
    NAME_SELECT.innerHTML = data.author;
    NBR_QUOTE_SELECT.innerHTML = `${data.total_quotes} quotes`;
    }

displayQuote();
BUTTON_SELECT.addEventListener('click', displayQuote);

