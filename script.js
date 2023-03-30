

const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIKey = "34805e3aed283afeb6d6aadfb61513cb"
let searchHistory = []
let searchInput = $("#search-input")
let searchForm = $("#search-form");
let SearchHistoryContainer = $("#history")

function fetchCoord(search){
     
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherAPIKey}`
       fetch(queryURL, {method: "GET"}).then(function(data){
        return data.json()
    }).then(function(response){
        if(!response [0]){
            alert("Location not found")
        } else {
            if(searchHistory.indexOf(search) !== -1) {
                return
            }
            searchHistory.push(search);
             localStorage.setItem("search-history", JSON.stringify(searchHistory))
             SearchHistoryContainer.html("")
             for(let i = 0; i < searchHistory.length; i++) {
                let btn = $("<button>")
                btn.attr("type", "button")
                btn.addClass("history-btn-history")

                btn.attr("data-search", searchHistory[i])
                btn.text(searchHistory[i])
                SearchHistoryContainer.append(btn)
             }
        }
        console.log(response);
    })
}

function submitSearchForm(event){

    event.preventDefault();
    let search = searchInput.val().trim()

    fetchCoord(search)
}

searchForm.on("submit", submitSearchForm);