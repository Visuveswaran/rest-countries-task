var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    var casia=data.filter((x)=>x.region==='Asia');
    console.log(casia);
    var pop=data.filter((x)=>x.population<200000);
    console.log(pop);
    data.forEach(element=>{
        console.log(`${element.name} -${element.capital}- ${element.flag}`)
    })
    var total=data.reduce((sum,cv)=>sum+cv.population,0);
    console.log(`${total}`)
    var usd=data.filter((x)=>{
        for(var curr in x.currencies){
            if(x.currencies[curr].code==='USD'){
                return true;
            }
        }
    }) .map(x=>console.log(x.name));
    console.log(usd);
    for(var i in data){
        if(data[i].currencies[0].code === "USD"){
            console.log(data[i].name);
        }
    }
}
