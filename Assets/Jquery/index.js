// $("li").on("click",function(){
// 	if ($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 		});
// 	}
// 	else{
// 		$(this).css({
// 		color: "grey",
// 		textDecoration: "line-through"
// 		});
// 	}
// });

$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(function(){ //this is for stopping the firing of parent element.
		$(this).remove();  //this id to remove the li after fadeout
	});
	event.stopPropagation();////this is for stopping the firing of parent element.
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){   // key ccode for enter key
		var inputVar = $(this).val(); // this gives the value of 
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ inputVar + "</li>")
	}
})

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})