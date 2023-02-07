

const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIKey = "da1f35a536d3310cb534c6673cf19753"
let searchInput = $("#search-input")
let searchForm = $("#search-form") 

function fetchCoord(){
     
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q=${search}&limit=5appid=${weatherAPIKey}`
       fetch(queryURL).then(function(data){
        return data.json()
    }).then(function(response){
        console.log(response);
    })
}

function submitSearchForm(event){

    event.preventDefault();
    let search = searchInput.val().trim()

    fetchCoord(search)
}