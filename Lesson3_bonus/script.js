// <!-- - Створити масив автівок з полями id , model, producer ,tankVolume, horsePower, image. 15 об'єктів.
// Вивести увесь масив в документ застилізувавши його по 2 елементи в ряд -->

let auto = [
     {
          id: 'Aston Martin',
          model: 'DBX',
          producer: 'Aston Martin Limited',
          tankVolume: 3982,
          horsePower: 550,
          image: 'https://i.infocar.ua/i/2/6041/115121/1920x.jpg'
     },
     {
          id: 'Audi',
          model: 'A1 (8X)',
          producer: 'Volkswagen Group',
          tankVolume: 1197,
          horsePower: 86,
          image: 'https://i.infocar.ua/i/2/1017/95561/1920x.jpg'
     },
     {
          id: 'BMW',
          model: '1 Series Cabrio (E88)',
          producer: 'Bayerische Motoren Werke AG',
          tankVolume: 1995,
          horsePower: 175,
          image: 'https://i.infocar.ua/i/2/1382/99164/1920x.jpg'
     },
     {
          id: 'Cadillac',
          model: 'BLS',
          producer: 'General Motors',
          tankVolume: 1998,
          horsePower: 398,
          image: 'https://i.infocar.ua/i/2/166/101434/1920x.jpg'
     },
     {
          id: 'Hummer',
          model: 'H2',
          producer: 'Aston Martin Limited',
          tankVolume: 6162,
          horsePower: 550,
          image: 'https://i.infocar.ua/i/12/1145/1400x700.jpg'
     },
     {
          id: 'Hyundai',
          model: 'Accent',
          producer: 'Hyundai Motor Company ',
          tankVolume: 1396,
          horsePower: 107,
          image: 'https://i.infocar.ua/i/12/1046/1400x700.jpg'
     },
     {
          id: 'Jeep',
          model: 'Renegade',
          producer: 'Chrysler',
          tankVolume: 1368,
          horsePower: 160,
          image: 'https://i.infocar.ua/i/12/4427/1400x700.jpg'
     },
     {
          id: 'KIA',
          model: 'Cadenza',
          producer: 'Kia Motors Corporation',
          tankVolume: 3342,
          horsePower: 290,
          image: 'https://i.infocar.ua/i/12/5428/1400x700.jpg'
     },
     {
          id: 'McLaren',
          model: 'P1',
          producer: 'McLaren Automotive Limited',
          tankVolume: 3799,
          horsePower: 916,
          image: 'https://i.infocar.ua/i/12/3639/1400x700.jpg'
     },
     {
          id: 'Tesla',
          model: 'Model S',
          producer: 'Tesla Inc',
          tankVolume: '-',
          horsePower: 367,
          image: 'https://i.infocar.ua/i/12/3230/1400x700.jpg'
     },
     {
          id: 'Volkswagen',
          model: 'Atlas',
          producer: 'Volkswagen Group',
          tankVolume: 3597,
          horsePower: 280,
          image: 'https://i.infocar.ua/i/12/5491/1400x700.jpg'
     },
     {
          id: 'Volvo',
          model: 'V60',
          producer: 'Volvo Group',
          tankVolume: 1596,
          horsePower: 150,
          image: 'https://i.infocar.ua/i/12/975/1400x700.jpg'
     },
     {
          id: 'Богдан',
          model: '2110',
          producer: 'Богдан-Авто Холдинг',
          tankVolume: 1596,
          horsePower: 80,
          image: 'https://i.infocar.ua/i/12/1252/1400x700.jpg'
     },
     {
          id: 'Skoda',
          model: 'Fabia',
          producer: 'Škoda Auto a.s',
          tankVolume: 999,
          horsePower: 95,
          image: 'https://i.infocar.ua/i/12/5608/1400x700.jpg'
     },
     {
          id: 'Кінь',
          model: 'Грім',
          producer: 'Кобила Гніда',
          tankVolume: 'Відро вівса',
          horsePower: 1,
          image: 'https://media.acc.cv.ua/news/article/2016/08/31/17517/kin.r695x430.jpg'
     },
];

for (let i = 0; i < auto.length; i++) {
     document.write(`
     <div>
          <h2>
          ${auto[i].id} ${auto[i].model} 
          </h2>
          <h3>
               <li>Виробник: ${auto[i].producer}  </li>
               <li>Об'єм двигуна: ${auto[i].tankVolume}</li>
               <li>Потужність (к.с.): ${auto[i].horsePower}</li>
          </h3>
          <img src="${auto[i].image}" alt="${auto[i].id}">
     </div>
     `);
}