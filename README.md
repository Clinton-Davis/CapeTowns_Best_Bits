# CapeTowns_Best_Bits

This is my MileStone Project for Code Ins

### Interactive Frontend Development - _Code institute_

---

Cape Towns Best bits is a webpage that helps the travels that
a) Cant afford to do all the tours
b) Dont like doing the tours and want to meet the locals and do everything in there own time.
This was highlighted in the User stories.

My clients brief was that thwy wanted an **_Young and Viderant_** website, with lists of the top 10 Places to see, thing to do and Best local quazine, with interative maps to get where they want to do.
The overall goal is to get more people to go to the places that have been mentioned so the client may charge to be on the list.

---

## Demo

A live demo can found **_[Here]()_**

---

## UX

### User Stories

1. When I go on holiday I really love doing things in our own time and not have to be on a scedule all the time, Like when I'm on holiday with a Tour group, Dont get me wrong, Tours are fun but just not for me. The only problem is I never sure whats the best thigs to do, or where they are, It would be nice and simple to just open a webpage and have a list of the best things.
2. Tours are so expensive I have so much more fun and save a fortune doing all the fun stuff on my own, Always do what the local love to do,

### Scope

What problem does this wegpage solve?
One of the biggest problem when people go away is that there is so much to do and see, with so much information about so many things that is becomes overweling, with this webPage We have widdleed it down to the to 30 best thing to do, 10 Sights seeing 10 adventure and 10 best places for local quine. This makes its easy for people to deside and spent more time being on hilday and lesss time reading comments on social media.
Goals and Objectives:
The Goal of te webpage is to get more and more people to the busniness that are on the list, that busniess will pay to be on the list. We has started with only 10 of each but there is room to do more in the future as we get bigger and more popluar.
The Target demegraphic is quite large as where the List of things to do and see are very bard, all ages and fitnes profiles have alot to choose from.
The platform is easy to use and informative with little delay on getting the information they need.

### Structure.

<details>
<summary>Main Page (index.html)</summary><br> 
The main page the first thing you see, there are 3 links with Sights, adventure and foodies, they take you to a list with the items on them that you can choose to see or do.
In the Selection Colums is the listed clicking on the lists with bring up the google maps api that that shows them where about in the city or sourding ears the place is, its details and wed page link and local phone number.
It the user wnat to go to get directions, Google maps finds the users location and shows them the root on the map and writen step by step directions.
</details>
<br>

### Skeletons

#### Wireframe Mockups

- [Main Page]()

### Surface

-

---

## Technologies
- [Weather_Api](weather_api)
- [Google Maps Api](Google maps)
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [CSSMatric](https://cssmatic.com/)
- [Google Fonts](https://fonts.google.com/)
- [TinyPNG](https://tinypng.com/)
- [Google Maps_Api](https://www.google.com/maps)
- [Visual Studio Code](https://code.visualstudio.com/)
- [W3Schools](https://www.w3schools.com/)
- [Validator](https://validator.w3.org/nu/)
- [YouTube](https://www.youtube.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Openweathermap_Api](https://openweathermap.org/api)
- [Emailjs_Api](https://www.emailjs.com/)
- [Gmail](https://www.gmail.com/)

---

## Features

Up to date local Weather, and handy information, ie If the are clouds, what time the Sunrise and Sunset are at times, Humidity and Air Pressure.
Give a list of intresting places where for travelers to see do or eat at
Gives a location on the map, and if they would like to go to a place They just have to click on the 'Get direction botton' and the app with find there current location and dive them spet by step instruction on how to get there
There is a contaact page where people can email us a message or comment and they will recieve a email in replay accnolanging tht we have recieved the email we will be in contact.
about modal with deatails on how to use the page

### Features Left to Implement

Step by stepdirections to be emailed to user.
I would love to have another list Selection at come out after sunset that has a list of all the night clubs and events happering in cape town.
I would like to have the back Picture change with night and Day times. ie: when its night time the background image turns to a night time shot and headings change accordingly.
Would like to implement a users local time to be displayed, through HTML Geolocaion. 
I would like to have all the details of the place that on the list to be on a servr to the website can get the ifo via JSON get and not have the list on the website memory.

## Testing

The testing was done on a step by step basis. As I implemented a new part of the site I tested if on the live server.
I tested all the HTML with w3 Validator
and did the same with Css w3 Validator

after all the JavaScript was compleated, I would go through the code and make sure if was working as smothey as possable.
Once I have put all the element in there places and working I went through all the Items and made sure they where all working correctly.
I test the speed to see how fast if loaded from uncashed browers and cached browers, with the speed availble on Chrome develpers Tools. I was able to turn down the speed to: Slow 3G / Fast 3G / Online.
Wish each speed I test performance on Img loading, HTML and CSS time, and  JavaScript and JQary CDN. Cached and uncached memory.
Then I started the the Media Quary Test and all the Presets in Chrome and FireFox Develpment tools. Once I fixed all the Bugs I send It to the SLack Comunity for Feedback.  


<details>
<summary>List of Moblie devices I've tested on</summary> 
<ul>
<li>iPhone 4 / 6 / 8</li>
<li>Samsung J5 / A5</li>
<li>Sony Xperia 10</li>
<li>Mi A3</li>
<li>iPad</li>
</details>
<br>


### Bugs

I was having a problem with how to keep the Local list of places of a separate page and Still have the google maps_Api   connect with the data, 
I solved this by having the data stored in a JSON like file on the same page as the Google_api code and have data Id' ed can be called with an onClick function.
I had a problem with the JQ toggle con the "hide" Class, 
To solve this I used the (.css ("display" "none");)
The footer was running up and down the page when I was fading in and fading out the Selection element, 
I solved this but placing a "wrapper" div with and height auto and min-height of 80vh.
Had an issue with footer jumping up to the lowest part of the page. 
To solve this, I added Display Flex to Body and added margin-top: auto / to footer.
I had an issue with having three columns and only having one up at a time, it what if you selected any of the other columns the 2 would be open at one time. 
To solve this, I gave them each their IDs and made the other selection option unavailable to use if one was open. You have to close one to open another.
When you clicked on the Wind Icon, the MapsContainer Div from the Map Section would open up. I had used the tag <li> as the 'click' element on the selection, without realizing that every <li> would be clickable. 
I solved this by giving the li element in question there own class and made the class clickable.

I had an issue linking the HTML Geolocation Lng / Lats to the google maps directions service. 
To solve this I had to put the navigator.geolocation.getCurrentPosition inside the getDirectionsAndLocations function.
The issue I had with the Loading... trying to get it to disappear when the Loading had finished. 
I first used the if status === 'Ok' statement in the google-API, but that would happen first and make it disappear before the maps Directions had fully loaded. I.e., The status would "Ok" long before the page had loaded on a slower network. 
How I solved this was to add a JavaScript MutationObserver on the directions panel div to look for a change of attributes, If there is a change, it triggers the JQuary 'Display' 'None' on the Loading... div.
The next bug I had was that if I paged back after using the Map and wanted to use the Google Maps_Api again, the MutationObserver would not reset and look for the attribute again. 
I Solved this but using the 'Back-To-Main' Bnt and refreshes the page every time you use the Maps_Api.
Because I have to refresh the page every time, I was having issues with the time it was taking to reload, with all the high res images and the amount of them. I solved this but using [TinyPNG] and making the image size a lot smaller and keeping the quality at the same time.
I had a bug with the BackGround on the Main Heading Slowing down the refresh rate of the page. Solved this with a piece of code I found at [CSS-Tricks] With a Script tag in the Head 
<script>document.documentElement.className += " js-loading";
		window.addEventListener("load", showPage, false);
	    function showPage() {
		document.documentElement.className = document.documentElement.className.replace("js-loading","");</script>



## Deployment

https://www.netlify.com/
<details>
<summary>To deploy on GitHub pages:</summary>
<br>
<ol>
<li> </li>

</ol>
</details>
<br>
<details>
<summary>Clone to a work station</summary>
<br>
<ol>
<ol>
</details>

---

### Credits:

I would like to Thank the slack community for a lot of very helpfull tips and code.
Kevin Powell for know how and code
Dev Ed for know how and code

##### Design:

The conept and design is by Clinton Davis (myself)

##### Content:

##### Media:

- [Shutterstock](https://www.shutterstock.com/home)
- [Unsplash](https://unsplash.com/)
- and have [CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.

### Acknowledgements

For the use of code and knowledge.

- [YouTube - Kevin Powell](https://www.youtube.com/user/KepowOb) for code snippets and [Sticky footer](https://bit.ly/2NAFAgW) advice / [Kevin Powell - Responsice Desing (Scrimba)](https://scrimba.com/) /
Google Maps Help: https://developers.google.com/maps/documentation/javascript/geolocation
- [CSS-Tricks](https://css-tricks.com/) website for help with [BackGround Image, Making-animations-wait, Ipad Resposive work arounds](https://css-tricks.com/perfect-full-page-background-image/) / (https://css-tricks.com/making-animations-wait/) 
- [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating Modal,](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) / General research on HTML CSS and JavaScript.
- [CSSMatric](https://cssmatic.com/) for [Box Shadow Generator ](https://cssmatic.com/box-shadow)
- [GitHub](https://github.com/) for documentation on how to [Deploy GitPages](https://bit.ly/2Kc5u8N) and [How to Clone Repository](https://bit.ly/32Emdbc).
- [Google Fonts](https://fonts.google.com/) for fonts.
- [Slack](https://slack.com/intl/en-ie/) community for Testing / Encouragement / Code Snippets and pointers.
