(function ($) {
 lpm = jQuery.noConflict();
lpm(document).ready(function() {


 $('.main-menu a.pl-blog').after('<span class=blog-btn-img><a href="http://makingmusicians.typepad.com/making_musicians/"></a></span>');
 $('.main-menu a.pl-blog').parent('li').addClass('blog');


 $('#block-system-main .content .view-lpm-teachers').after('<div class="no-result">No Teachers are found, please search again.</div>');

        


 
 $('input#teacher_search').quicksearch('.view-lpm-teachers .views-row',{
	 'delay': 200,
	'noResults': '.no-result',
    'show': function () {
    if ($('input#teacher_search').val() == ''){
        	$(this).addClass('first');
        }else{
		      $('.view-lpm-teachers li').removeClass('first');
		      $(this).addClass('show');
      }
    },
    'hide': function () {
        $(this).removeClass('show').addClass('hide');
    }

 });
	

 $('input#pp_teacher_search').quicksearch('.view-lpm-teachers .views-row',{
	 'delay': 200,
	'noResults': '.no-result',
    'show': function () {
    if ($('input#teacher_search').val() == ''){
        	$(this).addClass('first');
        }else{
		      $('.view-lpm-teachers li').removeClass('first');
		      $(this).addClass('show');
      }
    },
    'hide': function () {
        $(this).removeClass('show').addClass('hide');
    }

 });





	$(".page-node-76 .field-name-body .field-item div").click(function() {

		// same as in previous example
		$(this).flashembed("/sites/letsplaymusicsite.com/files/video/lpmVideo.swf");
	});
	
	


});
})(jQuery);


/*
$('table#myID tbody tr').quicksearch({ 
	position: 'before', 
	attached: 'table#myID', 
	stripeRowClass: ['odd', 'even'], 
	labelText: 'Search', 
	fixWidths: true, 
	delay: 50 });
	
$('table#myID tr').hide();
$('.qs_input').keydown(function(){ $('table#myID thead tr').show(); });
$('.qs_input').blur(function(){ if ($(this).val() == '') $('table#myID tr').hide(); });

*/