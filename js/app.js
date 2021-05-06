'use strict'

let timehour = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', 
'12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm']
let LocationArr= []
let BigTotal =0
let hourcookietotal =[];
let tableEl = document.createElement('table')
//let lastTr= document.createElement('tr')
function createTableHeader()
{
    let tableParent = document.getElementById('table')
    tableParent.appendChild(tableEl)
    let headTr = document.createElement('tr')
    tableEl.appendChild(headTr)
    let timeHed = document.createElement('th')
    timeHed.textContent= ' Time '
    headTr.appendChild(timeHed)
    for(let i=0;i<timehour.length;i++)
    {
        let hourHed = document.createElement('th')
        hourHed.textContent = timehour[i]
        headTr.appendChild(hourHed)
    }
    let TotalHed = document.createElement('th')
    TotalHed.textContent = 'Daily Location Total'
    headTr.appendChild(TotalHed)
}

function sallocation(locationname,mincustumer,maxcustumer,avgcookies)
{
    this.locationname =locationname;
    this.mincustumer = mincustumer;
    this.maxcustumer = maxcustumer;
    this.avgcookies =avgcookies;
    this.hourcustmer=[];
    this.hourcookie = [];
    this.totalcookie = 0;
    LocationArr.push(this);
}


sallocation.prototype.getavgcoustomer = function()
{
        let hcous = 0
        for(let i=0;i< timehour.length;i++)
        {
            hcous=Math.floor(Math.random() * (this.maxcustumer - this.mincustumer + 1) + this.mincustumer);
            this.hourcustmer.push(hcous)
        }
        
    console.log(this.hourcustmer);
    
}
sallocation.prototype.gethourcookies = function()
{
    this.getavgcoustomer();
    for(let i=0;i< timehour.length;i++)
    {
        this.hourcookie.push(Math.ceil(this.hourcustmer[i]*this.avgcookies));
    }
    console.log(this.hourcookie)
    
}
sallocation.prototype.gettotalcookie =function(){
    this.gethourcookies();
    for(let i=0;i< timehour.length;i++)
    {
        this.totalcookie +=this.hourcookie[i]
    }
    console.log(`the total cookies is ${this.totalcookie}`)

}
sallocation.prototype. render = function()
{
    this.gettotalcookie();
    let objTr = document.createElement('tr')
    tableEl.appendChild(objTr)
    let nameTd = document.createElement('td')
    nameTd.textContent = this.locationname
    objTr.appendChild(nameTd)
    for(let i=0;i< timehour.length;i++)
    {
        let cookTd= document.createElement('td')
        cookTd.textContent = this.hourcookie[i]
        objTr.appendChild(cookTd)
    }
    let totalTd= document.createElement('td')
    totalTd.textContent= this.totalcookie
    objTr.appendChild(totalTd)
    
    /*let divEl = document.getElementById(this.locationname);
    let h2El =document.createElement('h2')
    h2El.textContent= this.locationname
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
  ULEl.appendChild(liEl)*/
}


let seattle= new sallocation('seattle',23,65,6.3)
let tokyo = new sallocation('tokyo',3,24,1.2)
let Dubi = new sallocation('Dubi',11,38,3.7)
let Paris= new sallocation('Paris',20,38,2.3) 
let Lima= new sallocation('Lima',2,16, 4.6)

let addingform = document.getElementById('new-store')
addingform.addEventListener('submit',addstor)
function addstor(event)
{
    event.preventDefault();
    let lname = event.target.lname.value;
  let mincustm = event.target.mincustm.value;
  let maxcustm = event.target.maxcustm.value;
  let avgcookie = event.target.avgcookie.value;

   let added = new sallocation(lname,mincustm,maxcustm,avgcookie);
    tableEl.innerHTML='';
    finalrender();
    renderLastTr();
  
}







function renderLastTr()
{
for(let j=0;j<LocationArr.length;j++)
{
    BigTotal += LocationArr[j].totalcookie
}
console.log(`total of all cookies : ${BigTotal}`)
for (let c=0;c<timehour.length;c++)
{
    let sum1=0;
    for (let k=0;k<LocationArr.length;k++)
    
    {
        sum1 += LocationArr[k].hourcookie[c]
       
    }
 hourcookietotal[c]=sum1;
}
let lastTr= document.createElement('tr')
tableEl.appendChild(lastTr)
let totTd= document.createElement('td')
totTd.textContent = 'Total'
lastTr.appendChild(totTd)

for(let i=0;i<hourcookietotal.length;i++)
{
    let hcooktotTd= document.createElement('td')
    hcooktotTd.textContent = hourcookietotal [i]
    lastTr.appendChild(hcooktotTd)
}
let alltotTd= document.createElement('td')
alltotTd.textContent = BigTotal
lastTr.appendChild(alltotTd)
}

function finalrender()
{ 
    createTableHeader();
for(let c=0;c<LocationArr.length;c++)
{
   LocationArr[c].render()
}

}


finalrender();
renderLastTr()
console.log(hourcookietotal)
console.log('location ='+ LocationArr.length)

/*let Seattle={
    name:'seattle',
    mincustumer: 23,
    maxcustumer :65,
    avgcookies : 6.3,
    
   
    totalcookie :0,
    
    
    
    
   
    

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
Lima.render();*/
