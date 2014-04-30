// eigene JavaScript Funktionen
$(document).ready(function(){
	
	$('[data-toggle=offcanvas]').click(function(){
		$('.row-offcanvas').toggleClass('active');
	});
	
});


/* Drag&Drop */

$(function(){
	
	// jQuery sortable
	$('#sortable').sortable({
		revert: true,
		helper:'clone',
		placeholder:'col-6 col-sm-6 col-lg-4 elemGhost',
		start: function(event, ui){
			ui.placeholder.height(ui.item.height());
			ui.placeholder.height(ui.helper.outerHeight());
		},
		stop: function(event, ui){
			var relation = $(ui.item).attr('rel');
			var head = $(ui.item).html();
			if(!$(ui.item).hasClass('elem')){
				ui.item.replaceWith(
					'<div class="elem col-6 col-sm-6 col-lg-4" rel="' + relation + '">' +
					'<div class="innerWrap">' +
					'<h3>'+head+'<span class="close"></span></h3>' +
					'<p>xxx Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. </p>' +
					'</div>' +
					'</div>');
					
				loadContent($('#sortable DIV[rel='+relation+'] P'),relation);
			}
		},
		receive: function(event, ui){
			ui.item.draggable('disable');
			ui.item.css('opacity','0.4');
		}
	});
	
	// jQuery draggable
	$('#draggable A').draggable({
		connectToSortable: '#sortable',
		helper:'clone',
		placeholder:'col-6 col-sm-6 col-lg-4 elemGhost',
		revert:'invalid',
		cursor:'move',
		snap:'#sortable',
		create:checkExistingElements
	}).disableSelection();
	
	// Elemente aus Content wieder Löschen und
	// in Navigation wieder freigeben
	$('BODY').on('click','.close',function(){
		var navItem = $(this).closest('.elem').attr('rel');	
		$('A[rel="'+navItem+'"]').draggable();
		$('A[rel="'+navItem+'"]').draggable('enable');
		$('A[rel="'+navItem+'"]').css('opacity','1.0');
		//$(this).parent().remove();
		$(this).closest('.elem').remove();
	});
	
	// Prüfen ob Elemente bereist in content vorhanden sind
	// und die entsprechenden menüpunkte deaktivieren
	function checkExistingElements(event, ui){
		var relTarget = $(event.target).attr('rel');
		if($('#sortable [rel=' + relTarget + ']').length > 0){
			loadContent('.content [rel=' + relTarget + ']',relTarget);			
			$(event.target).draggable();
			$(event.target).draggable('disable');
			$(event.target).css('opacity','0.4');
		}
	}
	
	function loadContent(container,contentRelation){
		$.ajax({
			type:'POST',
			url: 'modul.php',
			data:{content:contentRelation},
			success:function(data){
				console.log(container);
				$(container).html('<p>'+data+'</p>');
			}
			
		});
	}
	
});

