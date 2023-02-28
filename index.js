

window.addEventListener('load', ()=>{
    const anim = [
{bottom: '0rem'}
    ]

    var card = document.querySelectorAll(".card");

    card.forEach(element =>{
        element.addEventListener("mouseenter", ()=>{
            console.log("mouseover");

           console.log(element);
        var body = element.querySelector(".card-body");
        var imagecover = element.querySelector("#imagecover");
        var buttons = element.querySelectorAll(".zindex")
        var elementitle = element.querySelector(".elementitle");
        elementitle.style = "opacity: 1;";
        buttons.forEach(but =>{
            but.style = "opacity: 1;";
        })
        //fix in some phone heights
       /* if(window.innerHeight >= 700 && window.innerHeight <= 750){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 138%";
            body.style = `opacity: 1; top: 133%;`; 
        }else if(window.innerHeight >= 675 && window.innerHeight <= 699){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 145%";
            body.style = `opacity: 1; top: 140%;`; 
        }else if(window.innerHeight >= 650 && window.innerHeight <= 674){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 154%";
            body.style = `opacity: 1; top: 146%;`; 
        }else if(window.innerHeight >= 600 && window.innerHeight <= 649){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 160%";
            body.style = `opacity: 1; top: 153%;`;
        } else if(window.innerHeight >= 550 && window.innerHeight <= 599){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 167%";
            body.style = `opacity: 1; top: 160%;`;
        }else if(window.innerHeight >= 900 && window.innerHeight <= 980){
            body.style = `opacity: 1; top: 107%;`; 
             imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 107%";
        }else{      
            body.style = `opacity: 1; top: 130%;`; 
             imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 138%";
    }*/
    body.style = `opacity: 1; top: 100%;`; 
    imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 110%";


        })
        element.addEventListener("mouseleave", ()=>{
            console.log("mouseout");
            var body = element.querySelector(".card-body");
            var imagecover = element.querySelector("#imagecover");
            imagecover.style = "background-color: rgba(111, 66, 193, 0.5); height: 0%;";
                    var buttons = element.querySelectorAll(".zindex")
            var elementitle = element.querySelector(".elementitle");
            elementitle.style = "opacity: 0;";
            buttons.forEach(but =>{
                but.style = "opacity: 0;";
            })
            body.style = `opacity: 0; top: 0%;`;
        })
    })

var selectors = document.querySelectorAll(".selectorcontainer");

selectors.forEach(select =>{
select.querySelector("div").addEventListener('click', ()=>{
    selectors.forEach(removeselected =>{
      removeselected.classList.remove('selected'); 

      select.querySelector("div").removeAttribute('style');
    })

    /*
    if(select.querySelector('div').id == "personalselector"){
        select.querySelector("div").id = null;
    }*/
    select.classList.add('selected');
    if(select.querySelector("div").innerHTML.trim() == "Business projects"){
        console.log("business projects");
        document.querySelector("#personalprojects").style = "display: none;";
        document.querySelector("#businessprojects").style = "display: flex;";

    }else{
        console.log("personal projects");
        document.querySelector("#personalprojects").style = "display: flex;";
        document.querySelector("#businessprojects").style = "display: none;";
    }

})
})


function App(){}
console.log("nice");
    console.log("new");
    var app = new App();
    window.app = app



    App.prototype.processingButton = function(event){
        
const btn = event.currentTarget;
const carruselList = event.currentTarget.parentNode;
const track = event.currentTarget.parentNode.querySelector("#track");
const carrusel = track.querySelectorAll(".carusel");

const carruselwidth = carrusel[0].offsetWidth;

const trackWidth = track.offsetWidth;
const listWidth = carruselList.offsetWidth;

track.style == "" ? leftPosition = track.style.leftPosition = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselwidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselwidth, track)


    }
    let prevAction = (leftPosition, carruselwidth, track) =>{
        if(leftPosition > 0){
            track.style.left = `${-1 * (leftPosition - carruselwidth)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carruselwidth, track) =>{
        if(leftPosition < (trackWidth - listWidth)){
            track.style.left = `${-1 * (leftPosition + carruselwidth)}px`;
        }
    }


})

