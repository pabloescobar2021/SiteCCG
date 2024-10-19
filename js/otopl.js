window.addEventListener('load', function(event){

    const o2 = document.querySelectorAll('.o2');
    o2.forEach((el, index) =>{
        this.setTimeout(() =>{
            el.classList.add('loaded');
        }, index * 500);
    })

})