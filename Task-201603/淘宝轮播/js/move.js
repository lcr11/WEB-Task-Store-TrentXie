//时间版
function move(obj,attr,target,time){
    var startVal=parseInt (getstyle(obj.attr));
    var startTime=new Date();
    var timer=setInterval(function(){
    var nowTime=new Date();
    var popr=(nowTime-startTime)/time
        if (popr>=1){
            clearInterval(timer);
            popr=1;
        }
        var s=popr*(target-startval)+startVal;
        obj.style[attr]=s+'px';
    },13);
}