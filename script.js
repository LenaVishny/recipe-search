const ingredients = document.querySelector ('#search');
const recipes = document.querySelectorAll('.flip-card');

ingredients.addEventListener ('keyup', function(event){
    const word = event.target.value.toLowerCase();
    recipes.forEach (item => {
        item.querySelector('ul').textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})

gsap.from(".flip-card", {opacity: 0, duration:3, delay: 1, rotation: 360})