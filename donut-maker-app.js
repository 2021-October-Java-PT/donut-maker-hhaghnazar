import DonutMaker from './DonutMaker.js';

const donutDisplay = document.querySelector('#donutCount');

const createdDonuts = new DonutMaker();

renderPage();

function renderPage() {
    addADonut();
    addADonutMult();
    addADonutClicker();
    
    reset();
}

function addADonut() {
    const makeDonutBtn = document.querySelector('#submit');
        makeDonutBtn.addEventListener('click', () => {            
            createdDonuts.createDonuts();
            donutDisplay.innerHTML=createdDonuts.donutNumber;
    });      
}

function addADonutMult(){
    const buyDonutMultiplierBtn = document.querySelector('#buyDonutMultiplier');
    const donutMultDisplay = document.querySelector('#donutMultiplier');
    const donutMultDisplay2 = document.querySelector('#donutMultCost');
    const donutMultDisplay3 = document.querySelector('#donutMultCount');
    buyDonutMultiplierBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.donutMultiplierPurchase();        
        createdDonuts.donutMultiplierPurchase2();   
        createdDonuts.donutMultiplierPurchase3();   
        donutMultDisplay.innerHTML=createdDonuts.donutMultiplier;
        donutMultDisplay2.innerHTML=createdDonuts.donutMultCost;
        donutMultDisplay3.innerHTML=createdDonuts.donutMultCount;
    });
}





function addADonutClicker(){
    
        const buyAutoClickerBtn = document.querySelector('#buyAutoClicker');
        const autoClick = document.querySelector('#autoClickerCost');
        const autoClick2 = document.querySelector('#autoClickCount');
        buyAutoClickerBtn.addEventListener('click', () => {
            console.log('firing');
            createdDonuts.autoClickPurchase();
            createdDonuts.autoClickPurchase2();
            autoClick.innerHTML=createdDonuts.autoClickerCost;
            autoClick2.innerHTML=createdDonuts.autoClickCount;
            
            });    
}    
    
    




function reset(){
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.resetStats();
    });
}