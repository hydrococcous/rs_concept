// eigene JavaScript Funktionen
$(document).ready(function(){
	
	$('[data-toggle=offcanvas]').click(function(){
		$('.row-offcanvas').toggleClass('active');
	});
	
});


$(init);

function init(){
	$('#makeMeDraggable').draggable({
		containment:'#content',
		cursor:'move',
		snap:'#makeMeDroppable',
		revert: true
	});
	
	$('#makeMeDroppable').droppable({
		drop: handleDropEvent
	});
} 

function handleDropEvent(event, ui){
	var draggable = ui.draggable;
	ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
	ui.draggable.draggable( 'option', 'revert', false );
}


$('#makeMeDraggable').on('drag', function(event, ui){
	
	console.log('google jquery ui drag drop drag again);
	
});
