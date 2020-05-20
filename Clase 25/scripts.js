/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.getElementById('title')
const name = document.getElementById('name')

// title.classList.add('main-title', 'other-title')
// title.classList.remove('title')
/*if (title.classList.contains('title')) console.log(`Tiene la clase title`)
else console.log(`No tiene la clase title`)*/
// title.classList.replace('title', 'main-title')

console.log(title.innerHTML)
console.log(title.textContent)
console.log(name.value.length)

/*console.log(title)
console.log(name)*/


// console.log(name.getAttribute('type'))
// console.log(name.setAttribute('type', 'date'))




