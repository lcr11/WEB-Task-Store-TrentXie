var speed;
//判断手机是否有摇一摇功能
if (window.DeviceMotionEvent) {     //绑定devicemotion事件
    window.addEventListener('devicemotion',deviceMotionHandler, false);
}else{
    alert('您的设备不支持摇一摇功能,系统将自动为您摇动手机^_^');
    speed = 888;    //不支持摇一摇时，修改speed值触发摇动手机事件
}
//初始化
var SHAKE_THRESHOLD = 800;
var last_update = 0;
var x, y, z, last_x, last_y, last_z;
 
function deviceMotionHandler(eventData) {
 
    var acceleration =eventData.accelerationIncludingGravity; //获取设备加速信息
 
    var curTime = new Date().getTime();
 
    if ((curTime - last_update)> 300) {
 
        var diffTime = curTime -last_update;
        last_update = curTime;
 
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
 
        speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
        //speed = 888;
        //当速度高于阈值时
        if (speed > SHAKE_THRESHOLD) {
            alert("shaked!");
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}