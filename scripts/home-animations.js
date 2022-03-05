
function seriesIncrement(number, upto){ 
  const upperLimit = upto - 1;
  if(number === upperLimit){
    return 0;
  } else {
    return number + 1;
  }
}

window.addEventListener('load', (event) => {

  const influencer1 = document.querySelector('.influencer-1');
  const influencer1Mask = influencer1.querySelector('.mask-influencer');

  const influencer2 = document.querySelector('.influencer-2');
  const influencer2Mask = influencer2.querySelector('.mask-influencer');

  const influencer3 = document.querySelector('.influencer-3');
  const influencer3Mask = influencer3.querySelector('.mask-influencer');
  console.log(influencer3Mask)

  const influencer4 = document.querySelector('.influencer-4');
  const influencer4Mask = influencer4.querySelector('.mask-influencer');

  const influencer5 = document.querySelector('.influencer-5');
  const influencer5Mask = influencer5.querySelector('.mask-influencer');

  const influencer6 = document.querySelector('.influencer-6');
  const influencer6Mask = influencer6.querySelector('.mask-influencer');

  const influencer1Mobile = document.querySelector('.influencer-1-mobile');
  const influencer1MobileMask = influencer1Mobile.querySelector('.mask-influencer');

  const influencer2Mobile = document.querySelector('.influencer-2-mobile');
  const influencer2MobileMask = influencer2Mobile.querySelector('.mask-influencer');

  const influencer3Mobile = document.querySelector('.influencer-3-mobile');
  const influencer3MobileMask = influencer3Mobile.querySelector('.mask-influencer');

  const like1 = document.querySelector('.hero-right .position-transition-1');
  const like2 = document.querySelector('.hero-right .position-transition-2');

  const like1mobile = document.querySelector('.mobile-hero-image .position-transition-1');
  
  const influencer1ImageArray = [
    'images/inf-1.jpeg',
    'images/inf-6.jpeg',
    'images/inf-7.jpeg',
    'images/inf-8.jpeg',
    'images/inf-9.jpeg',
    'images/inf-10.jpeg',
    'images/inf-11.jpeg',
  ];

  const initial1 = 'images/inf-1.jpeg';

  let isInitial1 = true;

  let isInitial1Mobile = true;


  const influencer2ImageArray = [
    'images/inf-12.jpeg',
    'images/inf-13.jpeg',
    'images/inf-14.jpeg',
    'images/inf-15.jpeg',
    'images/inf-16.jpeg',
    'images/inf-17.jpeg',
    'images/inf-18.jpeg',
    'images/inf-19.jpeg',
  ];

  const initial2 = 'images/inf-12.jpeg';

  let isInitial2 = true;

  let isInitial2Mobile = true;

  const influencer3ImageArray = [
    'images/inf-20.jpeg',
    'images/inf-21.jpeg',
    'images/inf-22.jpeg',
    'images/inf-23.jpeg',
    'images/inf-24.jpeg',
    'images/inf-25.jpeg',
    'images/inf-26.jpeg',
    'images/inf-27.jpeg',
  ];

  const initial3 = 'images/inf-24.jpeg';

  let isInitial3 = true;

  let isInitial3Mobile = true;

  const influencer4ImageArray = [
    'images/inf-28.jpeg',
    'images/inf-29.jpeg',
    'images/inf-30.jpeg',
    'images/inf-31.jpeg',
    'images/inf-32.jpeg',
    'images/inf-33.jpeg',
    'images/inf-34.jpeg',
    'images/inf-35.jpeg',
  ]

  const initial4 = 'images/inf-30.jpeg';

  let isInitial4 = true;

  const influencer5ImageArray = [
    'images/inf-36.jpeg',
    'images/inf-37.jpeg',
    'images/inf-38.jpeg',
    'images/inf-39.jpeg',
    'images/inf-40.jpeg',
  ];

  const initial5 = 'images/inf-40.jpeg';

  let isInitial5 = true;

  const influencer6ImageArray = [
    'images/inf-41.jpeg',
    'images/inf-42.jpeg',
    'images/inf-43.jpeg',
    'images/inf-44.jpeg',
    'images/inf-45.jpeg',
    'images/inf-46.jpeg',
    'images/inf-47.jpeg',
  ];

  const initial6 = 'images/inf-41.jpeg';

  let isInitial6 = true;

  const influencer1MobileImageArray = [
    'images/inf-1.jpeg',
    'images/inf-2.jpeg',
    'images/inf-6.jpeg',
    'images/inf-7.jpeg',
    'images/inf-8.jpeg',
    'images/inf-9.jpeg',
    'images/inf-10.jpeg',
    'images/inf-11.jpeg',
    'images/inf-12.jpeg',
    'images/inf-13.jpeg',
  ];

  let inital1Mobile = 'images/inf-13.jpeg';


  const influencer2MobileImageArray = [
    'images/inf-14.jpeg',
    'images/inf-15.jpeg',
    'images/inf-16.jpeg',
    'images/inf-17.jpeg',
    'images/inf-18.jpeg',
    'images/inf-19.jpeg',
    'images/inf-20.jpeg',
    'images/inf-21.jpeg',
    'images/inf-22.jpeg',
    'images/inf-23.jpeg',
    'images/inf-24.jpeg',
    'images/inf-25.jpeg',
  ];

  let inital2Mobile = 'images/inf-14.jpeg';

  const influencer3MobileImageArray = [
    'images/inf-26.jpeg',
    'images/inf-27.jpeg',
    'images/inf-28.jpeg',
    'images/inf-29.jpeg',
    'images/inf-30.jpeg',
    'images/inf-31.jpeg',
    'images/inf-32.jpeg',
    'images/inf-33.jpeg',
    'images/inf-34.jpeg',
    'images/inf-35.jpeg',
    'images/inf-36.jpeg',
    'images/inf-37.jpeg',
    'images/inf-38.jpeg',
    'images/inf-39.jpeg',
    'images/inf-40.jpeg',
  ];

  let inital3Mobile = 'images/inf-34.jpeg';


  let randomImageInfluencer1Index = 0;
  let randomImageInfluencer2Index = 0;
  let randomImageInfluencer3Index = 0;
  let randomImageInfluencer4Index = 0;
  let randomImageInfluencer5Index = 0;
  let randomImageInfluencer6Index = 0;

  let randomImageInfluencer1MobileIndex = 0;
  let randomImageInfluencer2MobileIndex = 0;
  let randomImageInfluencer3MobileIndex = 0;

  /**for mobiles */

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer1MobileImageArray.length);
    if(randomIndex === randomImageInfluencer1MobileIndex) {
      randomIndex = seriesIncrement(randomIndex, influencer1MobileImageArray.length)
    }

    if(isInitial1Mobile && randomIndex === influencer1MobileImageArray.indexOf(inital1Mobile)) {
      randomIndex = seriesIncrement(randomIndex, influencer1MobileImageArray.length)
    }
    randomImageInfluencer1MobileIndex = randomIndex;
    let newImage = influencer1MobileImageArray[randomIndex];
    influencer1MobileMask.classList.add('opacity-full');

    isInitial1Mobile = false;
    
    setTimeout(() => {
      influencer1Mobile.style.backgroundImage = `url('${newImage}')`;
      influencer1MobileMask.classList.remove('opacity-full');
    }, 400);    
  }, 2135);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer2MobileImageArray.length);
    if(randomIndex === randomImageInfluencer2MobileIndex) {
      randomIndex = seriesIncrement(randomIndex, influencer2MobileImageArray.length)
    }

    if(isInitial2Mobile && randomIndex === influencer2MobileImageArray.indexOf(inital2Mobile)) {
      randomIndex = seriesIncrement(randomIndex, influencer2MobileImageArray.length)
    }
    randomImageInfluencer2MobileIndex = randomIndex;
    let newImage = influencer2MobileImageArray[randomIndex];
    influencer2MobileMask.classList.add('opacity-full');

    isInitial2Mobile = false;
    
    setTimeout(() => {
      influencer2Mobile.style.backgroundImage = `url('${newImage}')`;
      influencer2MobileMask.classList.remove('opacity-full');
    }, 400);    
  }, 4386);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer3MobileImageArray.length);
    if(randomIndex === randomImageInfluencer3MobileIndex) {
      randomIndex = seriesIncrement(randomIndex, influencer3MobileImageArray.length)
    }

    if(isInitial3Mobile && randomIndex === influencer3MobileImageArray.indexOf(inital3Mobile)) {
      randomIndex = seriesIncrement(randomIndex, influencer3MobileImageArray.length)
    }
    randomImageInfluencer3MobileIndex = randomIndex;
    let newImage = influencer3MobileImageArray[randomIndex];
    influencer3MobileMask.classList.add('opacity-full');

    isInitial3Mobile = false;
    
    setTimeout(() => {
      influencer3Mobile.style.backgroundImage = `url('${newImage}')`;
      influencer3MobileMask.classList.remove('opacity-full');
    }, 400);    
  }, 3226);




  /**for desktop */

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer1ImageArray.length);
    if(randomIndex === randomImageInfluencer1Index) {
      randomIndex = seriesIncrement(randomIndex, influencer1ImageArray.length)
    }

    if(isInitial1 && randomIndex === influencer1ImageArray.indexOf(initial1)) {
      randomIndex = seriesIncrement(randomIndex, influencer1ImageArray.length)
    }
    randomImageInfluencer1Index = randomIndex;
    let newImage = influencer1ImageArray[randomIndex];
    influencer1Mask.classList.add('opacity-full');

    isInitial1 = false;
    
    setTimeout(() => {
      influencer1.style.backgroundImage = `url('${newImage}')`;
      influencer1Mask.classList.remove('opacity-full');
    }, 400);    
  }, 2165);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer2ImageArray.length);
    if(randomIndex === randomImageInfluencer2Index){
      randomIndex = seriesIncrement(randomIndex, influencer2ImageArray.length)
    }

    if(isInitial2 && randomIndex === influencer2ImageArray.indexOf(initial2)) {
      randomIndex = seriesIncrement(randomIndex, influencer2ImageArray.length)
    }
    randomImageInfluencer2Index = randomIndex;
    let newImage = influencer2ImageArray[randomIndex];
    influencer2Mask.classList.add('opacity-full');

    isInitial2 = false;

    setTimeout(() => {
      influencer2.style.backgroundImage = `url('${newImage}')`;
      influencer2Mask.classList.remove('opacity-full');
    }, 400);    
  }, 5005);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer3ImageArray.length);
    
    if(randomIndex === randomImageInfluencer3Index){
      randomIndex = seriesIncrement(randomIndex, influencer3ImageArray.length)
    }
    if(isInitial3 && randomIndex === influencer3ImageArray.indexOf(initial3)) {
      randomIndex = seriesIncrement(randomIndex, influencer3ImageArray.length)
    }

    randomImageInfluencer3Index = randomIndex;
    let newImage = influencer3ImageArray[randomIndex];
    influencer3Mask.classList.add('opacity-full');

    isInitial3 = false;

    setTimeout(() => {
      influencer3.style.backgroundImage = `url('${newImage}')`;
      influencer3Mask.classList.remove('opacity-full');
    }, 400);    
  }, 3125);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer4ImageArray.length);
    if(randomIndex === randomImageInfluencer4Index){
      randomIndex = seriesIncrement(randomIndex, influencer4ImageArray.length)
    }

    if(isInitial4 && randomIndex === influencer4ImageArray.indexOf(initial4)) {
      randomIndex = seriesIncrement(randomIndex, influencer4ImageArray.length)
    }

    randomImageInfluencer4Index = randomIndex;
    let newImage = influencer4ImageArray[randomIndex];
    influencer4Mask.classList.add('opacity-full');

    isInitial4 = false;

    setTimeout(() => {
      influencer4.style.backgroundImage = `url('${newImage}')`;
      influencer4Mask.classList.remove('opacity-full');
    }, 400);    
  }, 5475);


  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer5ImageArray.length);
    if(randomIndex === randomImageInfluencer5Index){
      randomIndex = seriesIncrement(randomIndex, influencer5ImageArray.length)
    }

    if(isInitial5 && randomIndex === influencer5ImageArray.indexOf(initial5)) {
      randomIndex = seriesIncrement(randomIndex, influencer5ImageArray.length)
    }
    randomImageInfluencer5Index = randomIndex;
    let newImage = influencer5ImageArray[randomIndex];
    influencer5Mask.classList.add('opacity-full');

    isInitial5 =  false;
    setTimeout(() => {
      influencer5.style.backgroundImage = `url('${newImage}')`;
      influencer5Mask.classList.remove('opacity-full');
    }, 400);    
  }, 3526);


  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * influencer6ImageArray.length);
    if(randomIndex === randomImageInfluencer6Index){
      randomIndex = seriesIncrement(randomIndex, influencer6ImageArray.length)
    }

    if(isInitial6 && randomIndex === influencer6ImageArray.indexOf(initial6)) {
      randomIndex = seriesIncrement(randomIndex, influencer6ImageArray.length)
    }
    randomImageInfluencer6Index = randomIndex;
    let newImage = influencer6ImageArray[randomIndex];
    influencer6Mask.classList.add('opacity-full');

    isInitial6 =  false;
    setTimeout(() => {
      influencer6.style.backgroundImage = `url('${newImage}')`;
      influencer6Mask.classList.remove('opacity-full');
    }, 400);    
  }, 2791);


  const randomPosition = ['down','up','right','left'];

  let lastPositionClass1 =  'down', lastPositionClass2 ='down', lastPositionClass3 ='down';
  
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * randomPosition.length);
    let randomPositionClass = randomPosition[randomIndex];
    like1.classList.remove(lastPositionClass1);
    lastPositionClass1 = randomPositionClass;
    like1.classList.add(randomPositionClass);  
  }, 280);

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * randomPosition.length);
    let randomPositionClass = randomPosition[randomIndex];
    like1mobile.classList.remove(lastPositionClass3);
    lastPositionClass3 = randomPositionClass;
    like1mobile.classList.add(randomPositionClass);  
  }, 280);


  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * randomPosition.length);
    let randomPositionClass = randomPosition[randomIndex];
    like2.classList.remove(lastPositionClass2);
    lastPositionClass2 = randomPositionClass;
    like2.classList.add(randomPositionClass);  
  }, 260);
});