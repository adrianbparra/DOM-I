const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/////////navlink/////////

const links = document.querySelectorAll("a");


//console.log(links);
links.forEach((link,index) => {
  let navArr = Object.values(siteContent["nav"]);
  link.textContent = navArr[index];
  link.style.color = "green";
})

////////////ADDING A NEW NAV A ////////////
let home = document.createElement("a");
home.href = "#";
home.textContent = "Home";

document.querySelector("nav").prepend(home);

let getStarted = document.createElement("a");
getStarted.href = "#";
getStarted.textContent = "Get Started"
document.querySelector("nav").appendChild(getStarted);

console.log(links, "links");

///////////CTA//////////////

const cta = document.querySelector(".cta-text");
//console.log(cta);

cta.querySelector("h1").textContent = siteContent["cta"]["h1"];
cta.querySelector("button").textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
//console.log(ctaImg);

///////MAIN CONTENT/////

const mainContent = document.querySelectorAll(".text-content");
const mainImg = document.querySelector(".middle-img");
//  console.log(mainContent);

mainContent[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
mainContent[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];

mainContent[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
mainContent[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

mainImg.src = siteContent["main-content"]["middle-img-src"];

mainContent[2].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
mainContent[2].querySelector("p").textContent = siteContent["main-content"]["services-content"];

mainContent[3].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
mainContent[3].querySelector("p").textContent = siteContent["main-content"]["product-content"];

mainContent[4].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
mainContent[4].querySelector("p").textContent = siteContent["main-content"]["vision-content"];


/////////CONTACT/////////

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].textContent = siteContent["contact"]["address"];
contactAddress[1].textContent = siteContent["contact"]["phone"];
contactAddress[2].textContent = siteContent["contact"]["email"]

console.log(contactTitle);

///////////FOOTER////////////
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];