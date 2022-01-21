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
            
            donutDisplay.textContent = createdDonuts.createDonuts();
            donutDisplay.innerHTML=createdDonuts.donutNumber;
    });      
}

function addADonutMult(){
    const buyDonutMultiplierBtn = document.querySelector('#buyDonutMultiplier');
    const donutMultDisplay = document.querySelector('#donutMultiplier');
    const donutMultDisplay2 = document.querySelector('#donutMultCost');
    const donutMultDisplay3 = document.querySelector('#donutMultCount');
    buyDonutMultiplierBtn.addEventListener('click', () => {
        if (createdDonuts.donutNumber<=9){
            console.log("you don't have enough donuts");
            alert('not enough donuts, need 10')
        }
        else{
        console.log('firing');
        createdDonuts.chargeForDonutMult();
        donutDisplay.innerHTML=createdDonuts.donutNumber;

        createdDonuts.donutMultiplierPurchase();        
        createdDonuts.donutMultiplierPurchase2();   
        createdDonuts.donutMultiplierPurchase3();   
        donutMultDisplay.innerHTML=createdDonuts.donutMultiplier;
        donutMultDisplay2.innerHTML=createdDonuts.donutMultCost;
        donutMultDisplay3.innerHTML=createdDonuts.donutMultCount;
        }
    });
}





function addADonutClicker(){
    
        const buyAutoClickerBtn = document.querySelector('#buyAutoClicker');
        const autoClick = document.querySelector('#autoClickerCost');
        const autoClick2 = document.querySelector('#autoClickCount');
        const donutDisplay = document.querySelector('#donutCount');
        
        buyAutoClickerBtn.addEventListener('click', () => {
            if (createdDonuts.donutNumber<=99){
                console.log("you don't have enough donuts");
                alert('not enough donuts, need 100')
            }
            else{
            console.log('firing');
            createdDonuts.chargeForAutoClick();
            donutDisplay.innerHTML=createdDonuts.donutNumber;

            var i = 0
            var interval = setInterval(function(){
                i++
                console.log(i);
                donutDisplay.textContent =i*createdDonuts.donutMultiplier*createdDonuts.autoClickCount;
            },1000);
            createdDonuts.autoClickPurchase();
            createdDonuts.autoClickPurchase2();
            
            autoClick.innerHTML=createdDonuts.autoClickerCost;
            autoClick2.innerHTML=createdDonuts.autoClickCount;
            
            }
        });    
}    
    
    




function reset(){
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.resetStats();
    });
}