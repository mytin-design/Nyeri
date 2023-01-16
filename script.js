//since we already have a html element in the document, we access it
var html = document.querySelector("html");
//var head = document.querySelector("head");

//append link for sylesheet

let stylesheet = document.createElement("link");

stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "styles.css");
/*
-This script does not effect intended changes;

let stackpath = document.createElement("link");
stackpath.setAttribute("rel", "stylesheet");
stackpath.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.css.min");

let jsmaxcdn = document.createElement("link");
jsmaxcdn.setAttribute("rel", "stylesheet");
jsmaxcdn.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js");

let bs5 = document.createElement("link");
bs5.setAttribute("rel", "stylesheet");
bs5.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
bs5.setAttribute("integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3");
bs5.setAttribute("crossorigin", "anonymous");

head.appendChild(stylesheet);
head.appendChild(stackpath);
head.appendChild(jsmaxcdn);
head.appendChild(bs5);
*/
//html.style.margin = "0px";
//html.style.padding = "0px";
//html.style.boxSizing = "border-box";
//body element is absent in document ;create the body element;
var body = document.createElement("body");
body.style.fontSize = "1.3rem";

//append the body element in the already existing html parent
html.appendChild(body);


//confirm its creation by giving it a border;

//body is successfully created;

//in body, create a header element
let header = document.createElement("header");

//append the header element in body
body.appendChild(header);

//confirm its creation


//header is successfully created;

//the header has a banner that appears on load, with an option to be hidden
//create banner as a div

let banner = document.createElement("div");
//append the banner in the head as the first element in normal layout

header.appendChild(banner);

banner.style.backgroundColor = "navy";
banner.style.color = "white";

//make the banner a flex box
banner.style.display = "flex";
banner.style.justifyContent = "space-between";
banner.style.padding = ".3pc 5pc .3pc 5pc";
banner.style.alignItems = "center";
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.width = "100%";
//the banner is successfully created;

//the banner has a text and two buttons spaced around


let bnText = document.createElement("p");

bnText.innerHTML = "Become a volunteer or Vote Now!";

banner.appendChild(bnText);

//create a div box for buttons

let btnbox = document.createElement("div");

banner.appendChild(btnbox);

let vbtn = document.createElement("button");
vbtn.innerHTML = "Become a Volunteer";

vbtn.style.backgroundColor = "red";
vbtn.style.color = "white";
vbtn.style.padding = ".4pc";
vbtn.style.border = "none";
btnbox.appendChild(vbtn);


//create second btn; fn - to close the banner

let clbtn = document.createElement("button");

clbtn.innerHTML = "&times;";


btnbox.appendChild(clbtn);
clbtn.style.backgroundColor = "#000";
clbtn.style.color = "white";
clbtn.style.padding = ".5pc";
clbtn.style.border = "none";
clbtn.style.fontSize = "1.2rem";


//add an onclick attribute and value for clbtn

clbtn.setAttribute("onclick", "closeBanner()");

//create a function for closing the banner

let closeBanner = () => {
    banner.style.display = "none";
titleBox.style.marginTop = "0";
videoel.style.top = "35.5pc";
viddes.style.top = "37pc";
molist.style.top = "117pc";
cclist.style.top = "120pc";
pelist.style.top = "122.6pc";
amblist.style.top = "125.5pc";
eslist.style.top = "128.4pc"; //when banner is open - slightly lower
reimgcap.style.top = "163pc";//when banner is closed
}

//make the buttonbox a flex-box and add gap

btnbox.style.display = "flex";
btnbox.style.gap = "1pc";

//END BANNER 

//Start first title div

//create the box 

let titleBox = document.createElement("div");

//the box has three box elements each with child elements;

//append titleBox to header

header.appendChild(titleBox);

//make titleBox a flex-container

titleBox.style.display = "flex";
titleBox.style.justifyContent = "space-between";
titleBox.style.alignItems = "center";
titleBox.style.padding = "0pc 5pc 0pc 5pc";
titleBox.style.marginTop = "5pc";
//create the first container - has four buttons

let ftbox = document.createElement("div");
//append the ftbox to titleBox

titleBox.appendChild(ftbox);

ftbox.style.padding = ".5pc"
//create the buttons

let cnbtn = document.createElement("button");
cnbtn.innerHTML = "Council";
cnbtn.style.padding = ".3pc";
cnbtn.style.margin = ".1pc"; 

let vcnbtn = document.createElement("button");
vcnbtn.innerHTML = "Vacancies";
vcnbtn.style.padding = ".3pc";
vcnbtn.style.margin = ".1pc"; 


let repbtn = document.createElement("button");
repbtn.innerHTML = "Report It";
repbtn.style.padding = ".3pc";
repbtn.style.margin = ".1pc"; 


let br = document.createElement("br");
let azxbtn = document.createElement("button");
azxbtn.innerHTML = "A-Z Index";
azxbtn.style.padding = ".3pc";
azxbtn.style.margin = ".1pc"; 


ftbox.appendChild(cnbtn);
ftbox.appendChild(vcnbtn);
ftbox.appendChild(br);
ftbox.appendChild(repbtn);
ftbox.appendChild(azxbtn);

//create the second box - has logo

let sbox = document.createElement("div");

//append the box to titleBox

titleBox.appendChild(sbox);

//make the sbox a flex container

sbox.style.display = "flex";
sbox.style.alignItems = "center";
sbox.style.gap = "1pc";

//create descedants
//create img element
let imglogo = document.createElement("img");

//set attributes for image
imglogo.setAttribute("src", "./../../abst1_slash.jpg");

imglogo.setAttribute("alt", "Logo Image");

imglogo.setAttribute("width", "50");

sbox.appendChild(imglogo);

//create wesite title

let logotxt = document.createElement("p");
logotxt.innerHTML = "Nyeri County";
logotxt.style.fontSize = "1.5rem";

sbox.appendChild(logotxt);


//create the third box - has three elements

let _3box = document.createElement("div");

//make it a flex container
_3box.style.display = "flex";
_3box.style.alignItems = "center";
_3box.style.border = ".1pc solid #eee";

//append the box to titleBox

titleBox.appendChild(_3box);

//create descedants as links

let tolnum = document.createElement("a");
//set attribute to make it a link
tolnum.setAttribute("href", "#");

//other attributes
//--
tolnum.innerHTML = "Tol Free: <br> +25419444041";

tolnum.style.padding = ".2pc";
tolnum.style.borderRight = ".1pc solid #eee";

//create second a link
//has elements in flex

let cityexp = document.createElement("a");

//make it a link
cityexp.setAttribute("href", "#");

//make it a flex-container
cityexp.style.display = "flex";
cityexp.style.alignItems = "center";
cityexp.style.gap = ".5pc";
cityexp.style.padding = ".2pc";
cityexp.style.borderRight = ".1pc solid #eee";

//create child elements - an img and text
let ceximg = document.createElement("img");
ceximg.setAttribute("src", "./../../abst1_slash.jpg");

ceximg.setAttribute("alt", "City Explore Image");

ceximg.setAttribute("width", "20");

//append the img to cityexp
cityexp.appendChild(ceximg);

//create the second child - text

let cextxt = document.createElement("span");
cextxt.innerHTML = "City <br> Explore";

//append the text to cityexp

cityexp.appendChild(cextxt);

//create third element - weather el

let wel = document.createElement("a");

//make it a link
wel.setAttribute("href", "#");

//make it a flex-container
wel.style.display = "flex";
wel.style.alignItems = "center";
wel.style.gap = ".5pc";
wel.style.padding = ".2pc";


//has two elements, an img and text
let welimg = document.createElement("img");
welimg.setAttribute("src", "./../../abst1_slash.jpg");

welimg.setAttribute("alt", "City Explore Image");

welimg.setAttribute("width", "20");

//append the img to cityexp

wel.appendChild(welimg);

//create the second child - text

let weltxt = document.createElement("span");
weltxt.innerHTML = "24&deg;C / 75&deg;F";

//append the text to cityexp

wel.appendChild(weltxt);




//append to 3box
_3box.appendChild(tolnum);
_3box.appendChild(cityexp);
_3box.appendChild(wel);

//Main Navigation bar
//create a theme breaker
let themebreak = document.createElement("hr");

header.appendChild(themebreak);

let nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.padding = "1pc 6pc 1pc 6pc";

header.appendChild(nav);

//nav has two containers

//first container - has links

let linkbox = document.createElement("div");
linkbox.style.display = "flex";
linkbox.style.justifyContent = "space-between";
linkbox.style.alignItems = "center";
linkbox.style.padding = ".2pc 1pc .2pc 1pc";
linkbox.style.width = "60%";


nav.appendChild(linkbox);

//start of nav links

//home button
let hnvl = document.createElement("span");
hnvl.setAttribute("class", "dropdown")
linkbox.appendChild(hnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let hnvbtn = document.createElement("a");
//set attributes
hnvbtn.setAttribute("href", "#");
hnvbtn.setAttribute("class", "dropdown-toggle");
hnvbtn.setAttribute("data-toggle", "dropdown");
hnvbtn.innerHTML = "HOME";
hnvl.appendChild(hnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let hlist = document.createElement("ul");
hlist.setAttribute("class", "dropdown-menu");
hnvl.appendChild(hlist);

//menu items - li elements
let hlone = document.createElement("li");
hlist.appendChild(hlone);
//each list element has an anchor element in it
//list one
let halone = document.createElement("a");
halone.setAttribute("href", "#");
halone.innerHTML = "Home Link";
hlone.appendChild(halone);

//list two
let haltwo = document.createElement("a");
haltwo.setAttribute("href", "#");
haltwo.innerHTML = "Home Link";
hlone.appendChild(haltwo);

//list three

let hal3 = document.createElement("a");
hal3.setAttribute("href", "#");
hal3.innerHTML = "Home Link";
hlone.appendChild(hal3);


//ABOUT US

//About Us button
let abnvl = document.createElement("span");
abnvl.setAttribute("class", "dropdown")
linkbox.appendChild(abnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let abnvbtn = document.createElement("a");
//set attributes
abnvbtn.setAttribute("href", "#");
abnvbtn.setAttribute("class", "dropdown-toggle");
abnvbtn.setAttribute("data-toggle", "dropdown");
abnvbtn.innerHTML = "ABOUT";
abnvl.appendChild(abnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let ablist = document.createElement("ul");
ablist.setAttribute("class", "dropdown-menu");
abnvl.appendChild(ablist);

//menu items - li elements
let ablone = document.createElement("li");
ablist.appendChild(ablone);
//each list element has an anchor element in it
//list one
let abalone = document.createElement("a");
abalone.setAttribute("href", "#");
abalone.innerHTML = "Home Link";
ablone.appendChild(abalone);

//list two
let abaltwo = document.createElement("a");
abaltwo.setAttribute("href", "#");
abaltwo.innerHTML = "Home Link";
ablone.appendChild(abaltwo);

//list three

let abal3 = document.createElement("a");
abal3.setAttribute("href", "#");
abal3.innerHTML = "Home Link";
ablone.appendChild(abal3);


//Departments
//department button
let dnvl = document.createElement("span");
dnvl.setAttribute("class", "dropdown")
linkbox.appendChild(dnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let dnvbtn = document.createElement("a");
//set attributes
dnvbtn.setAttribute("href", "#");
dnvbtn.setAttribute("class", "dropdown-toggle");
dnvbtn.setAttribute("data-toggle", "dropdown");
dnvbtn.innerHTML = "DEPARTMENTS";
dnvl.appendChild(dnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let dlist = document.createElement("ul");
dlist.setAttribute("class", "dropdown-menu");
dnvl.appendChild(dlist);

//menu items - li elements
let dlone = document.createElement("li");
dlist.appendChild(dlone);
//each list element has an anchor element in it
//list one
let dalone = document.createElement("a");
dalone.setAttribute("href", "#");
dalone.innerHTML = "Home Link";
dlone.appendChild(dalone);

//list two
let daltwo = document.createElement("a");
daltwo.setAttribute("href", "#");
daltwo.innerHTML = "Home Link";
dlone.appendChild(haltwo);

//list three

let dal3 = document.createElement("a");
dal3.setAttribute("href", "#");
dal3.innerHTML = "Home Link";
dlone.appendChild(dal3);



 
//NEWS 
//news button
let nnvl = document.createElement("span");
nnvl.setAttribute("class", "dropdown")
linkbox.appendChild(nnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let nnvbtn = document.createElement("a");
//set attributes
nnvbtn.setAttribute("href", "#");
nnvbtn.setAttribute("class", "dropdown-toggle");
nnvbtn.setAttribute("data-toggle", "dropdown");
nnvbtn.innerHTML = "NEWS";
nnvl.appendChild(nnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let nlist = document.createElement("ul");
nlist.setAttribute("class", "dropdown-menu");
nnvl.appendChild(nlist);

//menu items - li elements
let nlone = document.createElement("li");
nlist.appendChild(nlone);
//each list element has an anchor element in it
//list one
let nalone = document.createElement("a");
nalone.setAttribute("href", "#");
nalone.innerHTML = "Home Link";
nlone.appendChild(nalone);

//list two
let naltwo = document.createElement("a");
naltwo.setAttribute("href", "#");
naltwo.innerHTML = "Home Link";
nlone.appendChild(naltwo);

//list three

let nal3 = document.createElement("a");
nal3.setAttribute("href", "#");
nal3.innerHTML = "Home Link";
nlone.appendChild(nal3);

//EVENTS
//events button
let evnvl = document.createElement("span");
evnvl.setAttribute("class", "dropdown")
linkbox.appendChild(evnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let evnvbtn = document.createElement("a");
//set attributes
evnvbtn.setAttribute("href", "#");
evnvbtn.setAttribute("class", "dropdown-toggle");
evnvbtn.setAttribute("data-toggle", "dropdown");
evnvbtn.innerHTML = "EVENTS";
evnvl.appendChild(evnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let evlist = document.createElement("ul");
evlist.setAttribute("class", "dropdown-menu");
evnvl.appendChild(evlist);

//menu items - li elements
let evlone = document.createElement("li");
evlist.appendChild(evlone);
//each list element has an anchor element in it
//list one
let evalone = document.createElement("a");
evalone.setAttribute("href", "#");
evalone.innerHTML = "Home Link";
evlone.appendChild(evalone);

//list two
let evaltwo = document.createElement("a");
evaltwo.setAttribute("href", "#");
evaltwo.innerHTML = "Home Link";
evlone.appendChild(evaltwo);

//list three

let eval3 = document.createElement("a");
eval3.setAttribute("href", "#");
eval3.innerHTML = "Home Link";
evlone.appendChild(eval3);


//EXPLORE CITY 
//explore city button
let ecnvl = document.createElement("span");
ecnvl.setAttribute("class", "dropdown")
linkbox.appendChild(ecnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let ecnvbtn = document.createElement("a");
//set attributes
ecnvbtn.setAttribute("href", "#");
ecnvbtn.setAttribute("class", "dropdown-toggle");
ecnvbtn.setAttribute("data-toggle", "dropdown");
ecnvbtn.innerHTML = "EXPLORE CITY";
ecnvl.appendChild(ecnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let eclist = document.createElement("ul");
eclist.setAttribute("class", "dropdown-menu");
ecnvl.appendChild(eclist);

//menu items - li elements
let eclone = document.createElement("li");
eclist.appendChild(eclone);
//each list element has an anchor element in it
//list one
let ecalone = document.createElement("a");
ecalone.setAttribute("href", "#");
ecalone.innerHTML = "Home Link";
eclone.appendChild(ecalone);

//list two
let ecaltwo = document.createElement("a");
ecaltwo.setAttribute("href", "#");
ecaltwo.innerHTML = "Home Link";
eclone.appendChild(ecaltwo);

//list three

let ecal3 = document.createElement("a");
ecal3.setAttribute("href", "#");
ecal3.innerHTML = "Home Link";
eclone.appendChild(ecal3);


//PAGES 
//pages button
let pgnvl = document.createElement("span");
pgnvl.setAttribute("class", "dropdown")
linkbox.appendChild(pgnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let pgnvbtn = document.createElement("a");
//set attributes
pgnvbtn.setAttribute("href", "#");
pgnvbtn.setAttribute("class", "dropdown-toggle");
pgnvbtn.setAttribute("data-toggle", "dropdown");
pgnvbtn.innerHTML = "PAGES";
pgnvl.appendChild(pgnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let pglist = document.createElement("ul");
pglist.setAttribute("class", "dropdown-menu");
pgnvl.appendChild(pglist);

//menu items - li elements
let pglone = document.createElement("li");
pglist.appendChild(pglone);
//each list element has an anchor element in it
//list one
let pgalone = document.createElement("a");
pgalone.setAttribute("href", "#");
pgalone.innerHTML = "Home Link";
pglone.appendChild(pgalone);

//list two
let pgaltwo = document.createElement("a");
pgaltwo.setAttribute("href", "#");
pgaltwo.innerHTML = "Home Link";
pglone.appendChild(pgaltwo);

//list three

let pgal3 = document.createElement("a");
pgal3.setAttribute("href", "#");
pgal3.innerHTML = "Home Link";
pglone.appendChild(pgal3);



//CONTACTS
//contacts button
let cnnvl = document.createElement("span");
cnnvl.setAttribute("class", "dropdown")
linkbox.appendChild(cnnvl);
//each nav link uses bootstrap to show a menu
//so create a btn and a li of menu items
//then append them under nav link

let cnnvbtn = document.createElement("a");
//set attributes
cnnvbtn.setAttribute("href", "#");
cnnvbtn.setAttribute("class", "dropdown-toggle");
cnnvbtn.setAttribute("data-toggle", "dropdown");
cnnvbtn.innerHTML = "CONTACTS";
cnnvl.appendChild(cnnvbtn);

//this list has the menu that shows when btn is clicked - enabled by bootstrap
let cnlist = document.createElement("ul");
cnlist.setAttribute("class", "dropdown-menu");
cnnvl.appendChild(cnlist);

//menu items - li elements
let cnlone = document.createElement("li");
cnlist.appendChild(cnlone);
//each list element has an anchor element in it
//list one
let cnalone = document.createElement("a");
cnalone.setAttribute("href", "#");
cnalone.innerHTML = "Home Link";
cnlone.appendChild(cnalone);

//list two
let cnaltwo = document.createElement("a");
cnaltwo.setAttribute("href", "#");
cnaltwo.innerHTML = "Home Link";
cnlone.appendChild(cnaltwo);

//list three

let cnal3 = document.createElement("a");
cnal3.setAttribute("href", "#");
cnal3.innerHTML = "Home Link";
cnlone.appendChild(cnal3);

//Second box in the nav container

let srcbox = document.createElement("div");
srcbox.style.padding = ".2pc";

//make it a flex box

srcbox.style.display = "flex";
srcbox.style.justifyContent = "space-around";
srcbox.style.alignItems = "center";
srcbox.style.gap = "1pc";

nav.appendChild(srcbox);

//the srcbox has two elements - a search form and a donate btn
let searchForm = document.createElement("form");
searchForm.setAttribute("action", "#");
searchForm.setAttribute("method", "POST");
searchForm.style.border = ".1pc solid #666";
searchForm.style.borderRadius = "5pc";

srcbox.appendChild(searchForm);
//create a search input
let srcinput = document.createElement("input");
srcinput.setAttribute("type", "search");
srcinput.setAttribute("placeholder", "Search");
srcinput.style.padding = ".2pc .2pc .2pc 2pc";
srcinput.style.border = "none";
srcinput.style.outline = "none";



searchForm.appendChild(srcinput);

//create a submit btn
let srcBtn = document.createElement("button");
srcBtn.innerHTML = "Src";
srcBtn.style.backgroundColor = "transparent";
srcBtn.style.border = "none";
srcBtn.style.borderLeft = ".1pc solid";
srcBtn.style.padding = ".5pc"
srcBtn.style.width = "3pc"

searchForm.appendChild(srcBtn);

//create donate btn and append to srcBox

let donatebtn = document.createElement("button");
donatebtn.innerHTML = "Donate";
donatebtn.style.border = "none";
donatebtn.style.color = "#fff";
donatebtn.style.backgroundColor = "red";
donatebtn.style.borderRadius = "4pc";
donatebtn.style.padding = ".5pc";
donatebtn.style.width = "8pc";
donatebtn.style.height = "2.5pc";




srcbox.appendChild(donatebtn);

//end header markup and styles ;

//start main 
let main = document.createElement("main");
main.setAttribute("class", "webroot");

body.appendChild(main);

//welcome container
let heroBox = document.createElement("div");
heroBox.setAttribute("class", "heroBox");
heroBox.style.height = "70vh";
heroBox.style.backgroundColor = "black";
heroBox.style.color = "white";

//make the heroBox a flex container and center the contents

heroBox.style.display = "flex";
heroBox.style.justifyContent = "flex-start";
heroBox.style.alignItems = "center";



//heroBox.style.backgroundAttachment = "scroll";
//heroBox.style.backgroundPosition = "center";
//heroBox.style.backgroundSize = "cover";
//heroBox.style.backgroundRepeat = "no-repeat";

main.appendChild(heroBox);

//create the welcome message container
let wmc = document.createElement("div");
wmc.style.padding = "1pc";
wmc.style.width = "50%"
wmc.style.display = "flex";
wmc.style.flexFlow = "column";
wmc.style.gap = "1pc";
wmc.style.color = "white";
wmc.style.marginLeft = "13pc";


heroBox.appendChild(wmc);

//create heading

let wmctitle = document.createElement("h1");
wmctitle.innerHTML = "Support us to Become Strong Economy";
wmctitle.style.fontSize = "5rem";
wmctitle.style.fontWeight = "bolder";
wmc.appendChild(wmctitle);

//welcome text
let wmctxt = document.createElement("p");
wmctxt.innerHTML = "Follow the Democracy for good Governance in our Country";
wmc.appendChild(wmctxt);

//create a Join us button

let jusbtn = document.createElement("button");
jusbtn.innerHTML = "JOIN US NOW";
jusbtn.style.border = "none";
jusbtn.style.color = "#fff";
jusbtn.style.fontWeight = "bold";
jusbtn.style.backgroundColor = "red";
jusbtn.style.borderRadius = "5pc";
jusbtn.style.padding = ".5pc";
jusbtn.style.width = "8pc";

wmc.appendChild(jusbtn);


//Officer-box

//this box has two boxes
let obox = document.createElement("div");
obox.style.backgroundColor = "navy";
obox.style.color = "white";
obox.style.padding = "1pc";
obox.style.height = "50vh";
obox.style.display = "flex";
obox.style.justifyContent = "space-around";
obox.style.alignItems = "center";


//append to main

main.appendChild(obox);

//first box has a video and span el

let ovidbox = document.createElement("div");
ovidbox.style.width = "50%";

//append the box to obox
obox.appendChild(ovidbox);

//create a span el
let viddes = document.createElement("span");
viddes.innerHTML = "Mayor of the City";
viddes.style.padding = "1pc";
viddes.style.backgroundColor = "navy";
viddes.style.color = "white";
viddes.style.position = "absolute";
viddes.style.zIndex = "1";
viddes.style.top = "41pc";
viddes.style.left = "9%";




//append to ovidbox

ovidbox.appendChild(viddes);

//create video el
let videoel = document.createElement("video");
videoel.setAttribute("src", "./../../../../Videos/Assetto Corsa on Steam.mp4");
videoel.setAttribute("width", "400");
videoel.setAttribute("height", "300");
videoel.setAttribute("class", "videoel");
videoel.setAttribute("controls", "");
//videoel.style.border = ".1pc solid #eee";
videoel.style.borderRadius = ".4pc";
videoel.style.backgroundColor = "#000";
videoel.style.position = "absolute";
videoel.style.top = "40pc";
videoel.style.left = "10%";


//append the videoel to ovidbox

ovidbox.appendChild(videoel);

//second box - description
let odes = document.createElement("div");
odes.style.display = "flex";
odes.style.flexDirection = "column";
odes.style.gap = ".5pc";
//append the odes to obox
obox.appendChild(odes);

let odestitle = document.createElement("span");
odestitle.innerHTML = "Welcome to Visit your City";
odestitle.style.fontWeight = "bolder";
odestitle.style.fontSize = "2rem";

//append odestitle to odes box

odes.appendChild(odestitle);

//create a paragraph

let odestxt = document.createElement("span");
odestxt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione velit fugiat ducimus odit minima ea doloremque ad molestias inventore corporis.";

//append odestxt to odes

odes.appendChild(odestxt);

odes.appendChild(br);

//create a separator
let thmbrk = document.createElement("span");
thmbrk.innerHTML = "&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;";
thmbrk.style.color = "#999";

odes.appendChild(thmbrk);
//create name of officer
let ofname = document.createElement("span");
ofname.innerHTML = "Denis King";
ofname.style.fontWeight = "bolder";
odes.appendChild(ofname);

//officer des
let ofdes = document.createElement("span");
ofdes.innerHTML = "Mayor of City";
ofdes.style.fontSize = "1rem";
odes.appendChild(ofdes);


//CITY NEWS
//create a news container
//a title, a paragraph, articles box

let cnwsbox = document.createElement("div");
cnwsbox.style.padding = "2.5pc 1pc 2.5pc 10pc";
//append the news box to main

main.appendChild(cnwsbox);

//news title

let nwstitle = document.createElement("h2");
nwstitle.innerHTML = "Be Updated with City News";
nwstitle.style.fontWeight = "bolder";
cnwsbox.appendChild(nwstitle);

//paragraph

let nwstxt = document.createElement("p");
nwstxt.innerHTML = "&HorizontalLine; Read the News Updates and Articles about Governement.";
nwstxt.style.fontStyle = "italic";
cnwsbox.appendChild(nwstxt);

//======================================Article boxes start here =================================

//create article box
let cnwsartbox = document.createElement("div");
cnwsartbox.style.padding = ".5pc";

//append the article box to cnwsbox
cnwsbox.appendChild(cnwsartbox);

//cnwsartbox should be a grid of four columns and auto height (check if its apt);

cnwsartbox.style.display = "grid";
cnwsartbox.style.gridTemplateColumns = "repeat(4, 1fr)";
cnwsartbox.style.gridTemplateRows = "auto";
cnwsartbox.style.gap = "1pc";
//create four div elements

//first article box
let art1box1 = document.createElement("div");
art1box1.style.border = ".1pc solid #eee";
//we encountered a design bug db#01;
//the text in artdiv1 determines layout and height -
//problem is - the profile container must remain at the end ot the artbox and its not
//solution - 
//make the artbox a flex box, append the profile box to the artbox instead of artdiv, space items between

art1box1.style.display = "flex";
art1box1.style.flexDirection = "column";
art1box1.style.borderRadius = ".4pc";
art1box1.style.textAlign = "center";
art1box1.style.gap = "2pc";



//append it under cnwsartbox
cnwsartbox.appendChild(art1box1);

//each box has two major elements: an image and a div with article des:
// the div will have 4 elements in total: a div with date and comments, title, text, div with author img, name and right arrow btn

//create img

let art1box1img = document.createElement("img");
art1box1img.setAttribute("src", "./../../abst3_slash.jpg");
art1box1img.setAttribute("width", "100");
art1box1img.setAttribute("alt", "Article Image");
art1box1img.style.width = "100%";
//append the img to artbox1
art1box1.appendChild(art1box1img);

//create article banner
let art1banner = document.createElement("span");
//append
art1box1.appendChild(art1banner);
art1banner.innerHTML = "Economics";
art1banner.style.padding = "1pc";
art1banner.style.backgroundColor = "darkgreen";
art1banner.style.color = "white";
art1banner.style.position = "absolute";





//create first div with data and comments and name it
let art1dtcom = document.createElement("div");
//To fix db#01 - remove artdtcom from artdiv and append it to artbox;
//append it under art1div1
art1box1.appendChild(art1dtcom);

//make the container a flex container, 

art1dtcom.style.display = "flex";
art1dtcom.style.justifyContent = "center";
art1dtcom.style.alignItems = "center";
art1dtcom.style.gap = "1pc";
art1dtcom.style.fontWeight = "bolder";


//create two spans separated by a vertical bar
//first span -- date
let art1dtcomspan1 = document.createElement("span");
//append the span to art1dtcom
art1dtcom.appendChild(art1dtcomspan1);

art1dtcomspan1.innerHTML = "SEPTEMBER 2022";
art1dtcomspan1.style.fontSize = "1rem";

//a vertical bar separating date and comments
let art1dtcomvbr = document.createElement("span");
//append bar under artdtcom between date and comments
art1dtcom.appendChild(art1dtcomvbr);
art1dtcomvbr.innerHTML = "&VerticalLine;";

//second span - comments - this should change dynamically ??
let art1dtcomspan2 = document.createElement("span");
art1dtcomspan2.style.fontSize = "1rem";

//append the span to art1dtcom
art1dtcom.appendChild(art1dtcomspan2);

art1dtcomspan2.innerHTML = "176 COMMENTS";


//create div with the 2 elements
let art1div1 = document.createElement("div");
//append the div to art1box1
art1box1.appendChild(art1div1);
//arrange the items as a flex column - so that you can space them as you wish
art1div1.style.display = "flex";
art1div1.style.flexDirection = "column";
art1div1.style.textAlign = "start";
art1div1.style.gap = ".5pc";
art1div1.style.padding = "1pc";





//Second element of the art1div1 container
//article title

let art1title = document.createElement("p");
art1title.innerHTML = "Media talking about foreign affairs";
art1title.style.fontWeight = "bolder";
art1title.style.fontSize = "1.4rem";


//append the title to art1div1
art1div1.appendChild(art1title);

///third element - create the article text

let art1txt = document.createElement("p");
art1txt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non excepturi magnam, quaerat repellendus at laboriosam sit voluptates odio illum.";
art1txt.style.color = "#777";

//append the article text to art1div1
art1div1.appendChild(art1txt);

//fourth element - div - has a div with author info; and an rightarrow
let art1authbox = document.createElement("div");
//make it a flex container - the first container with author data should be at least 70% of available space
art1authbox.style.display = "flex";
art1authbox.style.alignItems = "center";
art1authbox.style.borderTop = ".1pc solid #888";
art1authbox.style.padding = ".3pc";

//to fix db#01 - remove this from artdiv and append it to artbox
//append the art1authbox to art1div1
art1box1.appendChild(art1authbox);

//create div with author img and name
let art1authinfo = document.createElement("div");
//make it a flex container
art1authinfo.style.display = "flex";
art1authinfo.style.alignItems = "center";
art1authinfo.style.fontSize = "1rem";
art1authinfo.style.gap = ".5pc";
art1authinfo.style.width = "90%";


//append the art1authinfo to art1authbox
art1authbox.appendChild(art1authinfo);

//create author profile
let art1authimg = document.createElement("img");
art1authimg.setAttribute("src", "./../../ano_girl.jpg");
art1authimg.setAttribute("alt", "Author Profile Picture");
art1authimg.setAttribute("width", "25");
art1authimg.setAttribute("height", "25");
art1authimg.style.borderRadius = "100%";

//append img to art1authinfo
art1authinfo.appendChild(art1authimg);

//create name of author
let art1authname = document.createElement("span");
art1authname.innerHTML = "Denis King";

//append name to art1authinfo
art1authinfo.appendChild(art1authname);

//create second component of art1authbox
let art1mrar = document.createElement("button");
art1mrar.innerHTML = "&RightArrow;";
art1mrar.style.backgroundColor = "transparent";
art1mrar.style.border = "none";
art1mrar.style.fontSize = "1.5rem";
art1mrar.style.textAlign = "center";
art1mrar.style.borderLeft = ".1pc solid #888";
art1mrar.setAttribute("id", "artBtn"); 

//append arrow button to art1authbox

art1authbox.appendChild(art1mrar);

//END OF ARTICLE BOX 1

//=======================================================

//Start of article box 2

//second article box
let art2box1 = document.createElement("div");
art2box1.style.border = ".1pc solid #eee";
art2box1.style.borderRadius = ".4pc";
art2box1.style.textAlign = "center";

art2box1.style.display = "flex";
art2box1.style.flexDirection = "column";
art2box1.style.justifyContent = "space-between";


//append it under cnwsartbox
cnwsartbox.appendChild(art2box1);

//each box has two major elements: an image and a div with article des:
// the div will have 4 elements in total: a div with date and comments, title, text, div with author img, name and right arrow btn

//create img

let art2box1img = document.createElement("img");
art2box1img.setAttribute("src", "./../../abst1_slash.jpg");
art2box1img.setAttribute("width", "100");
art2box1img.setAttribute("alt", "Article Image");
art2box1img.style.width = "100%";
//append the img to artbox1
art2box1.appendChild(art2box1img);


//create article banner
let art2banner = document.createElement("span");
//append
art2box1.appendChild(art2banner);
art2banner.innerHTML = "Business";
art2banner.style.padding = "1pc";
art2banner.style.backgroundColor = "blue";
art2banner.style.color = "white";
art2banner.style.position = "absolute";
//create first div with data and comments and name it
let art2dtcom = document.createElement("div");
//append it under art1div1
art2box1.appendChild(art2dtcom);

//make the container a flex container, 

art2dtcom.style.display = "flex";
art2dtcom.style.justifyContent = "center";
art2dtcom.style.alignItems = "center";
art2dtcom.style.gap = "1pc";
art2dtcom.style.fontWeight = "bolder";



//create two spans separated by a vertical bar
//first span -- date
let art2dtcomspan1 = document.createElement("span");
//append the span to art1dtcom
art2dtcom.appendChild(art2dtcomspan1);

art2dtcomspan1.innerHTML = "SEPTEMBER 2022";
art2dtcomspan1.style.fontSize = "1rem";

//a vertical bar separating date and comments
let art2dtcomvbr = document.createElement("span");
//append bar under artdtcom between date and comments
art2dtcom.appendChild(art2dtcomvbr);
art2dtcomvbr.innerHTML = "&VerticalLine;";

//second span - comments - this should change dynamically ??
let art2dtcomspan2 = document.createElement("span");
art2dtcomspan2.style.fontSize = "1rem";

//append the span to art1dtcom
art2dtcom.appendChild(art2dtcomspan2);

art2dtcomspan2.innerHTML = "176 COMMENTS";



//create div with the 2 elements
let art2div1 = document.createElement("div");
//append the div to art1box1
art2box1.appendChild(art2div1);
//arrange the items as a flex column - so that you can space them as you wish
art2div1.style.display = "flex";
art2div1.style.flexDirection = "column";
art2div1.style.textAlign = "start";
art2div1.style.gap = ".5pc";
art2div1.style.padding = "1pc";





//Second element of the art1div1 container
//article title

let art2title = document.createElement("p");
art2title.innerHTML = "International relations ambassador Ahmed Hussein has";
art2title.style.fontWeight = "bolder";
art2title.style.fontSize = "1.4rem";


//append the title to art1div1
art2div1.appendChild(art2title);

///third element - create the article text

let art2txt = document.createElement("p");
art2txt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non excepturi magnam, quaerat repellendus at laboriosam sit voluptates odio illum.";
art2txt.style.color = "#777";

//append the article text to art1div1
art2div1.appendChild(art2txt);

//fourth element - div - has a div with author info; and an rightarrow

let art2authbox = document.createElement("div");
//make it a flex container - the first container with author data should be at least 70% of available space
art2authbox.style.display = "flex";
art2authbox.style.alignItems = "center";
art2authbox.style.borderTop = ".1pc solid #888";
art2authbox.style.padding = ".3pc";

//to fix db#01 - remove this from artdiv and append it to artbox
//append the art1authbox to art1div1
art2box1.appendChild(art2authbox);

//create div with author img and name
let art2authinfo = document.createElement("div");
//make it a flex container
art2authinfo.style.display = "flex";
art2authinfo.style.alignItems = "center";
art2authinfo.style.fontSize = "1rem";
art2authinfo.style.gap = ".5pc";
art2authinfo.style.width = "90%";



//append the art1authinfo to art1authbox
art2authbox.appendChild(art2authinfo);

//create author profile
let art2authimg = document.createElement("img");
art2authimg.setAttribute("src", "./../../abst1_slash.jpg");
art2authimg.setAttribute("alt", "Author Profile Picture");
art2authimg.setAttribute("width", "25");
art2authimg.setAttribute("height", "25");
art2authimg.style.borderRadius = "100%";

//append img to art1authinfo
art2authinfo.appendChild(art2authimg);

//create name of author
let art2authname = document.createElement("span");
art2authname.innerHTML = "Martin Maingi";

//append name to art1authinfo
art2authinfo.appendChild(art2authname);

//create second component of art1authbox
let art2mrar = document.createElement("button");
art2mrar.innerHTML = "&RightArrow;";
art2mrar.style.backgroundColor = "transparent";
art2mrar.style.border = "none";
art2mrar.style.fontSize = "1.5rem";
art2mrar.style.textAlign = "center";
art2mrar.style.borderLeft = ".1pc solid #888";
art2mrar.setAttribute("id", "artBtn"); 

//append arrow button to art1authbox

art2authbox.appendChild(art2mrar);

//END OF ARTICLE BOX 2


//===============================================================
//Start of article box 3

//third article box
let art3box1 = document.createElement("div");
art3box1.style.border = ".1pc solid #eee";
art3box1.style.borderRadius = ".4pc";
art3box1.style.textAlign = "center";

art3box1.style.display = "flex";
art3box1.style.flexDirection = "column";
art3box1.style.justifyContent = "space-between";

//append it under cnwsartbox
cnwsartbox.appendChild(art3box1);

//each box has two major elements: an image and a div with article des:
// the div will have 4 elements in total: a div with date and comments, title, text, div with author img, name and right arrow btn

//create img

let art3box1img = document.createElement("img");
art3box1img.setAttribute("src", "./../../abst2_slash.jpg");
art3box1img.setAttribute("width", "100");
art3box1img.setAttribute("alt", "Article Image");
art3box1img.style.width = "100%";
//append the img to artbox1
art3box1.appendChild(art3box1img);


//create article banner
let art3banner = document.createElement("span");
//append
art3box1.appendChild(art3banner);
art3banner.innerHTML = "Politics";
art3banner.style.padding = "1pc";
art3banner.style.backgroundColor = "green";
art3banner.style.color = "white";
art3banner.style.position = "absolute";


//create first div with data and comments and name it
let art3dtcom = document.createElement("div");
//append it under art1div1
art3box1.appendChild(art3dtcom);

//make the container a flex container, 

art3dtcom.style.display = "flex";
art3dtcom.style.justifyContent = "center";
art3dtcom.style.alignItems = "center";
art3dtcom.style.gap = "1pc";
art3dtcom.style.fontWeight = "bolder";



//create two spans separated by a vertical bar
//first span -- date
let art3dtcomspan1 = document.createElement("span");
//append the span to art1dtcom
art3dtcom.appendChild(art3dtcomspan1);

art3dtcomspan1.innerHTML = "AUGUST 2022";
art3dtcomspan1.style.fontSize = "1rem";

//a vertical bar separating date and comments
let art3dtcomvbr = document.createElement("span");
//append bar under artdtcom between date and comments
art3dtcom.appendChild(art3dtcomvbr);
art3dtcomvbr.innerHTML = "&VerticalLine;";

//second span - comments - this should change dynamically ??
let art3dtcomspan2 = document.createElement("span");
art3dtcomspan2.style.fontSize = "1rem";

//append the span to art1dtcom
art3dtcom.appendChild(art3dtcomspan2);

art3dtcomspan2.innerHTML = "205 COMMENTS";


//create div with the 2 elements
let art3div1 = document.createElement("div");
//append the div to art1box1
art3box1.appendChild(art3div1);
//arrange the items as a flex column - so that you can space them as you wish
art3div1.style.display = "flex";
art3div1.style.flexDirection = "column";
art3div1.style.textAlign = "start";
art3div1.style.gap = ".5pc";
art3div1.style.padding = "1pc";





//Second element of the art1div1 container
//article title

let art3title = document.createElement("p");
art3title.innerHTML = "The Taxman's bid for control over every public...";
art3title.style.fontWeight = "bolder";
art3title.style.fontSize = "1.4rem";


//append the title to art1div1
art3div1.appendChild(art3title);

///third element - create the article text

let art3txt = document.createElement("p");
art3txt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non excepturi magnam, quaerat repellendus at laboriosam sit voluptates odio illum.";
art3txt.style.color = "#777";

//append the article text to art1div1
art3div1.appendChild(art3txt);

//fourth element - div - has a div with author info; and an rightarrow

let art3authbox = document.createElement("div");
//make it a flex container - the first container with author data should be at least 70% of available space
art3authbox.style.display = "flex";
art3authbox.style.alignItems = "center";
art3authbox.style.borderTop = ".1pc solid #888";
art3authbox.style.padding = ".3pc";

//to fix db#01 - remove this from artdiv and append it to artbox
//append the art1authbox to art1div1
art3box1.appendChild(art3authbox);

//create div with author img and name
let art3authinfo = document.createElement("div");
//make it a flex container
art3authinfo.style.display = "flex";
art3authinfo.style.alignItems = "center";
art3authinfo.style.fontSize = "1rem";
art3authinfo.style.gap = ".5pc";
art3authinfo.style.width = "90%";



//append the art1authinfo to art1authbox
art3authbox.appendChild(art3authinfo);

//create author profile
let art3authimg = document.createElement("img");
art3authimg.setAttribute("src", "./../../abst3_slash.jpg");
art3authimg.setAttribute("alt", "Author Profile Picture");
art3authimg.setAttribute("width", "25");
art3authimg.setAttribute("height", "25");
art3authimg.style.borderRadius = "100%";

//append img to art1authinfo
art3authinfo.appendChild(art3authimg);

//create name of author
let art3authname = document.createElement("span");
art3authname.innerHTML = "Winfred Mumbi";

//append name to art1authinfo
art3authinfo.appendChild(art3authname);

//create second component of art1authbox
let art3mrar = document.createElement("button");
art3mrar.innerHTML = "&RightArrow;";
art3mrar.style.backgroundColor = "transparent";
art3mrar.style.border = "none";
art3mrar.style.fontSize = "1.5rem";
art3mrar.style.textAlign = "center";
art3mrar.style.borderLeft = ".1pc solid #888";
art3mrar.setAttribute("id", "artBtn"); 

//append arrow button to art1authbox

art3authbox.appendChild(art3mrar);

//END OF ARTICLE BOX 3


//===============================================================
//Start of article box 4

//fourth article box
let art4box1 = document.createElement("div");
art4box1.style.border = ".1pc solid #eee";
art4box1.style.borderRadius = ".4pc";
art4box1.style.textAlign = "center";

art4box1.style.display = "flex";
art4box1.style.flexDirection = "column";
art4box1.style.justifyContent = "space-between";
//append it under cnwsartbox
cnwsartbox.appendChild(art4box1);

//each box has two major elements: an image and a div with article des:
// the div will have 4 elements in total: a div with date and comments, title, text, div with author img, name and right arrow btn

//create img

let art4box1img = document.createElement("img");
art4box1img.setAttribute("src", "./../../abst3_slash.jpg");
art4box1img.setAttribute("width", "100");
art4box1img.setAttribute("alt", "Article Image");
art4box1img.style.width = "100%";
//append the img to artbox1
art4box1.appendChild(art4box1img);


//create article banner
let art4banner = document.createElement("span");
//append
art4box1.appendChild(art4banner);
art4banner.innerHTML = "Education";
art4banner.style.padding = "1pc";
art4banner.style.backgroundColor = "red";
art4banner.style.color = "white";
art4banner.style.position = "absolute";

//create first div with data and comments and name it
let art4dtcom = document.createElement("div");
//append it under art1div1
art4box1.appendChild(art4dtcom);

//make the container a flex container, 

art4dtcom.style.display = "flex";
art4dtcom.style.justifyContent = "center";
art4dtcom.style.alignItems = "center";
art4dtcom.style.gap = "1pc";
art4dtcom.style.fontWeight = "bolder";



//create two spans separated by a vertical bar
//first span -- date
let art4dtcomspan1 = document.createElement("span");
//append the span to art1dtcom
art4dtcom.appendChild(art4dtcomspan1);

art4dtcomspan1.innerHTML = "OCTOBER 2022";
art4dtcomspan1.style.fontSize = "1rem";


//a vertical bar separating date and comments
let art4dtcomvbr = document.createElement("span");
//append bar under artdtcom between date and comments
art4dtcom.appendChild(art4dtcomvbr);
art4dtcomvbr.innerHTML = "&VerticalLine;";

//second span - comments - this should change dynamically ??
let art4dtcomspan2 = document.createElement("span");
art4dtcomspan2.style.fontSize = "1rem";

//append the span to art1dtcom
art4dtcom.appendChild(art4dtcomspan2);

art4dtcomspan2.innerHTML = "300 COMMENTS";



//create div with the 2 elements
let art4div1 = document.createElement("div");
//append the div to art1box1
art4box1.appendChild(art4div1);
//arrange the items as a flex column - so that you can space them as you wish
art4div1.style.display = "flex";
art4div1.style.flexDirection = "column";
art4div1.style.textAlign = "start";
art4div1.style.gap = ".5pc";
art4div1.style.padding = "1pc";




//Second element of the art1div1 container
//article title

let art4title = document.createElement("p");
art4title.innerHTML = "The Government's legistlation on Revenue has received concerns";
art4title.style.fontWeight = "bolder";
art4title.style.fontSize = "1.4rem";


//append the title to art1div1
art4div1.appendChild(art4title);

///third element - create the article text

let art4txt = document.createElement("p");
art4txt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non excepturi magnam, quaerat repellendus at laboriosam sit voluptates odio illum.";
art4txt.style.color = "#777";

//append the article text to art1div1
art4div1.appendChild(art4txt);

//fourth element - div - has a div with author info; and an rightarrow

let art4authbox = document.createElement("div");
//make it a flex container - the first container with author data should be at least 70% of available space
art4authbox.style.display = "flex";
art4authbox.style.alignItems = "center";
art4authbox.style.borderTop = ".1pc solid #888";
art4authbox.style.padding = ".3pc";

//to fix db#01 - remove this from artdiv and append it to artbox
//append the art1authbox to art1div1
art4box1.appendChild(art4authbox);

//create div with author img and name
let art4authinfo = document.createElement("div");
//make it a flex container
art4authinfo.style.display = "flex";
art4authinfo.style.alignItems = "center";
art4authinfo.style.fontSize = "1rem";
art4authinfo.style.gap = ".5pc";
art4authinfo.style.width = "90%";



//append the art1authinfo to art1authbox
art4authbox.appendChild(art4authinfo);

//create author profile
let art4authimg = document.createElement("img");
art4authimg.setAttribute("src", "./../../abst1_slash.jpg");
art4authimg.setAttribute("alt", "Author Profile Picture");
art4authimg.setAttribute("width", "25");
art4authimg.setAttribute("height", "25");
art4authimg.style.borderRadius = "100%";

//append img to art1authinfo
art4authinfo.appendChild(art4authimg);

//create name of author
let art4authname = document.createElement("span");
art4authname.innerHTML = "Mary Mwangi";

//append name to art1authinfo
art4authinfo.appendChild(art4authname);

//create second component of art1authbox
let art4mrar = document.createElement("button");
art4mrar.innerHTML = "&RightArrow;";
art4mrar.style.backgroundColor = "transparent";
art4mrar.style.border = "none";
art4mrar.style.fontSize = "1.5rem";
art4mrar.style.textAlign = "center";
art4mrar.style.borderLeft = ".1pc solid #888";
art4mrar.setAttribute("id", "artBtn"); 

//append arrow button to art1authbox

art4authbox.appendChild(art4mrar);

//END OF ARTICLE BOX 4

//===================================================END OF ARTICLE BOX ==================================

//START INFORMATION DESK
let idwrap = document.createElement("div");
idwrap.style.padding = "2pc 1pc 1pc 10pc";
idwrap.style.backgroundColor = "pink";


//append the info desk to main
main.appendChild(idwrap);
//has 3 elements, third el is a flex box with the first as a grid and the other flexcolumn
let idwraptitle = document.createElement("h2");
idwraptitle.innerHTML = "Departments & Information Desk";
idwraptitle.style.fontWeight = "bolder";
//append the title to info box

idwrap.appendChild(idwraptitle);

//create an info desk description
let idwrapdes = document.createElement("p");
idwrapdes.innerHTML = "&HorizontalLine;Read the News Updates and Articles about Government";
idwrapdes.style.fontStyle = "italic";
idwrap.appendChild(idwrapdes);

//third el with 2 containers ===this container has a grid container and a side bar flex box
//should be a flex container, with the grid container occupying 70% of available space
let idwrapmain = document.createElement("div");
idwrapmain.style.display = "flex";
idwrapmain.style.alignItems = "center";
idwrapmain.style.justifyContent = "space-around";
idwrapmain.style.gap = "1pc";
idwrapmain.style.padding = ".5pc";



//append main wrapper to idwrap

idwrap.appendChild(idwrapmain);

//====================START GRID CONTAINER==================================
//first container is grid item - has 6 items;

let idwrapgrid = document.createElement("div");
//append it to idwrapmain

idwrapmain.appendChild(idwrapgrid);

idwrapgrid.style.display = "grid";
idwrapgrid.style.gridTemplateColumns = "repeat(3, 1fr)";
idwrapgrid.style.gridAutoRows = "15pc";
idwrapgrid.style.gap = "1pc";

//create 6 divs, each with an image and title
let idwrapgridone = document.createElement("div");

//append div to idwrapgrid
idwrapgrid.appendChild(idwrapgridone);
idwrapgridone.style.display = "flex";
idwrapgridone.style.flexDirection = "column";
idwrapgridone.style.gap = "1pc";
idwrapgridone.style.alignItems = "center";
idwrapgridone.style.justifyContent = "center";
idwrapgridone.style.textAlign = "center";
idwrapgridone.style.backgroundColor = "white";
idwrapgridone.style.borderRadius = ".4pc";
idwrapgridone.style.color = "black";
idwrapgridone.style.padding = ".5pc";




//create image
let idwrapgridoneimg = document.createElement("img");
idwrapgridoneimg.setAttribute("src", "./../../abst1_slash.jpg");
idwrapgridoneimg.style.height = "5pc";
idwrapgridoneimg.style.width = "5pc";
idwrapgridoneimg.style.textAlign = "center";
idwrapgridoneimg.style.borderRadius = "100%";

idwrapgridone.appendChild(idwrapgridoneimg);

//create gridbox title
let idwrapgridonetitle = document.createElement("p");
idwrapgridonetitle.innerHTML = "History & Establishment";
idwrapgridonetitle.style.fontSize = "1.5rem";
idwrapgridonetitle.style.fontWeight = "bolder";
idwrapgridonetitle.style.textAlign = "center"; //r

idwrapgridone.appendChild(idwrapgridonetitle);

//box 2

let idwrapgridtwo = document.createElement("div");

//append div to idwrapgrid

idwrapgrid.appendChild(idwrapgridtwo);
idwrapgridtwo.style.display = "flex";
idwrapgridtwo.style.flexDirection = "column";
idwrapgridtwo.style.gap = "1pc";
idwrapgridtwo.style.alignItems = "center";
idwrapgridtwo.style.justifyContent = "center";
idwrapgridtwo.style.textAlign = "center";
idwrapgridtwo.style.backgroundColor = "white";
idwrapgridtwo.style.borderRadius = ".4pc";
idwrapgridtwo.style.color = "black";
idwrapgridtwo.style.padding = ".5pc";




//create image
let idwrapgridtwoimg = document.createElement("img");
idwrapgridtwoimg.setAttribute("src", "./../../ano_girl.jpg");
idwrapgridtwoimg.style.height = "5pc";
idwrapgridtwoimg.style.width = "5pc";
idwrapgridtwoimg.style.textAlign = "center";
idwrapgridtwoimg.style.borderRadius = "100%";

idwrapgridtwo.appendChild(idwrapgridtwoimg);

//create gridbox title
let idwrapgridtwotitle = document.createElement("p");
idwrapgridtwotitle.innerHTML = "Government Economy";
idwrapgridtwotitle.style.fontSize = "1.5rem";
idwrapgridtwotitle.style.fontWeight = "bolder";
idwrapgridtwotitle.style.textAlign = "center"; //r

idwrapgridtwo.appendChild(idwrapgridtwotitle);

//===========box 3

let idwrapgridthree = document.createElement("div");

//append div to idwrapgrid

idwrapgrid.appendChild(idwrapgridthree);
idwrapgridthree.style.display = "flex";
idwrapgridthree.style.flexDirection = "column";
idwrapgridthree.style.gap = "1pc";
idwrapgridthree.style.alignItems = "center";
idwrapgridthree.style.justifyContent = "center";
idwrapgridthree.style.textAlign = "center";
idwrapgridthree.style.backgroundColor = "white";
idwrapgridthree.style.borderRadius = ".4pc";
idwrapgridthree.style.color = "black";
idwrapgridthree.style.padding = ".5pc";




//create image
let idwrapgridthreeimg = document.createElement("img");
idwrapgridthreeimg.setAttribute("src", "./../../abst4.jpg");
idwrapgridthreeimg.style.height = "5pc";
idwrapgridthreeimg.style.width = "5pc";
idwrapgridthreeimg.style.textAlign = "center";
idwrapgridthreeimg.style.borderRadius = "100%";

idwrapgridthree.appendChild(idwrapgridthreeimg);

//create gridbox title
let idwrapgridthreetitle = document.createElement("p");
idwrapgridthreetitle.innerHTML = "Constitution & Government Law";
idwrapgridthreetitle.style.fontSize = "1.5rem";
idwrapgridthreetitle.style.fontWeight = "bolder";
idwrapgridthreetitle.style.textAlign = "center"; //r

idwrapgridthree.appendChild(idwrapgridthreetitle);

//=============box4

let idwrapgridfour = document.createElement("div");

//append div to idwrapgrid

idwrapgrid.appendChild(idwrapgridfour);
idwrapgridfour.style.display = "flex";
idwrapgridfour.style.flexDirection = "column";
idwrapgridfour.style.gap = "1pc";
idwrapgridfour.style.alignItems = "center";
idwrapgridfour.style.justifyContent = "center";
idwrapgridfour.style.textAlign = "center";
idwrapgridfour.style.backgroundColor = "white";
idwrapgridfour.style.borderRadius = ".4pc";
idwrapgridfour.style.color = "black";
idwrapgridfour.style.padding = ".5pc";




//create image
let idwrapgridfourimg = document.createElement("img");
idwrapgridfourimg.setAttribute("src", "./../../abst3_slash.jpg");
idwrapgridfourimg.style.height = "5pc";
idwrapgridfourimg.style.width = "5pc";
idwrapgridfourimg.style.textAlign = "center";
idwrapgridfourimg.style.borderRadius = "100%";

idwrapgridfour.appendChild(idwrapgridfourimg);

//create gridbox title
let idwrapgridfourtitle = document.createElement("p");
idwrapgridfourtitle.innerHTML = "International & Current Affairs";
idwrapgridfourtitle.style.fontSize = "1.5rem";
idwrapgridfourtitle.style.fontWeight = "bolder";
idwrapgridfourtitle.style.textAlign = "center"; //r

idwrapgridfour.appendChild(idwrapgridfourtitle);

//=========================box 5

let idwrapgrid5 = document.createElement("div");

//append div to idwrapgrid

idwrapgrid.appendChild(idwrapgrid5);
idwrapgrid5.style.display = "flex";
idwrapgrid5.style.flexDirection = "column";
idwrapgrid5.style.gap = "1pc";
idwrapgrid5.style.alignItems = "center";
idwrapgrid5.style.justifyContent = "center";
idwrapgrid5.style.textAlign = "center";
idwrapgrid5.style.backgroundColor = "white";
idwrapgrid5.style.borderRadius = ".4pc";
idwrapgrid5.style.color = "black";
idwrapgrid5.style.padding = ".5pc";




//create image
let idwrapgrid5img = document.createElement("img");
idwrapgrid5img.setAttribute("src", "./../../abst2_slash.jpg");
idwrapgrid5img.style.height = "5pc";
idwrapgrid5img.style.width = "5pc";
idwrapgrid5img.style.textAlign = "center";
idwrapgrid5img.style.borderRadius = "100%";

idwrapgrid5.appendChild(idwrapgrid5img);

//create gridbox title
let idwrapgrid5title = document.createElement("p");
idwrapgrid5title.innerHTML = "Business & Administration";
idwrapgrid5title.style.fontSize = "1.5rem";
idwrapgrid5title.style.fontWeight = "bolder";
idwrapgrid5title.style.textAlign = "center"; //r

idwrapgrid5.appendChild(idwrapgrid5title);

let idwrapgrid6 = document.createElement("div");

//append div to idwrapgrid

idwrapgrid.appendChild(idwrapgrid6);
idwrapgrid6.style.display = "flex";
idwrapgrid6.style.flexDirection = "column";
idwrapgrid6.style.gap = "1pc";
idwrapgrid6.style.alignItems = "center";
idwrapgrid6.style.justifyContent = "center";
idwrapgrid6.style.textAlign = "center";
idwrapgrid6.style.backgroundColor = "white";
idwrapgrid6.style.borderRadius = ".4pc";
idwrapgrid6.style.color = "black";
idwrapgrid6.style.padding = ".5pc";



//create image
let idwrapgrid6img = document.createElement("img");
idwrapgrid6img.setAttribute("src", "./../../abst1_slash.jpg");
idwrapgrid6img.style.height = "5pc";
idwrapgrid6img.style.width = "5pc";
idwrapgrid6img.style.textAlign = "center";
idwrapgrid6img.style.borderRadius = "100%";


idwrapgrid6.appendChild(idwrapgrid6img);

//create gridbox title
let idwrapgrid6title = document.createElement("p");
idwrapgrid6title.innerHTML = "Budget & Govt. Policies";
idwrapgrid6title.style.fontSize = "1.5rem";
idwrapgrid6title.style.fontWeight = "bolder";
idwrapgrid6title.style.textAlign = "center"; //r

idwrapgrid6.appendChild(idwrapgrid6title);

//END GRID CONTAINER ---=========================

//Start side bar flex container==================
//Outer box that houses the three el
let idwrapflexm = document.createElement("div");

//append to main

idwrapmain.appendChild(idwrapflexm);
idwrapflexm.style.display = "flex";
idwrapflexm.style.flexDirection = "column";
idwrapflexm.style.justifyContent = "space-around";
idwrapflexm.style.gap = "1pc";
idwrapflexm.style.width = "15pc";


//first el
let hes = document.createElement("div");
//append
idwrapflexm.appendChild(hes);
hes.style.backgroundColor = "navy";
hes.style.color = "white";

//title
let hestitle = document.createElement("h2");
hestitle.innerHTML = "Helplines & Emergency Services";
hestitle.style.fontSize = "2rem";
hestitle.style.margin = ".5pc";

hestitle.style.fontWeight = "bolder";
hestitle.style.textAlign = "center";
hestitle.style.borderRadius = ".4pc";


hes.appendChild(hestitle);

//innercontainer with a list of elements 
//====================================================START SERVICE BUTTONS ON SIDEBAR ======================
//5ervice title divs
//first div - Mayor Office - mo - should be a flex - with items spaced between
let mo = document.createElement("div");
mo.style.display = "flex";
mo.style.justifyContent = "space-between";
mo.style.alignItems = "center";
mo.style.padding = ".5pc 1pc .5pc 1pc";
mo.style.borderTop = ".1pc solid #eee";
mo.setAttribute("onclick", "openList()");
mo.style.cursor = "default";


//the div has an el that when clicked drops a list of items
//append to hes
hes.appendChild(mo);
let motitle = document.createElement("p");
motitle.innerHTML = "Mayor Office";
//append
mo.appendChild(motitle);
//moicon shoild be an icon - a down arrow - but i have used an image for now
let moicon = document.createElement("span");
//append
mo.appendChild(moicon);
//moicon.setAttribute("src", "./../../abst1_slash.jpg");
//moicon.style.width = "20px";
moicon.innerHTML = "&DownArrow;";
moicon.style.fontSize = "2rem";
moicon.style.color = "white";



//the div should host a list of elements that appears when the title of container is clicked;
//create list

let molist = document.createElement("ul");

//now the ul list should be absolutely positioned, hidden
molist.style.display = "none";
molist.style.padding = "1pc";
molist.style.border = ".1pc solid #eee";
molist.style.width = "15pc";
molist.style.backgroundColor = "blue";
molist.style.position = "absolute";
molist.style.top = "121pc";
molist.style.left = "77.8%";
molist.style.zIndex = "2";

//list appears when btn is clicked;

function openList() {
    molist.style.display = "block";
    cclist.style.display = "none";
    amblist.style.display = "none";
    eslist.style.display = "none";
    pelist.style.display = "none";
    mo.setAttribute("onclick", "hideList()");
}

function hideList() {
    molist.style.display = "none";
    mo.setAttribute("onclick", "openList()");

}



//append
mo.appendChild(molist);
//create atleast 3 list el

let molist1 = document.createElement("li");
molist1.innerHTML = "Mayor Files";
//append to ul 
molist.appendChild(molist1);

let molist2 = document.createElement("li");
molist2.innerHTML = "Mayor Admin";
//append to ul 
molist.appendChild(molist2);

let molist3 = document.createElement("li");
molist3.innerHTML = "Mayor Legislation";
//append to ul 
molist.appendChild(molist3);


//Now replicate the above div and list items for other services
//Service 2 - City Council

//2nd div - City council - mo - should be a flex - with items spaced between
let cc = document.createElement("div");
cc.style.display = "flex";
cc.style.justifyContent = "space-between";
cc.style.alignItems = "center";
cc.style.padding = ".5pc 1pc .5pc 1pc";
cc.style.borderTop = ".1pc solid #eee";
cc.setAttribute("onclick", "openccList()");
cc.style.cursor = "default";


//the div has an el that when clicked drops a list of items
//append to hes
hes.appendChild(cc);
let cctitle = document.createElement("p");
cctitle.innerHTML = "City Council";
//append
cc.appendChild(cctitle);
//moicon shoild be an icon - a down arrow - but i have used an image for now
let ccicon = document.createElement("span");
//append
cc.appendChild(ccicon);
//ccicon.setAttribute("src", "./../../abst2_slash.jpg");
//ccicon.style.width = "20px";
ccicon.innerHTML = "&DownArrow;";
ccicon.style.fontSize = "2rem";
ccicon.style.color = "white";


//the div should host a list of elements that appears when the title of container is clicked;
//create list

let cclist = document.createElement("ul");

//now the ul list should be absolutely positioned, hidden
cclist.style.display = "none";
cclist.style.padding = "1pc";
cclist.style.border = ".1pc solid #eee";
cclist.style.width = "15pc";
cclist.style.backgroundColor = "blue";
cclist.style.position = "absolute";
cclist.style.top = "123.7pc"; //when banner is open - slightly lower
cclist.style.left = "77.8%";
cclist.style.zIndex = "2";

//list appears when btn is clicked;

function openccList() {
    cclist.style.display = "block";
    amblist.style.display = "none";
    eslist.style.display = "none";
    molist.style.display = "none";
    pelist.style.display = "none";
    cc.setAttribute("onclick", "hideccList()");
}

function hideccList() {
    cclist.style.display = "none";
    cc.setAttribute("onclick", "openccList()");

}



//append
cc.appendChild(cclist);
//create atleast 3 list el

let cclist1 = document.createElement("li");
cclist1.innerHTML = "City council Files";
//append to ul 
cclist.appendChild(cclist1);

let cclist2 = document.createElement("li");
cclist2.innerHTML = "City Council Admin";
//append to ul 
cclist.appendChild(cclist2);

let cclist3 = document.createElement("li");
cclist3.innerHTML = "City Council Legislation";
//append to ul 
cclist.appendChild(cclist3);


//3 div - Police Emergency - pe - should be a flex - with items spaced between
let pe = document.createElement("div");
pe.style.display = "flex";
pe.style.justifyContent = "space-between";
pe.style.alignItems = "center";
pe.style.padding = ".5pc 1pc .5pc 1pc";
pe.style.borderTop = ".1pc solid #eee";
pe.setAttribute("onclick", "openpeList()");
pe.style.cursor = "default";


//the div has an el that when clicked drops a list of items
//append to hes
hes.appendChild(pe);
let petitle = document.createElement("p");
petitle.innerHTML = "Police Emergency";
//append
pe.appendChild(petitle);
//moicon shoild be an icon - a down arrow - but i have used an image for now
let peicon = document.createElement("span");
//append
pe.appendChild(peicon);
//peicon.setAttribute("src", "./../../abst3_slash.jpg");
//peicon.style.width = "20px";
peicon.innerHTML = "&DownArrow;";
peicon.style.fontSize = "2rem";
peicon.style.color = "white";


//the div should host a list of elements that appears when the title of container is clicked;
//create list

let pelist = document.createElement("ul");

//now the ul list should be absolutely positioned, hidden
pelist.style.display = "none";
pelist.style.padding = "1pc";
pelist.style.border = ".1pc solid #eee";
pelist.style.width = "15pc";
pelist.style.backgroundColor = "blue";
pelist.style.position = "absolute";
pelist.style.top = "126.5pc";
pelist.style.left = "77.8%";
pelist.style.zIndex = "2";

//list appears when btn is clicked;

function openpeList() {
    pelist.style.display = "block";
    amblist.style.display = "none";
    molist.style.display = "none";
    eslist.style.display = "none";
    cclist.style.display = "none";



    pe.setAttribute("onclick", "hidepeList()");
}

function hidepeList() {
    pelist.style.display = "none";
    pe.setAttribute("onclick", "openpeList()");

}



//append
pe.appendChild(pelist);
//create atleast 3 list el

let pelist1 = document.createElement("li");
pelist1.innerHTML = "Police Emergency Files";
//append to ul 
pelist.appendChild(pelist1);

let pelist2 = document.createElement("li");
pelist2.innerHTML = "Police Emergency Admin";
//append to ul 
pelist.appendChild(pelist2);

let pelist3 = document.createElement("li");
pelist3.innerHTML = "Police Emergency Legislation";
//append to ul 
pelist.appendChild(pelist3);


//4 div - Ambulance - amb - should be a flex - with items spaced between
let amb = document.createElement("div");
amb.style.display = "flex";
amb.style.justifyContent = "space-between";
amb.style.alignItems = "center";
amb.style.padding = ".5pc 1pc .5pc 1pc";
amb.style.borderTop = ".1pc solid #eee";
amb.setAttribute("onclick", "openambList()");
amb.style.cursor = "default";


//the div has an el that when clicked drops a list of items
//append to hes
hes.appendChild(amb);
let ambtitle = document.createElement("p");
ambtitle.innerHTML = "Ambulance";
//append
amb.appendChild(ambtitle);
//moicon shoild be an icon - a down arrow - but i have used an image for now
let ambicon = document.createElement("span");
//append
amb.appendChild(ambicon);
//ambicon.setAttribute("src", "./../../ano_girl.jpg");
//ambicon.style.width = "20px";
ambicon.innerHTML = "&DownArrow;";
ambicon.style.fontSize = "2rem";
ambicon.style.color = "white";


//the div should host a list of elements that appears when the title of container is clicked;
//create list

let amblist = document.createElement("ul");

//now the ul list should be absolutely positioned, hidden
amblist.style.display = "none";
amblist.style.padding = "1pc";
amblist.style.border = ".1pc solid #eee";
amblist.style.width = "15pc";
amblist.style.backgroundColor = "blue";
amblist.style.position = "absolute";
amblist.style.top = "129.5pc";
amblist.style.left = "77.8%";
amblist.style.zIndex = "2";

//list appears when btn is clicked;

function openambList() {
    amblist.style.display = "block";
    eslist.style.display = "none";
    molist.style.display = "none";
    pelist.style.display = "none";
    cclist.style.display = "none";

    amb.setAttribute("onclick", "hideambList()");
}

function hideambList() {
    amblist.style.display = "none";
    amb.setAttribute("onclick", "openambList()");

}



//append
amb.appendChild(amblist);
//create atleast 3 list el

let amblist1 = document.createElement("li");
amblist1.innerHTML = "Ambulance Files";
//append to ul 
amblist.appendChild(amblist1);

let amblist2 = document.createElement("li");
amblist2.innerHTML = "Ambulance Admin";
//append to ul 
amblist.appendChild(amblist2);

let amblist3 = document.createElement("li");
amblist3.innerHTML = "Ambulance Legislation";
//append to ul 
amblist.appendChild(amblist3);




//5 div - E-Services - es - should be a flex - with items spaced between
let es = document.createElement("div");
es.style.display = "flex";
es.style.justifyContent = "space-between";
es.style.alignItems = "center";
es.style.padding = ".5pc 1pc .5pc 1pc";
es.style.borderTop = ".1pc solid #eee";
es.setAttribute("onclick", "openesList()");
es.style.cursor = "default";


//the div has an el that when clicked drops a list of items
//append to hes
hes.appendChild(es);
let estitle = document.createElement("p");
estitle.innerHTML = "E-Services Emergency";
//append
es.appendChild(estitle);
//moicon shoild be an icon - a down arrow - but i have used an image for now
let esicon = document.createElement("span");
//append
es.appendChild(esicon);
//esicon.setAttribute("src", "./../../abst1_slash.jpg");
//esicon.style.width = "20px";
esicon.innerHTML = "&DownArrow;";
esicon.style.fontSize = "2rem";
esicon.style.color = "white";


//the div should host a list of elements that appears when the title of container is clicked;
//create list

let eslist = document.createElement("ul");

//now the ul list should be absolutely positioned, hidden
eslist.style.display = "none";
eslist.style.padding = "1pc";
eslist.style.border = ".1pc solid #eee";
eslist.style.width = "15pc";
eslist.style.backgroundColor = "blue";
eslist.style.position = "absolute";
eslist.style.top = "132.3pc";
eslist.style.left = "77.8%";
eslist.style.zIndex = "2";

//list appears when btn is clicked;

function openesList() {
    eslist.style.display = "block";
    amblist.style.display = "none";
    molist.style.display = "none";
    pelist.style.display = "none";
    cclist.style.display = "none";

    es.setAttribute("onclick", "hideesList()");
}

function hideesList() {
    eslist.style.display = "none";
    es.setAttribute("onclick", "openesList()");

}



//append
es.appendChild(eslist);
//create atleast 3 list el

let eslist1 = document.createElement("li");
eslist1.innerHTML = "E-Services Files";
//append to ul 
eslist.appendChild(eslist1);

let eslist2 = document.createElement("li");
eslist2.innerHTML = "E-Services Admin";
//append to ul 
eslist.appendChild(eslist2);

let eslist3 = document.createElement("li");
eslist3.innerHTML = "E-Services Legislation";
//append to ul 
eslist.appendChild(eslist3);


//END LISTING FOR FIRST SIDE BAR FLEX CONTAINER

//Start Middle button 

//Open vacancies
let ovbtn = document.createElement("button");
ovbtn.innerHTML = "OPEN VACANCIES";
ovbtn.style.fontWeight = "bold";
ovbtn.style.fontSize = "1.5rem";
ovbtn.style.display = "flex";
ovbtn.style.justifyContent = "center";
ovbtn.style.alignItems = "center";


//append to idwrapflexm

idwrapflexm.appendChild(ovbtn);

ovbtn.style.backgroundColor = "darkred";
ovbtn.style.color = "white";
ovbtn.style.width = "100%";
ovbtn.style.height = "2.5pc";
ovbtn.style.padding = "1pc";
ovbtn.style.border = "none";
ovbtn.style.borderRadius = ".2pc";


//END SECOND EL - 

//sTART 3RD ELEMENT - 
//Reports download section
let rds = document.createElement("div");
//append
idwrapflexm.appendChild(rds);

rds.style.backgroundColor = "navy";
rds.style.color = "#ffffff";
rds.style.borderRadius = ".4pc";

//has three reports
//Report 1
let rdsr1 = document.createElement("a");
//a flex box with file icon and file name
rdsr1.setAttribute("href", "");
rdsr1.setAttribute("download", "file.pdf");
rdsr1.style.display = "flex";
rdsr1.style.gap = "1pc";
rdsr1.style.alignItems = "center";
rdsr1.style.display = "flex";
rdsr1.style.padding = ".5pc 1pc .5pc 1pc";




//append to rds
rds.appendChild(rdsr1);

//create icon and report title
let rdsr1icon = document.createElement("img");
rdsr1icon.setAttribute("src", "./../../ano_girl.jpg");
rdsr1icon.style.width = "20px";
//append icon to link

rdsr1.appendChild(rdsr1icon);

let rdsr1title = document.createElement("span");
rdsr1title.innerHTML = "2022 Economy Report";
rdsr1title.style.color = "white";

//append
rdsr1.appendChild(rdsr1title);


//Report 2
let rdsr2 = document.createElement("a");
//a flex box with file icon and file name
rdsr2.setAttribute("href", "");
rdsr2.setAttribute("download", "filexx.pdf");
rdsr2.style.display = "flex";
rdsr2.style.gap = "1pc";
rdsr2.style.alignItems = "center";
rdsr2.style.display = "flex";
rdsr2.style.padding = ".5pc 1pc .5pc 1pc";


//append to rds
rds.appendChild(rdsr2);

//create icon and report title
let rdsr2icon = document.createElement("img");
rdsr2icon.setAttribute("src", "./../../ano_girl.jpg");
rdsr2icon.style.width = "20px";
//append icon to link

rdsr2.appendChild(rdsr2icon);

let rdsr2title = document.createElement("span");
rdsr2title.innerHTML = "30 Days Plans of Govt";
rdsr2title.style.color = "white";

//append
rdsr2.appendChild(rdsr2title);



//Report 3
let rdsr3 = document.createElement("a");
//a flex box with file icon and file name
rdsr3.setAttribute("href", "");
rdsr3.setAttribute("download", "filecc.pdf");
rdsr3.style.display = "flex";
rdsr3.style.gap = "1pc";
rdsr3.style.alignItems = "center";
rdsr3.style.display = "flex";
rdsr3.style.padding = ".5pc 1pc .5pc 1pc";

//append to rds
rds.appendChild(rdsr3);

//create icon and report title
let rdsr3icon = document.createElement("img");
rdsr3icon.setAttribute("src", "./../../ano_girl.jpg");
rdsr3icon.style.width = "20px";
//append icon to link

rdsr3.appendChild(rdsr3icon);

let rdsr3title = document.createElement("span");
rdsr3title.innerHTML = "Court Case about TAX";
rdsr3title.style.color = "white";

//append
rdsr3.appendChild(rdsr3title);


//=================================END INFO DESK ======================================
//START EVENTS SECTION
//main > 1, 2
//1 > title > img - div > title - >div - item1, item2> div - 4 img flex;
//2 - title > tabcontainer - ne, mt

//main events container
let evnt = document.createElement("div");
evnt.style.backgroundColor = "navy";
evnt.style.color = "white";
evnt.style.padding = "2pc";
evnt.style.display = "flex";
evnt.style.justifyContent = "center";
evnt.style.alignItems = "center";
evnt.style.gap = "1pc";

//append
main.appendChild(evnt);

//create recent events box - has images

let re = document.createElement("div");
//append
evnt.appendChild(re);

//title
let retitle = document.createElement("h2");
//append
re.appendChild(retitle);
retitle.innerHTML = "Recent Events";
retitle.style.fontSize = "2.5rem";
retitle.style.fontWeight = "bolder";

//main img
let reimfig = document.createElement("figure");
//append 
re.appendChild(reimfig);
let remimg = document.createElement("img");
remimg.setAttribute("src", "./../../abst1_slash.jpg");
remimg.setAttribute("alt", "Image Main");

remimg.style.width = "30pc";
remimg.style.height = "20pc";
remimg.style.marginBottom = "1pc";


//append
reimfig.appendChild(remimg);

//caption
let reimgcap = document.createElement("div");
//append to figure
reimfig.appendChild(reimgcap);
reimgcap.style.padding = "1pc";
reimgcap.style.backgroundColor = "rgba(0, 0, 0, 0.781)";
reimgcap.style.color = "white";
reimgcap.style.borderLeft = ".2pc solid brown";
reimgcap.style.width = "30pc";
reimgcap.style.position = "absolute";
reimgcap.style.top = "167.5pc";//when banner is open
reimgcap.style.left = "6.5pc";





//caption
let reimgcaptitle = document.createElement("p");
reimgcaptitle.innerHTML = "2K18 Night Celebration"
reimgcaptitle.style.fontSize = "1.4rem";
reimgcaptitle.style.fontWeight = "bolder";

//append
reimgcap.appendChild(reimgcaptitle);

//create a div under caption showing no of photos and videos

let reimgcapnums = document.createElement("div");
//append
reimgcap.appendChild(reimgcapnums);

//should be flex

reimgcapnums.style.display = "flex";
reimgcapnums.style.gap = "1pc";
reimgcapnums.style.alignItems = "center";


//create num of photos
let numofphotos = document.createElement("p");
//flex it 
numofphotos.style.display = "flex";
numofphotos.style.justifyContent = "center";
numofphotos.style.alignItems = "center";
numofphotos.style.gap = ".5pc";

//append
reimgcapnums.appendChild(numofphotos);

//has an icom and text
//create icon
let numofphotosicon = document.createElement("img");
numofphotosicon.setAttribute("src", "./../../ano_girl.jpg");
numofphotosicon.style.width = "10px";

//append
numofphotos.appendChild(numofphotosicon);

//create text

let numofphotostxt = document.createElement("span");
numofphotostxt.innerHTML = "84 Photos";
//append

numofphotos.appendChild(numofphotostxt);
//vertical break

let reimgcapbr = document.createElement("p"); 
reimgcapbr.innerHTML = "&VerticalLine;";
reimgcapbr.style.color = "#666";
//append
reimgcapnums.appendChild(reimgcapbr);

//create numof vidoes
let numofvids = document.createElement("p");
//flex it 
numofvids.style.display = "flex";
numofvids.style.justifyContent = "center";
numofvids.style.alignItems = "center";
numofvids.style.gap = ".5pc";

//append
reimgcapnums.appendChild(numofvids);

//has an icom and text
//create icon
let numofvidsicon = document.createElement("img");
numofvidsicon.setAttribute("src", "./../../abst2_slash.jpg");
numofvidsicon.style.width = "10px";

//append
numofvids.appendChild(numofvidsicon);

//create text

let numofvidstxt = document.createElement("span");
numofvidstxt.innerHTML = "16 Videos";
//append

numofvids.appendChild(numofvidstxt);

//4 images flex

let reimgs = document.createElement("div");
//append
re.appendChild(reimgs);
reimgs.style.display = "flex";
reimgs.style.alignItems = "center";
reimgs.style.gap = ".5pc";

//create images
//image 1
let reimgs1 = document.createElement("img");
reimgs1.setAttribute("src", "./../../abst2_slash.jpg");
reimgs1.setAttribute("alt", "Image 1");

reimgs1.style.width = "100px";
reimgs1.style.borderRadius = ".4pc";
//append
reimgs.appendChild(reimgs1);

//image 2
let reimgs2 = document.createElement("img");
reimgs2.setAttribute("src", "./../../abst1_slash.jpg");
reimgs2.setAttribute("alt", "Image 2");

reimgs2.style.width = "100px";
reimgs2.style.borderRadius = ".4pc";
//append
reimgs.appendChild(reimgs2);

//image 3
let reimgs3 = document.createElement("img");
reimgs3.setAttribute("src", "./../../abst2_slash.jpg");
reimgs3.setAttribute("alt", "Image 3");

reimgs3.style.width = "100px";
reimgs3.style.borderRadius = ".4pc";
//append
reimgs.appendChild(reimgs3);


//image 4
let reimgs4 = document.createElement("img");
reimgs4.setAttribute("src", "./../../abst4.jpg");
reimgs4.setAttribute("alt", "Image 4");

reimgs4.style.width = "90px";
reimgs4.style.borderRadius = ".4pc";
//append
reimgs.appendChild(reimgs4);

//create second container
//upcoming schedules

let us = document.createElement("div");
us.style.width = "50%";
//append
evnt.appendChild(us);

let ustitle = document.createElement("h2");//p element creates a very big white-space- watch out its use
//append
us.appendChild(ustitle);
ustitle.innerHTML = "Upcoming Schedules";
ustitle.style.fontSize = "2.5rem";
ustitle.style.fontWeight = "bolder";

//tabcontainer

let ustabwrap = document.createElement("div");
//append
us.appendChild(ustabwrap);

//create btn container
let ustbbtns = document.createElement("div");
//append
ustabwrap.appendChild(ustbbtns);
//create buttons
//tab btn 1
let usnxtev = document.createElement("button");
usnxtev.innerHTML = "NEXT EVENTS";
//append
ustbbtns.appendChild(usnxtev);
usnxtev.setAttribute("onclick", "openSchedule(event, 'eventsTab')");
//create class and id 
//class is same for all tab buttons
usnxtev.setAttribute("class", "evClass");
usnxtev.setAttribute("id", "defaultEvent");

usnxtev.style.border = "none";
usnxtev.style.height = "2.5pc";
usnxtev.style.width = "10pc";
usnxtev.style.backgroundColor = "white";
usnxtev.style.fontWeight = "bold";
usnxtev.style.fontSize = "1.4rem";
usnxtev.style.color = "black";


//tab btn 2
let usmt = document.createElement("button");
usmt.innerHTML = "MEETINGS";
//append
ustbbtns.appendChild(usmt);
usmt.setAttribute("onclick", "openSchedule(event, 'meetTab')");
usmt.setAttribute("class", "evClass");

usmt.style.border = "none";
usmt.style.height = "2.5pc";
usmt.style.width = "8pc";
usmt.style.color = "white";
usmt.style.backgroundColor = "darkred";
usmt.style.fontWeight = "bold";
usmt.style.fontSize = "1.4rem";
//==================================START TAB CONTENT FOR NEXT EVENTS =============================

//create tab content for next events
//tab content container
let ustabcwrapev = document.createElement("div");
ustabcwrapev.style.backgroundColor = "white";
ustabcwrapev.style.color = "black";
//ustabcwrapev.style.display = "none";


//append
us.appendChild(ustabcwrapev);
//this container holds next events - create an id to specify it
ustabcwrapev.setAttribute("id", "eventsTab");
ustabcwrapev.setAttribute("class", "tabcont");

//event container / tab has four flex boxes
//each has 2 divs - second div has an inner div and a button
//============================START FIRST FLEX BOX IN TAB CONTENT =========================

//create 1st flex box
let evbox1 = document.createElement("div");
//append
ustabcwrapev.appendChild(evbox1);
evbox1.style.display = "flex";
evbox1.style.alignItems = "flex-start";
evbox1.style.padding = ".3pc .5pc .3pc .5pc";

//first evbox1div
//has date and time - flex column
let evbox1dt = document.createElement("div");
evbox1dt.style.padding = ".3pc 0pc .3pc 1pc";
evbox1dt.style.width = "20%";
evbox1dt.style.display = "flex";
evbox1dt.style.flexDirection = "column";

//append
evbox1.appendChild(evbox1dt);
let evbox1dtdate = document.createElement("span");


//append
evbox1dt.appendChild(evbox1dtdate);
evbox1dtdate.innerHTML = "30 JAN, 2022";
evbox1dtdate.style.color = "darkred";
evbox1dtdate.style.fontWeight = "bold";


let evbox1dttime = document.createElement("span");
//append
evbox1dt.appendChild(evbox1dttime);
evbox1dttime.innerHTML = "09:00 P.M";
evbox1dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
evbox1dttime.style.color = "#999";



//create second div - has inner div and button
let evbox1ev  = document.createElement("div");
//append
evbox1.appendChild(evbox1ev);
//flex it
evbox1ev.style.display = "flex";
evbox1ev.style.justifyContent = "space-between";
evbox1ev.style.alignItems = "flex-start";
evbox1ev.style.padding = ".3pc .5pc .3pc .5pc";
evbox1ev.style.width = "80%";



let evbox1evinner = document.createElement("div");
//append
evbox1ev.appendChild(evbox1evinner);
evbox1evinner.style.display = "flex";
evbox1evinner.style.gap = ".5pc";

//image
let evbox1evinnerimg = document.createElement("img");
evbox1evinnerimg.setAttribute("src", "./../../ano_girl.jpg");
evbox1evinnerimg.setAttribute("alt", "Annual cycling");

evbox1evinnerimg.style.width = "70px";
evbox1evinnerimg.style.height = "70px";


evbox1evinner.appendChild(evbox1evinnerimg);
//inner div - holds event name and location
let evbox1evinfo = document.createElement("div");
evbox1evinfo.style.width = "60%";

//append
evbox1evinner.appendChild(evbox1evinfo);

//event name
let evbox1evname = document.createElement("p");
//append
evbox1evinfo.appendChild(evbox1evname);
evbox1evname.innerHTML = "Annual Cycling 2022 for Charity Donation";
evbox1evname.style.fontWeight = "bold";
evbox1evname.style.fontSize = "1.3rem";


//event location
let evbox1evloc = document.createElement("div");
evbox1evloc.style.display = "flex";
evbox1evloc.style.alignItems = "center";
evbox1evloc.style.gap = ".5pc";

//append
evbox1evinfo.appendChild(evbox1evloc);
//create icon
let evbox1evlocicon = document.createElement("img");
//append
evbox1evloc.appendChild(evbox1evlocicon);
evbox1evlocicon.setAttribute("src", "./../../ano_girl.jpg");
evbox1evlocicon.style.width = "10px";

//create location name
let evbox1evlocname = document.createElement("span");
evbox1evlocname.innerHTML = "Mayor Office, New York";
evbox1evlocname.style.color = "#999";
//append
evbox1evloc.appendChild(evbox1evlocname);

//end loc box

//create join button in evinfo container
let evbox1evjoin = document.createElement("button");
evbox1evjoin.setAttribute("class", "joinbtn"); //class does not work in css
evbox1evjoin.innerHTML = "JOIN NOW";
//append
evbox1ev.appendChild(evbox1evjoin);
evbox1evjoin.style.backgroundColor = "transparent";
evbox1evjoin.style.borderRadius = "5pc";
evbox1evjoin.style.border = ".1pc solid #999";
evbox1evjoin.style.height = "2.5pc";
evbox1evjoin.style.width = "8pc";
evbox1evjoin.style.fontSize = "1rem";



//create 2st flex box
let evbox2 = document.createElement("div");
//append
ustabcwrapev.appendChild(evbox2);
evbox2.style.display = "flex";
evbox2.style.alignItems = "flex-start";
evbox2.style.padding = ".3pc .5pc .3pc .5pc";
evbox2.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let evbox2dt = document.createElement("div");
evbox2dt.style.padding = ".3pc 0pc .3pc 1pc";
evbox2dt.style.width = "20%";
evbox2dt.style.display = "flex";
evbox2dt.style.flexDirection = "column";

//append
evbox2.appendChild(evbox2dt);
let evbox2dtdate = document.createElement("span");


//append
evbox2dt.appendChild(evbox2dtdate);
evbox2dtdate.innerHTML = "06 APRIL, 2022";
evbox2dtdate.style.color = "darkred";
evbox2dtdate.style.fontWeight = "bold";


let evbox2dttime = document.createElement("span");
//append
evbox2dt.appendChild(evbox2dttime);
evbox2dttime.innerHTML = "04:00 P.M";
evbox2dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
evbox2dttime.style.color = "#999";



//create second div - has inner div and button
let evbox2ev  = document.createElement("div");
//append
evbox2.appendChild(evbox2ev);
//flex it
evbox2ev.style.display = "flex";
evbox2ev.style.justifyContent = "space-between";
evbox2ev.style.alignItems = "flex-start";
evbox2ev.style.padding = ".3pc .5pc .3pc .5pc";
evbox2ev.style.width = "80%";



let evbox2evinner = document.createElement("div");
//append
evbox2ev.appendChild(evbox2evinner);
evbox2evinner.style.display = "flex";
evbox2evinner.style.gap = ".5pc";

//image
let evbox2evinnerimg = document.createElement("img");
evbox2evinnerimg.setAttribute("src", "./../../ano_girl.jpg");
evbox2evinnerimg.setAttribute("alt", "Cultural Festival");
evbox2evinnerimg.style.width = "70px";
evbox2evinnerimg.style.height = "70px";


evbox2evinner.appendChild(evbox2evinnerimg);
//inner div - holds event name and location
let evbox2evinfo = document.createElement("div");
evbox2evinfo.style.width = "60%";

//append
evbox2evinner.appendChild(evbox2evinfo);

//event name
let evbox2evname = document.createElement("p");
//append
evbox2evinfo.appendChild(evbox2evname);
evbox2evname.innerHTML = "Cultural Festival & Concert at New Year";
evbox2evname.style.fontWeight = "bold";
evbox2evname.style.fontSize = "1.3rem";


//event location
let evbox2evloc = document.createElement("div");
evbox2evloc.style.display = "flex";
evbox2evloc.style.alignItems = "center";
evbox2evloc.style.gap = ".5pc";

//append
evbox2evinfo.appendChild(evbox2evloc);
//create icon
let evbox2evlocicon = document.createElement("img");
//append
evbox2evloc.appendChild(evbox2evlocicon);
evbox2evlocicon.setAttribute("src", "./../../ano_girl.jpg");
evbox2evlocicon.style.width = "10px";

//create location name
let evbox2evlocname = document.createElement("span");
evbox2evlocname.innerHTML = "Mayor Office, West Virginia";
evbox2evlocname.style.color = "#999";
//append
evbox2evloc.appendChild(evbox2evlocname);

//end loc box

//create join button in evinfo container
let evbox2evjoin = document.createElement("button");
evbox2evjoin.innerHTML = "JOIN NOW";
//append
evbox2ev.appendChild(evbox2evjoin);
evbox2evjoin.style.backgroundColor = "transparent";
evbox2evjoin.style.border = ".1pc solid #999";
evbox2evjoin.style.borderRadius = "5pc";
evbox2evjoin.style.height = "2.5pc";
evbox2evjoin.style.width = "8pc";
evbox2evjoin.style.fontSize = "1rem";



//create 3rd flex box
let evbox3 = document.createElement("div");
//append
ustabcwrapev.appendChild(evbox3);
evbox3.style.display = "flex";
evbox3.style.alignItems = "flex-start";
evbox3.style.padding = ".3pc .5pc .3pc .5pc";
evbox3.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let evbox3dt = document.createElement("div");
evbox3dt.style.padding = ".3pc 0pc .3pc 1pc";
evbox3dt.style.width = "20%";
evbox3dt.style.display = "flex";
evbox3dt.style.flexDirection = "column";


//append
evbox3.appendChild(evbox3dt);
let evbox3dtdate = document.createElement("span");


//append
evbox3dt.appendChild(evbox3dtdate);
evbox3dtdate.innerHTML = "21 AUG, 2022";
evbox3dtdate.style.color = "darkred";
evbox3dtdate.style.fontWeight = "bold";

let evbox3dttime = document.createElement("span");
//append
evbox3dt.appendChild(evbox3dttime);
evbox3dttime.innerHTML = "05:00 P.M";
evbox3dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
evbox3dttime.style.color = "#999";



//create second div - has inner div and button
let evbox3ev  = document.createElement("div");
//append
evbox3.appendChild(evbox3ev);
//flex it
evbox3ev.style.display = "flex";
evbox3ev.style.justifyContent = "space-between";
evbox3ev.style.alignItems = "flex-start";
evbox3ev.style.padding = ".3pc .5pc .3pc .5pc";
evbox3ev.style.width = "80%";



let evbox3evinner = document.createElement("div");
//append
evbox3ev.appendChild(evbox3evinner);
evbox3evinner.style.display = "flex";
evbox3evinner.style.gap = ".5pc";

//image
let evbox3evinnerimg = document.createElement("img");
evbox3evinnerimg.setAttribute("src", "./../../ano_girl.jpg");
evbox3evinnerimg.setAttribute("alt", "child labor seminar");
evbox3evinnerimg.style.width = "70px";
evbox3evinnerimg.style.height = "70px";


evbox3evinner.appendChild(evbox3evinnerimg);
//inner div - holds event name and location
let evbox3evinfo = document.createElement("div");
evbox3evinfo.style.width = "60%";

//append
evbox3evinner.appendChild(evbox3evinfo);

//event name
let evbox3evname = document.createElement("p");
//append
evbox3evinfo.appendChild(evbox3evname);
evbox3evname.innerHTML = "Seminar on Child Labor held next Month";
evbox3evname.style.fontWeight = "bold";
evbox3evname.style.fontSize = "1.3rem";


//event location
let evbox3evloc = document.createElement("div");
evbox3evloc.style.display = "flex";
evbox3evloc.style.alignItems = "center";
evbox3evloc.style.gap = ".5pc";

//append
evbox3evinfo.appendChild(evbox3evloc);
//create icon
let evbox3evlocicon = document.createElement("img");
//append
evbox3evloc.appendChild(evbox3evlocicon);
evbox3evlocicon.setAttribute("src", "./../../ano_girl.jpg");
evbox3evlocicon.style.width = "10px";

//create location name
let evbox3evlocname = document.createElement("span");
evbox3evlocname.innerHTML = "Mayor Office, Georgia";
evbox3evlocname.style.color = "#999";
//append
evbox3evloc.appendChild(evbox3evlocname);

//end loc box

//create join button in evinfo container
let evbox3evjoin = document.createElement("button");
evbox3evjoin.innerHTML = "JOIN NOW";
//append
evbox3ev.appendChild(evbox3evjoin);
evbox3evjoin.style.backgroundColor = "transparent";
evbox3evjoin.style.borderRadius = "5pc";
evbox3evjoin.style.border = ".1pc solid #999";
evbox3evjoin.style.height = "2.5pc";
evbox3evjoin.style.width = "8pc";
evbox3evjoin.style.fontSize = "1rem";



//create 4rd flex box
let evbox4 = document.createElement("div");
//append
ustabcwrapev.appendChild(evbox4);
evbox4.style.display = "flex";
evbox4.style.alignItems = "flex-start";
evbox4.style.padding = ".3pc .5pc .3pc .5pc";
evbox4.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let evbox4dt = document.createElement("div");
evbox4dt.style.padding = ".3pc 0pc .3pc 1pc";
evbox4dt.style.width = "20%";
evbox4dt.style.display = "flex";
evbox4dt.style.flexDirection = "column";

//append
evbox4.appendChild(evbox4dt);
let evbox4dtdate = document.createElement("span");


//append
evbox4dt.appendChild(evbox4dtdate);
evbox4dtdate.innerHTML = "21 AUG, 2022";
evbox4dtdate.style.color = "darkred";
evbox4dtdate.style.fontWeight = "bold";

let evbox4dttime = document.createElement("span");
//append
evbox4dt.appendChild(evbox4dttime);
evbox4dttime.innerHTML = "05:00 P.M";
evbox4dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
evbox4dttime.style.color = "#999";



//create second div - has inner div and button
let evbox4ev  = document.createElement("div");
//append
evbox4.appendChild(evbox4ev);
//flex it
evbox4ev.style.display = "flex";
evbox4ev.style.justifyContent = "space-between";
evbox4ev.style.alignItems = "flex-start";
evbox4ev.style.padding = ".3pc .5pc .3pc .5pc";
evbox4ev.style.width = "80%";



let evbox4evinner = document.createElement("div");
//append
evbox4ev.appendChild(evbox4evinner);
evbox4evinner.style.display = "flex";
evbox4evinner.style.gap = ".5pc";

//image
let evbox4evinnerimg = document.createElement("img");
evbox4evinnerimg.setAttribute("src", "./../../ano_girl.jpg");
evbox4evinnerimg.setAttribute("alt", "Protest Image");
evbox4evinnerimg.style.width = "70px";
evbox4evinnerimg.style.height = "70px";


evbox4evinner.appendChild(evbox4evinnerimg);
//inner div - holds event name and location
let evbox4evinfo = document.createElement("div");
evbox4evinfo.style.width = "60%";

//append
evbox4evinner.appendChild(evbox4evinfo);

//event name
let evbox4evname = document.createElement("p");
//append
evbox4evinfo.appendChild(evbox4evname);
evbox4evname.innerHTML = "Protest against women rights violence";
evbox4evname.style.fontWeight = "bold";
evbox4evname.style.fontSize = "1.3rem";


//event location
let evbox4evloc = document.createElement("div");
evbox4evloc.style.display = "flex";
evbox4evloc.style.alignItems = "center";
evbox4evloc.style.gap = ".5pc";

//append
evbox4evinfo.appendChild(evbox4evloc);
//create icon
let evbox4evlocicon = document.createElement("img");
//append
evbox4evloc.appendChild(evbox4evlocicon);
evbox4evlocicon.setAttribute("src", "./../../ano_girl.jpg");
evbox4evlocicon.style.width = "10px";

//create location name
let evbox4evlocname = document.createElement("span");
evbox4evlocname.innerHTML = "Mayor Office, Georgia";
evbox4evlocname.style.color = "#999";
//append
evbox4evloc.appendChild(evbox4evlocname);

//end loc box

//create join button in evinfo container
let evbox4evjoin = document.createElement("button");
evbox4evjoin.innerHTML = "JOIN NOW";
//append
evbox4ev.appendChild(evbox4evjoin);
evbox4evjoin.style.backgroundColor = "transparent";
evbox4evjoin.style.borderRadius = "5pc";
evbox4evjoin.style.border = ".1pc solid #999";
evbox4evjoin.style.height = "2.5pc";
evbox4evjoin.style.width = "8pc";
evbox4evjoin.style.fontSize = "1rem";

//===================================START MEETINGS TAB CONTENT ================================

//create tab content for next events
//tab content container
let ustabcwrapmt = document.createElement("div");
ustabcwrapmt.style.backgroundColor = "aliceblue";
ustabcwrapmt.style.color = "black";
//ustabcwrapmt.style.display = "none";


//append
us.appendChild(ustabcwrapmt);
//this container holds next events - create an id to specify it
ustabcwrapmt.setAttribute("id", "meetTab");
ustabcwrapmt.setAttribute("class", "tabcont");

//event container / tab has four flex boxes
//each has 2 divs - second div has an inner div and a button
//============================START FIRST FLEX BOX IN TAB CONTENT =========================

//create 1st flex box
let mtbox1 = document.createElement("div");
//append
ustabcwrapmt.appendChild(mtbox1);
mtbox1.style.display = "flex";
mtbox1.style.alignItems = "flex-start";
mtbox1.style.padding = ".3pc .5pc .3pc .5pc";

//first evbox1div
//has date and time - flex column
let mtbox1dt = document.createElement("div");
mtbox1dt.style.padding = ".3pc 0pc .3pc 1pc";
mtbox1dt.style.width = "20%";
mtbox1dt.style.display = "flex";
mtbox1dt.style.flexDirection = "column";

//append
mtbox1.appendChild(mtbox1dt);
let mtbox1dtdate = document.createElement("span");


//append
mtbox1dt.appendChild(mtbox1dtdate);
mtbox1dtdate.innerHTML = "19 JUL, 2022";
mtbox1dtdate.style.color = "darkred";
mtbox1dtdate.style.fontWeight = "bold";


let mtbox1dttime = document.createElement("span");
//append
mtbox1dt.appendChild(mtbox1dttime);
mtbox1dttime.innerHTML = "03:00 P.M";
mtbox1dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
mtbox1dttime.style.color = "#999";



//create second div - has inner div and button
let mtbox1mt  = document.createElement("div");
//append
mtbox1.appendChild(mtbox1mt);
//flex it
mtbox1mt.style.display = "flex";
mtbox1mt.style.justifyContent = "space-between";
mtbox1mt.style.alignItems = "flex-start";
mtbox1mt.style.padding = ".3pc .5pc .3pc .5pc";
mtbox1mt.style.width = "80%";



let mtbox1mtinner = document.createElement("div");
//append
mtbox1mt.appendChild(mtbox1mtinner);
mtbox1mtinner.style.display = "flex";
mtbox1mtinner.style.gap = ".5pc";

//image
let mtbox1mtinnerimg = document.createElement("img");
mtbox1mtinnerimg.setAttribute("src", "./../../ano_girl.jpg");
mtbox1mtinnerimg.setAttribute("alt", "Annual cycling");

mtbox1mtinnerimg.style.width = "70px";
mtbox1mtinnerimg.style.height = "70px";


mtbox1mtinner.appendChild(mtbox1mtinnerimg);
//inner div - holds event name and location
let mtbox1mtinfo = document.createElement("div");
mtbox1mtinfo.style.width = "60%";

//append
mtbox1mtinner.appendChild(mtbox1mtinfo);

//event name
let mtbox1mtname = document.createElement("p");
//append
mtbox1mtinfo.appendChild(mtbox1mtname);
mtbox1mtname.innerHTML = "Annual Leaders General Meeting";
mtbox1mtname.style.fontWeight = "bold";
mtbox1mtname.style.fontSize = "1.3rem";


//event location
let mtbox1mtloc = document.createElement("div");
mtbox1mtloc.style.display = "flex";
mtbox1mtloc.style.alignItems = "center";
mtbox1mtloc.style.gap = ".5pc";

//append
mtbox1mtinfo.appendChild(mtbox1mtloc);
//create icon
let mtbox1mtlocicon = document.createElement("img");
//append
mtbox1mtloc.appendChild(mtbox1mtlocicon);
mtbox1mtlocicon.setAttribute("src", "./../../ano_girl.jpg");
mtbox1mtlocicon.style.width = "10px";

//create location name
let mtbox1mtlocname = document.createElement("span");
mtbox1mtlocname.innerHTML = "Mayor Office, New York";
mtbox1mtlocname.style.color = "#999";
//append
mtbox1mtloc.appendChild(mtbox1mtlocname);

//end loc box

//create join button in evinfo container
let mtbox1mtjoin = document.createElement("button");
mtbox1mtjoin.setAttribute("class", "joinbtn"); //class does not work in css
mtbox1mtjoin.innerHTML = "JOIN NOW";
//append
mtbox1mt.appendChild(mtbox1mtjoin);
mtbox1mtjoin.style.backgroundColor = "transparent";
mtbox1mtjoin.style.borderRadius = "5pc";
mtbox1mtjoin.style.border = ".1pc solid #999";
mtbox1mtjoin.style.height = "2.5pc";
mtbox1mtjoin.style.width = "8pc";
mtbox1mtjoin.style.fontSize = "1rem";



//create 2st flex box
let mtbox2 = document.createElement("div");
//append
ustabcwrapmt.appendChild(mtbox2);
mtbox2.style.display = "flex";
mtbox2.style.alignItems = "flex-start";
mtbox2.style.padding = ".3pc .5pc .3pc .5pc";
mtbox2.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let mtbox2dt = document.createElement("div");
mtbox2dt.style.padding = ".3pc 0pc .3pc 1pc";
mtbox2dt.style.width = "20%";
mtbox2dt.style.display = "flex";
mtbox2dt.style.flexDirection = "column";

//append
mtbox2.appendChild(mtbox2dt);
let mtbox2dtdate = document.createElement("span");


//append
mtbox2dt.appendChild(mtbox2dtdate);
mtbox2dtdate.innerHTML = "10 SEP, 2022";
mtbox2dtdate.style.color = "darkred";
mtbox2dtdate.style.fontWeight = "bold";


let mtbox2dttime = document.createElement("span");
//append
mtbox2dt.appendChild(mtbox2dttime);
mtbox2dttime.innerHTML = "04:00 P.M";
mtbox2dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
mtbox2dttime.style.color = "#999";



//create second div - has inner div and button
let mtbox2mt  = document.createElement("div");
//append
mtbox2.appendChild(mtbox2mt);
//flex it
mtbox2mt.style.display = "flex";
mtbox2mt.style.justifyContent = "space-between";
mtbox2mt.style.alignItems = "flex-start";
mtbox2mt.style.padding = ".3pc .5pc .3pc .5pc";
mtbox2mt.style.width = "80%";



let mtbox2mtinner = document.createElement("div");
//append
mtbox2mt.appendChild(mtbox2mtinner);
mtbox2mtinner.style.display = "flex";
mtbox2mtinner.style.gap = ".5pc";

//image
let mtbox2mtinnerimg = document.createElement("img");
mtbox2mtinnerimg.setAttribute("src", "./../../ano_girl.jpg");
mtbox2mtinnerimg.setAttribute("alt", "Cultural Festival");
mtbox2mtinnerimg.style.width = "70px";
mtbox2mtinnerimg.style.height = "70px";


mtbox2mtinner.appendChild(mtbox2mtinnerimg);
//inner div - holds event name and location
let mtbox2mtinfo = document.createElement("div");
mtbox2mtinfo.style.width = "60%";

//append
mtbox2mtinner.appendChild(mtbox2mtinfo);

//event name
let mtbox2mtname = document.createElement("p");
//append
mtbox2mtinfo.appendChild(mtbox2mtname);
mtbox2mtname.innerHTML = "Internal Affairs Exercise Illustrated";
mtbox2mtname.style.fontWeight = "bold";
mtbox2mtname.style.fontSize = "1.3rem";


//event location
let mtbox2mtloc = document.createElement("div");
mtbox2mtloc.style.display = "flex";
mtbox2mtloc.style.alignItems = "center";
mtbox2mtloc.style.gap = ".5pc";

//append
mtbox2mtinfo.appendChild(mtbox2mtloc);
//create icon
let mtbox2mtlocicon = document.createElement("img");
//append
mtbox2mtloc.appendChild(mtbox2mtlocicon);
mtbox2mtlocicon.setAttribute("src", "./../../abst4.jpg");
mtbox2mtlocicon.style.width = "10px";

//create location name
let mtbox2mtlocname = document.createElement("span");
mtbox2mtlocname.innerHTML = "Mayor Office, West Virginia";
mtbox2mtlocname.style.color = "#999";
//append
mtbox2mtloc.appendChild(mtbox2mtlocname);

//end loc box

//create join button in evinfo container
let mtbox2mtjoin = document.createElement("button");
mtbox2mtjoin.innerHTML = "JOIN NOW";
//append
mtbox2mt.appendChild(mtbox2mtjoin);
mtbox2mtjoin.style.backgroundColor = "transparent";
mtbox2mtjoin.style.border = ".1pc solid #999";
mtbox2mtjoin.style.borderRadius = "5pc";
mtbox2mtjoin.style.height = "2.5pc";
mtbox2mtjoin.style.width = "8pc";
mtbox2mtjoin.style.fontSize = "1rem";



//create 3rd flex box
let mtbox3 = document.createElement("div");
//append
ustabcwrapmt.appendChild(mtbox3);
mtbox3.style.display = "flex";
mtbox3.style.alignItems = "flex-start";
mtbox3.style.padding = ".3pc .5pc .3pc .5pc";
mtbox3.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let mtbox3dt = document.createElement("div");
mtbox3dt.style.padding = ".3pc 0pc .3pc 1pc";
mtbox3dt.style.width = "20%";
mtbox3dt.style.display = "flex";
mtbox3dt.style.flexDirection = "column";


//append
mtbox3.appendChild(mtbox3dt);
let mtbox3dtdate = document.createElement("span");


//append
mtbox3dt.appendChild(mtbox3dtdate);
mtbox3dtdate.innerHTML = "21 AUG, 2022";
mtbox3dtdate.style.color = "darkred";
mtbox3dtdate.style.fontWeight = "bold";

let mtbox3dttime = document.createElement("span");
//append
mtbox3dt.appendChild(mtbox3dttime);
mtbox3dttime.innerHTML = "05:00 P.M";
mtbox3dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
mtbox3dttime.style.color = "#999";


//create second div - has inner div and button
let mtbox3mt  = document.createElement("div");
//append
mtbox3.appendChild(mtbox3mt);
//flex it
mtbox3mt.style.display = "flex";
mtbox3mt.style.justifyContent = "space-between";
mtbox3mt.style.alignItems = "flex-start";
mtbox3mt.style.padding = ".3pc .5pc .3pc .5pc";
mtbox3mt.style.width = "80%";



let mtbox3mtinner = document.createElement("div");
//append
mtbox3mt.appendChild(mtbox3mtinner);
mtbox3mtinner.style.display = "flex";
mtbox3mtinner.style.gap = ".5pc";

//image
let mtbox3mtinnerimg = document.createElement("img");
mtbox3mtinnerimg.setAttribute("src", "./../../abst1_slash.jpg");
mtbox3mtinnerimg.setAttribute("alt", "child labor seminar");
mtbox3mtinnerimg.style.width = "70px";
mtbox3mtinnerimg.style.height = "70px";

mtbox3mtinner.appendChild(mtbox3mtinnerimg);
//inner div - holds event name and location
let mtbox3mtinfo = document.createElement("div");
mtbox3mtinfo.style.width = "60%";

//append
mtbox3mtinner.appendChild(mtbox3mtinfo);

//event name
let mtbox3mtname = document.createElement("p");
//append
mtbox3mtinfo.appendChild(mtbox3mtname);
mtbox3mtname.innerHTML = "Conglomerate Meeting Next month";
mtbox3mtname.style.fontWeight = "bold";
mtbox3mtname.style.fontSize = "1.3rem";


//event location
let mtbox3mtloc = document.createElement("div");
mtbox3mtloc.style.display = "flex";
mtbox3mtloc.style.alignItems = "center";
mtbox3mtloc.style.gap = ".5pc";

//append
mtbox3mtinfo.appendChild(mtbox3mtloc);
//create icon
let mtbox3mtlocicon = document.createElement("img");
//append
mtbox3mtloc.appendChild(mtbox3mtlocicon);
mtbox3mtlocicon.setAttribute("src", "./../../ano_girl.jpg");
mtbox3mtlocicon.style.width = "10px";

//create location name
let mtbox3mtlocname = document.createElement("span");
mtbox3mtlocname.innerHTML = "Mayor Office, Georgia";
mtbox3mtlocname.style.color = "#999";
//append
mtbox3mtloc.appendChild(mtbox3mtlocname);

//end loc box

//create join button in mtinfo container
let mtbox3mtjoin = document.createElement("button");
mtbox3mtjoin.innerHTML = "JOIN NOW";
//append
mtbox3mt.appendChild(mtbox3mtjoin);
mtbox3mtjoin.style.backgroundColor = "transparent";
mtbox3mtjoin.style.borderRadius = "5pc";
mtbox3mtjoin.style.border = ".1pc solid #999";
mtbox3mtjoin.style.height = "2.5pc";
mtbox3mtjoin.style.width = "8pc";
mtbox3mtjoin.style.fontSize = "1rem";

//create 4rd flex box
let mtbox4 = document.createElement("div");
//append
ustabcwrapmt.appendChild(mtbox4);
mtbox4.style.display = "flex";
mtbox4.style.alignItems = "flex-start";
mtbox4.style.padding = ".3pc .5pc .3pc .5pc";
mtbox4.style.borderTop = ".1pc solid #eee";


//first evbox1div
//has date and time - flex column
let mtbox4dt = document.createElement("div");
mtbox4dt.style.padding = ".3pc 0pc .3pc 1pc";
mtbox4dt.style.width = "20%";
mtbox4dt.style.display = "flex";
mtbox4dt.style.flexDirection = "column";

//append
mtbox4.appendChild(mtbox4dt);
let mtbox4dtdate = document.createElement("span");


//append
mtbox4dt.appendChild(mtbox4dtdate);
mtbox4dtdate.innerHTML = "11 MAY, 2022";
mtbox4dtdate.style.color = "darkred";
mtbox4dtdate.style.fontWeight = "bold";

let mtbox4dttime = document.createElement("span");
//append
mtbox4dt.appendChild(mtbox4dttime);
mtbox4dttime.innerHTML = "08:00 P.M";
mtbox4dttime.style.fontWeight = "bold" //Automatic Semicolon Insertion (ASI);
mtbox4dttime.style.color = "#999";



//create second div - has inner div and button
let mtbox4mt  = document.createElement("div");
//append
mtbox4.appendChild(mtbox4mt);
//flex it
mtbox4mt.style.display = "flex";
mtbox4mt.style.justifyContent = "space-between";
mtbox4mt.style.alignItems = "flex-start";
mtbox4mt.style.padding = ".3pc .5pc .3pc .5pc";
mtbox4mt.style.width = "80%";

let mtbox4mtinner = document.createElement("div");
//append
mtbox4mt.appendChild(mtbox4mtinner);
mtbox4mtinner.style.display = "flex";
mtbox4mtinner.style.gap = ".5pc";

//image
let mtbox4mtinnerimg = document.createElement("img");
mtbox4mtinnerimg.setAttribute("src", "./../../ano_girl.jpg");
mtbox4mtinnerimg.setAttribute("alt", "Protest Image");
mtbox4mtinnerimg.style.width = "70px";
mtbox4mtinnerimg.style.height = "70px";


mtbox4mtinner.appendChild(mtbox4mtinnerimg);
//inner div - holds event name and location
let mtbox4mtinfo = document.createElement("div");
mtbox4mtinfo.style.width = "60%";

//append
mtbox4mtinner.appendChild(mtbox4mtinfo);

//event name
let mtbox4mtname = document.createElement("p");
//append
mtbox4mtinfo.appendChild(mtbox4mtname);
mtbox4mtname.innerHTML = "Protest against women rights violence";
mtbox4mtname.style.fontWeight = "bold";
mtbox4mtname.style.fontSize = "1.3rem";


//event location
let mtbox4mtloc = document.createElement("div");
mtbox4mtloc.style.display = "flex";
mtbox4mtloc.style.alignItems = "center";
mtbox4mtloc.style.gap = ".5pc";

//append
mtbox4mtinfo.appendChild(mtbox4mtloc);
//create icon
let mtbox4mtlocicon = document.createElement("img");
//append
mtbox4mtloc.appendChild(mtbox4mtlocicon);
mtbox4mtlocicon.setAttribute("src", "./../../ano_girl.jpg");
mtbox4mtlocicon.style.width = "10px";

//create location name
let mtbox4mtlocname = document.createElement("span");
mtbox4mtlocname.innerHTML = "Mayor Office, Georgia";
mtbox4mtlocname.style.color = "#999";
//append
mtbox4mtloc.appendChild(mtbox4mtlocname);

//end loc box

//create join button in evinfo container
let mtbox4mtjoin = document.createElement("button");
mtbox4mtjoin.innerHTML = "JOIN NOW";
//append
mtbox4mt.appendChild(mtbox4mtjoin);
mtbox4mtjoin.style.backgroundColor = "transparent";
mtbox4mtjoin.style.borderRadius = "5pc";
mtbox4mtjoin.style.border = ".1pc solid #999";
mtbox4mtjoin.style.height = "2.5pc";
mtbox4mtjoin.style.width = "8pc";
mtbox4mtjoin.style.fontSize = "1rem";


//tab function

function openSchedule(evt, usId) {
    //declare all variables
    let mytbtns, mytabcontent, r;

    //get tab content and hide 
    mytabcontent = document.getElementsByClassName("tabcont");
    for(r = 0; r < mytabcontent.length;r++) {
        mytabcontent[r].style.display = "none";
    }

    //get tab buttons and class active to active button

    mytbtns = document.getElementsByClassName("evClass"); 
    for(r = 0; r < mytbtns.length;r++ ) {
        mytbtns[r].className = mytbtns[r].className.replace("active", "");
    }

    //get active tab using button id, awt class active and diplay it
    document.getElementById(usId).style.display = "block";
    evt.currentTarget += "active";
    
}

document.getElementById("defaultEvent").click();

// XPLORE COMMUNITY /MEET OFFICIALS
//=================================================START EXPLORE COMMUNITY ================================

//first div is the main container - holds the box that holds explore community and meet officials boxes
let  emmain = document.createElement("div");
//append to main
main.appendChild(emmain);
emmain.style.padding = "2pc";

//create an inner em container to hold the two divs
let eminmain = document.createElement("div");
//append
emmain.appendChild(eminmain);
//create is as a grid box
eminmain.style.display = "grid";
eminmain.style.gridTemplateColumns = "repeat(2, 1fr)";
eminmain.style.gridAutoRows = "auto";
eminmain.style.margin = "0 auto";
eminmain.style.gap = "1pc";
eminmain.style.width = "90%";

//Now create the explore community box

let exc = document.createElement("div");
//append
eminmain.appendChild(exc);
//has a title and an inner box

let exctitle = document.createElement("h2");
//append

exc.appendChild(exctitle);
exctitle.innerHTML = "Explore Community";
exctitle.style.fontSize = "3rem";

//create inner exc box

let excin = document.createElement("div");

//append

exc.appendChild(excin);
//make it a grid box
excin.style.display = "grid";
excin.style.gridTemplateColumns = "repeat(2, 1fr)";
excin.style.gridAutoRows = "auto";
excin.style.backgroundColor = "#eee";
excin.style.padding = "1pc";

//create the two inner boxes
//flex boxes

//==============Box 1
let excinbx1 = document.createElement("div");
//append
excin.appendChild(excinbx1);

//make it a flex container
excinbx1.style.display = "flex";
excinbx1.style.flexDirection = "column";
excinbx1.style.justifyContent = "space-around";
excinbx1.style.alignItems = "flex-start";
//gap may not be necessary if justify-content: space-around has been specified;
excinbx1.style.gap = "1pc";
excinbx1.style.padding = ".5pc";

//==============Box 2
let excinbx2 = document.createElement("div");
//append
excin.appendChild(excinbx2);

//make it a flex container
excinbx2.style.display = "flex";
excinbx2.style.flexDirection = "column";
excinbx2.style.justifyContent = "space-around";
excinbx2.style.alignItems = "flex-start";
//gap may not be necessary if justify-content: space-around has been specified;
excinbx2.style.gap = "1pc";
excinbx2.style.padding = ".5pc";


//create inner components
//each column has 5 divs - each div an svg and description



//==============================start excinbx1 components
//item 1 - in box 1
let excinbx1it1 = document.createElement("div");
//append
excinbx1.appendChild(excinbx1it1);
//make it a flex container

excinbx1it1.style.display = "flex";
excinbx1it1.style.gap = "1pc";
excinbx1it1.style.alignItems = "center";
excinbx1it1.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx1it1svg1 = document.createElement("img");
//append
excinbx1it1.appendChild(excinbx1it1svg1);

excinbx1it1svg1.setAttribute("src", "./../../abst1_slash.jpg");
excinbx1it1svg1.style.height = "2pc";
excinbx1it1svg1.style.width = "2pc";
excinbx1it1svg1.style.borderRadius = "100%";

//create description of svg1
let excinbx1it1svg1dsc = document.createElement("p");
//append
excinbx1it1.appendChild(excinbx1it1svg1dsc);

excinbx1it1svg1dsc.innerHTML = "Beaches & Nightlife";


//item 2 - box 1
let excinbx1it2 = document.createElement("div");
//append
excinbx1.appendChild(excinbx1it2);
//make it a flex container

excinbx1it2.style.display = "flex";
excinbx1it2.style.gap = "1pc";
excinbx1it2.style.alignItems = "center";
excinbx1it2.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx1it2svg2 = document.createElement("img");
//append
excinbx1it2.appendChild(excinbx1it2svg2);

excinbx1it2svg2.setAttribute("src", "./../../abst2_slash.jpg");
excinbx1it2svg2.style.height = "2pc";
excinbx1it2svg2.style.width = "2pc";
excinbx1it2svg2.style.borderRadius = "100%";

//create description of svg1
let excinbx1it2svg2dsc = document.createElement("p");
//append
excinbx1it2.appendChild(excinbx1it2svg2dsc);

excinbx1it2svg2dsc.innerHTML = "Education Institutes";


//item 3 - box 1
let excinbx1it3 = document.createElement("div");
//append
excinbx1.appendChild(excinbx1it3);
//make it a flex container

excinbx1it3.style.display = "flex";
excinbx1it3.style.gap = "1pc";
excinbx1it3.style.alignItems = "center";
excinbx1it3.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx1it3svg3 = document.createElement("img");
//append
excinbx1it3.appendChild(excinbx1it3svg3);

excinbx1it3svg3.setAttribute("src", "./../../abst3_slash.jpg");
excinbx1it3svg3.style.height = "2pc";
excinbx1it3svg3.style.width = "2pc";
excinbx1it3svg3.style.borderRadius = "100%";

//create description of svg1
let excinbx1it3svg3dsc = document.createElement("p");
//append
excinbx1it3.appendChild(excinbx1it3svg3dsc);

excinbx1it3svg3dsc.innerHTML = "Health & Welfare";



//item 4 - box 1
let excinbx1it4 = document.createElement("div");
//append
excinbx1.appendChild(excinbx1it4);
//make it a flex container

excinbx1it4.style.display = "flex";
excinbx1it4.style.gap = "1pc";
excinbx1it4.style.alignItems = "center";
excinbx1it4.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx1it4svg4 = document.createElement("img");
//append
excinbx1it4.appendChild(excinbx1it4svg4);

excinbx1it4svg4.setAttribute("src", "./../../abst2_slash.jpg");
excinbx1it4svg4.style.height = "2pc";
excinbx1it4svg4.style.width = "2pc";
excinbx1it4svg4.style.borderRadius = "100%";

//create description of svg1
let excinbx1it4svg4dsc = document.createElement("p");
//append
excinbx1it4.appendChild(excinbx1it4svg4dsc);

excinbx1it4svg4dsc.innerHTML = "Entertainment";


//item 5 - box 1
let excinbx1it5 = document.createElement("div");
//append
excinbx1.appendChild(excinbx1it5);
//make it a flex container

excinbx1it5.style.display = "flex";
excinbx1it5.style.gap = "1pc";
excinbx1it5.style.alignItems = "center";
excinbx1it5.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx1it5svg5 = document.createElement("img");
//append
excinbx1it5.appendChild(excinbx1it5svg5);

excinbx1it5svg5.setAttribute("src", "./../../abst4.jpg");
excinbx1it5svg5.style.height = "2pc";
excinbx1it5svg5.style.width = "2pc";
excinbx1it5svg5.style.borderRadius = "100%";

//create description of svg1
let excinbx1it5svg5dsc = document.createElement("p");
//append
excinbx1it5.appendChild(excinbx1it5svg5dsc);

excinbx1it5svg5dsc.innerHTML = "City Council";



//==============================start excinbx2 components
//item 1 - in box 2
let excinbx2it1 = document.createElement("div");
//append
excinbx2.appendChild(excinbx2it1);
//make it a flex container

excinbx2it1.style.display = "flex";
excinbx2it1.style.gap = "1pc";
excinbx2it1.style.alignItems = "center";
excinbx2it1.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx2it1svg1 = document.createElement("img");
//append
excinbx2it1.appendChild(excinbx2it1svg1);

excinbx2it1svg1.setAttribute("src", "./../../abst3_slash.jpg");
excinbx2it1svg1.style.height = "2pc";
excinbx2it1svg1.style.width = "2pc";
excinbx2it1svg1.style.borderRadius = "100%";

//create description of svg1
let excinbx2it1svg1dsc = document.createElement("p");
//append
excinbx2it1.appendChild(excinbx2it1svg1dsc);

excinbx2it1svg1dsc.innerHTML = "Parks Nature & Wildlife";


//item 2 - box 2
let excinbx2it2 = document.createElement("div");
//append
excinbx2.appendChild(excinbx2it2);
//make it a flex container

excinbx2it2.style.display = "flex";
excinbx2it2.style.gap = "1pc";
excinbx2it2.style.alignItems = "center";
excinbx2it2.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx2it2svg2 = document.createElement("img");
//append
excinbx2it2.appendChild(excinbx2it2svg2);

excinbx2it2svg2.setAttribute("src", "./../../abst1_slash.jpg");
excinbx2it2svg2.style.height = "2pc";
excinbx2it2svg2.style.width = "2pc";
excinbx2it2svg2.style.borderRadius = "100%";

//create description of svg1
let excinbx2it2svg2dsc = document.createElement("p");
//append
excinbx2it2.appendChild(excinbx2it2svg2dsc);

excinbx2it2svg2dsc.innerHTML = "Public Safety";


//item 3 - box 2
let excinbx2it3 = document.createElement("div");
//append
excinbx2.appendChild(excinbx2it3);
//make it a flex container

excinbx2it3.style.display = "flex";
excinbx2it3.style.gap = "1pc";
excinbx2it3.style.alignItems = "center";
excinbx2it3.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx2it3svg3 = document.createElement("img");
//append
excinbx2it3.appendChild(excinbx2it3svg3);

excinbx2it3svg3.setAttribute("src", "./../../abst1_slash.jpg");
excinbx2it3svg3.style.height = "2pc";
excinbx2it3svg3.style.width = "2pc";
excinbx2it3svg3.style.borderRadius = "100%";

//create description of svg1
let excinbx2it3svg3dsc = document.createElement("p");
//append
excinbx2it3.appendChild(excinbx2it3svg3dsc);

excinbx2it3svg3dsc.innerHTML = "Transportation";



//item 4 - box 2
let excinbx2it4 = document.createElement("div");
//append
excinbx2.appendChild(excinbx2it4);
//make it a flex container

excinbx2it4.style.display = "flex";
excinbx2it4.style.gap = "1pc";
excinbx2it4.style.alignItems = "center";
excinbx2it4.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx2it4svg4 = document.createElement("img");
//append
excinbx2it4.appendChild(excinbx2it4svg4);

excinbx2it4svg4.setAttribute("src", "./../../abst2_slash.jpg");
excinbx2it4svg4.style.height = "2pc";
excinbx2it4svg4.style.width = "2pc";
excinbx2it4svg4.style.borderRadius = "100%";

//create description of svg1
let excinbx2it4svg4dsc = document.createElement("p");
//append
excinbx2it4.appendChild(excinbx2it4svg4dsc);

excinbx2it4svg4dsc.innerHTML = "Sports";


//item 5 - box 1
let excinbx2it5 = document.createElement("div");
//append
excinbx2.appendChild(excinbx2it5);
//make it a flex container

excinbx2it5.style.display = "flex";
excinbx2it5.style.gap = "1pc";
excinbx2it5.style.alignItems = "center";
excinbx2it5.style.justifyContent = "flex-start";

//create inner elements - of first item - an svg and description
//currently I do not know how to create an svg using js - so images are a placeholder;
let excinbx2it5svg5 = document.createElement("img");
//append
excinbx2it5.appendChild(excinbx2it5svg5);

excinbx2it5svg5.setAttribute("src", "./../../abst1_slash.jpg");
excinbx2it5svg5.style.height = "2pc";
excinbx2it5svg5.style.width = "2pc";
excinbx2it5svg5.style.borderRadius = "100%";

//create description of svg1
let excinbx2it5svg5dsc = document.createElement("p");
//append
excinbx2it5.appendChild(excinbx2it5svg5dsc);

excinbx2it5svg5dsc.innerHTML = "Important Numbers";


//=========================================END EXPLORE COOMMUNITY

//----------------===================START MEET OFFICIALS ======================

//outer container
let mto = document.createElement("div");
//append

eminmain.appendChild(mto);

//create a flex box that holds title and button 
let mtotitlebx = document.createElement("div");
mto.appendChild(mtotitlebx);
mtotitlebx.style.display = "flex";
mtotitlebx.style.justifyContent = "space-between";
mtotitlebx.style.alignItems = "center";
mtotitlebx.style.padding = "0pc 1pc";


//create title

let mtotitle = document.createElement("h2");
mtotitle.innerHTML = "Meet Officials";
//append

mtotitlebx.appendChild(mtotitle);

mtotitle.style.fontSize = "3rem";

//create button - displays next/prev images 

let mtobtn = document.createElement("button");
//append
mtotitlebx.appendChild(mtobtn);
mtobtn.setAttribute("onclick", "showOfficial()");
mtobtn.innerHTML = "&LeftArrow;";
mtobtn.style.height = "1.5pc";
mtobtn.style.width = "1.5pc";
mtobtn.style.display = "flex";
mtobtn.style.justifyContent = "center";
mtobtn.style.alignItems = "center";
mtobtn.style.borderRadius = "100%";
mtobtn.style.border = ".1pc solid #eee"

//create inner container that holds images - the container holds two images at a time 
//by the click of a button;

let mtoin = document.createElement("div");
//append

mto.appendChild(mtoin);
//make it a grid
mtoin.style.display = "grid";
mtoin.style.gridTemplateColumns = "repeat(2, 1fr)";
mtoin.style.gridAutoRows = "auto";
mtoin.style.gap = "1pc";

//create first box - image holder
//the box has image - name and position
let mtoinfig1 = document.createElement("figure");
//append
mtoin.appendChild(mtoinfig1);

//create image
let mtoinfig1img = document.createElement("img");
mtoinfig1img.setAttribute("src", "./images/image-prof-a.jpg");
mtoinfig1img.style.filter = "brightness(40%)";

//append image

mtoinfig1.appendChild(mtoinfig1img);
mtoinfig1img.style.width = "100%";
mtoinfig1img.style.height = "80%";

//create a box to house name and position

let mtoinfig1bx = document.createElement("figcaption");
//append

mtoinfig1.appendChild(mtoinfig1bx);
mtoinfig1bx.style.background = "linear-gradient(rgba(0, 0, 0, .043), rgba(0, 0, 0, .943))";
mtoinfig1bx.style.padding = "0pc 1pc";
mtoinfig1bx.style.position = "relative";
mtoinfig1bx.style.top = "-17.5%";


//create caption 1- name
let mtoinfig1capn = document.createElement("p");
//append 
mtoinfig1bx.appendChild(mtoinfig1capn);
mtoinfig1capn.innerHTML = "Denis King";
mtoinfig1capn.style.fontSize = "2.5rem";
mtoinfig1capn.style.color = "white";

//create caption 2 - position
let mtoinfig1capp = document.createElement("p");
//append 
mtoinfig1bx.appendChild(mtoinfig1capp);
mtoinfig1capp.innerHTML = "Assistant Mayor";
mtoinfig1capp.style.fontSize = "1.25rem";
mtoinfig1capp.style.color = "white";


//================

//create 2nd box - image holder
//the box has image - name and position
let mtoinfig2 = document.createElement("figure");
//append
mtoin.appendChild(mtoinfig2);

//create image
let mtoinfig2img = document.createElement("img");
mtoinfig2img.setAttribute("src", "./images/denis-profile.jpg");
mtoinfig2img.style.filter = "brightness(40%)";

//append image

mtoinfig2.appendChild(mtoinfig2img);
mtoinfig2img.style.width = "100%";
mtoinfig2img.style.height = "80%";

//create a box to house name and position

let mtoinfig2bx = document.createElement("figcaption");
//append

mtoinfig2.appendChild(mtoinfig2bx);
mtoinfig2bx.style.background = "linear-gradient(rgba(0, 0, 0, .043), rgba(0, 0, 0, .943))";
mtoinfig2bx.style.padding = "0pc 1pc";

//mtoinfig2bx.style.border = ".1pc solid red";
mtoinfig2bx.style.position = "relative";
mtoinfig2bx.style.top = "-17.5%";



//create caption 1- name
let mtoinfig2capn = document.createElement("p");
//append 
mtoinfig2bx.appendChild(mtoinfig2capn);
mtoinfig2capn.innerHTML = "John Doe";
mtoinfig2capn.style.fontSize = "2.5rem";
mtoinfig2capn.style.color = "white";

//create caption 2 - position
let mtoinfig2capp = document.createElement("p");
//append 
mtoinfig2bx.appendChild(mtoinfig2capp);
mtoinfig2capp.innerHTML = "Assistant Mayor";
mtoinfig2capp.style.fontSize = "1.25rem";
mtoinfig2capp.style.color = "white";


// ===========================================END EXPLORE SECTION================================= 

//START CONTACT SECTION
//Create the outer holder box cmeans -cm
let cmmain = document.createElement("div");
//append to main
cmmain.style.backgroundColor = "#eee";
main.appendChild(cmmain);
cmmain.style.padding = "3pc";

//create inner cm - grid
let cmin = document.createElement("div");
//append
cmmain.appendChild(cmin);

//make it a grid

cmin.style.display = "grid";
cmin.style.gridTemplateColumns = "repeat(2, 1fr)";
cmin.style.gridAutoRows = "auto";
cmin.style.gap = "1pc";
cmin.style.width = "80%";
cmin.style.margin = "0 auto";


//create first box - form
let cmform = document.createElement("form");
//append
cmin.appendChild(cmform);

cmform.style.backgroundColor = "darkred";
cmform.style.color = "white";
cmform.style.padding = "1pc";
cmform.style.display = "flex";
cmform.style.flexDirection = "column";
cmform.style.gap = "1pc";

//create title

let cmformtitle = document.createElement("h2");
//append
cmform.appendChild(cmformtitle);
cmformtitle.innerHTML  = "Be Updated with us";
cmformtitle.style.color = "#ffffff";
cmformtitle.style.fontSize = "1.5rem";


//create flex box for inputs
let cmformbx = document.createElement("div");
//append

cmform.appendChild(cmformbx);

cmformbx.style.display = "flex";
cmformbx.style.alignItems = "center";
cmformbx.style.justifyContent = "space-between";
cmformbx.style.gap = "1pc";


//create inputs
//input 1

let cmformuname = document.createElement("input");
//append
cmformbx.appendChild(cmformuname);

cmformuname.setAttribute("type", "text");
cmformuname.setAttribute("placeholder", "Your Name");
cmformuname.style.padding = "0pc 1pc";
cmformuname.style.color = "black";
cmformuname.style.height = "2.5pc";




//input 1

let cmformemail = document.createElement("input");
//append
cmformbx.appendChild(cmformemail);

cmformemail.setAttribute("type", "email");
cmformemail.setAttribute("placeholder", "Email Address");
cmformemail.style.padding = "0pc 1pc";
cmformemail.style.color = "black";
cmformemail.style.height = "2.5pc";


//create extra bx for subscription
//it a flex box
let cmformsbx = document.createElement("div");
//append

cmform.appendChild(cmformsbx);
cmformsbx.style.display = "flex";
cmformsbx.style.alignItems = "flex-start";
cmformsbx.style.justifyContent = "space-between";

//create content
//text
let cmformsbxtxt = document.createElement("p");
//append
cmformsbx.appendChild(cmformsbxtxt);
cmformsbxtxt.innerHTML = "Signup to get the updates on email <br> from the city & internal affairs";
cmformsbxtxt.style.color = "white";

//create sub btn
let cmformsbxbtn = document.createElement("button");
//append
cmformsbx.appendChild(cmformsbxbtn);

cmformsbxbtn.setAttribute("onclick", "subscribeUser()");
cmformsbxbtn.style.height = "3pc";
cmformsbxbtn.style.width = "8pc";
cmformsbxbtn.innerHTML = "Subscribe";
cmformsbxbtn.style.backgroundColor = "navy";
cmformsbxbtn.style.color = "#fff";
cmformsbxbtn.style.border = "none";
cmformsbxbtn.style.borderRadius = "5pc";



//================end form

//start second box - emergency numbers
//has two boxes
let cmen = document.createElement("div");
//append
cmin.appendChild(cmen);

//box 1 - flex 
let cmenbx1 = document.createElement("div");
//append
cmen.appendChild(cmenbx1);

cmenbx1.style.display = "flex";
cmenbx1.style.justifyContent = "space-between";
cmenbx1.style.alignItems = "flex-start";



//first el -has two elements
let cmenbx1txt = document.createElement("div");
//append



cmenbx1.appendChild(cmenbx1txt);
//create contents
let cmenbx1txttitle = document.createElement("p");
//append
cmenbx1txt.appendChild(cmenbx1txttitle);
cmenbx1txttitle.innerHTML = "Emergency Numbers";
cmenbx1txttitle.style.fontSize = "1.5rem";
cmenbx1txttitle.style.fontWeight = "800";



//other text
let cmenbx1txttext = document.createElement("p");
//append
cmenbx1txt.appendChild(cmenbx1txttext);
cmenbx1txttext.innerHTML = "Dial these numbers incase of an emergency";
cmenbx1txttext.style.fontStyle = "italic";

//create second inner bx - numbers

let cmenbx1nums = document.createElement("div");
//append
cmenbx1.appendChild(cmenbx1nums);

//create num bx 2 title
let cmenbx1numstitle = document.createElement("p");
//append

cmenbx1nums.appendChild(cmenbx1numstitle);
cmenbx1numstitle.innerHTML = "FOR ANY INFORMATION";
cmenbx1numstitle.style.color = "red";
cmenbx1numstitle.style.fontSize = ".9rem";

//create nums
let cmenbx1numsnum = document.createElement("p");
//append

cmenbx1nums.appendChild(cmenbx1numsnum);
cmenbx1numsnum.innerHTML = "(08)00 9876";
cmenbx1numsnum.style.fontSize = "2rem";
cmenbx1numsnum.style.color = "black";

//create second box - 
//flex-container - 3 grid boxes
let cmenbx2 = document.createElement("div");
cmenbx2.style.display = "grid";
cmenbx2.style.gridTemplateColumns = "repeat(3, 1fr)";
cmenbx2.style.gridAutoRows = "auto"; //this may change depending on the elements sizes
cmenbx2.style.gap = "1pc";

//append
cmen.appendChild(cmenbx2);

//create first inner box

//flex-box
let cmenbx2911 = document.createElement("div");
//append
cmenbx2.appendChild(cmenbx2911);

cmenbx2911.style.display = "flex";
cmenbx2911.style.flexFlow = "column";
cmenbx2911.style.gap = ".5pc";
cmenbx2911.style.padding = "1pc";
cmenbx2911.style.backgroundColor = "white";

//create contents
//svg - phone - img for now
let cmenbx2911svg = document.createElement("img");
//append
cmenbx2911.appendChild(cmenbx2911svg);
cmenbx2911svg.setAttribute("src", "./images/denis-profile.jpg");
cmenbx2911svg.style.width = "2pc";

//create text 1
let cmenbx2911t1 = document.createElement("span");
//append
cmenbx2911.appendChild(cmenbx2911t1);

cmenbx2911t1.innerHTML = "911";
cmenbx2911t1.style.color = "navy";
cmenbx2911t1.style.fontSize = "2rem";
cmenbx2911t1.style.fontWeight = "800";

//create text 2
let cmenbx2911t2 = document.createElement("span");
cmenbx2911.appendChild(cmenbx2911t2);

cmenbx2911t2.innerHTML = "Police department";





//create 2nd inner box

//flex-box
let cmenbx2177 = document.createElement("div");
//append
cmenbx2.appendChild(cmenbx2177);

cmenbx2177.style.display = "flex";
cmenbx2177.style.flexFlow = "column";
cmenbx2177.style.gap = ".5pc";
cmenbx2177.style.padding = "1pc";
cmenbx2177.style.backgroundColor = "white";

//create contents
//svg - phone - img for now
let cmenbx2177svg = document.createElement("img");
//append
cmenbx2177.appendChild(cmenbx2177svg);
cmenbx2177svg.setAttribute("src", "./../../abst2_slash.jpg");
cmenbx2177svg.style.width = "2pc";

//create text 1
let cmenbx2177t1 = document.createElement("span");
//append
cmenbx2177.appendChild(cmenbx2177t1);

cmenbx2177t1.innerHTML = "177";
cmenbx2177t1.style.color = "navy";
cmenbx2177t1.style.fontSize = "2rem";
cmenbx2177t1.style.fontWeight = "800";

//create text 2
let cmenbx2177t2 = document.createElement("span");
cmenbx2177.appendChild(cmenbx2177t2);

cmenbx2177t2.innerHTML = "Ambulance Services";





//create 3nd inner box

//flex-box
let cmenbx2103 = document.createElement("div");
//append
cmenbx2.appendChild(cmenbx2103);

cmenbx2103.style.display = "flex";
cmenbx2103.style.flexFlow = "column";
cmenbx2103.style.gap = ".5pc";
cmenbx2103.style.padding = "1pc";
cmenbx2103.style.backgroundColor = "white";

//create contents
//svg - phone - img for now
let cmenbx2103svg = document.createElement("img");
//append
cmenbx2103.appendChild(cmenbx2103svg);
cmenbx2103svg.setAttribute("src", "./../../abst3_slash.jpg");
cmenbx2103svg.style.width = "2pc";

//create text 1
let cmenbx2103t1 = document.createElement("span");
//append
cmenbx2103.appendChild(cmenbx2103t1);

cmenbx2103t1.innerHTML = "103";
cmenbx2103t1.style.color = "navy";
cmenbx2103t1.style.fontSize = "2rem";
cmenbx2103t1.style.fontWeight = "800";

//create text 2
let cmenbx2103t2 = document.createElement("span");
cmenbx2103.appendChild(cmenbx2103t2);

cmenbx2103t2.innerHTML = "Fire Brigade Department";


//=======================================END CONTACT SECTION =========================================

//START FOOTER

let foomain = document.createElement("footer");
//has two boxes
//append
html.appendChild(foomain);
foomain.style.padding = "2pc";
foomain.style.display = "flex";
foomain.style.flexDirection = "column";
foomain.style.gap = "1pc";
foomain.style.backgroundColor = "#000";


//first box 
let foolinks = document.createElement("div");
//a grid container
//append
foomain.appendChild(foolinks);
foolinks.style.display = "grid";
foolinks.style.gridTemplateColumns = "repeat(4, 1fr)";
foolinks.style.gridAutoRows = "auto";
foolinks.style.gap = "1pc";
foolinks.style.width = "75%";
foolinks.style.color = "white";
foolinks.style.margin = "1pc auto";


//first grid box  - flex container
let fg1 = document.createElement("div");
//append
foolinks.appendChild(fg1);
//fg1 has two boxes
//first box - web icon and name
let fg1bx1 = document.createElement("div");
//append
fg1.appendChild(fg1bx1);
fg1bx1.style.display = "flex";
fg1bx1.style.gap = "1pc";
fg1bx1.style.justifyContent = "center";
fg1bx1.style.alignItems = "center";
fg1bx1.style.textAlign = "center";



//icon
let fg1bx1svg = document.createElement("img");
//append
fg1bx1.appendChild(fg1bx1svg);
fg1bx1svg.setAttribute("src", "./../../abst1_slash.jpg");
fg1bx1svg.style.width = "1.5pc";
fg1bx1svg.style.height = "1.5pc";
fg1bx1svg.style.borderRadius = "100%";

//create second el  - houses name and tagline
let fg1bx1tbx = document.createElement("div");
//append 
fg1bx1.appendChild(fg1bx1tbx);
//use span  - have no whitespace
fg1bx1tbx.style.display = "flex";
fg1bx1tbx.style.flexDirection = "column";

//create name
let fg1bx1tbxname = document.createElement("span");
//append
fg1bx1tbx.appendChild(fg1bx1tbxname);
fg1bx1tbxname.innerHTML = "NYERI";
fg1bx1tbxname.style.fontWeight = "bolder";
fg1bx1tbxname.style.color = "white";
fg1bx1tbxname.style.fontSize = "1.5rem";


//create tagline
let fg1bx1tbxtag = document.createElement("span");
//append
fg1bx1tbx.appendChild(fg1bx1tbxtag);

fg1bx1tbxtag.innerHTML = "Your County";
fg1bx1tbxtag.style.color = "white";


//create box 2 of fig1

let fg1bx2 = document.createElement("div");
//append
fg1.appendChild(fg1bx2);
//has 3 flex-containers
fg1bx2.style.display = "flex";
fg1bx2.style.flexDirection = "column";
fg1bx2.style.gap = "1pc";

//start box 2 - box1
let fg1bx2bx1 = document.createElement("div");
//append
fg1bx2.appendChild(fg1bx2bx1);

//make it a flex container
fg1bx2bx1.style.display = "flex";
fg1bx2bx1.style.alignItems = "flex-start";
fg1bx2bx1.style.gap = "1pc";

//create svg for bx1
let fg1bx2bx1svg = document.createElement("img");
//append
fg1bx2bx1.appendChild(fg1bx2bx1svg);
fg1bx2bx1svg.setAttribute("src", "./../../abst1_slash.jpg");
fg1bx2bx1svg.style.width = "1pc";
fg1bx2bx1svg.style.height = "1pc";
fg1bx2bx1svg.style.borderRadius = "100%";

//create desc

let fg1bx2bx1desc = document.createElement("p");
//append
fg1bx2bx1.appendChild(fg1bx2bx1desc);

fg1bx2bx1desc.innerHTML = "Council Address: <br> Block H, Cosmo Avenue #201 New <br> York, USA";
fg1bx2bx1desc.style.color = "white";




//start box 2 - box2
let fg1bx2bx2 = document.createElement("div");
//append
fg1bx2.appendChild(fg1bx2bx2);

//make it a flex container
fg1bx2bx2.style.display = "flex";
fg1bx2bx2.style.alignItems = "flex-start";
fg1bx2bx2.style.gap = "1pc";

//create svg for bx1
let fg1bx2bx2svg = document.createElement("img");
//append
fg1bx2bx2.appendChild(fg1bx2bx2svg);
fg1bx2bx2svg.setAttribute("src", "./../../abst2_slash.jpg");
fg1bx2bx2svg.style.width = "1pc";
fg1bx2bx2svg.style.height = "1pc";
fg1bx2bx2svg.style.borderRadius = "100%";

//create desc

let fg1bx2bx2desc = document.createElement("p");
//append
fg1bx2bx2.appendChild(fg1bx2bx2desc);

fg1bx2bx2desc.innerHTML = "Email: <br> contact@total.com <br> info@government.co.ke";
fg1bx2bx2desc.style.color = "white";



//start box 2 - box3
let fg1bx2bx3 = document.createElement("div");
//append
fg1bx2.appendChild(fg1bx2bx3);

//make it a flex container
fg1bx2bx3.style.display = "flex";
fg1bx2bx3.style.alignItems = "flex-start";
fg1bx2bx3.style.gap = "1pc";

//create svg for bx1
let fg1bx2bx3svg = document.createElement("img");
//append
fg1bx2bx3.appendChild(fg1bx2bx3svg);
fg1bx2bx3svg.setAttribute("src", "./../../abst3_slash.jpg");
fg1bx2bx3svg.style.width = "1pc";
fg1bx2bx3svg.style.height = "1pc";
fg1bx2bx3svg.style.borderRadius = "100%";

//create desc

let fg1bx2bx3desc = document.createElement("p");
//append
fg1bx2bx3.appendChild(fg1bx2bx3desc);

fg1bx2bx3desc.innerHTML = "Call Us: <br> +2541719444041";
fg1bx2bx3desc.style.color = "white";

//===================END FG1


//START FG2

//second grid box
let fg2 = document.createElement("div");
//append
fg2.style.color = "white";

foolinks.appendChild(fg2);

//heading
let fg2h = document.createElement("p");
//append
fg2.appendChild(fg2h);

fg2h.innerHTML = "Govt. Departments";
fg2h.style.color = "white";
fg2h.style.fontWeight = "bold";

//create links container - for fg2

let fg2ul = document.createElement("ul");
//append
fg2.appendChild(fg2ul);
fg2ul.style.fontSize = "1rem";

//create links - 8
//=====================LINK 1 -fg2
let fg2li1 = document.createElement("li");
fg2li1.style.color = "white";
//append
fg2ul.appendChild(fg2li1);

//create link in li
let fg2li1a1 = document.createElement("a");
//append
fg2li1.appendChild(fg2li1a1);

fg2li1a1.setAttribute("href", "#");
fg2li1a1.innerHTML = "Agriculture & Food";
fg2li1a1.style.color = "white";



//=====================LINK 2 -fg2
let fg2li2 = document.createElement("li");
fg2li2.style.color = "white";
//append
fg2ul.appendChild(fg2li2);

//create link in li
let fg2li2a2 = document.createElement("a");
//append
fg2li2.appendChild(fg2li2a2);

fg2li2a2.setAttribute("href", "#");
fg2li2a2.innerHTML = "Employment Affairs";
fg2li2a2.style.color = "white";

//=====================LINK 3 -fg2
let fg2li3 = document.createElement("li");
fg2li3.style.color = "white";
//append
fg2ul.appendChild(fg2li3);

//create link in li
let fg2li3a3 = document.createElement("a");
//append
fg2li3.appendChild(fg2li3a3);

fg2li3a3.setAttribute("href", "#");
fg2li3a3.innerHTML = "Housing & Planning";
fg2li3a3.style.color = "white";



//=====================LINK 4 -fg2
let fg2li4 = document.createElement("li");
fg2li4.style.color = "white";
//append
fg2ul.appendChild(fg2li4);

//create link in li
let fg2li4a4 = document.createElement("a");
//append
fg2li4.appendChild(fg2li4a4);

fg2li4a4.setAttribute("href", "#");
fg2li4a4.innerHTML = "Education & Skills";
fg2li4a4.style.color = "white";


//=====================LINK 5 -fg2
let fg2li5 = document.createElement("li");
fg2li5.style.color = "white";
//append
fg2ul.appendChild(fg2li5);

//create link in li
let fg2li5a5 = document.createElement("a");
//append
fg2li5.appendChild(fg2li5a5);

fg2li5a5.setAttribute("href", "#");
fg2li5a5.innerHTML = "Health & Security";
fg2li5a5.style.color = "white";



//=====================LINK 6 -fg2
let fg2li6 = document.createElement("li");
fg2li6.style.color = "white";
//append
fg2ul.appendChild(fg2li6);

//create link in li
let fg2li6a6 = document.createElement("a");
//append
fg2li6.appendChild(fg2li6a6);

fg2li6a6.setAttribute("href", "#");
fg2li6a6.innerHTML = "Laws & Justice";
fg2li6a6.style.color = "white";



//=====================LINK 7 -fg2
let fg2li7 = document.createElement("li");
fg2li7.style.color = "white";
//append
fg2ul.appendChild(fg2li7);

//create link in li
let fg2li7a7 = document.createElement("a");
//append
fg2li7.appendChild(fg2li7a7);

fg2li7a7.setAttribute("href", "#");
fg2li7a7.innerHTML = "Roads & Transport";
fg2li7a7.style.color = "white";


//=====================LINK 8 -fg2
let fg2li8 = document.createElement("li");
fg2li8.style.color = "white";
//append
fg2ul.appendChild(fg2li8);

//create link in li
let fg2li8a8 = document.createElement("a");
//append
fg2li8.appendChild(fg2li8a8);

fg2li8a8.setAttribute("href", "#");
fg2li8a8.innerHTML = "Climate & Environment";
fg2li8a8.style.color = "white";

//===========END FG2



//third grid box
let fg3 = document.createElement("div");
//append
fg3.style.color = "white";

foolinks.appendChild(fg3);

//heading
let fg3h = document.createElement("p");
//append
fg3.appendChild(fg3h);

fg3h.innerHTML = "Explore City Highlights";
fg3h.style.color = "white";
fg3h.style.fontWeight = "bold";

//create links container - for fg3

let fg3ul = document.createElement("ul");
//append
fg3.appendChild(fg3ul);

//create links - 8
//=====================LINK 1 -fg3
let fg3li1 = document.createElement("li");
fg3li1.style.color = "white";
//append
fg3ul.appendChild(fg3li1);

//create link in li
let fg3li1a1 = document.createElement("a");
//append
fg3li1.appendChild(fg3li1a1);

fg3li1a1.setAttribute("href", "#");
fg3li1a1.innerHTML = "City Culture & Heritage";
fg3li1a1.style.color = "white";



//=====================LINK 2 -fg3
let fg3li2 = document.createElement("li");
fg3li2.style.color = "white";
//append
fg3ul.appendChild(fg3li2);

//create link in li
let fg3li2a2 = document.createElement("a");
//append
fg3li2.appendChild(fg3li2a2);

fg3li2a2.setAttribute("href", "#");
fg3li2a2.innerHTML = "City Events";
fg3li2a2.style.color = "white";

//=====================LINK 3 -fg3
let fg3li3 = document.createElement("li");
fg3li3.style.color = "white";
//append
fg3ul.appendChild(fg3li3);

//create link in li
let fg3li3a3 = document.createElement("a");
//append
fg3li3.appendChild(fg3li3a3);

fg3li3a3.setAttribute("href", "#");
fg3li3a3.innerHTML = "Jobs & Careers";
fg3li3a3.style.color = "white";



//=====================LINK 4 -fg3
let fg3li4 = document.createElement("li");
fg3li4.style.color = "white";
//append
fg3ul.appendChild(fg3li4);

//create link in li
let fg3li4a4 = document.createElement("a");
//append
fg3li4.appendChild(fg3li4a4);

fg3li4a4.setAttribute("href", "#");
fg3li4a4.innerHTML = "Donations";
fg3li4a4.style.color = "white";


//=====================LINK 5 -fg3
let fg3li5 = document.createElement("li");
fg3li5.style.color = "white";
//append
fg3ul.appendChild(fg3li5);

//create link in li
let fg3li5a5 = document.createElement("a");
//append
fg3li5.appendChild(fg3li5a5);

fg3li5a5.setAttribute("href", "#");
fg3li5a5.innerHTML = "Become a Volunteer";
fg3li5a5.style.color = "white";



//=====================LINK 6 -fg3
let fg3li6 = document.createElement("li");
fg3li6.style.color = "white";
//append
fg3ul.appendChild(fg3li6);

//create link in li
let fg3li6a6 = document.createElement("a");
//append
fg3li6.appendChild(fg3li6a6);

fg3li6a6.setAttribute("href", "#");
fg3li6a6.innerHTML = "Tourism Map";
fg3li6a6.style.color = "white";



//=====================LINK 7 -fg3
let fg3li7 = document.createElement("li");
fg3li7.style.color = "white";
//append
fg3ul.appendChild(fg3li7);

//create link in li
let fg3li7a7 = document.createElement("a");
//append
fg3li7.appendChild(fg3li7a7);

fg3li7a7.setAttribute("href", "#");
fg3li7a7.innerHTML = "Food & Restaurants";
fg3li7a7.style.color = "white";


//=====================LINK 8 -fg3
let fg3li8 = document.createElement("li");
fg3li8.style.color = "white";
//append
fg3ul.appendChild(fg3li8);

//create link in li
let fg3li8a8 = document.createElement("a");
//append
fg3li8.appendChild(fg3li8a8);

fg3li8a8.setAttribute("href", "#");
fg3li8a8.innerHTML = "Nightlife Entertainments";
fg3li8a8.style.color = "white";

//===========END FG3

//START FG4 - TWITTER BOX

let fg4 = document.createElement("div");
//append
foolinks.appendChild(fg4);
fg4.style.display = "flex";
fg4.style.flexFlow = "column";
fg4.style.gap = "1pc";
fg4.style.padding = "1pc";
fg4.style.backgroundColor = "blue";
fg4.style.color = "white";


//create first el - has tweet handle and share btn

let fg4bx1 = document.createElement("div");
//append
fg4.appendChild(fg4bx1);

fg4bx1.style.display = "flex";
fg4bx1.style.justifyContent = "space-between";
fg4bx1.style.alignItems = "center";

//tweet handle
let fg4th = document.createElement("a");
fg4bx1.appendChild(fg4th);
fg4th.innerHTML = "@denismytin";
fg4th.setAttribute("href", "https://www.twitter.com/@denismytin");
fg4th.style.color = "white";

//create share btn
let fg4sbtn = document.createElement("button");
//append
fg4bx1.appendChild(fg4sbtn);
fg4sbtn.innerHTML = "&LeftArrow;";
fg4sbtn.style.height = "2pc";
fg4sbtn.style.width = "2pc";
fg4sbtn.style.backgroundColor = "transparent";
fg4sbtn.style.borderRadius = "100%";
fg4sbtn.style.border = ".1pc solid white";

//create tweet
let fg4tweet = document.createElement("p");
//append
fg4.appendChild(fg4tweet);

fg4tweet.innerHTML = "Government Resources are being discriminated about through shareholder meetings in discrete locations sharing information that is irrelevant.";
fg4tweet.style.color = "white";

//append theme breaker here

fg4.appendChild(br);

//create date box

let fg4dbx = document.createElement("div");
//append
fg4.appendChild(fg4dbx);
fg4dbx.style.display = "flex";
fg4dbx.style.flexDirection = "column";


//has two el

let fg4dtname = document.createElement("span");
//append

fg4dbx.appendChild(fg4dtname);
fg4dtname.innerHTML = "@govtweet.gov";
fg4dtname.style.color = "white";

//create date
let fg4ddate = document.createElement("span");
//append
fg4dbx.appendChild(fg4ddate);
fg4ddate.innerHTML = "14 January 2023";
fg4ddate.style.color = "white";


//create copyright container

let fcop = document.createElement("div");
//append

foomain.appendChild(fcop);
fcop.style.backgroundColor = "darkred";
fcop.style.color = "white";
fcop.style.padding =  "1pc 3pc";
//make it flex
fcop.style.display = "flex";
fcop.style.justifyContent = "space-between";
fcop.style.alignItems = "center";



//create copyright text

let fcoptxt = document.createElement("p");
//append
fcop.appendChild(fcoptxt);
fcoptxt.innerHTML = "County Rights Reserved. &copy;2023. By denismytin@gmail.com"; 
fcoptxt.style.color = "white";

//create social box

let fcopsbx = document.createElement("div");
//append
fcop.appendChild(fcopsbx);
//make it flex

fcopsbx.style.display = "flex";
fcopsbx.style.justifyContent = "space-around";
fcopsbx.style.alignItems = "center";
fcopsbx.style.width = "20%";

//create social links - use icons when apt
//facebook
let flnk1 = document.createElement("a");
//append
fcopsbx.appendChild(flnk1);
flnk1.innerHTML = "Facebook";
flnk1.setAttribute("href", "https://www.facebook.com/@county");
flnk1.style.color = "white";


//twitter
let flnk2 = document.createElement("a");
//append
fcopsbx.appendChild(flnk2);
flnk2.innerHTML = "Twitter";
flnk2.setAttribute("href", "https://www.twitter.com/@county");
flnk2.style.color = "white";


//instagram
let flnk3 = document.createElement("a");
//append
fcopsbx.appendChild(flnk3);
flnk3.innerHTML = "Instagram";
flnk3.setAttribute("href", "https://www.instagram.com/@county");
flnk3.style.color = "white";


//Linkedin
let flnk4 = document.createElement("a");
//append
fcopsbx.appendChild(flnk4);
flnk4.innerHTML = "LinkedIn";
flnk4.setAttribute("href", "https://www.linkedin.com/@county");
flnk4.style.color = "white";

//Youtube
let flnk5 = document.createElement("a");
//append
fcopsbx.appendChild(flnk5);
flnk5.innerHTML = "Youtube";
flnk5.setAttribute("href", "https://www.youtube.com/@county");
flnk5.style.color = "white";

//Completed 14 January 2023

















