const generalBtn=document.getElementById("general");
const financeBtn=document.getElementById("finance");
const buisnessBtn=document.getElementById("buisness");
const entertainmentBtn=document.getElementById("entertainment");
const gamingBtn=document.getElementById("gaming");
const sportsBtn=document.getElementById("sports");
const technologyBtn=document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newssearch = document.getElementById("newssearch");
const newstype=document.getElementById("newstype");
const newsdetails=document.getElementById("newsdetails");

var newsdata=[];

generalBtn.addEventListener("click",function(){
    const fetchgeneralnews=async()=>{
        const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=news",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               console.log(a);
               newsdata=a.articles;
    
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchgeneralnews()

});
financeBtn.addEventListener("click",function(){
    const fetchfinancenews=async()=>{
        const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=finance",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchfinancenews()
});
buisnessBtn.addEventListener("click",function(){
    
    const fetchbusinessnews=async()=>{
        const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=business",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchbusinessnews()
});
entertainmentBtn.addEventListener("click",function(){
    
    const fetchentertainmentnews=async()=>{
        const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=entertainment",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchentertainmentnews()
});
gamingBtn.addEventListener("click",function(){
    
    const fetchgamingnews=async()=>{
        const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=gaming",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchgamingnews()
});
sportsBtn.addEventListener("click",function(){
    
    const fetchsportsnews=async()=>{
        const response=await fetch( "https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=sport",
        {
            method: "GET",
            headers: {
                "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
            },
        });
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchsportsnews()
});
technologyBtn.addEventListener("click",function(){
    
    const fetchtechnologynews=async()=>{
        const response=await fetch(
            "https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=tech",
            {
                method: "GET",
                headers: {
                    "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
                },
            }
        )
        newsdata=[];
        if(response.status>=200 && response.status<300){
               const a=await response.json();
               newsdata=a.articles;
        }else{
            console.log(response.status,response.statustext);
        }
    
        displaynews();
    
    }
    fetchtechnologynews()
});
searchBtn.addEventListener("click",function(){

    fetchnewssearch();
});
const fetchnewssearch = async () => {

    if(newssearch.value== null)
        return;

    const response = await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic="+newssearch.value,
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status >= 200 && response.status < 300) {
        const a= await response.json();
        newsdata = a.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


function displaynews(){

    newsdetails.innerHTML="";
   
    newsdata.forEach(news =>{

       

        var col=document.createElement("div");
        col.className="col col-lg-4 col-sm-12 col-md-6 col-11 ";

        var card=document.createElement("div");
        card.className=" card h-100 p-2 card";

        var image = document.createElement('img');
        image.className="img";
        image.setAttribute("width","100%");
        image.src=news.media;

        var cardbody=document.createElement("div")

        var newsheading=document.createElement("h4")
        newsheading.className="news-title"
        newsheading.innerHTML=news.title;


        var date=news.published_date.split("T");
        var dateheading=document.createElement("h5");
        dateheading.className="text-primary";
        dateheading.innerHTML=date[0];

        var body=document.createElement("p");
        body.className="text";
        body.innerHTML=news.summary;

        var  link=document.createElement('a')
        link.className="btn btn-dark";
        link.setAttribute("target","_blank");
        link.href=news.link;
        link.innerHTML="read more";


        cardbody.appendChild(dateheading);
        cardbody.appendChild(newsheading);
        cardbody.appendChild(body);

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);

        newsdetails.appendChild(col);



    



        


    })
}



if ("serviceWorker" in navigator ){
    navigator.serviceWorker.register("./sw.js").then(registration =>{
        console.log("service worker registered!");
        console.log(registration);
    }).catch(error =>{
        console.log("service worker registeration failed");
        console.log(error);

    });
}
