import DonutMaker from './DonutMaker.js';

const donutDisplay = document.querySelector('#donutCount');

const createdDonuts = new DonutMaker();

renderPage();

function renderPage() {
    homeBtn();
    aboutBtn();
    inspirationBtn();
    contactBtn;
    addADonut();
    addADonutMult();
    addADonutClicker();    
    reset();
}

function homeBtn(){
    const homeBtn = document.querySelector('#home');
    homeBtn.addEventListener('click', () => {
        console.log('firing');
        createdDonuts.resetStats();
    });
    
}

function aboutBtn(){
    const aboutBtn = document.querySelector('#about');
    aboutBtn.addEventListener('click', () => {
       alert('Fred began his journey in creating donuts when he was 12.  His mother \nwas a doughnut lover and took him to all the best pastry shops in town.  When Fred was 15 he began an apprenticeship at the \nneighbors pastry shop where he found a love for doughnuts. \nWhen he turned 20, Fred opened up shop and has been selling \never since (1948)! ') ;
    });
}


function inspirationBtn(){
    const inspirationBtn = document.querySelector('#inspiration');
    inspirationBtn.addEventListener('click', ()=>{
        window.open("http://orteil.dashnet.org/cookieclicker/", "_blank");    
    });
    
}

function contactBtn(){
    const contactBtn = document.querySelector('#contact');
    contactBtn.addEventListener('click', () => {
       alert('enter info here'); 
    });   
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
        if (donutDisplay.innerHTML<=9 || donutDisplay.innerText<=createdDonuts.donutMultCost){
            console.log("you don't have enough donuts");
            alert('not enough donuts, check current donut multipler cost')
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
            if (donutDisplay.innerText<=99 || donutDisplay.innerText<=createdDonuts.autoClickerCost ){
                console.log("you don't have enough donuts");
                alert('not enough donuts, check current AutoClicker cost')
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


