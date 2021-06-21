/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const logo_img = document.getElementById('nav-log-img')


const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    const img_togle = document.body.classList.contains(darkTheme) ? 'assets/img/main-logo.png' : 'assets/img/white-logo.png'

    logo_img.src = img_togle;
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .Parteners__content,
           .footer__content`, {
    origin: 'right',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'right'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})


//////lang/////

let home = document.getElementById("home");
let about = document.getElementById("about");
let services = document.getElementById("services");
let media = document.getElementById("media");
let home__title = document.getElementById("home__title");
let home__description = document.getElementById("home__description");
let home__button = document.getElementById("home__button");
let home__data = document.getElementById("home__data");
let home__img = document.getElementById("home__img");
let home_img = document.getElementById("home_img");
let hm = document.getElementById("hm");
let select = document.getElementById("languages");
let nav = document.getElementById("nav");
let section_title = document.getElementById("section-title");
let decoration__title = document.getElementById("decoration__title");
let decoration__title2 = document.getElementById("decoration__title2");
let decoration__title3 = document.getElementById("decoration__title3");
let section__button = document.getElementById("section__button")
let section__button2 = document.getElementById("section__button2")
let section__button3 = document.getElementById("section__button3")
let customer_block = document.getElementById("customer_block")
let customer = document.getElementById("customer")
let customer_description = document.getElementById("customer_description")
let customer_button= document.getElementById("customer_button")
let vooomers = document.getElementById("vooomers")
let vooomers_description = document.getElementById("vooomers_description")
let vooomers_button= document.getElementById("vooomers_button")
let vendors = document.getElementById("vendors")
let vendors_description = document.getElementById("vendors_description")
let vendors_button= document.getElementById("vendors_button")
let footer = document.getElementById("footer");
let stitle = document.getElementById("stitle");
let vapp = document.getElementById("vapp");
let sdev = document.getElementById("sdev");
let vmarket = document.getElementById("vmarket");
let social_title = document.getElementById("social_title");
let our_title = document.getElementById("our");
let Careers = document.getElementById("Careers");
let about_us = document.getElementById("about_us");
let media_footer = document.getElementById("media_footer");
let social_icons = document.getElementById("social_icons");

contact_us_foooter = document.getElementById("contact_us_foooter");

select.onclick= ()=>{
    setLanugage(select.value);
}


onload = ()=>{
    // setLanugage(localStorage.getItem("Lang"));
    
};


function setLanugage(getLanuage){
    if(getLanuage === "arabic"){
        select.select
        home.innerHTML = "الرئيسية";
        about.innerHTML = "من نحن";
        services.innerHTML = "الخدمات";
        media.innerHTML = "الاخبار";
        home__title.innerHTML = "ڤووومها ..."
        home__description.innerHTML = "رؤيتنا خلق حياة أبسط لعملائنا"
        home__button.innerHTML = "حمل التطبيق"
        section_title.innerHTML = "قائمة الخدمات";
        decoration__title.innerHTML = "التطوير البرمجي";
        decoration__title2.innerHTML = " ڤوووم ماركت";
        decoration__title3.innerHTML = " تطبيق فوووم";
        section__button.innerHTML = "أقرء اكثر";
        section__button2.innerHTML = "أقرء اكثر";
        section__button3.innerHTML = "أقرء اكثر";
        home__data.dir = "rtl";
        hm.dir= "rtl";
        nav.dir="rtl";
        home_img.src="assets/img/Bike (1).png";
        // customer_block.dir= "rtl";
        customer.innerHTML = "العملاء";
        customer.dir= "rtl";
        customer_description.innerHTML= "عملاء ڤوووم هم جميع من يستخدم تطبيق ڤوووم للتوصيل بحثا عن طرق جديدة لتبسيط الحياة اليومية";
        customer_button.innerHTML = "بنوصلك بأحتيجاتك"
        customer_button.dir="rtl";
        customer_description.dir="rtl";

          //
    vooomers.innerHTML = "الڤووومر";
    vooomers_description.innerHTML= "    الڤووومر هو وسيلتنا لتنفيذ رؤيتنا و الوصول بأسرع طريقه لعملاءنا وتبسيط حياتهم  الڤووومرز هم وسيلتنا لتنفيذ رؤيتنا في توفير حياة أبسط لعملائنا و توصيلهم باحتياجاتهم بأسرع طريقه ممكنه    ";
    vooomers_description.dir="rtl";
    vooomers.dir="rtl";
    vooomers_button.dir="rtl"
    vooomers_button.innerHTML = "تريد ان تكون فووومر؟";
    //
    vendors.innerHTML = "الشركاء";
    vendors_description.innerHTML= "أصحاب المشاريع الصغيرة و الكبيرة الذين يسعون لزيادة أرباحهم ويبحثون عن طرق أكثر تطور و أبسط للوصول لعملاءهم";
    vendors_description.dir="rtl";
    vendors.dir="rtl";
    vendors_button.dir="rtl"
    vendors_button.innerHTML = "تريد ان تصبج من الشركاء؟";
    footer.dir= "rtl";
    sdev.innerHTML = "التطوير البرمجي"
    vapp.innerHTML= "تطبيق فوووم"
    vmarket.innerHTML="ڤوووم ماركت "
    stitle.innerHTML = "الخدمات" 
    social_title.dir = "rtl";
    social_title.innerHTML = "التواصل الاجتماعي"
    our_title.innerHTML = "شركتنا"
    Careers.innerHTML = "وظائف";
    about_us.innerHTML = "من نحن";
    media_footer.innerHTML= "الاخبار";
    contact_us_foooter.innerHTML = "تواصل معنا"
    social_icons.dir= "rtl"
    }else if(getLanuage ==="english"){

        home.innerHTML = "Home";
        about.innerHTML = "About";
        services.innerHTML = "Services";
        media.innerHTML = "Media";
        home__title.innerHTML = "Vooom it"
        home__description.innerHTML = "To simplify every day of people’s lives"
        home__button.innerHTML = "Download App"
        section_title.innerHTML = "Our Services";
        decoration__title.innerHTML = "Software Development";
        decoration__title2.innerHTML = "Vooom Market";
        decoration__title3.innerHTML = "Vooom App";
        section__button.innerHTML = "Read More";
        section__button2.innerHTML = "Read More";
        section__button3.innerHTML = "Read More";
        home_img.src="assets/img/Bike (2).png";
        hm.dir="ltr";
        home__data.dir = "ltr";
        nav.dir="ltr";
        customer.innerHTML = "Customers";
        customer_description.innerHTML= "Our customers are everyone who uses Vooom s solutions, including customers who seek an easier pattern in every thing in their lives, such as delivery for a product or service without worrying about it being out of your area or unreachable..";
        customer_description.dir="ltr";
        customer.dir="ltr";
        customer_button.dir="ltr"
        customer_button.innerHTML = "We connect you with your needs & wants..";
    //
    vooomers.innerHTML = "Vooomers";
    vooomers_description.innerHTML= "Vooomers are the heroes who help us connect businesses with their customers and simplify lives in all ways whether they were bicycle owners or motorbike owners.";
    vooomers_description.dir="ltr";
    vooomers.dir="ltr";
    vooomers_button.dir="ltr"
    vooomers_button.innerHTML = "Want to become a vooomer ?";
    //
    vendors.innerHTML = "Customers";
    vendors_description.innerHTML= "Businesses whom are looking for a solution that connects them with their customers wherever they are & boosting their sales without the hassle of following couriers & paying extra expenses";
    vendors_description.dir="ltr";
    vendors.dir="ltr";
    vendors_button.dir="ltr"
    vendors_button.innerHTML = "Want to boost your revenues?";
    contact_us_foooter.innerHTML = "Contact Us"
    footer.dir= "ltr";
    sdev.innerHTML = "Software Development"
    vapp.innerHTML= "VOOOM Application"
    vmarket.innerHTML="VOOOM Market "
    stitle.innerHTML = "Our Services" 
    social_title.dir = "ltr";
    social_title.innerHTML = "Social"
    our_title.innerHTML = "Our Company"
    Careers.innerHTML = "Cariers";
    about_us.innerHTML = "About US";
    media_footer.innerHTML= "Media";
    contact_us_foooter.innerHTML = "Contact US"

    }

    }



