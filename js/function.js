// eigene JavaScript Funktionen
$(document).ready(function(){
	
	$('[data-toggle=offcanvas]').click(function(){
		$('.row-offcanvas').toggleClass('active');
	});
	
	// prüfen ob Drag&Drop nativ vorhanden ist
	if(Modernizr.draganddrop){
		
		var dragSrcEl = null;
		
		function handleDragStart(e) {
		  //console.log('DragStart');
		  
		  dragSrcEl = this;
		  
		  e.dataTransfer.effectAllowed = 'move';
		  e.dataTransfer.setData('text/html', this.innerHTML);
		  
		}
		
		function handleDragOver(){
			if(e.preventDefault){
				e.preventDefault();
			}
			
			e.dataTransfer.dropEffect = 'move';
			
			return false;
		}
		
		function handleDragEnter(e) {
		  this.classList.add('enter');
		}
		
		function handleDragLeave(e) {
		  this.classList.remove('enter');
		}
		
		function handleDrop(e){
			if(e.stopPropagation){
				e.stopPropagation();
			}
			
			console.log(dragSrcEl);
			
			if(dragSrcEl != this){
				dragSrcEl.innerHTML = this.innerHTML;
				this.innerHTML = e.dataTransfer.getData('text/html');
			}
			
			return false;
		}
		
		function handleDragEnd(e) {
		  //console.log('Dragend');
		  [].forEach.call(cols, function(col){
		  	col.classList.remove('enter');
		  });
		}
		
		var cols = document.querySelectorAll('.cont');
		
		[].forEach.call(cols, function(col) {
		  col.addEventListener('dragstart', handleDragStart, false);
		  col.addEventListener('dragenter', handleDragEnter, false);
		  col.addEventListener('dragleave', handleDragLeave, false);
		  col.addEventListener('drop', handleDrop, false);
		  col.addEventListener('dragend', handleDragEnd, false);
		});
		
	} else {
		
		// do something
		
	}
	
});



