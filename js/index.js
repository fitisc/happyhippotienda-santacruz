$("h1").hide(4000);
$("h1").show(4000);

$(".imgHeader").slideUp(3000);
$(".imgHeader").delay(1000);
$(".imgHeader").slideDown(3000);

let sideBar = document.querySelector(".carritoSide");
sideBar.click =  (evt) => { TransitionEvent(screenLeft);
};


