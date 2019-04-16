// $(document).ready(function(){
//     //四大步驟更換
//     // var _index = 0;
//     $('.btnCustStep').click(function(){
//         // _index = $(this).index();
//         $(this).addClass('custSelected').siblings().removeClass('custSelected');
//     });

//     // 如果點選步驟，就增加--，移除--
//     $('#custStage').click(function(){
//         $('.hostInfo, .dateNLoc, .orderInfo').addClass('disN');
//         $('.custStageStep, .stage').removeClass('disN');
//     });
//     $('#custDate').click(function(){
//         $('.custStageStep, .stage, .hostInfo, .orderInfo').addClass('disN');
//         $('.dateNLoc').removeClass('disN');
//     });
//     $('#custHost').click(function(){
//         $('.custStageStep, .stage, .dateNLoc, .orderInfo').addClass('disN');
//         $('.hostInfo').removeClass('disN');
//     });
//     $('#custInfo').click(function(){
//         $('.custStageStep, .stage, .dateNLoc, .hostInfo').addClass('disN');
//         $('.orderInfo').removeClass('disN');
//     });

//     //客製舞台步驟更換
//     $('.btnCustStageStep').click(function(){
//         $(this).addClass('custStageSelected').siblings().removeClass('custStageSelected');
//     });

//     // 如果點選客製舞台步驟，就增加--，移除--
//     $('#stagePattern').click(function(){
//         $('.audioPoleItem, .lightItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//         $('.patternItem').removeClass('disN');
//     });
//     $('#stageAudio').click(function(){
//         $('.patternItem, .lightItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//         $('.audioPoleItem').removeClass('disN');
//     });
//     $('#stageLight').click(function(){
//         $('.patternItem, .audioPoleItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//         $('.lightItem').removeClass('disN');
//     });
//     $('#stageEffect').click(function(){
//         $('.patternItem, .audioPoleItem, .lightItem, .danceItem, .subtitleItem').addClass('disN');
//         $('.effectItem').removeClass('disN');
//     });
//     $('#stageDance').click(function(){
//         $('.patternItem, .audioPoleItem, .lightItem, .effectItem, .subtitleItem').addClass('disN');
//         $('.danceItem').removeClass('disN');
//     });
//     $('#stageSubtitle').click(function(){
//         $('.patternItem, .audioPoleItem, .lightItem, .effectItem, .danceItem').addClass('disN');
//         $('.subtitleItem').removeClass('disN');
//     });
    
    
//     //內塗裝點選下一步
//     if($('#stagePattern').hasClass('custStageSelected')){
//         $('.nextStep').click(function(){
//             //重新選擇變成上一步
//             $('.previousStep').text('上一步');
//             //跳轉音響鋼管頁面
//             $('.patternItem, .lightItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//             $('.audioPoleItem').removeClass('disN');
//             //滅燈亮燈
//             $('#stagePattern').removeClass('custStageSelected').next().addClass('custStageSelected');
//             console.log("01");
//         })
//     }

//     // //音響鋼管點選下一步
//     if($('#stageAudio').hasClass('custStageSelected')){
//         $('.nextStep').click(function(){
//             //跳轉燈光頁
//             $('.patternItem, .audioPoleItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//             $('.lightItem').removeClass('disN');
//             //滅燈亮燈
//             $('#stagePattern').removeClass('custStageSelected').next().addClass('custStageSelected');
//             console.log("02");
//         })
//     }
// });

// ======================================================
//客製步驟功能
// ======================================================
// $(document).ready(function(){
//     $('.dateNLoc, .hostInfo, .orderInfo').addClass('disN');
//     $('.audioPoleItem, .lightItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
//     $('.previousStep').text('重新選擇');
//     $('.nextStep').text('下一步');
//     // 上一步
//     $('.previousStep').bind('click', function(){
//         index--;
//         controlContent(index);
//     });
//     // 下一步
//     $('.nextStep').bind('click', function(){
//         index++;
//         controlContent(index);
//     });

//     $('.btnCustStep').click(function(){
//         index = $(this).index();
//         $(this).addClass('custSelected').siblings().removeClass('custSelected');
//         controlContent(index);
//     });
// });
// var index = 0;
// function controlContent(index){
//     var stepContents = ["custStage", "dateNLoc", "hostInfo", "orderInfo"];
//     var key;
//     for (key in stepContents){
//         var stepContent = stepContents[key];
//         if (key == index){
//             if( key == 0 ){
//                 $('.previousStep').text('重新選擇');
//             }else{
//                 $('.previousStep').text('上一步');
//             }
//             if( stepContent == 'orderInfo'){
//                 $('.nextStep').text('結帳');
//             }else{
//                 $('.nextStep').text('下一步');
//             }
//             console.log(`.${stepContent}`); 
//             $(`.${stepContent}`).removeClass('disN');
//             $(`.custStep${key}`).addClass('custSelected');
//         }else{
//             $(`.${stepContent}`).addClass('disN');
//             $(`.custStep${key}`).removeClass('custSelected');
//         }
//     }
// }
// ======================================================
//客製步驟功能
// ======================================================
var index = 0;
var temp = 0;
$(document).ready(function(){
    $('.dateNLoc, .hostInfo, .orderInfo').addClass('disN');
    $('.audioPoleItem, .lightItem, .effectItem, .danceItem, .subtitleItem').addClass('disN');
    $('.previousStep').text('重新選擇');
    $('.nextStep').text('下一步');
    // 上一步
    $('.previousStep').bind('click', function(){
        index = temp;
        if(index == 0){
            //重新選擇的動作
            index = 0;
        }else{
            index--;
        }
        temp = index;
        console.log(index);
        controlContent(index);
    });
    // 下一步
    $('.nextStep').bind('click', function(){
        index = temp;
        if(index == 8 ){
            //跳轉至結帳的動作
            index = 8;
        }else{
            index++;
            temp = index;
            console.log(index);
            controlContent(index);
        }
    });

    //讓點選index與下方共用
    $('.btnCustStageStep').click(function(index){
        temp = index = $(this).index();
        console.log(index);
        $(this).addClass('custStageSelected').siblings().removeClass('custStageSelected');
        controlContent(index);
    });
    
    $('.btnCustStep').click(function(){
        index = $(this).index();
        if(index > 0){
            index = index+5;
        }else{
            index = index;
        }
        $(this).addClass('custSelected').siblings().removeClass('custSelected');
        controlContent(index);
        temp = index;
    });
    
});


function controlContent(index){
    var stepContents = ["patternItem", "audioPoleItem", "lightItem", "effectItem", "danceItem", "subtitleItem", "dateNLoc", "hostInfo", "orderInfo"];
    var key;
    for (key in stepContents){
        var stepContent = stepContents[key];
        if (key == index ){
            if( stepContent == "patternItem"  ){
                $('.previousStep').text('重新選擇');
            }else{
                $('.previousStep').text('上一步');
            }
            if( stepContent == 'orderInfo'){
                $('.nextStep').text('結帳');
            }else{
                $('.nextStep').text('下一步');
            }
            if(index < 6){
                $('.custStage').removeClass('disN');
                $(`.${stepContent}`).removeClass('disN');
                $(`.custStageStep${key}`).addClass('custStageSelected');
                $('.custStep0').addClass('custSelected');
                $(".custStep6, .custStep7, .custStep8").removeClass('custSelected');
            }else
                $('.custStage').addClass('disN');
                $(`.${stepContent}`).removeClass('disN');
                $(`.custStep${key}`).addClass('custSelected');
        }else{
            if( index < 6 ){
                $(`.${stepContent}`).addClass('disN');
                $(`.custStageStep${key}`).removeClass('custStageSelected');
            }else{
                $(`.${stepContent}`).addClass('disN');
                $(`.custStep${key}`).removeClass('custSelected');
            }
        }
    }
}