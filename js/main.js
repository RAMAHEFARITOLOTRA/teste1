let img = document.querySelectorAll('.image');
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click',(e)=>{
        let div = document.querySelector('#bigDiv');
        let bgimg = document.querySelector('.bigImg');
        bgimg.src=e.target.src;
        div.classList.toggle('moncc')
        console.log(e.target.src);
    },false)
    
}