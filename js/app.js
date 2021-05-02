'use strict'
let timehour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle={
    mincustumer: 23,
    maxcustumer :65,
    avgcookies : 6.3,
    hourcookie :[],
    hourcustmer : [],
    hcous : 0,
    totalcookie :0,
    getavgcoustomer : function()
    {
        for(let i=0;i< timehour.length;i++)
        {
            this.hcous=Math.floor(Math.random() * (this.maxcustumer - this.mincustumer + 1) + this.mincustumer);
            this.hourcustmer.push(this.hcous)
        }
        
    console.log(this.hourcustmer);
    },
    gethourcookies : function()
    {
        this.getavgcoustomer();
        for(let i=0;i< timehour.length;i++)
        {
            this.hourcookie.push(Math.ceil(this.hourcustmer[i]*this.avgcookies));
        }
        console.log(this.hourcookie)
        
    },
    gettotalcookie : function(){
        this.gethourcookies();
        for(let i=0;i< timehour.length;i++)
        {
            this.totalcookie +=this.hourcookie[i]
        }
        console.log(`the total cookies is ${this.totalcookie}`)

    },
    render : function()
    {
        this.gettotalcookie();
        let divEl = document.getElementById('seattle');
    let ULEl = document.createElement('ul');
        divEl.appendChild(ULEl)
    for (let i = 0; i < timehour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = timehour[i]+' : '+ this.hourcookie[i] + ' cookies'
      ULEl.appendChild(liEl)
    }
        let liEl = document.createElement('li');
      liEl.textContent = ' Total : '+ this.totalcookie + ' cookies'
      ULEl.appendChild(liEl)
    }
    

}
Seattle.render();