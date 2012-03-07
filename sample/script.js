$(function(){
	$('#test').click(function(){
		console.log('on');
		text = $('#text').val();
		result="";
		for(i=0;i<text.length;i++){
			code = text.charCodeAt(i);
			result += code+":";
		}
		console.log(result);
		$.get('result.php',{'result':result});
	
	});
	
});
