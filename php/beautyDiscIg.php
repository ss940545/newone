<script>
	$(document).ready(function(){
		$.ajax({
			url: 'php/_connetbeautyDiscIg.php',
			type: 'GET',
			data:{
				DiscTextArea:$('.DiscTextArea').val()
			},
			success: function(response){
				//轉成陣列 抓取陣列裡面的資料
				//需要order的所有留言串
				//判斷 ORDER是否相同
				let data = JSON.parse(response);
				var beautyDiscIgData = '<div class="beautyDiscStageContainer">';
				var beautyDiscIgMesData ="<div class='beautyDiscIgMemTextContainer'>";
				
				$.each(data['beautyIntendRow'],function(i,n){
					var beautyIntendRowOd = n['orderNo'];//order: index[0]['orderNo']=3,index[1]['orderNo']=4 ,index[2]['orderNo']=5  	
					//  console.log(beautyIntendRowOd); 
					 var beautyDiscIgMesData ="";
					 $.each(data['messageRow'],function(i,n){
						var messageRowOd = n['orderNo']
						if(messageRowOd==beautyIntendRowOd){
							// console.log(n['messageContent']);
							beautyDiscIgMesData += "<div class='beautyDiscIgMemTextContainer'>"+
								"<img src='"+n['memImgUrl']+"' alt='Alex'>"+
									"<p class='beautyDiscIgMName'>"+n['memName']+"</p>"+
									"<p class='beautyDiscIgNameText'>"+n['messageContent']+"</p>";
							beautyDiscIgMesData+='</div>';
						}else{
							return '';
						};
					});
					
					beautyDiscIgData +=
					"<div class='beautyDiscIg'>"+
						"<div class='beautyDiscIgMem'>"+
							"<img src='"+n['memImgUrl']+"' alt=''>"+
							"<div class='beautyDiscIgTopic'>"+
									"<p class='beautyDiscIgMName'>"+n['memName']+"</p>"+
									"<p class='beautyDiscIgMNameCar'>"+n['orderName']+"</p>"+
							"</div>"+
							"<div class='dotflip'>"+
								"<i class='fas fa-ellipsis-h'></i>"+
								"<div class='dotpanel'>"+
									"<li>檢舉</li>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<div class='beautyDiscIgMemStage'>"+
							"<img src='"+n['orderImgUrl']+"' alt=''>"+
						"</div>"+
						"<div class='beautyRankingSocialBtns'>"+
							"<i class='far fa-heart'></i>"+
							"<i class='far fa-comment' alt='留言'></i>"+
							"<i class='fas fa-external-link-alt' alt='分享'></i>"+
							"<i class='far fa-bookmark' alt='分享'></i>"+
						"</div>"+
						"<p class='likeCount'>"+n['orderVote']+"個喜歡</p>"+
						"<div class='beautyDiscIgMemTextContainerWrap'>"+
						//留言內容開始
						// n['memNo']+
						beautyDiscIgMesData+

						//這裡包住的
						"</div>"+
						//留言內容結束
						
						"<div class='beautyDiscForm'>"+
							"<img src='images/beautyPageant/DiscStage/Lisa/lisa.png' alt='Alex'>"+
							"<form>"+
								
								"<input class='DiscTextArea' type='text' name='messageContent' value='' placeholder='留言回覆...'>"+
								"<input class='DiscSent' type='button' value='送出'>"+
								"<input type='hidden' name='orderNo' value='"+ n['orderNo'] +"' placeholder='留言回覆...'>"+
							"</form>"+
						"</div>";
						beautyDiscIgData+='</div>';
				});
				$('.beautyDiscStageContainer').append(beautyDiscIgData);
				//註冊每個表單接受訊息
				for(let i=0;i<document.getElementsByClassName("DiscSent").length;i++){
					console.log('5566');
					document.getElementsByClassName("DiscSent")[i].addEventListener("click", function(e){
						let btn = e.target;
						let orderNo = btn.nextElementSibling.value;
						let messageContent = btn.previousElementSibling.value;
						console.log(orderNo);
						console.log(messageContent);

						let xhr = new XMLHttpRequest();
						xhr.onload = function (){
							alert(xhr.responseText);

							//reset
							btn.nextElementSibling.value="";
							btn.previousElementSibling.value="";
						}
						xhr.open("get", "php/addmessage.php?messageContent=" + messageContent + "&orderNo=" + orderNo);
						xhr.send(null);
						console.log("addmessage.php?content=" + messageContent + "&orderNo=" + orderNo);

					}
				)};
				
			},//sucess
			error: function(xhr) {
			alert('Ajax request 發生錯誤');
			}
		});
	});


</script>
<script>
	// $(document).ready(function(){
	// 		$(".DiscSent").click(function(){
	// 			var result1 = $(this).siblings('.DiscTextArea').val();
	// 			alert("result1 = " + result1);
	// 		});


</script>












