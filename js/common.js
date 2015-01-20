head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	console.log($('body').html());
});

$('.js-popup-pricelist').click(function(event) {
  $('.overlay').show();
  $('.popup_pricelist').addClass('is-visible');
  return false;
 });

$('.js-popup-opt').click(function(event) {
  $('.overlay').show();
  $('.popup_opt').addClass('is-visible');
  return false;
 });