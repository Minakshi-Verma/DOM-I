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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//styling of nav items

const nav_a = document.querySelectorAll("a")
nav_a[0].textContent = (siteContent["nav"]["nav-item-1"]);
nav_a[1].textContent = (siteContent["nav"]["nav-item-2"]);
nav_a[2].textContent = (siteContent["nav"]["nav-item-3"]);
nav_a[3].textContent = (siteContent["nav"]["nav-item-4"]);
nav_a[4].textContent = (siteContent["nav"]["nav-item-5"]);
nav_a[5].textContent = (siteContent["nav"]["nav-item-6"]);


// nav_a.forEach(item,index,array=>{
//   item(`nav-item- ${index += 1}`)
// })

//Utilize`.appendChild()` to add item to navigation

const new_a = document.createElement('a')
new_a.textContent = "LastChild"
new_a.setAttribute('href', '#');
document.querySelector("nav").appendChild(new_a)
new_a.style.color = "green"


//Utilize `.prepend()` to add an item to the navigation

const first_a = document.createElement('a')
first_a.textContent = "FirstChild"
first_a.setAttribute('href', '#');
document.querySelector("nav").prepend(first_a)
first_a.style.color = "green"

//Change the color of the navigation text to be green.

nav_a.forEach(a => a.style.color = 'green')


// styling of main-content(cta_text, cta_button, cta_logo)

const cta_text = document.querySelector('h1');
cta_text.textContent = (siteContent["cta"]["h1"]);
cta_text.style.color = "darkblue"

const cta_button = document.querySelector('button');
cta_button.textContent = (siteContent["cta"]["button"]);;
cta_button.style.backgroundColor = "lightgreen"

let cta_logo = document.getElementById("cta-img");
cta_logo.setAttribute('src', siteContent["cta"]["img-src"]) 

//styling of main-content(text)/bottom-content(text)

 let textcontent_heading = document.querySelectorAll('h4') 
 
  textcontent_heading[0].textContent = (siteContent["main-content"]["features-h4"]);
  textcontent_heading[0].style.color = "darkblue"

  textcontent_heading[1].textContent=(siteContent["main-content"]["about-h4"]);
  textcontent_heading[1].style.color ="darkblue"

  textcontent_heading[2].textContent=(siteContent["main-content"]["services-h4"]);
  textcontent_heading[2].style.color ="darkblue"

  textcontent_heading[3].textContent=(siteContent["main-content"]["product-h4"]);
  textcontent_heading[3].style.color ="darkblue"

  textcontent_heading[4].textContent=(siteContent["main-content"]["vision-h4"]);
  textcontent_heading[4].style.color ="darkblue"


  let textcontent_para = document.querySelectorAll('p') 
 
  textcontent_para[0].textContent = (siteContent["main-content"]["features-content"]);
  textcontent_para[1].textContent = (siteContent["main-content"]["vision-content"]);
  textcontent_para[2].textContent = (siteContent["main-content"]["vision-content"]);
  textcontent_para[3].textContent = (siteContent["main-content"]["vision-content"]);
  textcontent_para[4].textContent = (siteContent["main-content"]["vision-content"]);

//setting up main-content (image)

let main_image = document.getElementById("middle-img");
main_image.setAttribute('src', siteContent["main-content"]["middle-img-src"]) 


//Styling of contact

textcontent_heading[5].textContent=(siteContent["contact"]["contact-h4"])
textcontent_heading[5].style.color ="darkblue"

textcontent_para[5].textContent = (siteContent["contact"]["address"])
textcontent_para[6].textContent =(siteContent["contact"]["phone"])
textcontent_para[7].textContent = (siteContent["contact"]["email"])

//styling of footer

textcontent_para[8].textContent = (siteContent["footer"]["copyright"])
textcontent_para[8].style.fontSize ="0.8rem"


 
