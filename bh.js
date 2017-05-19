function sameHeights(selector) {
	    var selector = selector || '[data-key="sameHeights"]',
	        query = document.querySelectorAll(selector),
	        elements = query.length,
	        max = 0;
	    if (elements) {
	        while (elements--) {
	            var element = query[elements];
	            if (element.clientHeight > max) {
	                max = element.clientHeight;
	            }
	        }
	        elements = query.length;
	        while (elements--) {
	            var element = query[elements];
	            element.style.height = max + 'px';
	        }
	    }
	}

//navigation

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
