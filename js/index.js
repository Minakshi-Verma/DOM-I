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


//styling of nav items
const nav_a = document.querySelectorAll("a")
nav_a[0].textContent = "Services";
nav_a[1].textContent = "Product";
nav_a[2].textContent = "Vision";
nav_a[3].textContent = "Features";
nav_a[4].textContent = "About";
nav_a[5].textContent = "Contact";



//Utilize`.appendChild()` to add item to navigation

const new_a = document.createElement('a')
new_a.textContent = "lastChild"
document.querySelector("nav").appendChild(new_a)
new_a.style.color = "green"


//Utilize `.prepend()` to add an item to the navigation
const first_a = document.createElement('a')
first_a.textContent = "firstChild"
document.querySelector("nav").prepend(first_a)
first_a.style.color = "green"

//Change the color of the navigation text to be green.

nav_a.forEach(a=>{
  a.style.color = 'green'
})



// styling of main-content-cta



const cta_text = document.querySelector('h1');
cta_text.textContent = "DOM IS AWESOME";

const cta_button = document.querySelector('button');
cta_button.textContent = "Get Started";


let cta_logo = document.getElementById("cta-img");
cta_logo.setAttribute('src', siteContent["cta"]["img-src"]) 

//styling of main-content(text)/bottom-content(text)
 let textcontent_heading = document.querySelectorAll('h4') 
 
  textcontent_heading[0].textContent ="FEATURES"
  textcontent_heading[1].textContent="ABOUT"
  textcontent_heading[2].textContent="SERVICES"
  textcontent_heading[3].textContent="PRODUCT"
  textcontent_heading[4].textContent="VISION"

  let textcontent_para = document.querySelectorAll('p') 
 
  textcontent_para[0].textContent ="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  textcontent_para[1].textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  textcontent_para[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  textcontent_para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  textcontent_para[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//setting up main-content (image)
let main_image = document.getElementById("middle-img");
main_image.setAttribute('src', siteContent["main-content"]["middle-img-src"]) 


//Styling of contact
textcontent_heading[5].textContent="Contact"
textcontent_para[5].textContent = "123 Way 456 Street Somewhere, USA"
textcontent_para[6].textContent ="1 (888) 888-8888"
textcontent_para[7].textContent = "sales@greatidea.io"

// const contact_heading = document.querySelectorAll('.contact', 'h4')

// contact_heading.textContent = "Contact"

// const contact_para = document.querySelectorAll('.contact', 'p')

// contact_para[0].textContent = "123 Way 456 Street Somewhere, USA"
// contact_para[1].textContent = "1 (888) 888-8888"
// contact_para[2].textContent = "sales@greatidea.io"


//styling of footer
textcontent_para[8].textContent = "Copyright Great Idea! 2018"


 
