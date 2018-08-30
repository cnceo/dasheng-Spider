// 彩票开奖配置
exports.cp=[
                                                                                                       	


{                                                                                                         	//
		title:'重庆时时彩',                                                                                  	//
		source:'杏彩',                                                                                        	//
		name:'bx15',                                                                                          	//
		enable:true,                                                                                          	//
		timer:'bx15',                                                                                         	//
		option:{                                                                                              	//
			host:"520.ag",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/xml/cqssc',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//杏
				str=str.substr(0,200);	                                                                      	//彩
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//系
				var m;                                                                                        	//统
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//
						type:1,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1].substring(0,8) + ""+m[1].substring(8),                                                    	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('重庆时时彩解析数据不正确');                                                           	//
			}                                                                                                 	//
		}                                                                                                     	//
	},     	


{                                                                                                         	//
		title:'新疆时时彩',                                                                                  	//
		source:'杏彩',                                                                                        	//
		name:'bx15',                                                                                          	//
		enable:true,                                                                                          	//
		timer:'bx15',                                                                                         	//
		option:{                                                                                              	//
			host:"api.eiini.cn",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/xjssc/xjssc4.php',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//杏
				str=str.substr(0,200);	                                                                      	//彩
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//系
				var m;                                                                                        	//统
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//
						type:12,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1].substring(0,8) + "-"+m[1].substring(8),                                                                         	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('新疆时时彩解析数据不正确');                                                           	//
			}                                                                                                 	//
		}                                                                                                     	//
	},  

	{                                                                                                         	//
		title:'天津时时彩',                                                                                  	//
		source:'杏彩',                                                                                        	//
		name:'bx15',                                                                                          	//
		enable:true,                                                                                          	//
		timer:'bx15',                                                                                         	//
		option:{                                                                                              	//
			host:"api.eiini.cn",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/tjssc/tjssc.php',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//杏
				str=str.substr(0,200);	                                                                      	//彩
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//系
				var m;                                                                                        	//统
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//
						type:60,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                         	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('天津时时彩解析数据不正确');                                                           	//
			}                                                                                                 	//
		}                                                                                                     	//
	},          	




	
	




{                                                                                                         	//统
		title:'高速六合彩',                                                                                   	//彩
		source:'杏彩',                                                                                        	//
		name:'gslhc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'gslhc',                                                                                        	//
		option:{                                                                                              	//
			host:"api.eiini.cn",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/lhc/lhc.php',                                                                 	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:77,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('高速六合彩解析数据不正确');                                                            	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
														
                                                                                                        

{                                                                                                           //
		title:'北京pk10',                                                                              			//
		source:'北京福彩网',                                                                                	//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                            //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"api.eiini.cn",                                                                                   //京
			timeout:50000,                                                                                      //快
			path: '/bjpk10/pk10.php',                                                                      //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:20,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //PK
			}catch(err){                                                                                        //拾
				throw('--------北京福彩网pk10解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //
	},               		
	
	


{                                                                                                                             //
		title:'福彩3D',                                                                                                           //
		source:'香雨娱乐平台',                                                                                                    //
		name:'fc3d',                                                                                                              //
		enable:true,                                                                                                              //
		timer:'fc3d',                                                                                                             //
                                                                                                                                  //
		option:{                                                                                              	//彩
			host:"api.eiini.cn",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/fc3d/fc3d1.php',                                                              	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:9,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//杏
						data:m[2]                                                                             	//彩
					};                                                                                        	//系
				}					                                                                          	//统
			}catch(err){                                                                                      	//彩
				throw('福彩3D解析数据不正确');                                                              	//
			}                                                                                                 	//
		}                                                                                                     	//
	},


{                                                                                                                             //
		title:'排列3',                                                                                                            //排
		source:'香雨娱乐平台',                                                                                                    //列
		name:'pl3',                                                                                                              //3
		enable:true,                                                                                                              //
		timer:'pl3',                                                                                                             //
                                                                                                                                  //
		option:{                                                                                                                  //
			host:"www.500wan.com",                                                                                                //
			timeout:50000,                                                                                                        //
			path: '/static/info/kaijiang/xml/pls/list10.xml',                                                                     //
			headers:{                                                                                                             //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"                                                //
			}                                                                                                                     //
		},                                                                                                                        //
		                                                                                                                          //
		parse:function(str){                                                                                                      //
			try{                                                                                                                  //
				str=str.substr(0,300);                                                                                            //
				var m;	                                                                                                          //
				var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                                    //
				if(m=str.match(reg)){                                                                                             //
					return {                                                                                                      //
						type:10,                                                                                                  //
						time:m[3],                                                                                                //
						number:20+m[1],                                                                                           //
						data:m[2]                                                                                                 //
					};                                                                                                            //
				}                                                                                                                 //
			}catch(err){                                                                                                          //
				throw('排3解析数据不正确');                                                                                       //
			}                                                                                                                     //
		}                                                                                                                         //
	},  

{                                                                                                           //
		title:'上海11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"api.eiini.cn",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/sh11x5/sh115_360.php',                                                                        //海
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:15,                                                                                //
						time:m[3],                                                                              //
						number:m[1].substring(2,8) + ""+m[1].substring(8),                                                                           //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------凌晨科技彩票上海11选5解析数据不正确');                                                //
			}                                                                                                   //上
		}                                                                                                       //海
	},


{                                                                                                           //
		title:'广东11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"api.eiini.cn",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/gd11x5/gd11x51.php',                                                                        //海
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:6,                                                                                //
						time:m[3],                                                                              //
						number:m[1].substring(2,8) + ""+m[1].substring(8),                                                                           //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------凌晨科技彩票广东11选5解析数据不正确');                                                //
			}                                                                                                   //上
		}                                                                                                       //海
	},	       	
	
	
	{                                                                                                           //
		title:'江西11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"api.eiini.cn",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/jx11x5/jx115_360.php',                                                                        //海
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:16,                                                                                //
						time:m[3],                                                                              //
						number:m[1].substring(0,8) + "-"+m[1].substring(8),                                                                           //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------凌晨科技彩票江西11选5解析数据不正确');                                                //
			}                                                                                                   //上
		}                                                                                                       //海
	},	


{                                                                                                           //
		title:'山东11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"api.eiini.cn",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/sd11x5/sd115_360.php',                                                                        //海
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:7,                                                                                //
						time:m[3],                                                                              //
						number:m[1].substring(2,8) + ""+m[1].substring(8),                                                                           //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------凌晨科技彩票山东11选5解析数据不正确');                                                //
			}                                                                                                   //上
		}                                                                                                       //海
	},	

];                                                                                                              

// 出错时等待 15                                                                                                
exports.errorSleepTime=15;                                                                                      

// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
exports.restartTime=0;

exports.submit={

	host:'pay.big268.com',
	path:'/index.php/dataSource/kj'
}

exports.dbinfo={
	host:'116.206.92.137',
	user:'dasheng',
	password:'www.123.com',
	database:'dasheng'


}

global.log=function(log){
	var date=new Date();
	console.log('['+date.toDateString() +' '+ date.toLocaleTimeString()+'] '+log)
}


function reparseFrom9800(bet, type) {
	str = bet.str;

	exports.errorSleepTime=500;  

	reg = new RegExp("<TD bgColor=#f6f6f6 align=\"center\"" + bet.actionNo + "<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color=\"#FF0000\"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color=\"#009933\">(\d+)<\/font><\/b>", ""); //

	match = str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[1] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: bet.actionNo
		}

		data.data = match[2] + "," + match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[7];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}

function getFrom9800(str, type) {

	str = str.substr(str.indexOf('bai12'), 560);
	exports.errorSleepTime=500;  

	var reg = /<TD bgColor=#f6f6f6 align="center">(\d+)<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color="#FF0000"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color="#009933">(\d+)<\/font><\/b>/,
		match = str.match(reg);

	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[2] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: match[1]
		}

		data.data = match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[8] + "," + match[9];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}