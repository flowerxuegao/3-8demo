	/*数据填充*/
	var fh="http://192.168.0.110:8183";
	var qxid = 195877;
	
	$.ajax({
		url: fh+"/czqxgl/qxgl/getDbQxxx.jsp",
		data: {qxid:qxid},
		dataType: "json",
		success: function (data) {
			console.log(data);
			var firstImgUrl = data.image_fx[0].FILEPATH;
			var fiveImgUrl = data.image_xq[0].FILEPATH;
			var list = data.data;
			
			for(var i=0;i<list.length;i++){
				if(list[i].ZTBM=="1"){
					for(var j=0;j<list[i].shyj.length;j++){
						$(".layui-timeline-item").eq(0).find(".timeinfo").html(list[i].shyj[j].FILLDATE);
						$(".layui-timeline-item").eq(0).find(".classgroup").html(list[i].shyj[j].FILLPOSTNAME);
						$(".layui-timeline-item").eq(0).find(".nameinfo").html(list[i].shyj[j].FILLER);
						$(".layui-timeline-item").eq(0).find(".infolist").html(list[i].shyj[j].CHECKCONTENT);
						$(".layui-timeline-item").eq(0).find(".imginfo").attr("src",fh+'/czqxgl/files/'+firstImgUrl);
						$(".layui-timeline-item").eq(0).find(".imginfo").attr("data-original",fh+'/czqxgl/files/'+firstImgUrl);
					
					}
					
					
				}else if(list[i].ZTBM=="2"){
					for(var j=0;j<list[i].shyj.length;j++){
						$(".layui-timeline-item").eq(1).find(".timeinfo").html(list[i].shyj[j].FILLDATE);
						$(".layui-timeline-item").eq(1).find(".classgroup").html(list[i].shyj[j].FILLPOSTNAME);
						$(".layui-timeline-item").eq(1).find(".nameinfo").html(list[i].shyj[j].FILLER);
						$(".layui-timeline-item").eq(1).find(".infolist").html(list[i].shyj[j].CHECKCONTENT);
					}
				}else if(list[i].ZTBM=="3"){
					var thirdinfo = list[i].shyj;
					console.log(thirdinfo);
					var str = '';
					$.each(thirdinfo,function(k,n){
						str += '<li class = "timeinfo">'+n.FILLDATE+'</li><li><span class = "classgroup">'+n.FILLPOSTNAME+'</span><span class = "nameinfo">'+n.FILLER+'</span></li><li><div class = "infolist">'+n.CHECKCONTENT+'</div></li>';
					})
					$(".layui-timeline-item").eq(2).find("ul").html(str);
					
					
				}
				else if(list[i].ZTBM=="4"){
					for(var j=0;j<list[i].shyj.length;j++){
						$(".layui-timeline-item").eq(3).find(".timeinfo").html(list[i].shyj[j].FILLDATE);
						$(".layui-timeline-item").eq(3).find(".classgroup").html(list[i].shyj[j].FILLPOSTNAME);
						$(".layui-timeline-item").eq(3).find(".nameinfo").html(list[i].shyj[j].FILLER);
						$(".layui-timeline-item").eq(3).find(".infolist").html(list[i].shyj[j].CHECKCONTENT);
					}
				}
				else if(list[i].ZTBM=="5"){
					for(var j=0;j<list[i].shyj.length;j++){
						$(".layui-timeline-item").eq(4).find(".timeinfo").html(list[i].shyj[j].FILLDATE);
						$(".layui-timeline-item").eq(4).find(".classgroup").html(list[i].shyj[j].FILLPOSTNAME);
						$(".layui-timeline-item").eq(4).find(".nameinfo").html(list[i].shyj[j].FILLER);
						$(".layui-timeline-item").eq(4).find(".infolist").html(list[i].shyj[j].CHECKCONTENT);
						$(".layui-timeline-item").eq(4).find(".imginfo").attr("src",fh+'/czqxgl/files/'+fiveImgUrl);
						$(".layui-timeline-item").eq(4).find(".imginfo").attr("data-original",fh+'/czqxgl/files/'+fiveImgUrl);
					}
				}
				else if(list[i].ZTBM=="6"){
					for(var j=0;j<list[i].shyj.length;j++){
						$(".layui-timeline-item").eq(5).find(".timeinfo").html(list[i].shyj[j].FILLDATE);
						$(".layui-timeline-item").eq(5).find(".classgroup").html(list[i].shyj[j].FILLPOSTNAME);
						$(".layui-timeline-item").eq(5).find(".nameinfo").html(list[i].shyj[j].FILLER);
						$(".layui-timeline-item").eq(5).find(".infolist").html(list[i].shyj[j].CHECKCONTENT);
					}
				}
				
			}
			
			
		}
	})
	
	/*插件引入*/
	$('.infobox img').viewer({
			url: 'data-original',
			navbar : false,
			title : false,
	});
	/*样式调整*/
	$('.infobox').find(".layui-timeline-item").each(function(){
		if($(this).find(".imginfo").length==0){
			$(this).find(".layui-icon").removeClass("haveimg")
		}else{
			$(this).find(".layui-icon").addClass("haveimg")
		}
	})
