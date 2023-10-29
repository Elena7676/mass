let tabs = document.getElementById('tabs');
let content = document.querySelectorAll('.content');

function changeClass(el){
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}

tabs.addEventListener('click', function(){
    let currTab = event.target.dataset.btn;
    changeClass(event.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('content-active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('content-active');
        }
    }
});



/*contact menu*/
const common = document.querySelector(".common");
const whats = document.querySelector(".whats");
const phone = document.querySelector(".phone");
const mail = document.querySelector(".mail");


common.addEventListener("click", function(e) {
    e.preventDefault();
    whats.classList.toggle("show");
    phone.classList.toggle("show");
    mail.classList.toggle("show");
});