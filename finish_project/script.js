let selectFree = document.getElementById('selectFree'),
selectStandart = document.getElementById('selectStandart'),
selectPremium = document.getElementById('selectPremium'),
freePlan = document.getElementsByClassName('freePlan'),
standartPlan = document.getElementsByClassName('standartPlan'),
premiumPlan = document.getElementsByClassName('premiumPlan'),
signInPopup = document.getElementById('conteinerFormSignIn'),
signUpPopup = document.getElementById('conteinerFormSignUp'),
close = document.getElementById('close'),
closeUp = document.getElementById('closeUp'),
sendSignIn = document.getElementById('btnSendSignIn'),
sendSignUp = document.getElementById('btnSendSignUp'),
signIn = document.getElementById('signIn'),
signUp = document.getElementById('signUp'),
signIn2 = document.getElementById('signIn2'),
signUp2 = document.getElementById('signUp2'),
getStart = document.getElementById('getStartetd'),
sub = document.getElementById('sub'),
thankForm = document.getElementById('thankForm'),
closeThank = document.getElementById('closeThank'),
netflix = document.getElementById('netflix'),
spotify = document.getElementById('spotify'),
redit = document.getElementById('reddit'),
amazon = document.getElementById('amazon'),
discord = document.getElementById('discord'),
slider = document.getElementsByClassName('slider'),
left = document.getElementById('strelLeft'),
right = document.getElementById('strelRight'),
i = 0,
x,
place = [['USA',14,30,31],
    ['Canada',2,3,15,16,17],
    ['Mexico',44],
    ['South America',59,60,73,74,87],
    ['Europe',20,21,34,35],
    ['Russia',22,23,10,24,25,39,26,27],
    ['Kazakhstan',37],
    ['China',38],
    ['Southeast Asia',52],
    ['Africa',48,49,63,77],
    ['India',51],
    ['Near East',50],
    ['Australia',81,82],
    ['New Zealand',97],
    ['Greenland',4,5],
    ['Indonesia',67,66],],
lastActive = 0,
id = ['first','second','fird', 'fourth'],
slide1 = document.getElementById('touch1'),
slide2 = document.getElementById('touch2'),
slide3 = document.getElementById('touch3'),
slide4 = document.getElementById('touch4'),
btnInfo = document.getElementById('intInfo'),
popInfo = document.getElementsByClassName('popInfo')[0],
btnMenu = document.getElementById('btnMenu'),
menu = document.getElementById('menu'),
imgMenu = document.getElementById('imgMenu'),
closeMenu = document.getElementById('closeMenu'),
gridDiv = document.querySelector('#grid'),
input = document.getElementById('plac');

slide1.classList.add("activeTouch")

selectFree.addEventListener('click', plan)
selectStandart.addEventListener('click', plan)
selectPremium.addEventListener('click', plan)
signIn.addEventListener('click', signInForm)
signIn2.addEventListener('click', signInForm)
close.addEventListener('click', closeSignIn)
sendSignIn.addEventListener('click', sendSignInForm)
signUp.addEventListener('click', signUpForm)
signUp2.addEventListener('click', signUpForm)
closeUp.addEventListener('click', closeSignUp)
sendSignUp.addEventListener('click', sendSignUpForm)
getStart.addEventListener('click', tahnkForm)
sub.addEventListener('click', tahnkForm)
closeThank.addEventListener('click', CloseThank)
netflix.addEventListener('mouseover', swapNetflix)
netflix.addEventListener('mouseout', swap2Netflix)
redit.addEventListener('mouseover', swapredit)
redit.addEventListener('mouseout', swap2redit)
amazon.addEventListener('mouseover', swapamazon)
amazon.addEventListener('mouseout', swap2amazon)
discord.addEventListener('mouseover', swapdiscord)
discord.addEventListener('mouseout', swap2discord)
spotify.addEventListener('mouseover', swapspotify)
spotify.addEventListener('mouseout', swap2spotify)
left.addEventListener('click', leftswap)
right.addEventListener('click', rightswap)
slide1.addEventListener('click', swapSlide)
slide2.addEventListener('click', swapSlide)
slide3.addEventListener('click', swapSlide)
slide4.addEventListener('click', swapSlide)
btnInfo.addEventListener('click', info)
btnMenu.addEventListener('click', openMenu)
closeMenu.addEventListener('click', closeMenuFunction)
gridDiv.addEventListener('click', country)

function country(e){
    let click = gridActive(e)
    place.forEach(element => {
        if(element.includes(click)){
            input.innerHTML = `<h2>${element[0]}</h2>`
        }
    });
}

function gridActive(event){
    let x = event.clientX,
    y = event.clientY,
    rect = gridDiv.getBoundingClientRect(),
    offsetX = x - rect.left,
    offsetY = y - rect.top,
    cellWidth = rect.width / 14, // numberOfColumns - количество колонок в сетке
    cellHeight = rect.height / 7, // numberOfRows - количество строк в сетке
    cellX = Math.floor(offsetX / cellWidth),
    cellY = Math.floor(offsetY / cellHeight),
    cellIndex = cellY * 14 + cellX;
    return cellIndex
}

function closeMenuFunction(){
    menu.style.display = 'none'
}

function openMenu(){
    menu.style.display = 'block'
}

function closeDivInfo(){
    popInfo.style.display = 'none'
}

function info(){
    let timeClock = new Date(),
    day = timeClock.getDate(),
    month = timeClock.getMonth()+1,
    year = timeClock.getFullYear();
    if (day<10){
        day = `0` + day 
    }
    if (month<10){
        month = `0` + month 
    }
    axios.get(`https://russianwarship.rip/api/v2/statistics/${year}-${month}-${day}`).then((object) => {
        console.log(object)
        popInfo.innerHTML = `
        <div class=class>
            <span class="close" id="closeInfo" onclick = 'closeDivInfo()'>&times;</span>
            <div class=first>
                <h2>Info about war</h2>
                <ul>
                    <li>Date: ${object.data.data.date}</li>
                    <li>Day: ${object.data.data.day}</li>
                    <li>Personnel units: ${object.data.data.increase.personnel_units}</li>
                    <li>Helicopters: ${object.data.data.increase.helicopters}</li>
                    <li>Mlrs: ${object.data.data.increase.mlrs}</li>
                    <li>Artillery systems: ${object.data.data.increase.artillery_systems}</li>
                    <li>Tanks: ${object.data.data.increase.tanks}</li>
                    <li>Uav systems: ${object.data.data.increase.uav_systems}</li>
                    <li>Planes: ${object.data.data.increase.planes}</li>
                    <li>Vehicles fuel tanks: ${object.data.data.increase.vehicles_fuel_tanks}</li>
                    <li>Armoured fighting vehicles: ${object.data.data.increase.armoured_fighting_vehicles}</li>
                </ul>
            </div>
            <div class=second>
                <h2>About all time</h2>
                <ul>
                    <li>AA warfare systems: ${object.data.data.stats.aa_warfare_systems}</li>
                    <li>Armoured fighting vehicles: ${object.data.data.stats.armoured_fighting_vehicles}</li>
                    <li>Artillery systems: ${object.data.data.stats.artillery_systems}</li>
                    <li>Atgm_srbm systems: ${object.data.data.stats.atgm_srbm_systems}</li>
                    <li>Cruise missiles: ${object.data.data.stats.cruise_missiles}</li>
                    <li>Helicopters: ${object.data.data.stats.helicopters}</li>
                    <li>Mlrs: ${object.data.data.stats.mlrs}</li>
                    <li>Personnel units: ${object.data.data.stats.personnel_units}</li>
                    <li>Planes: ${object.data.data.stats.planes}</li>
                    <li>Special military equip: ${object.data.data.stats.special_military_equip}</li>
                    <li>Tanks: ${object.data.data.stats.tanks}</li>
                    <li>Uav systems: ${object.data.data.stats.uav_systems}</li>
                    <li>Vehicles fuel tanks: ${object.data.data.stats.vehicles_fuel_tanks}</li>
                    <li>Warships cutters: ${object.data.data.stats.warships_cutters}</li>
                </ul>
            </div>
        </div>
        `
    }).catch((err) => {console.log(err);})
    popInfo.style.display = 'flex'
}

function swapSlide(e){
    console.log('start')
    clearTouch()
    e.preventDefault()
    e.target.classList.add("activeTouch")
    per = e.target.id[5] - 1
    raz = per-lastActive
    if (raz<0){
        console.log('prev')
        for (let i = 0; i<Math.abs(raz); i++){
            leftswap()
        }
    }else{
        console.log('next')
        for (let i = 0; i<raz; i++){
            rightswap()
        }
    }
    
    lastActive = per
}

function rightswap(){
    let str = '',
    schet = 0,
    x = Array.from(slider[0].children);
    id.push(id.shift())
    x.push(x.shift())
    x.forEach(element => {
        str += `<div class="slide" id=${id[schet]}>${element.innerHTML}</div>`
        schet ++
    });
    slider[0].innerHTML = str
    document.getElementById(`${id[0]}`).classList.add("activeSlide")
    checkActiveSlide(id[0])
}

function leftswap(){
    let str = '',
    schet = 0,
    x = Array.from(slider[0].children);
    id.unshift(id.pop())
    x.unshift(x.pop())
    x.forEach(element => {
        str += `<div class="slide" id=${id[schet]}>${element.innerHTML}</div>`
        schet ++
    });
    slider[0].innerHTML = str
    document.getElementById(`${id[0]}`).classList.add("activeSlide")
    checkActiveSlide(id[0])
}

function checkActiveSlide(name){
    if (name === 'first'){
        clearTouch()
        slide1.classList.add("activeTouch")
    }else if(name === 'second'){
        clearTouch()
        slide2.classList.add("activeTouch")
    }else if(name === 'fird'){
        clearTouch()
        slide3.classList.add("activeTouch")
    }else{
        clearTouch()
        slide4.classList.add("activeTouch")
    }
}

function signInForm(){
    signInPopup.style.display = 'flex'
}

function closeSignIn(){
    signInPopup.style.display = 'none'
}

function sendSignInForm(){
    signInPopup.style.display = 'none'
}

function signUpForm(){
    signUpPopup.style.display = 'flex'
}

function closeSignUp(){
    signUpPopup.style.display = 'none'
}

function sendSignUpForm(){
    signUpPopup.style.display = 'none'
}

function tahnkForm(){
    thankForm.style.display = 'flex'
}

function CloseThank(){
    thankForm.style.display = 'none'
}

function swapNetflix(){
    netflix.src = 'picture/netflixColor.png'
}

function swap2Netflix(){
    netflix.src = 'picture/netflix.png'
}

function swapredit(){
    redit.src = "picture/ReditColor.png"
}

function swap2redit(){
    redit.src = "picture/redit.png"
}

function swapamazon(){
    amazon.src = "picture/AmazonColor.png"
}

function swap2amazon(){
    amazon.src =  "picture/amazon.png"
}

function swapdiscord(){
    discord.src =  "picture/DiscordColor.png"
}

function swap2discord(){
    discord.src = "picture/Discord.png"
}

function swapspotify(){
    spotify.src =  "picture/SpotifyColor.png"
}

function swap2spotify(){
    spotify.src =  "picture/spotify.png"
}

function plan(e){
    e.preventDefault()
    if(e.target.id == 'selectFree'){
        clearActive()
        e.target.classList.add("activeBtn")
        freePlan[0].classList.add("active")
    }else if(e.target.id == 'selectStandart'){
        clearActive()
        e.target.classList.add("activeBtn")
        standartPlan[0].classList.add("active")
    }else{
        clearActive()
        e.target.classList.add("activeBtn")
        premiumPlan[0].classList.add("active")
    }
}

function clearActive(){
    selectFree.classList.remove("activeBtn")
    selectStandart.classList.remove("activeBtn")
    selectPremium.classList.remove("activeBtn")
    freePlan[0].classList.remove("active")
    premiumPlan[0].classList.remove("active")
    standartPlan[0].classList.remove("active")
}

function clearTouch(){
    slide1.classList.remove("activeTouch")
    slide2.classList.remove("activeTouch")
    slide3.classList.remove("activeTouch")
    slide4.classList.remove("activeTouch")
}