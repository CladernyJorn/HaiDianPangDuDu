function start_game(){
    window.location.assign("../游戏开始界面/UserLogin.html");
}
function continue_game(){
    window.location.assign("../游戏读档界面/读档界面.html");
}
function open_achievements(){
    window.location.assign("../成就界面/成就预备界面.html");
}
function about_us(){
    window.location.assign("../团队介绍/队伍介绍页面.html");
}
function change_img(index){
    $(".roll_img").css("opacity","0");
    $(".roll_img").eq(index).css("opacity","1");
}
function change_dot(order){
    $(".bottom").css("background","rgb(129, 129, 129)");
    $(".bottom").eq(order).css("background-color","white");
}