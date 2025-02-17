import './style.css';

const URLs = [
  {
    name: 'PriceRunner',
    url: 'https://www.pricerunner.dk/search?q='
  },
  {
    name: 'Proshop',
    url: 'https://www.proshop.dk/?s='
  },
  {
    name: 'Nintendopusheren',
    url: 'https://www.nintendopusheren.dk/?post_type=product&s='
  },
  {
    name: 'videogamesplus',
    url: 'https://videogamesplus.ca/search?q='
  },
  {
    name: 'Play Asia',
    url: 'https://www.play-asia.com/search/'
  },
  {
    name: 'Ebay',
    url: 'https://www.ebay.com/sch/i.html?_nkw='
  },
  {
    name: 'amazon.de',
    url: 'https://www.amazon.de/s?k='
  }
];

const params = new URLSearchParams(window.location.search);

(document.getElementsByClassName('input')[0] as HTMLInputElement).value = params.get('name') || '';

const search = () => {
  const main = document.getElementsByClassName('main')[0];

  main.innerHTML = `
    <h3>Search results for: ${params.get('name')}</h3>
    ${URLs.map(({ name, url }) => {
      return `
        <span class="item">
          <a href="${url + encodeURIComponent(params.get('name') || '')}" target="_blank">${name}</a>
        </span>
      `
    }).join('')}
  `;
}

if (params.get('name')) {
    search();
}
