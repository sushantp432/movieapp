// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movies_s= document.getElementById("movies");

async function searchMovies(){

try {
    // http://www.omdbapi.com/?i=tt3896198&apikey=4a995a56

    const Search =document.getElementById("Search").value;

    let res = await fetch(`http://www.omdbapi.com/?s=${Search}&apikey=4a995a56`)

    let data = await res.json();
    console.log(res);
    const movies = data.Search;

    return movies;

} catch (err) {
    console.log("err",err);
}

}

function appendMovies(data){

    movies_s.innerText = null;

    data.forEach(function(el) {
        let p = document.createElement("p")
        p.innerText=el.Title;
        p.addEventListener("click",(event) => {
            document.querySelector("#search").value = p.innerText;

            const url = `http://www.omdbapi.com/?apikey=4a995a56=${p.innerText}`;

                fetch(url)
                .then(function(res){
                    return res.json();
                })
                .then(function(res){
                    append(res);
                    console.log(res);

                })
                .catch(function(err){
                    console.log("err",err);
                })
        });
        movies_s.append(p)
        
    });
}

        async function main(){
            let data = await searchMovies();

            if(data == undefined){
                return false;
            }
            appendMovies(data)
        }
        let id;
        function debounce(func,delay){
            if(id){
                clearTimeout(id);
            }

            id= setTimeout(function(){
                func();
            },delay);
        }

        function append(data){
            document.querySelector("#sushant").innerHTML=null;
                // console.log(data);
            let box = document.createElement("div");
            box.setAttribute("id","box")

            let image = document.createElement("img");
            image.src = data.Poster;

            let title = document.createElement("p");
            title.innerText = data.Title;

            box.append(image,title)

            document.querySelector("#sushant").append(box);
        }