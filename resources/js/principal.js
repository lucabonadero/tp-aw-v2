import library from "./books.js"

const contenedor = document.getElementById("catalogo-libros")

let htmlRenderizar = ``;

library.books.forEach((book)=>{
    htmlRenderizar += `
    <figure>
        <img src=${book.image} alt="book">
        <figcaption>${book.title}</figcaption>
        <p>Author: ${book.author}</p>
        <p>State: ${book.state}</p>
     </figure>
  `
})
contenedor.innerHTML = htmlRenderizar

fetch("./books.json").then((datos)=>{
    return datos.json()

}).then((datos)=>{
    console.log(datos)
})