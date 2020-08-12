var elem = document.getElementsByClassName("see-more");
for(var i = 0; i < elem.length; i++){
    elem[i].onclick = function(){
        if(this.innerHTML === "see less"){
            this.previousSibling.style.display = "none";
            this.innerHTML = "... see more";
        }
        else{
            this.previousSibling.style.display = "inline";
            this.innerHTML = "see less";
        }
    }
}

window.onload=function(){
			var hidemenu = document.querySelector('#sidebar-menu');
			var hidelayer = document.querySelector('#sidebar-layer');
			document.onclick = function(element){
				if(element.target == document.querySelector('#menu-trigger')){
					hidemenu.style.transform = 'translateX(0%)';
					hidelayer.style.left = '0%';
				}
				else if(element.target == document.querySelector('#sidebar-layer')){
					hidemenu.style.transform = 'translateX(-100%)';
					hidelayer.style.left = '-100%';
				}
			}
		}