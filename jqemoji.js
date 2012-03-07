function jqemoji(str){
	str = String(str);
	for(i=0;i<str.length;i++){
		code = str.charCodeAt(i);
		if(code==55356||code==55357||code==8419||code==9994||code==9995||code==9996||code==9728||code==9748||code==9729||code==9924||code==9742){
			return false;
		}
	}
	return true;
}
