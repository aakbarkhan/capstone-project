const presenterCard = document.querySelector('#presenters-card');

const data = [
  {
    name: 'Elon Musk',
    position: 'CEO&Founder of SpaceX, Tesla, Inc., The Boring Company, Neuralink, OpenAI.',
    description: 'Elon Reeve Musk(born June 28,1971) is an entrepreneur and business magnate.',
    image: './assets/elonmusk.jpg',
    imageAlt: 'Elon-musk',
  },
  {
    name: 'Bill Gates',
    position: 'CEO&Founder',
    description: 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft.',
    image: './assets/bill.png',
    imageAlt: 'Bill-Gates',
  },
  {
    name: 'Peter Thiel',
    position: 'CEO&Founder',
    description: 'Peter Andreas Thiel is a German-American billionaire entrepreneur and venture capitalist. A co-founder of PayPal, Palantir Technologies, and Founders Fund, he was the first outside investor in Facebook.',
    image: './assets/peter.png',
    imageAlt: 'Peter-Thiel',
  },
  {
    name: 'Sunder Pichai',
    position: 'CEO',
    description: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google.',
    image: './assets/sunder.png',
    imageAlt: 'Sunder-Pichai',
  },
  {
    name: 'Jeff Bezos',
    position: 'CEO&Founder',
    description: 'Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and computer engineer. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO',
    image: './assets/jeff.png',
    imageAlt: 'Jeff-Bezos',
  },
  {
    name: 'Jack Dorsey',
    position: 'CEO&Founder',
    description: 'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist who is the co-founder and CEO of Twitter, and the founder and CEO of Square, a financial payments company.',
    image: './assets/jack.png',
    imageAlt: 'Jack-Dorsey',
  },
];

for (let i = 0; i < data.length; i = 1 + i) {
  const card = data[i];
  presenterCard.innerHTML += `
    <div class='speaker-card'>
    <div class="img-wrapper">
    <img class='${card.imageAlt}' src="${card.image}" alt="${card.imageAlt}">
    </div>
    <div class='person-details'>
        <h3 class='name'>${card.name}</h3>
        <p class='post'>${card.position}</p>
        <hr class='line-hr'>
        <p class='info'>${card.description}</p>
    </div>
    </div>
    `;
}