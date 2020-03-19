# Cape Towns Best Bits

## Interactive Frontend Development - _Code institute_

---

> **_Cape Towns Best bits_** _is a Do It Your Self_ webpage that streamlines the process of finding listed despnations and things to do in Cape Town without having to go through a tour company. 

---  
## Demo

A live demo can found **_[Here](https://musing-tesla-381a66.netlify.com)_**

---

![mulityscreenImg](https://github.com/Clinton-Davis/CapeTowns_Best_Bits/blob/master/sundries/smartmockups_CTBB.png)

---

<a name="toc"></a>
## Table of Content
1. [**UX**](#ux)
2. [**Scope**](#scope)
3. [**Structure**](#structure)
4. [**Wireframe Mockups**](#wireframes)
5. [**Surface**](#surface)
6. [**Technologies**](#technologies)
7. [**Features**](#features)
8. [**Testing**](#testing)
9. [**Bugs**](#bugs)
10. [**Deployment**](#deployment)
11. [**Credits**](#credits)
12. [**Acknowledgements**](#acknowledgements)

<a name="ux"></a>
## UX

My clients wanted an "_Eyechacking, Young and Viderant_", website with a _family friendly feel_. 
Moblie friendly, and easy to use with functional navigation. <br>
Their Goals are:<br>
*  To get more users traffic through the site.<br>
*  To get more users to the listed destination. <br>
*  To get more sponsored destinations


We broke up the list into three categories. Sights, adventure, Foodies. <br>
**Sights:**  or Sightseeing is a list of sponsored or most Rated Sightsee destination. For all ages.<br>
**Adventure:** Is for the more active user, some of the things on the list or very adventurous, and gets the hard beating, not for everyone, more amid at adults and teenagers.<br>
**Foodies:** Is a list of the top-rated and sponsored restaurants, from local to Michelin star. For all ages.<br>
All destinations have integrated Google Maps functionality for users to find there way to there destinations with ease. We use the current user position and google Maps API to send a step by step list of directions.

### User Stories

> 1. As a user, when I go on holiday I really love doing things in our own time and not have to be on other peoples schedules, The problem is I'm never sure whats the best things to do, It would be nice just to open a webpage and have a list of the best things.
> 2. As a user, I want to be able to have one place where I can find a place, get directions and contact them if needed.

<a name="scope"></a>
## Scope

Biggest problems, when people go away, is that there is much to do and so much information about so many things that they get overwhelmed, This website streamlines it down to the top 30 best things to do, divided into three categories. Cape Towns Best Bits makes its easy for people to deside. The next thing the user needs is a map or directions on how to get there. This is where integrated navigation comes in. This lets the user spent more time being on holiday and less time trying to find a destination and directions.
The Target demographic is quite large as where the list of things to do and see are very bard, all ages and fitness profiles have a lot to choose.
The platform is easy to use and informative with little delay in getting the information they need.

<a name="structure"></a>
## Structure.

#### **_Main Page_**

 - **-Navigation Bar-**
   - Table Mountain Icon on the left that is clickable and sends the user to the main page.<br>
   - Up to date Weather for Cape Town, With "_feels like_" Temps and current wind speed in KPH and direction.<br>
   - About link - opens up a Modal with information for the user<br>
   - Contact link - Open the Contact page with the email form. 
 -  **-Main Heading-**
   -  The main Heading Front and centre.
 -  **-Three Category Selection Buttons-**
   -  Sights / Adventure / Foodie.
  -  Click the button, and the main page heading fades away to reveal lists of destinations. On the right is an image for each place. 

   
####**_Contact Page_**  

  - **-Email Form-**

    - The form that asks the user to leave a comment and email address to we can get back to them as soon a possible. This sends them an automated response.

<a name="wireframes"></a>

#### Wireframe Mockups

- [Main Page](https://github.com/Clinton-Davis/CapeTowns_Best_Bits/blob/master/sundries/CapeTownBestBitsWireFrames.png)<br>
The page looks the same on all devices. With the wider screens, the background Image fits the full screen, and the web content centred.
<a name="surface"></a>

## Surface

The Navigation Bar at the top is transparent with a bottom box-shadow to highlight that it is a Nav section. 
The Background image of Cape Town we used is has a lovely warmth to it. It shows all the significant parts that makeup Cape Town, The City, the mountains and the sea. This image is also the background for the contact page.
I went for a big font from [Google Fonts](https://fonts.google.com/), called *"Banger"* as the primary font. I chose this font because it looks friendly fun without being overbearing. The secondary font is *"Montserrat"*<br>
It is clean and clear, and they complement each other.

The moving backgrounds in the main page heads to make it more eye checking, The Main Heading has the blue sky, the Best Bits has one of Cape Town spectacular sunsets, the DIY  heading has the two oceans.
The Westen province rugby team inspires the choice of colour for the three main option buttons; witch colours are Blue and white.

---
<a name="technologies"></a>
## Technologies

- [Visual Studio Code](https://code.visualstudio.com/)
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [jQuery](https://code.jquery.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Weather_Api](https://openweathermap.org/api)
- [Google Maps Api](https://cloud.google.com/maps-platform)
- [Website Responsive Testing](Toolresponsivetesttool.com)
- [Validator](https://validator.w3.org/nu/)
- [Emailjs_Api](https://www.emailjs.com/)
- [Gmail](https://www.gmail.com/)
- [TinyPNG](https://tinypng.com/)
- [GTmetrix](gtmetrix.com)
- [Netlify](https://www.netlify.com/)
- [Google Fonts](https://fonts.google.com/)
- [CSSMatric](https://cssmatic.com/)

---
<a name="features"></a>
## Features

- [Weather_Api](https://openweathermap.org/api) Up to date local Weather, including wind speed and directions. Cape Town is known to be the Cape of Storms and can have fierce wind and Weather, so having this makes the decision to be indoor or outs easier. More details are available with when the Wind Icon or Temperature is clicked. i.e., Sunrise and Sunset times / Humidity /Air Pressure if Clouds or rain is forecast.<br>
- Each destination is linked to the [Google Maps Api](https://cloud.google.com/maps-platform) using the google place id, and we can get the LNG and LAT / local phone number (if any) and website (If any).
- [HTML5](https://en.wikipedia.org/wiki/HTML) Geolocation API let us get the current position of the user using the app from a browser. With permission for the user to do so.
- When the user clicks on the 'Get Directions' button after selecting the desired destination. The [Google Maps Api](https://cloud.google.com/maps-platform) triggers the [HTML5](https://en.wikipedia.org/wiki/HTML) Geolocation API and triggers the custom loading.. animation. When the data returned to the user, it populated the Map Information section.
- Giving the user *step by step instructions*
- Contact page with email comments or questions.
- AutoReplay email.

### Features Left to Implement

- Step by step directions to be emailed to the user.
I would like to implement another *Night Club* list that appears after sunset. A list of all the night clubs in Cape Town.
- I would like to implement a change in the Background Picture with night and Day. i.e., when its night, change the image to a nighttime image and headings change accordingly.
- Would like to implement users local time to be displayed, through HTML Geolocation. 
- I would like to have the data for all the listing to be on an external server and reach them with a JSON call and not have them internally.

<a name="testing"></a>
## Testing
- The first phase of testing is a step by step basis. As I implemented a new code I tested it on [Chrome Developer] (https://developers.google.com/web/tools/chrome-devtools) I used the extension called [Live Server](https://github.com/ritwickdey/vscode-live-server)
 on [Visual Studio Code](https://code.visualstudio.com/). 
-  I tested HTML with w3 Validator. Passed
-  I tested CSS with w3 Validator. I got a few warming and errors with CSS Varables<br>

	`--headFont: "Bangers", sans-serif;`<br>
	`--secFont: "Montserrat", sans-serif;`<br>
	`--white: rgb(219, 217, 217);`<br>

	Thiese errors are an on- going issue with w3, They are valid, but 	not reconised by W3. <br>[CSS variables ("custom properties"), a 	widely supported and crucial feature. ](https://github.com/w3c/css-	validator/issues/111)<br>The reason I used them is: If I want to 	change the font s or colours in the future, I would have to change 	the Varables in question for the hole site. <br>

- After all the JavaScript was compleated, I ran through the code to make sure it was working and smoothly as possible.
- Once all the elements in their places and working, I went through all the destinations one by one made sure all the  ID's and Google Maps API were all working correctly.
- I test the refresh speed to see how fast it loaded from cached and uncached browsers. 
- I used the speed variables available on Chrome developers Tools, Slow 3G / Fast 3G / Online. 

With each speed, I test performance on Image loading time, HTML and CSS  loading time, JavaScript and JQaury CDN. Cached and uncached memory.<br>
- I used [GTmetrix](gtmetrix.com) to test how fast the site loaded [Report](https://github.com/Clinton-Davis/CapeTowns_Best_Bits/blob/master/sundries/GTmetrix-report-.pdf)<br>
-  I send It to the SLack Comunity for Feedback. 
-  Then I started the Media Query Test and all the Presets in Chrome and Firefox Development tools. 
-  Below is a list of devices I tested on with [Website Responsive Testing] (Toolresponsivetesttool.com).

 <details>
<summary>Moblies</summary> 
<ul>
<li>iPhone 8/8Plus/X/XR/XS/XSMax</li>
<li>iPhone 6s Plus/7 Plus</li>
<li>Apple iPhone 6/6s/7</li>
<li>Apple iPhone 5/5s</li>
<li>Apple iPhone 3/4/4s</li>
<li>Nexus 6P/5X</li>
<li>Google Pixe</li>
<li>Google Pixel 2/XL</li>
<li>Samsung Galaxy Note 5</li>
<li>Samsung Galaxy S S2/S3/S4/S5/S6/S7/S8/S8+/S9/S9+</li>
<li>Samsung Galaxy Nexus</li>
<li>Samsung Galaxy Note 2/3/4/8</li>
<li>LG G3/G4/G5</li>
<li>LG Optimus G</li>
<li>LG Nexus 5</li>
<li>LG Nexus 4</li>
<li>Pantech Vega n6</li>
<li>Lenovo K900</li></li>
<li>Motorola Nexus 6</li>
<li>One Plus 3</li>
<li>Nexus 7 (2013)</li>
<li>Nexus 9</li>
<li>ZTE Grand S</li>
<li>HTC One</li>
<li>HTC 8X</li>
<li>HTC Evo 3D</li>
<li>Sony Xperia P/S/Z/Z3</li>
<li>Xiaomi Redmi Note 5</li>
<li>Xiaomi Mi 3/4</li>
<li>Blackberry Z10/Z30/Q10/CLASSIC/PASSPORT/LEAP</li>
<li>Blackberry Torch 9800</li>
<li>Microsoft Lumia 620/830/900/920/925/1020/1520</li>
</details>
 <details>
<summary>Tablet</summary> 
<ul>
<li>Apple iPad Pro/Pro9.7/1/2/mini</li>
<li>Samsung Galaxy Tab 3 10"/Tab 2 10"/Tab (8.9")/Tab 2 (7")</li>
<li>Samsung Nexus 10</li>
<li>HTC Nexus 9</li>
<li>Asus Nexus 7 (v1)/(v2)</li>
<li>LG G Pad 8.3</li>
<li>Amazon Kindle Fire/HD7/HD8.9</li>
<li>Microsoft Surface Pro 2/3</li>
<li>Microsoft Surface</li>
<li>Blackberry Playbook</li>
</details>
  <details>
<summary>Desktops</summary> 
<ul>

<li>Desktop/Laptop</li>
<li>1024 x 768</li>
<li>1280 x 800</li>
<li>1366 x 768</li>
<li>1440 x 900</li>
<li>1680 x 1050</li>
<li>1920 x 1080</li>
<li>1920 x 1200</li>
<li>2560 x 1440</li>
<li>3840 x 2160</li>
<li>4096 x 2304</li>
<li>5120 x 2880</li>
</details>




<a name="bugs"></a>
## Bugs

-  I was having a problem with how to keep the destination lists separate data page and Still have the [Google Maps Api](https://cloud.google.com/maps-platform) connect with it.
>   -  I solved this by having the data stored in a JSON like file in the same file as the [Google Maps Api](https://cloud.google.com/maps-platform) code and have data called with the.<br>
  `Javascript`<br>
`function locationFinder(locationFinder_id)`
`{iD = selectionJSON[locationFinder_id].Id;`
      ` info = selectionJSON[locationFinder_id].info};
`


     
* I had an issue with the jQuary toggle the "hide" Class, 
>   -  To solve this, I used the `.css ("display" "none");`
* The footer was running up and down the page when I was fading in and out the Selection element. 
*
>   -  I solved this but placing `body {Display: Flex};` to the body of the page in CSS. Then a "wrapper" div with its <br>
 `wrapper {height: auto;
                min-height: 80vh;}`<br>
                After witch I  added `footer: {margin-top: auto;}` To  keeped the footer in place.

* I had an issue with the selection lists columns. Only having one up at a time, If you selected any of the other columns, the 2 would be open at one time. 
>   -  To solve this, I gave them each their IDs and made the other selection option unavailable to use if one was open. You have to close one to open another.
* When you clicked on the Wind Icon, the MapsContainer Div from the Map Section would open up. I had used the tag `<li>` as the 'Onclick' element on the selection, without realizing that every `<li>` would be clickable. 
>   -  I solved this by giving the li element in question there own class and made the class clickable.
* I had an issue linking the HTML Geolocation concordance to the google maps directions service. 
>   -  To solve this, I had to put the navigator.geolocation.getCurrentPosition inside the getDirectionsAndLocations function.
* The issue I had with the Loading... icon was trying to getting it to disappear when the google maps API had fully loaded. <br>
>   -  I first used the `if (status == "OK")`statement in the google-API, but that made it disappear before the maps Directions had fully loaded. The status "Ok" happened long before the page had fully loaded, especially on slower networks. 
>   -  I solved this by using a JavaScript MutationObserver. I added it to the directions panel div to look for a change of attributes, If there is a change, it triggers the jQuary Function to close the Loading... and google icon divs.
* The next bug I had was that if I used the "Back to Selection" button after using the Maps already and tried to use the Google Maps_Api again, the MutationObserver would not reset and look for the change in attribute again. 
>   -  I Solved this but using the 'Back-To-Main' Botton to refresh the page every time you use the Maps_Api. 
* Because it refreshes the page every time, I was having an issue with loading times. I had a lot of high-resolution images.<br>
>  *  I solved this but using [TinyPNG](https://tinypng.com/) and making the image size a lot smaller and keeping the quality at the same time.
* I had a bug with the BackGround animation on the Main Heading. It was Slowing down the refresh and causing the animation to happen before the image had fully loaded. 
>   * I did some research and fond a piece of code on [CSS-Tricks](https://css-tricks.com/making-animations-wait/). It was explaining the same issue I was having, and the solution was to write 
`<script>document.documentElement.className += " js-loading";`
        `window.addEventListener("load", showPage, false);`
        `function showPage() {`
        `document.documentElement.className = ``document.documentElement.className.replace("js-loading","");</script>`
        and in the Css:<br>
        `.js-loading *,`<br>
`.js-loading *:before,`<br>
`.js-loading *:after`<br>
` {animation-play-state: paused !important;}`


<a name="deployment"></a>
## Deployment
I hosted this site using [Netlify](https://www.netlify.com/), It is a stand alone static webpage deployment website that is linked to you GitHub repository. It is deployed directly from the master branch or any other branches of your choosing. The beautiful thing about using Netlify is that it updates the feed as you git push changes to brach you are using to deploy.


<details>
<summary>To deploy on Netlify:</summary>
<br>
<ol>
<li>Open [Netlify](https://www.netlify.com/)</li>
<li>Sign Up using email or GitHub(Perfered method, auto update with Git-Push)</li>
<li>'Click' Create a new site</li>
<li>It will ask you "Continuous deployment" Click GitHub</li>
<li>Choose the repository you with to deploy</li>
<li>Choose what Branch you with to deploy from</li>
<li>'Click' Deploy</li>
<li>The Overview page for your website will display with the status of your deplayment.</li>
<li>Wait for the status to display: Published.</li>
<li>A unique web adress will display.(You can customise your address. see [Docs](https://docs.netlify.com/domains-https/custom-domains/#definitions))</li>
</ol>
</details>
<br>
<details>
<summary>Clone to a work station</summary>
<br>
<ol>
<li>On GitHub, navigate to the main page of the repository.</li>
<li>Under the repository name, click Clone or download.</li>
<li>To clone the repository using HTTPS, under "Clone with HTTPS", click.</li>
<li>To clone the repository using an SSH key, including a certificate issued by your organisation's SSH certificate authority, click Use SSH, then click.</li>
<li>Open Git Bash.</li>
<li>Change the current working directory to the location where you want the cloned directory to be.</li>
<li>Change the current working directory to the location where you want the cloned directory to be.</li>
<li>Type ‘’’git clone’’’ and then paste the URL you copied in Step 2.</li><li>Press Enter. Your local Clone will be created.</li>
</ol>
</details>


 





---
<a name="Credits"></a>
### Credits:

I would like to Thank the slack community for a lot of constructive tips and code.
Kevin Powell for know-how and code
Dev Ed for know-how and code

##### Design:

The concept and design is by Clinton Davis (myself)

##### Content:

##### Media:

- [Shutterstock](https://www.shutterstock.com/home)
- [Unsplash](https://unsplash.com/)
- and have [CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.


<a name="acknowledgements"></a>
### Acknowledgements

For the use of code and knowledge.

- [YouTube - Kevin Powell](https://www.youtube.com/user/KepowOb) for code snippets and [Sticky footer](https://bit.ly/2NAFAgW) advice / [Kevin Powell - Responsice Desing (Scrimba)](https://scrimba.com/) /
Google Maps Help: https://developers.google.com/maps/documentation/javascript/geolocation
- [CSS-Tricks](https://css-tricks.com/) website for help with [BackGround Image, Making-animations-wait, Ipad Resposive work arounds](https://css-tricks.com/perfect-full-page-background-image/) / (https://css-tricks.com/making-animations-wait/) 
- [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating Modal,](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) / General research on HTML CSS and JavaScript.
- [CSSMatric](https://cssmatic.com/) for [Box Shadow Generator ](https://cssmatic.com/box-shadow)
- [GitHub](https://github.com/) for documentation on how to [Deploy GitPages](https://bit.ly/2Kc5u8N) and [How to Clone Repository](https://bit.ly/32Emdbc).
- [Google Fonts](https://fonts.google.com/) for fonts.
- [Slack](https://slack.com/intl/en-ie/) community for Testing / Encouragement / Code Snippets and pointers.<br> 

[Back to top ](#toc)