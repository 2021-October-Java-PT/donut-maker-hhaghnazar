import DonutMaker from './DonutMaker.js';

const donutDisplay = document.querySelector('#donutCount');
// const myDonutsDiv = document.querySelector('#myDonuts');
const createdDonuts = new DonutMaker();

renderPage();

function renderPage() {
    addADonut();
    addADonutMult();
    addADonutClicker();
    reset();
}

// function retreiveDonutCount(){
//     return createdDonuts.donutCount;
// }


function addADonut() {
    const makeDonutBtn = document.querySelector('#submit');
    // const donutCount=retreiveDonutCount();
  
        makeDonutBtn.addEventListener('click', () => {            
            createdDonuts.createDonuts();
            donutDisplay.innerHTML=createdDonuts.donutNumber;
    });      
}

function addADonutMult(){
    const buyDonutMultiplierBtn = document.querySelector('#buyDonutMultiplier');
    const donutMultDisplay = document.querySelector('#donutMultiplier');
    buyDonutMultiplierBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.donutMultiplierPurchase();        
        donutMultDisplay.innerHTML=createdDonuts.donutMultiplier;
    });
}

function addADonutClicker(){
    const buyAutoClickerBtn = document.querySelector('#buyAutoClicker');
    const donutMultDisplay = document.querySelector('#autoClickerCost');
    // const buyAutoClicker = document.querySelector('#autoClickerCost');
    // if (createdDonuts.donutCount<=99){
    //     alert('Not enough donuts.  Must have at least 100 donuts.')
    // }
        
    //     createdDonuts.donutCount -=100;
    buyAutoClickerBtn.addEventListener('click', () => {
            console.log('firing');
            createdDonuts.autoClickPurchase();
            donutMultDisplay.innerHTML=createdDonuts.autoClickerCost;
    });
}

function reset(){
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.resetStats();
    });
}