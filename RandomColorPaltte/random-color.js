const randomcolor = function(){

    
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomcolor());
console.log(randomcolor());
console.log(randomcolor());
console.log(randomcolor());
console.log(randomcolor());



document.getElementById('color-btn').addEventListener('click', function(){

    const box = document.getElementById('one-color')
    box.style.backgroundColor=randomcolor()

    box.innerText =randomcolor()

})
document.getElementById('color-btn').addEventListener('click', function(){

    const box = document.getElementById('two-color')
    box.style.backgroundColor=randomcolor()

    box.innerText =randomcolor()

})
document.getElementById('color-btn').addEventListener('click', function(){

    const box = document.getElementById('three-color')
    box.style.backgroundColor=randomcolor()

    box.innerText =randomcolor()

})
document.getElementById('color-btn').addEventListener('click', function(){

    const box = document.getElementById('four-color')
    box.style.backgroundColor=randomcolor()

    box.innerText =randomcolor()

})
document.getElementById('color-btn').addEventListener('click', function(){

    const box = document.getElementById('five-color')
    box.style.backgroundColor=randomcolor()

    box.innerText =randomcolor()

})
