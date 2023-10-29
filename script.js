/*menu color*/
const open = document.querySelectorAll('.open');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
console.log(open, headerHeight, header);

window.addEventListener('scroll', test);
function test() {
    open.forEach(function (item) {
        let dist = window.scrollY;
        if (dist <= 800) {
            item.style.background = '#faf9f7';
        } else {
            item.style.background = '#2A2325';
        }
    })
}



/*bg*/

const offer = document.querySelector('.img-wrapper');
const photo = ['img/cosm.jpg', 'img/laz.jpg', 'img/mass.jpg'];
const desc = [
            "эстетическая косметология", 
            "лазерная эпиляция", 
            "аппаратный массаж"]
const texts = [
    "безоперационная поддтяжка лица",
    "удаление волос навсегда",
    "минус 3 см в обьемах за один сеанс"];

let item = 0;
function sliders() {
    offer.style.backgroundImage = `url(${photo[item]})`;
    document.querySelector(".img-wrapper").src = photo[item];
    document.querySelector(".offer__text").innerHTML = desc[item];
    document.querySelector(".offer-cont").innerHTML = texts[item];
    item++;
    if (item > photo.length - 1) {
        item = 0;
    }
}
setInterval(sliders, 3000);

/*serv*/
const type = document.querySelectorAll('.type');
console.log(type);

type.forEach (function(item){
    item.addEventListener('mouseover', function() {
        removeFocus();
        item.classList.add('type-hover');
        item.style.transition = 'all 0.1s ease';
})

function removeFocus(){
    type.forEach(function(item){
        item.addEventListener('mouseout',function(){
            item.classList.remove('type-hover');
            item.style.transition = 'all 0.1s ease';
        })
    })
}
})




/*team*/
const next = document.querySelector('.team-link-next');
const back = document.querySelector('.team-link-back');
const photos = ['img/member1.jpg', 'img/member2.jpg', 'img/member3.jpg', 'img/member4.jpg'];
const forname = ["Роза Баграмян", "Лилия Баграмян", "Наре Баграмян", "Артур Баграмян"];
const post = ["руководитель студии", "массажист", "мастер эпиляции", "массажист"];
const qual = ["Массаж аппаратный, мастер супер класса, стаж 20 лет",
    "Массаж аппаратный, мастер супер класса, стаж 10 лет",
    "Массаж аппаратный, мастер супер класса, стаж 5 лет",
    "Массаж ручной, мастер супер класса, стаж 20 лет"];
let i = 0;

next.addEventListener("click", () => {
    event.preventDefault();
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector(".team-photo").src = photos[i];
    document.querySelector(".team-forname").innerHTML = forname[i];
    document.querySelector(".team-post").innerHTML = post[i];
    document.querySelector(".team-qual").innerHTML = qual[i];
});

back.addEventListener("click", () => {
    event.preventDefault();
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector(".team-photo").src = photos[i];
    document.querySelector(".team-forname").innerHTML = forname[i];
    document.querySelector(".team-post").innerHTML = post[i];
    document.querySelector(".team-qual").innerHTML = qual[i];
})


/*contact menu*/
const common = document.querySelector('.common');
const whats = document.querySelector('.whats');
const phone = document.querySelector('.phone');
const mail = document.querySelector('.mail');


common.addEventListener('click', function(e) {
    e.preventDefault();
    whats.classList.toggle('show');
    phone.classList.toggle('show');
    mail.classList.toggle('show');
})

/*chahge burger*/
let menuBtn = document.querySelector('.common-button');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
})


AOS.init();

/*search */
const searchInput = document.querySelector(".search-input");
const types = document.querySelectorAll("details");
console.log(searchInput, types);

searchInput.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    types.forEach(item => {
        item.querySelector('summary').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
    
})

/*choose */
const chooseBody  = document.querySelector('.choose-body');
const chooseFace = document.querySelector('.choose-face');
const listBody = document.querySelector('.list-body');
const listFace = document.querySelector('.list-face');
console.log(chooseBody, chooseFace, listBody, listFace);

chooseBody.addEventListener('click', function(){
    chooseBody.classList.add('active');
    chooseFace.classList.remove('active');
    listBody.style.display = 'block';
    listFace.style.display = 'none';
})

chooseFace.addEventListener('click', function(){
    chooseBody.classList.remove('active');
    chooseFace.classList.add('active');
    listFace.style.display ='block';
    listBody.style.display = 'none';
})