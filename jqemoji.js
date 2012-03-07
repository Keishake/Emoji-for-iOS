$(function(){



});

function jqemoji(str){
	str = String(str);
	for(i=0;i<str.length;i++){
		code = str.charCodeAt(i);
		if(code==55356||code==55357||code==8419){
			return false;
		}
	}
	return true;
}
