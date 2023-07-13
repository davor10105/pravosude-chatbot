//******************* MAIL *******************//
function pisitenam() {
	// hardcode zasad
	ime = "e-predmet";
	domena = "pravosudje.hr";
	 
	adresa = "mailto:" + ime + "@" + domena;
	window.open(adresa,"_self");
}

//*******************  UI  *******************//
			$(function(){

				// Tabs
				$('#tabs').tabs();

				// Dialog			
				$('#dialog').dialog({
					autoOpen: false,
					width: 600,
					buttons: {
						"Ok": function() { 
							$(this).dialog("close"); 
						}, 
						"Cancel": function() { 
							$(this).dialog("close"); 
						} 
					}
				});
				
				// Dialog Link
				$('#dialog_link').click(function(){
					$('#dialog').dialog('open');
					return false;
				});

				
				//hover states on the static widgets
				$('#dialog_link, ul#icons li').hover(
					function() { $(this).addClass('ui-state-hover'); }, 
					function() { $(this).removeClass('ui-state-hover'); }
				);
				
			});

			
//*******************  MENU LEFT  *******************//
jQuery.fn.initMenu = function() {  
    return this.each(function(){
        var theMenu = $(this).get(0);
        $('.acitem', this).hide();
        $('li.expand > .acitem', this).show();
        $('li.expand > .acitem', this).prev().addClass('active');
        $('li a', this).click(
            function(e) {
                e.stopImmediatePropagation();
                var theElement = $(this).next();
                var parent = this.parentNode.parentNode;
                if($(parent).hasClass('noaccordion')) {
                    if(theElement[0] === undefined) {
                        window.location.href = this.href;
                    }
                    $(theElement).slideToggle('normal', function() {
                        if ($(this).is(':visible')) {
                            $(this).prev().addClass('active');
                        }
                        else {
                            $(this).prev().removeClass('active');
                        }    
                    });
                    return false;
                }
                else {
                    if(theElement.hasClass('acitem') && theElement.is(':visible')) {
                        if($(parent).hasClass('collapsible')) {
                            $('.acitem:visible', parent).first().slideUp('normal', 
                            function() {
                                $(this).prev().removeClass('active');
                            }
                        );
                        return false;  
                    }
                    return false;
                }
                if(theElement.hasClass('acitem') && !theElement.is(':visible')) {         
                    $('.acitem:visible', parent).first().slideUp('normal', function() {
                        $(this).prev().removeClass('active');
                    });
                    theElement.slideDown('normal', function() {
                        $(this).prev().addClass('active');
                    });
                    return false;
                }
            }
        }
    );
});
};

$(document).ready(function() {$('.menu').initMenu();});
	
//*******************  MENU HEADER  *******************//
	
	
//*******************  Placeholder for all browsers  *******************//

	$(function() {
	$("input").each(
		function(){
			if($(this).val()=="" && $(this).attr("placeholder")!=""){
			$(this).val($(this).attr("placeholder"));
			$(this).focus(function(){
				if($(this).val()==$(this).attr("placeholder")) $(this).val("");
			});
			$(this).blur(function(){
				if($(this).val()=="") $(this).val($(this).attr("placeholder"));
			});
		}
	});
	
//*******************  Collapsing blocks jQuery  *******************//

	$(document).ready(function() {
		$('.title-grid').append('<span></span>');
		$('.grid-1 span').each(function() {
			var trigger = $(this), state = false, el = trigger.parent().next('.content-gird');
			trigger.click(function(){
				state = !state;
				el.slideToggle();
				trigger.parent().parent().toggleClass('inactive');
			});
		});
				$('.grid-2 span').each(function() {
			var trigger = $(this), state = false, el = trigger.parent().next('.content-gird');
			trigger.click(function(){
				state = !state;
				el.slideToggle();
				trigger.parent().parent().toggleClass('inactive');
			});
		});
				$('.grid-3 span').each(function() {
			var trigger = $(this), state = false, el = trigger.parent().next('.content-gird');
			trigger.click(function(){
				state = !state;
				el.slideToggle();
				trigger.parent().parent().toggleClass('inactive');
			});
		});
	});
				$('.grid-4 span').each(function() {
			var trigger = $(this), state = false, el = trigger.parent().next('.content-gird');
			trigger.click(function(){
				state = !state;
				el.slideToggle();
				trigger.parent().parent().toggleClass('inactive');
			});
		});
	});
	


//*******************  Fancybox  *******************//

	
//*********************  Information messages   (Alerts)  *********************//
	$(document).ready(function() {
		$(".hideit").click(function() {
			$(this).fadeOut(1000);
		});
		
	});

//********************* Color Picker  *********************//
	
//*********************  CALENDAR  *********************//			
	
//*********************  File explorer  *********************//

//*********************   EDITOR   *********************//
	
		
//*********************  FORMS   *********************//
	//select
	$(document).ready(function() {
	 $(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({allow_single_deselect:true}); 
	});
	
	$(document).ready(function(){
	$("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
	$("input[type=file]").each(function(){
	if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("No file selected...");}
	});
	});
	
//********************* Tooltip *********************//	
	$(function(){
		
		$(".tip-top").tipTip({defaultPosition: "top", delay: 1000});
		$(".tip-bottom").tipTip({defaultPosition: "bottom", delay: 1000});
		$(".tip-left").tipTip({defaultPosition: "left", delay: 1000});
		$(".tip-right").tipTip({defaultPosition: "right", delay: 1000});
	});
//*********************   HTML5 Player   *********************//
		
//********************* Select all Checkbox *********************//
	function setChecked(obj) 
		{
	
		var check = document.getElementsByName("id[]");
		for (var i=0; i<check.length; i++) 
		   {
		   check[i].checked = obj.checked;
		   }
	}
	
//********************* TABLE (NEWS) *********************//
/*
$(document).ready(function() {
    $('#example').dataTable( {
        "sPaginationType": "full_numbers"
    } );
} );
*/	
//********************* autorisize *********************//	
/*
	$(document).ready(function() {
	$('textarea.resize-text').autoResize({});
	});
*/	
//********************* Contact list *********************//	
/*
	 $(document).ready(function(){
         $('#slider-contact').sliderNav();
     });
*/	 

//********************* Dialogs *********************//
$(document).ready( function() {
				
				$("#alert_button").click( function() {
					jAlert('This is a custom alert box', 'Alert Dialog');
				});
				
				$("#confirm_button").click( function() {
					jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
						jAlert('Confirmed: ' + r, 'Confirmation Results');
					});
				});
				
				$("#prompt_button").click( function() {
					jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
						if( r ) alert('You entered ' + r);
					});
				});
				
				$("#alert_button_with_html").click( function() {
					jAlert('You can use HTML, such as <strong>bold</strong>, <em>italics</em>, and <u>underline</u>!');
				});
				
				$(".alert_style_example").click( function() {
					$.alerts.dialogClass = $(this).attr('id'); // set custom style class
					jAlert('This is the custom class called &ldquo;style_1&rdquo;', 'Custom Styles', function() {
						$.alerts.dialogClass = null; // reset to default
					});
				});
			});
//********************* Auto TAB (Input) *********************//
	$(document).ready(function() {
		$('#autotab_example').submit(function() { return false; });
		$('#autotab_example :input').autotab_magic();
		// Number example
		$('#area_code, #number1, #number2').autotab_filter('numeric');
		$('#ssn1, #ssn2, #ssn3').autotab_filter('numeric');
		// Text example
		$('#text1, #text2, #text3').autotab_filter('text');
		// Alpha example
		$('#alpha1, #alpha2, #alpha3, #alpha4, #alpha5').autotab_filter('alpha');
		// Alphanumeric example
		$('#alphanumeric1, #alphanumeric2, #alphanumeric3, #alphanumeric4, #alphanumeric5').autotab_filter({ format: 'alphanumeric', uppercase: true });
		$('#regex').autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
	});
	
	
//*********************   Charts   *********************//	
//////////////////////
