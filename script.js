/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


let tweetButton = document.querySelector("#postTweet")
console.log(tweetButton)

let tweetsContainer = document.querySelector("#post")

tweetButton.addEventListener("click", ()=>{
 let tweet = document.querySelector("#tweet")
 console.log(tweet.value)
  
  tweetsContainer.innerHTML += `
    <div id= "tweetBox">
      <h3>
        ${tweet.value}
      </h3>
    <div>`
})

let statsButton = document.querySelector("#stats")

statsButton.addEventListener("click", ()=>{
    sendStatsApiRequest()                            
})


async function sendStatsApiRequest (){
  let response = await fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "261e67db73msh3adbbcf37c26cacp1e31fdjsnfa58e306f289"
	}
})
  console.log(response)
  let stats = await response.json()
  console.log(stats)
  useCovidStatsApi (stats)
}

function useCovidStatsApi (stats){
  document.querySelector("#case").innerHTML+=`confirmed cases=${stats[0].confirmed}`
  document.querySelector("#recovering").innerHTML+=`recovered cases=${stats[0].recovered}`
  document.querySelector("#dead").innerHTML+=`death cases=${stats[0].deaths}`
}