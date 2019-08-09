/*------------------------------------*\
    #ALERT
\*------------------------------------*/

/**
 * Alert
 * 1) Select all alerts on page
 * 2) On click of alert close trigger, remove the alert message
 */
(function() {
	var alertBlock = document.querySelectorAll(".ads-js-alert"); /* 1 */

	for (i = 0; i < alertBlock.length; i++) {
		/* 1 */
		if (alertBlock[i].querySelector(".ads-js-alert-close-trigger")) {
			var closeBtn = alertBlock[i].querySelector(
				".ads-js-alert-close-trigger"
			);
			closeBtn.addEventListener("click", function(e) { /* 2 */
				e.preventDefault();
				console.log(this);
				var alertParent = this.parentNode.parentNode.parentNode.parentNode;
				var alert = this.parentNode.parentNode.parentNode;
				alertParent.removeChild(alert); /* 2 */
			});
		}
	}
})();
