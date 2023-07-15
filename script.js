const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


function jump () {
    setTimeout(() => {
        if(dino.classList != 'jump')
        {
        dino.classList.add('jump');

        setTimeout(() => {
        dino.classList.remove('jump');
        },300)
    
    }
})
}


document.addEventListener("keydown", function(e)
{
    jump();
})


let is_alive = secInterval( () => {
//dino position
let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//cactus position
let cactusleft = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
//detect collision
if(cactus<50 && cactusleft>0 && dinotop >=140)
{
    alert("game over");
}
},10);



    




