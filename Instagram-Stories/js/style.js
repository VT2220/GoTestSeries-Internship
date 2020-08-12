document.querySelector(".t1").style.borderColor = "white";

document.querySelector(".right-tap").onclick = function(){
    document.querySelector(".image1").style.display = "none";
    document.querySelector(".t1").style.borderColor = "rgb(180, 180, 180)";
    document.querySelector(".image2").style.display = "block";
    document.querySelector(".t2").style.borderColor = "white";
}

document.querySelector(".left-tap").onclick = function(){
    document.querySelector(".t2").style.borderColor = "rgb(180, 180, 180)";
    document.querySelector(".image2").style.display = "none";
    document.querySelector(".t1").style.borderColor = "white";
    document.querySelector(".image1").style.display = "block";
}

document.querySelector(".right-tap").ondblclick = function(){
    document.querySelector("#story1-wrap").style.display = "none";
    document.querySelector("#story2-wrap").style.display = "block";
}

document.querySelector(".left-tap").ondblclick = function(){
    document.querySelector("#story2-wrap").style.display = "none";
    document.querySelector("#story1-wrap").style.display = "block";
    
}


