$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar(){
    window.open ("https://www.netflix.com/watch/70248289?trackId=13752289&tctx=0%2C0%2Cfe00fb83a8c30cb46d4af6674e6d8b151c69ba6a%3A62670b32057423f7ea358a320e4b99e91c074624%2Cfe00fb83a8c30cb46d4af6674e6d8b151c69ba6a%3A62670b32057423f7ea358a320e4b99e91c074624%2Cunknown%2C%2C%2CtitlesResults");
   // window.location.href = "https://getbootstrap.com.br/docs/4.1/layout/grid/"; // aqui, abre na mesma janela
}