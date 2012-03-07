function emoji(str){
	str = String(str);
	for(i=0;i<str.length;i++){
		code = str.charCodeAt(i);
		if(code==55356||code==55357||code==8419||code==9994
            ||code==9995||code==9996||code==9728||code==9748
            ||code==9729||code==9924||code==9742||code==9786
            ||code==10084||code==10024||code==10069||code==9757
            ||code==9889||code==10175||code==9986||code==9917
            ||code==9918||code==9971||code==9824||code==9829
            ||code==9827||code==9830||code==12349||code==9749
            ||code==9962||code==9978||code==9970||code==9973
            ||code==9992||code==9981||code==9888||code==9832
            ||code==11014||code==11015||code==11013||code==10145
            ||code==8599||code==8598||code==8600||code==8601
            ||code==9664||code==9654||code==9194||code==9193
            ||code==10035||code==10036||code==9800||code==9801
            ||code==9802||code==9803||code==9804||code==9805
            ||code==9806||code==9807||code==9808||code==9809
            ||code==9810||code==9811||code==9934||code==11093
            ||code==10060||code==8482
            ){
			return false;
		}
	}
	return true;
}
