class Name {
    constructor(title,director,year){
        this.title=title
        this.director=director
        this.year=year
    }
}
const defaultmovies=[
    {
        title:"jurrasic world",
        director:"Colin Trevorrow",
        year:"2015"
    }
]

class UI{
    static addmovie=(movie)=>{
        const list=document.getElementById("movie-list")
        const row=document.createElement("tr")
        row.innerHTML=`<td>${movie.title}</td> <td>${movie.director}</td> <td>${movie.year}</td>`
         list.appendChild(row)

    }
    static displaymovies=()=>{
        defaultmovies.forEach(movie=> UI.addmovie(movie))
    }
}

document.querySelector("#movie-form").addEventListener("submit",addamovie)
    function addamovie(e)
    {
        e.preventDefault()
        //get form values
        const title=document.querySelector('#title').value
        const director=document.querySelector('#director').value
        const year=document.querySelector('#year').value

        // instantiate a new object
        const movie=new Name(title,director,year)

        //add object to UI
        UI.addmovie(movie)

        }
UI.displaymovies()
