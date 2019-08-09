/*------------------------------------*\
    #DROPDOWN MENU
\*------------------------------------*/
/**
 * Toggles active class on the dropdown menu
 * 1) Select all dropdown menu triggers and cycle through them
 * 2) On click, find the dropdown menu trigger parent
 * 3) If the dropdown menu trigger parent already has active class, remove it.
 * 4) If the dropdown menu trigger parent does not have an active class, add it.
 */
(function(){
	if (document.querySelectorAll(".ads-js-dropdown-trigger").length>0) {
		var dropdownTrigger = document.querySelectorAll(".ads-js-dropdown-trigger"); /* 1 */

		for (i=0; i<dropdownTrigger.length; i++) { /* 1 */
			dropdownTrigger[i].addEventListener("click",function(event){ /* 2 */
				thisParent = this.parentNode;/* 2 */
				if (thisParent.classList.contains("ads-is-active")) { /* 3 */
					thisParent.classList.remove("ads-is-active"); /* 3 */
				}
				else {
					thisParent.classList.add("ads-is-active"); /* 4 */
				}
			});
		}
	}

})();
