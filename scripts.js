// Function : load menu button
window.onload = function(){
    var button = document.createElement("Button");
    button.innerHTML = "&#x2630;";
    button.style = "font-size:25px;top:55px; right:20px; position:fixed; z-index: 8888;" +
                    "border-radius: 20px; padding:7px; border : none ;" +
                    "background-color: rgb(255, 255, 255); "
    document.body.appendChild(button);

    button.onclick = function () {
        var modal = document.getElementById("menu");
        modal.style.display = "block";
    }
};


//Reverse The Card Books
var temp1 = "";
var temp2 = "";
function mouse_on_related(name,price, key) {
    temp1 = document.getElementById(price).innerHTML;
    temp2 = document.getElementById(key).innerHTML;
    temp3 = document.getElementById(name).innerHTML;

    document.getElementById(price).innerHTML = "price = 12.81$";
    document.getElementById(key).innerHTML = "OPEN";
    document.getElementById(name).innerHTML = "";

    document.getElementById(price).style.rotate = "y  180deg";

    document.getElementById(key).style.rotate = "y 180deg";
    document.getElementById(key).style.padding = "15px";
    document.getElementById(key).style.borderRadius = "15px";
    document.getElementById(key).style.backgroundColor = "skyblue";

    document.getElementById(key).style.border = "1px solid black";
}


// Take Back The Books Card to Normal Status 
function mouse_off_related(name,price, key) {
    document.getElementById(price).innerHTML = temp1;
    document.getElementById(key).innerHTML = temp2;
    document.getElementById(name).innerHTML = temp3;

    document.getElementById(price).style.rotate = "0deg";
    document.getElementById(key).style.rotate = "0deg";

    document.getElementById(key).style.padding = "0px";
    document.getElementById(key).style.borderRadius = "0px";
    document.getElementById(key).style.backgroundColor = "transparent";

    document.getElementById(key).style.border = "none";
}



//Close any PopUp on the Event of its close Button Clicked
function spanClick(){
    var modal = document.getElementById("popup");
    modal.style.display = "none";
}

//Close Menu PopUp on the Event of its close Button Clicked
function spanClick2(){
    var modal = document.getElementById("menu");
    modal.style.display = "none";
}


//Close the PopUp Window ( Usually Menu ) on the Event of Clicking Any Part of The Webpage
window.onclick = function(event) {
    var modal = document.getElementById("popup");
    var modal2 = document.getElementById("menu");
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Open The PopUp when One of the Cards is Clicked
function open_popup(key){
    var modal = document.getElementById("popup");
    modal.style.display = "block";
    if (key == "js_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        let dscr = document.getElementById("book_dscr")
        img.src = "img/Book1-1.jpg";
        buy.href = "https://www.amazon.com/gp/product/1491952024";
        dscr.innerHTML = "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.\n" +
            "\n" +
            "This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.";
    } else if (key == "react_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        img.src = "img/Book2-1.jpg";
        buy.href = "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/ref=d_pd_sbs_sccl_2_3/130-5751593-0029724?pd_rd_w=m9yJh&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=MN81G3T0MAX9FR9FAENV&pd_rd_wg=XsyuS&pd_rd_r=c3fff6b6-0e60-41bd-b038-2e16c81b5390&pd_rd_i=172004399X&psc=1";
        let dscr = document.getElementById("book_dscr")
        dscr.innerHTML = "In \"The Road to React\" you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature. However, there is more than only the fundamentals: The book dives into related topics (e.g. React with TypeScript, Testing, Performance Optimizations) and advanced feature implementations like client- and server-side searching. At the end of the book, you will have a fully working deployed React application.";
    } else if ( key == "go_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        img.src = "img/Book3-1.jpg";
        buy.href = "https://www.amazon.fr/dp/1491941952?psc=1&th=1&linkCode=gs2&tag=vhpoet0ca-21";
        let dscr = document.getElementById("book_dscr")
        dscr.innerHTML = "Livraison GRATUITE (0,01€ pour les livres) en point retrait (selon éligibilité des articles). Détails\n" +
            "Perfect for beginners familiar with programming basics, this hands-on guide provides an easy introduction to Go, the general-purpose programming language from Google. Author Caleb Doxsey covers the languageâ s core features with step-by-step instructions and exercises in each chapter to help you practice what you learn.\n" +
            "\n" +
            "Go is a general-purpose programming language with a clean syntax and advanced features, including concurrency. This book provides the one-on-one support you need to get started with the language, with short, easily digestible chapters that build on one another. By the time you finish this book, not only will you be able to write real Go programs, you'll be ready to tackle advanced techniques.";
    }
}