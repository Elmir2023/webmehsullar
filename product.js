const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const a3 = document.querySelector('.a3')
const a4 = document.querySelector('.a4')
const a5 = document.querySelector('.a5')

const items = document.querySelectorAll('.item')

a1.addEventListener('click' , e=>{
    a1.classList.add('active_a')

    a2.classList.remove('active_a')
    a3.classList.remove('active_a')
    a4.classList.remove('active_a')
    a5.classList.remove('active_a')
})
a2.addEventListener('click' , e=>{
    a2.classList.add('active_a')

    a1.classList.remove('active_a')
    a3.classList.remove('active_a')
    a4.classList.remove('active_a')
    a5.classList.remove('active_a')
})
a3.addEventListener('click' , e=>{
    a3.classList.add('active_a')

    a1.classList.remove('active_a')
    a2.classList.remove('active_a')
    a4.classList.remove('active_a')
    a5.classList.remove('active_a')
})
a4.addEventListener('click' , e=>{
    a4.classList.add('active_a')

    a1.classList.remove('active_a')
    a2.classList.remove('active_a')
    a3.classList.remove('active_a')
    a5.classList.remove('active_a')
})
a5.addEventListener('click' , e=>{
    a5.classList.add('active_a')

    a1.classList.remove('active_a')
    a2.classList.remove('active_a')
    a3.classList.remove('active_a')
    a4.classList.remove('active_a')
})

items.forEach(item =>{
    item.addEventListener('click' ,e=>{
        const template = './new.html'
        window.location.assign(template)
    })
})