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
        imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 108%";
         body.style = `opacity: 1; bottom: -0.1rem;`;


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
            body.style = `opacity: 0; bottom: 9rem;`;
        })
    })
})
