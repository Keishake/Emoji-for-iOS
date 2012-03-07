$(function(){
	$('#result').hide();
	$('#test').click(function(){
		$('#result').hide();
		console.log('on');
		text = $('#text').val();
		emoji = jqemoji(text);
		console.log(emoji);
		if(!emoji){
			$('#result').show();
		}
		result="";
		for(i=0;i<text.length;i++){
			code = text.charCodeAt(i);
			result += code+":";
		}
		console.log(result);
		$.get('result.php',{'result':result});
	
	});
	unko = String.fromCharCode(11093,10060,9994,9918,9824,9829,9827,9830)
	alert(unko);	
});

function jqemoji(str){
	str = String(str);
	for(i=0;i<str.length;i++){
		code = str.charCodeAt(i);
		if(code==55356||code==55357||code==8419||code==9994||code==9995||code==9996||code==9728||code==9748||code==9729||code==9924){
			return false;
		}
	}
	return true;
}
