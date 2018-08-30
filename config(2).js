// 出错时等待 10
exports.errorSleepTime = 10;
// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
exports.restartTime = 0;

exports.submit={

	host:'127.0.0.2',
	path:'/admin778899.php/data/kj'
}

exports.dbinfo={
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'root',
	database:'boe2018'

}

exports.cp = [
    {
        title: '重庆时时彩',
        source: '168',
        name: 'cqssc',
        enable: true,
        timer: 'cqssc',
        option: getOption(1),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(1, json);
                }
            } catch (err) {
                throw('重庆时时彩解析数据不正确');
            }
        }
    },
    {
        title: '江苏快3',
        source: '168',
        name: 'jsk3',
        enable: true,
        timer: 'jsk3',
        option: getOption(10),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(10, json);
                }
            } catch (err) {
                throw('江苏快3解析数据不正确');
            }
        }
    },
    {
        title: '北京赛车(PK10)',
        source: '168',
        name: 'bjpk10',
        enable: true,
        timer: 'bjpk10',
        option: getOption(50),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(50, json);
                }
            } catch (err) {
                throw('北京赛车(PK10)解析数据不正确');
            }
        }
    },
    {
        title: '广东快乐十分',
        source: '168',
        name: 'gdklsf',
        enable: true,
        timer: 'gdklsf',
        option: getOption(60),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(60, json);
                }
            } catch (err) {
                throw('广东快乐十分解析数据不正确');
            }
        }
    },
    {
        title: '广西快乐十分',
        source: '168',
        name: 'gxklsf',
        enable: true,
        timer: 'gxklsf',
        option: getOption(59),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(59, json);
                }
            } catch (err) {
                throw('广西快乐十分解析数据不正确');
            }
        }
    },
    {
        title:'广东11x5)',
        source:'168',
        name:'gd11x5',
        enable:true,
        timer:'gd11x5',
        option:getOption(21),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(21, json);
                }
            }catch(err){
                throw('广东11x5 解析数据不正确');
            }
        }
    },

    {
        title: '重庆幸运农场',
        source: '168',
        name: 'klsf',
        enable: true,
        timer: 'klsf',
        option: getOption(61),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(61, json);
                }
            } catch (err) {
                throw('重庆幸运农场解析数据不正确');
            }
        }
    },
    {
        title: '北京快乐8',
        source: '168',
        name: 'bjk8',
        enable: true,
        timer: 'bjk8',
        option: getOption(65),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(65, json);
                }
            } catch (err) {
                throw('北京快乐8解析数据不正确');
            }
        }
    },
    {

        title: 'PC蛋蛋',
        source: '168',
        name: 'pcdd',
        enable: true,
        timer: 'pcdd',
        option: getOption(66),
        parse: function (str) {
            try {
                var json = {};
                if (json = JSON.parse(str)) {
                    return getData(66, json);
                }
            } catch (err) {
                throw('PC蛋蛋解析数据不正确');
            }
        }
    },
    {
        title:'香港六合彩',                                                                           	    	//
		source:'百度',                                                                                 			//
		name:'hclhc',                                                                                          //
		enable:true,                                                                                            //
		timer:'hclhc',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/lhc.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){ 
				var bian1=m[1].substr(-9);
                var bian2=m[1].substr(0,8);
 				var zong=bian2+bian1;				//
					return {                                                                                    //
						type:70,                                                                                //
						time:m[3],                                                                              //
						number:bian1,                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------hclhc解析数据不正确');  
            }
        }
    },
    /**极速 1.5 赛车*/
    {
        title: '极速赛车',
        source: 'BOT',
        name: 'jspk10',
        enable: true,
        timer: 'jspk10',
        option: {
            timeout: 5000,
            host: "127.0.0.1",
            path: '/sylot/js_pk10',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                	//
                var m;                                                                                        	//
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 72,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
                throw('极速赛车 解析数据不正确');                                                            	//
}
        }
    },
    /**极速 5 六合彩*/
    {
        title: '赛马',
        source: 'BOT',
        name: 'jsft',
        enable: true,
        timer: 'jsft',
        option: {
            // host:"1680660.com",
            // path:"/smallSix/findSmallSixInfo.do?lotCode=10048",
            host: "127.0.0.1",
            timeout: 50000,
            path: '/sylot/js_pk10',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                    	//
                var m;                                                                                        	//
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 56,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
                throw('极速时时彩 解析数据不正确');				//
            }
        }
    },
    /**极速 1.5 时时彩*/
    {
        title: '极速时时彩',
        source: 'BOT',
        name: 'jsssc',
        enable: true,
        timer: 'jsssc',
        option: {
            host: "127.0.0.1",
            path: '/sylot/js_ssc',
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	//
                var m;
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 73,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
                throw('极速时时彩 解析数据不正确');                                                            	//
            }
        }
    },
    /**极速 5 六合彩*/
    {
        title: '极速六合彩',
        source: 'BOT',
        name: 'jslhc',
        enable: true,
        timer: 'jslhc',
        option: {
            host: "127.0.0.1",
            timeout: 50000,
            path: '/sylot/js_lhc',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                    	//
                var m;                                                                                        	//
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 74,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
                throw('极速时时彩 解析数据不正确');                                                            	//
            }
        }
    },
    {
        title:'幸运飞艇',                                                                           	    	//
		source:'百度',                                                                                 			//
		name:'mlaft',                                                                                          //
		enable:true,                                                                                            //
		timer:'mlaft',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/xyft.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:55,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------幸运飞艇解析数据不正确');  
            }
        }
    },

	function getFromPlhc(str, type){
	str=str.substr(0,300);	
	//console.log(str);	
	var reg=/<row expect="(\d+?)" opencode="([\d\,\+]+?)" opentime="([\d\:\- ]+?)"/;
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mynumber=match[1];
	var mydata=match[2].replace('+',',');
	var mytime=match[3];
	//console.log(mynumber);
	try{
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:mydata
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
} 
];

global.log = function (log) {
    var date = new Date();
    console.log('[' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + '] ' + log)
}

function getOption(type) {
    var host = "api.api68.com";
    var uri = "";
    switch (type) {
        case 1:
            uri = "/CQShiCai/getBaseCQShiCai.do?lotCode=10002";
            break;
        case 10:
            uri = "/lotteryJSFastThree/getBaseJSFastThree.do?lotCode=10007";
            break;
        case 21:
            uri = "/ElevenFive/getElevenFiveInfo.do?lotCode=10006";
            break;
        case 50:
            uri = "/pks/getLotteryPksInfo.do?lotCode=10001";
            break;
        case 59:
            uri = "/gxklsf/getLotteryInfo.do?issue=&lotCode=100381";
            break;
        case 60:
            uri = "/klsf/getLotteryInfo.do?lotCode=10005";
            break;
        case 61:
            uri = "/klsf/getLotteryInfo.do?lotCode=10009";
            break;
        case 65:
            uri = "/LuckTwenty/getBaseLuckTewnty.do?lotCode=10014";
            break;
        case 66:
            uri = "/LuckTwenty/getPcLucky28.do?&lotCode=";
            break;
        // case 70:
            // host = "api.api68.com"
            // uri = "/smallSix/findSmallSixInfo.do?lotCode=10048";
            // break;
    }
    return {
        host: host,
        timeout: 5000,
        path: uri,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
        }
    }
}

function getData(type, json) {
    var data = {};
    if (json.errorCode == 0 && json.result.businessCode == 0) {
        data = json.result.data;
        var numbers = data.preDrawIssue.toString();
        if (type == 61||type == 21) {
            numbers = numbers.substr(2)
        }
        if (type == 65) {
            data.preDrawCode = data.preDrawCode.substr(0, data.preDrawCode.length - 3)
        }
        if (type == 74) {
            var arr = data.preDrawCode.split(",");
            for (var i = 0, length = arr.length; i < length; i++) {
                if (arr[i].toString().length == 1) {
                    arr[i] = '0' + arr[i];
                }
            }
            data.preDrawCode=arr.toString();
        }
        return {
            type: type,
            time: getNowTime(),
            number: numbers,
            data: data.preDrawCode,
        };
    }
}
function getNowTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var mytime = year + "-" + month + "-" + day + " " + myDate.toLocaleTimeString();
    return mytime;
}
function getFromlhc(str, type){
	str=str.substr(0,300);	
	//console.log(str);	
	var reg=/<row expect="(\d+?)" opencode="([\d\,\+]+?)" opentime="([\d\:\- ]+?)"/;
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mynumber=match[1];
	var mydata=match[2].replace('+',',');
	var mytime=match[3];
	//console.log(mynumber);
	try{
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:mydata
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
} 

function getFrompcdd(str, type) {
    var exp_data = /var latest_draw_result = {"red":\[([0-9\[\]\,\s"]+)\]/;
    var exp_phase = /var latest_draw_phase = '(\d+)';/;
    var exp_time = /var latest_draw_time = '([0-9\-\:\s]+)';/;
    var m_data = str.match(exp_data);
    var m_phase = str.match(exp_phase);
    var m_time = str.match(exp_time);
    if (m_data && m_phase && m_time) {
        var mytime = m_time[1];
        var mynumber = m_phase[1];
        var data = m_data[1].replace(/"/g, '');
    }
    if (!mytime || !mynumber || !data) throw new Error('PC蛋蛋数据不正确');
    data = data.split(',').sort();
    var kj1 = 0, kj2 = 0, kj3 = 0;
    for (var i = 0 in data) {
        if (i < 6) {
            kj1 += parseInt(data[i], 10);
        } else if (i >= 6 && i < 12) {
            kj2 += parseInt(data[i], 10);
        } else if (i >= 12 && i <= 17) {
            kj3 += parseInt(data[i], 10);
        }
    }
    if (kj1 >= 10) {
        kj1 = kj1.toString().substr(-1);
    }
    if (kj2 >= 10) {
        kj2 = kj2.toString().substr(-1);
    }
    if (kj3 >= 10) {
        kj3 = kj3.toString().substr(-1);
    }
    if (kj1 < 0 || kj3 < 0) throw new Error('PC蛋蛋开奖数据不正确');
    data = kj1 + ',' + kj2 + ',' + kj3;
    try {

        var data = {
            type: type,
            time: mytime,
            number: mynumber,
            data: data
        };
        //console.log(data);
        return data;
    } catch (err) {
        throw('解析PC蛋蛋数据失败');
    }

}
