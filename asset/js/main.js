const news = [
    {
        id: '1',
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Scoperta di una nuova specie di papera di gomma.',
        tags: 'geo, tech',
        author: 'Diana Rossi',
        published: '2023-02-11'
    },

    {
        id: '2',
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: 'viaggi, geo',
        author: 'Fabio Mari',
        published: '2023-03-14'
    },

    {
        id: '3',
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        tags: 'cucina',
        author: 'Marta Bianchi',
        published: '2023-04-20'
    },

    {
        id: '4',
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un/analisi delle tendenze e delle sfide nell/arte contemporanea, con interviste a artisti emergenti.',
        tags: 'arte, tech',
        author: 'Gabriele Neri',
        published: '2023-05-29'
    }
]

console.log(news);


const card = [
    './asset/img/rubber-duck.jpg',
    './asset/img/kitchen-food.jpg',
    './asset/img/deep-sea.jpg',
    './asset/img/modern-art.jpg'
]

let activeCard = 0;

const sliderImagesEl = document.querySelector('.card .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

const cardDomElement = document.querySelector('.card')
console.log(cardDomElement);

for (let i = 0; i < news.length; i++) {
    const item = news[i];

    console.log(item.title);
    console.log(item.content);
    console.log(item.author);

    const markup = `
             < div class="card" >
                 <div class="title">${item.title}</div>
                 <h4>pubblicato da ${item.author}</h4>
                 <h5>in data ${item.published}</h5>
                 <p>${item.content}</p>
                 <div class="images"></div>
            </div>`
}

