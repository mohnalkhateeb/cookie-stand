'use strict'
let timehour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle={
    name:'seattle',
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
        let h2El =document.createElement('h2')
        h2El.textContent= this.name
        divEl.appendChild(h2El)
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

let tokyo={
    name:'tokyo',
    mincustumer: 3,
    maxcustumer :24,
    avgcookies : 1.2,
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
        let divEl = document.getElementById('tokyo');
        let h2El =document.createElement('h2')
        h2El.textContent= this.name
        divEl.appendChild(h2El)
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
tokyo.render();
let Dubi={
    name:'Dubi',
    mincustumer: 11,
    maxcustumer :38,
    avgcookies : 3.7,
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
        let divEl = document.getElementById('Dubi');
        let h2El =document.createElement('h2')
        h2El.textContent= this.name
        divEl.appendChild(h2El)
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
Dubi.render();
let Paris={
    name:'Paris',
    mincustumer: 20,
    maxcustumer :38,
    avgcookies : 2.3,
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
        let divEl = document.getElementById('Paris');
        let h2El =document.createElement('h2')
        h2El.textContent= this.name
        divEl.appendChild(h2El)
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
Paris.render();
let Lima={
    name:'Lima',
    mincustumer: 2,
    maxcustumer :16,
    avgcookies : 4.6,
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
        let divEl = document.getElementById('Lima');
        let h2El =document.createElement('h2')
        h2El.textContent= this.name
        divEl.appendChild(h2El)
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
Lima.render();
