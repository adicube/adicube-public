window.addEventListener('load', (event) => {
  const faq_1 = document.querySelector('.faq-block-1');
  const faq_2 = document.querySelector('.faq-block-2');
  const faq_3 = document.querySelector('.faq-block-3');
  const modalClose = document.querySelector('.close-button')
  const modalRoot = document.querySelector('.modals');
  const modalContent = document.querySelector('.modal-inner-content');

  const faq1 = 'Adicube is an influencer marketing portal, which gives you access to 5000+ influencers profile with 100% verified costs.';

  const faq3 = 'Adicube works on transparent pricing policy, we charge 15% commission over the Influencers costing which includes management of influencers and execution of campaign.';

  const faq2 = 'Here at Adicube, we promise all our clients transparent costs of influencers. We give all our clients the guarantee that if they find any undisclosed margins then we will do their entire influencer marketing campaigns for free.';
  
  

  modalClose.addEventListener('click', function(){
    modalRoot.classList.add('hide');
  });

  faq_1.addEventListener('click', function(){
    modalContent.textContent = faq1;
    modalRoot.classList.remove('hide');
  })
  faq_2.addEventListener('click', function(){
    modalContent.textContent = faq2;
    modalRoot.classList.remove('hide');
  })
  faq_3.addEventListener('click', function(){
    modalContent.textContent = faq3;
    modalRoot.classList.remove('hide');
  })


});