console.log("hello world");

/*FAQ Page*/
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faqs =>{
    faqs.addEventListener("click", ()=>{
        event.preventDefault();
        faqs.classList.toggle("active");
    })
})

/*Sign Up Modal*/
const signUpBtn = document.querySelectorAll(".sign-up");
const closeBtn = document.querySelectorAll(".close-btn");
const modal = document.querySelector(".modal-container");
signUpBtn.forEach(signUpBtn => {
    signUpBtn.addEventListener("click", ()=>{

        event.preventDefault();
        console.log("click");
        modal.style.visibility = "visible";
        
    })
})
closeBtn.forEach(closeBtn =>{
    closeBtn.addEventListener("click", ()=>{
        modal.style.visibility = "hidden";
    })

})
/*Blog Page*/
const featuredArticleTitle = document.querySelector(".featured-article-title");
const featuredArticleAuthor = document.querySelector(".featured-article-author");
const featuredArticleDesc = document.querySelector(".featured-article-desc");
const featuredArticleImage = document.getElementById("featured-article-image");

const suggestedArticleContainer = document.querySelector(".suggested-articles");

const Http = new XMLHttpRequest();
const newsAPiUrl = 'https://newsapi.org/v2/everything?q=crypto&apiKey=cdffb7de19ee4e648e61aff7ae3eeb47';
Http.open("GET", newsAPiUrl);
Http.send();
Http.onload=()=>{
    let info = JSON.parse(Http.responseText);
    let randomArticleNum = Math.floor(Math.random() * (99 - 13 + 1) + 13);

    featuredArticleTitle.innerHTML = info["articles"][randomArticleNum]["title"];
    featuredArticleAuthor.innerHTML = info["articles"][randomArticleNum]["author"];
    featuredArticleDesc.innerHTML = info["articles"][randomArticleNum]["description"];
    featuredArticleImage.src = info["articles"][randomArticleNum]["urlToImage"];

    let randomSuggestedArticleNum = Math.floor(Math.random() * 94);
    for (i = 0;i  < 5; i++){
        const newSuggested = document.createElement('div');
        const newSuggestedImage = document.createElement('img');
        const newSuggestedTitle = document.createElement('h6');
        const newSuggestedDesc = document.createElement('p');


        suggestedArticleContainer.appendChild(newSuggested);
        newSuggested.appendChild(newSuggestedImage);
        newSuggested.appendChild(newSuggestedTitle);
        newSuggested.classList.add('new-suggested-box');
        newSuggested.classList.add('read-more-article-btn');
        
        
        newSuggested.style.background = "#0e002a";
        newSuggested.style.height = "70px";
        newSuggested.style.display = "flex";
        newSuggestedImage.src = info["articles"][randomSuggestedArticleNum]["urlToImage"];
        newSuggested.style.padding = "10px";
        newSuggested.style.marginTop = "20px";
        newSuggested.style.overflow = "hidden";

        newSuggestedImage.style.border = "3px solid #fff";
        newSuggestedImage.style.marginRight = "10px";

        newSuggestedTitle.innerHTML = info["articles"][randomSuggestedArticleNum]["title"];
        newSuggestedTitle.style.color = "#fff";
        newSuggestedTitle.style.paddingLeft = "50px";
        newSuggestedTitle.style.fontSize = "15px";
        newSuggestedTitle.style.marginBottom = "10px";

        newSuggested.addEventListener('click', ()=>{
            const articleModal = document.createElement('div');
            articleModal


            console.log("hello");
        })

        randomSuggestedArticleNum++;
    }


}


const readArticleBtn = document.querySelectorAll(".read-more-article-btn");

readArticleBtn.forEach(readArticleBtn =>{
    readArticleBtn.addEventListener("click", ()=>{
        console.log("clicked");
    })
})



