/*------------------------------------*\
    #TREE NAVIGATION
\*------------------------------------*/

/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
 * 4) Add aria-expanded (based on initial state)
 * 5) On click, find the nav dropdown trigger parent
 * 6) If the nav dropdown trigger parent already has active class, remove it and set aria-expanded=false on toggle.
 * 7) If the nav dropdown trigger parent does not have an active class, add it and set aria-expanded=true on toggle.
 */
(function() {
	var navLink = document.querySelectorAll(
		".ads-js-tree-nav-dropdown-trigger"
	); /* 1 */

	for (i = 0; i < navLink.length; i++) {
		/* 1 */

		if (navLink[i].nodeName != "BUTTON") {
			/* 2 */
			navLink[i].setAttribute("role", "button");
			navLink[i].setAttribute("tabindex", "0");

			navLink[i].addEventListener("keypress", function(event) {
				/* 3 */
				if (event.keyCode == 32) {
					event.preventDefault();
					this.click();
				}
			});
		}

		if (navLink[i].parentNode.classList.contains("ads-is-active")) {
			/* 4 */
			navLink[i].setAttribute("aria-expanded", "true");
		} else {
			navLink[i].setAttribute("aria-expanded", "false");
		}

		navLink[i].addEventListener("click", function(event) {
			/* 5 */
			event.preventDefault();
			var navLinkParent = this.parentNode; /* 5 */

			if (navLinkParent.classList.contains("ads-is-active")) {
				/* 6 */
				navLinkParent.classList.remove("ads-is-active");
				this.setAttribute("aria-expanded", "false");
			} else {
				/* 7 */
				navLinkParent.classList.add("ads-is-active");
				this.setAttribute("aria-expanded", "true");
			}
		});
	}
})();
