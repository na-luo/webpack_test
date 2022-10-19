import x from './x.js'
import jpg from './assets/1.jpg'
console.log(x);

const div = document.querySelector('.remo')
div.innerHTML = `
    <img src ="${jpg}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
        console.log(module);
    })
}
div.appendChild(button)