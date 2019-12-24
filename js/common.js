$(document).ready(function() {
	$(".message-box .list-group").addClass("m-3");
	$(".message-box .list-group-item").addClass("border-0 text-center");
	$(".message-box .tab-content .tab-pane .media").addClass("bg-white m-3 p-3 rounded");
	$(".message-box .tab-content .tab-pane .media .media-body").addClass("p-0");
	$(".message-box .tab-content .tab-pane .media .media-body .custom-control").addClass("m-3");
	var navH = document.getElementById("mynav").offsetHeight;
 	var bodyH = $(window).height();
	var h = bodyH - navH + "";
	$(".tab-content").css({"height": h});
});

