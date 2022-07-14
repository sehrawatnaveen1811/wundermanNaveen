const pivot1 = document.getElementsByClassName('pivot1')[0];
const pivot2 = document.getElementsByClassName('pivot2')[0];
const pivot3 = document.getElementsByClassName('pivot3')[0];

const scrollElement = document.getElementsByClassName('scrollElement')[0];

document.getElementById('pivot1').addEventListener('click', function(){
    if(this.checked) {
        pivot1.classList.remove('hide');
        pivot2.classList.add('hide');
        pivot3.classList.add('hide');
    }
});

document.getElementById('pivot2').addEventListener('click', function(){
    if(this.checked) {
        pivot1.classList.add('hide');
        pivot2.classList.remove('hide');
        pivot3.classList.add('hide');
    }
});

document.getElementById('pivot3').addEventListener('click', function(){
    if(this.checked) {
        pivot1.classList.add('hide');
        pivot2.classList.add('hide');
        pivot3.classList.remove('hide');
    }
});


document.getElementsByClassName('scrollElement')[0].addEventListener('click', function() {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


document.addEventListener('scroll', function(){
    if(window.scrollY > 150) {
        scrollElement.classList.remove('hide');
    } else {
        scrollElement.classList.add('hide');
    }
});
