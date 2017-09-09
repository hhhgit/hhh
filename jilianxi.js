//var a=1,b=2,c=3;
//alert(a>100);
// var num=32;
// if(num>30){
// 	alert(false);
// }
// var num=29;
// if(num>30){
// 	alert(false);
// }else{
// 	alert(true);
// }
// var scro=prompt('请输入你的成绩', 60);
// if(scro<60){
// 	alert('不及格');
// }else if(scro>=60 && scro<72){
// 	alert('及格');
// }else if(scro>=72 && scro<85){
// 	alert('良');
// }else if(scro>=85 && scro<100){
// 	alert('优秀');
// }else{
// 	alert('输出错误');
// }
// var week=1*prompt('请输入你的成绩', 1);
// switch(week){
// case 1:
// alert('礼拜一');
// break;
// case 2:
// alert('礼拜二');
// break;
// case 3:
// alert('礼拜三');
// break;
// case 4:
// alert('礼拜四');
// break;
// case 5:
// alert('礼拜五');
// break;
// case 6:
// alert('礼拜六');
// break;
// case 7:
// alert('礼拜天');
// break;
// default:
// alert('输入错误');
// }
// for(var i=10;i>=1;i--){
// alert("张建东自爆倒计时  "+i+"  秒");
// }
// 任意数求和
// var sum=1*prompt('请输入加法开始数值', 1);
// var jieshu=1*prompt('请输入加法最后数值', 1);
// for(var i=sum+1;i<=jieshu;i++){
// 	sum+=i;
// }
// alert(sum);

// 奇
// var sum=1*prompt('请输入加法开始数值', 1);
// var jieshu=1*prompt('请输入加法最后数值', 1);
// for(var i=sum+2;i<=jieshu;i=i+2){
// 	sum+=i;
// }
// alert(sum);
// 金字塔
// for(var i=1;i<=5;i++){
// 	for(var a=4;a>=i;a--){
// 		document.write('_');
// 	}
// 	for(var s=1;s<=(2*i-1);s++){
// 			document.write('*');
// 		}
// 	document.write('<br>')
// }
// for(var i=5;i>=1;i--){
// 	for(var a=4;a>=i;a--){
// 		document.write('_');

// 	}
// 	for(var s=1;s<=(2*i-1);s++){
// 			document.write('*');
// 		}
// 	document.write('<br>')
// }

// var i=0,j=1;
// for(var k=0;k<=100;){
// 	k=i+j;
// 	document.write('&nbsp'+k+'&nbsp');
// 	i=j;
// 	j=k;
// }
// document.write('<br>')
// document.write('<br>')
// var arr=[2,22,222,2222,2233,3,33,333,3333,3322];
// for(var i=0;i<=arr.length;i++){
// 	for(var j=i+1;j<=arr.length;j++){
// 		if(arr[i]>arr[j]){
// 			var temp=arr[i];
// 			arr[i]=arr[j];
// 			arr[j]=temp;
// 		}
// 	}
// }
// document.write(arr);
// var arr=[2,,3,,4,5,7,6];
// var newarr=[];
// for(var i=0;i<=arr.length;i++){
// 	if(arr[i]!=undefined){
// 	newarr[newarr.length]=arr[i];
// 	}
// }
// document.write(newarr);
// var n=1*prompt('请输入添加数值', 1);
// var arr=['添加的数组',];
// var arr1=[];
// 	for (var i = 0; i <= (arr.length); i++) {
// 		arr1[arr1.length]=arr[i];
// 		console.log(arr1);
// 	}
// document.write(arr1)
// var arr=[45,8,6,8,6];
// 		push(arr,'s','r')
// 		function push(arr){
// 				for(var i=1;i<arguments.length;i++){
// 					arr[arr.length]=arguments[i]
// 				}
// 			console.log(arr);
// 		}
// for (var i = 0; i < .length; i++) {
// 	[i]
// }
//选偶数出来
// var arr=[1,2,3,4,5,6,7,8,9,10];
// function jdsb(arr){
// 	var newarr=[];
// 	for(var i=0;i<=arr.length;i++){
// 		if (arr[i]%2==0) {
// 			newarr[newarr.length]=arr[i];
// 		}
// 	}
// 	return newarr;
// }
// document.write(jdsb(arr))
//任意数组任意排序
		var arr=[45,9,6,8,4]
		sort(arr);          //带有默认值的参数放到后面
		function sort(arr,type){
			//四种默认值
			//第一
			if(type==undefined){
				type='<';
			}
			//第二
				//type=type==undefined?'>':type;
			//第三
			//type=type||'<'
			//第四
			//function sort(arr,type='<'){    ----实参传的是undefined 会使用默认值
			if(type=='<'){
				sortUp(arr);
			}
			if(type=='>'){
				sortDown(arr);
			}
		}


		//升序
		function sortUp(arr){
			for(var i=0;i<arr.length;i++){
				for(var j=i+1;j<arr.length;j++){
					if(arr[i]>arr[j]){
						var temp=arr[i];
						arr[i]=arr[j];
						arr[j]=temp;
					}
				}
			}
			console.log(arr);
		}
		//降序
		function sortDown(arr){
			for(var i=0;i<arr.length;i++){
				for(var j=i+1;j<arr.length;j++){
					if(arr[i]<arr[j]){
						var temp=arr[i];
						arr[i]=arr[j];
						arr[j]=temp;
					}
				}
			}
			console.log(arr);
		}

//改数字为字符串
// var arr=[1,2,3,4,5,6,7,8,9,10];
// function join(arr,str){
// 	str = str||'-';
// 	var result = '';
// 	for (var i = 0; i < arr.length; i++) {
// 		if(i<arr.length-1){
// 			result+=arr[i]+str;
// 		}else{
// 			result+=arr[i];
// 		}
// 	}
// 	return result;
// }
// document.write(join(arr));
var arr=[1,2,3,4,5,6]
		var result= filter(arr,function(math){
               return math%2==0})
		console.log(result)
		function filter(arr,fn){
              var newarr=[]
              for(var i=0;i<arr.length;i++){
              	if(fn(arr[i])){
                   newarr[newarr.length]=arr[i]
                }
              }
              return newarr
		}
