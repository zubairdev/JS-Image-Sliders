
var index = 1;

function plusIndex(n) {
	index = index + n;
	showImage(index);

}

showImage(1);

function showImage(n) {
	var x = document.getElementsByClassName("slides");
	var i;
	for (i = 0; i < x.length; i++) {
		if (n > x.length) { index = 1; }
		if (n < 1) { index = x.length; }
		x[i].style.display = "none";
	}
	x[index-1].style.display = "block";
}

autoSlide();

function autoSlide() {
	var x = document.getElementsByClassName("slides");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	if (index > x.length) { index = 1; }
	x[index-1].style.display = "block";
	index++;
	setTimeout(autoSlide, 2000);
}
