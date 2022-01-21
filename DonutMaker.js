// const container = (document.querySelector('.container').innerText = 
//   'Number of Donuts Created: ');

// console.log('Number of donuts created: ');
  
class DonutMaker {
    

    constructor(){
        this.donutNumber=0;
        this.autoClickCount=0;
        this.autoClickerCost=100;
        this.donutMultiplier=1;
        this.donutMultiplierCost=10;
        this.donutMultCount=0;
    }

    createDonuts(){
        this.donutNumber += 1;
    }

    // autoClick(){
    //     autoClickCount += 1;
    // }

    donutMultiplierPurchase(){
        this.donutMultiplier *= 1.2;
        this.donutMultiplierCost *=1.1;
    }

    autoClickPurchase(){
        this.autoClickCount += 1;       
        this.autoClickerCost *= 1.1;                 
        buyDonutMultiplier
   }

    resetStats(){
        location.reload(); //refresh page
    }
}

export default DonutMaker;