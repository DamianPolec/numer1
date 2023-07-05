const Logo = document.querySelector('.Logo');


const InfoButton = document.querySelector('.about-us-button');
const infoContainer = document.querySelector('.info');


const Cennik=document.querySelector('.prince')
const CennikButton=document.querySelector('.cennik-button')


const KontaktContainer= document.querySelector("#kontakt-section");
const kontaktButton=document.querySelector('.kontakt-button')


Logo.addEventListener('click',()=>{
    infoContainer.classList.add('hidden');
    KontaktContainer.classList.add('hidden');
    Cennik.classList.add('hidden');
});


InfoButton.addEventListener('click', () => {
  infoContainer.classList.remove('hidden');
  Cennik.classList.add('hidden');
  KontaktContainer.classList.add('hidden');
});


kontaktButton.addEventListener('click', ()=>{
    KontaktContainer.classList.remove('hidden');
    Cennik.classList.add('hidden');
    infoContainer.classList.add('hidden');
});

CennikButton.addEventListener('click',()=>{
    Cennik.classList.remove('hidden');
    KontaktContainer.classList.add('hidden');
    infoContainer.classList.add('hidden');
})