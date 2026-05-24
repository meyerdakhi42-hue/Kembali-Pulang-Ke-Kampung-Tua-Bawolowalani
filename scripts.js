// Efek muncul saat scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const posisi = card.getBoundingClientRect().top;
        const layar = window.innerHeight;

        if(posisi < layar - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

});

// Efek reveal saat discroll

window.addEventListener("scroll", reveal);

function reveal(){

  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }

  }

}
