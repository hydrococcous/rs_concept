// eigene JavaScript Funktionen
$(document).ready(function(){
	
	$('[data-toggle=offcanvas]').click(function(){
		$('.row-offcanvas').toggleClass('active');
	});
	
});


/* Drag&Drop */
$(init);

function init(){
	$('.makeMeDraggable').draggable({
		containment:'#content',
		cursor:'move',
		snap:'.makeMeDroppable',
		revert: false,
		helper: 'clone'
	});
	
	$('.makeMeDroppable').droppable({
		accept: '.makeMeDraggable',
		drop: handleDropEvent,
		over: function(event, ui){
			$(this).html('<div style="position:absolute;">Drop it!!!</div>')
		}
	});
} 

function handleDropEvent(event, ui){

	var dragElem = ui.draggable.clone();
	dragElem.draggable({
		revert: false,
		helper: 'clone',
		snap:'.makeMeDroppable'	
	});
	dragElem.css({'top': 0, 'left': 0});
	$(this).append(dragElem);
}

