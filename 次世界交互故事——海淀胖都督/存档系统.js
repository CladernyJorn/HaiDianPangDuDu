
function newgame(){
    var username=document.getElementById("Nname").value;
    var password=document.getElementById("Npass").value;
    var password1=document.getElementById("NpassCon").value;
    for(i=0;i<localStorage.length;i++)
    {
        if(username==localStorage.key(i))
        {
            alert("该用户名已存在，请重新输入");
            return;
        }    
    }
    if(password!=password1)
    {
            alert("两次输入密码不同，请重新确认");
            return;
    }
    else if(i==localStorage.length)
    {
        var data={
            "save":"第一章",
            "pass":password,
            "score":0,
            "achieve1":0,
            "achieve2":0,
            "achieve3":0,
            "achieve4":0,
            "achieve5":0,
            "achieve6":0,
            "achieve7":0,
            "achieve8":0,
        }
        var d=JSON.stringify(data);
        localStorage.setItem(username,d);
        localStorage.setItem("use",username);
        window.location.assign("../背景/背景故事.html");
    }
}

function load(){
    var username=document.getElementById("Oname").value;
    var password=document.getElementById("Opass").value;
    for(i=0;i<localStorage.length;i++)
    {
        if(username==localStorage.key(i))
        {
            var load2=localStorage.getItem(username);
            var load1=JSON.parse(load2);
            if(password!=load1.pass)
            {
                alert("密码错误");
                return;
            }
            if(load1.save=="第一章")
            {
                window.location.assign("../背景/背景故事.html");
            }
            if(load1.save=="第二章")
            {
                window.location.assign("../2.路上独白/2db.html");
            }
            if(load1.save=="第三章")
            {
                window.location.assign("../3.到公司/3dgs.html");
            }
            if(load1.save=="第四章")
            {
                window.location.assign("../5.中央控制室对话/5zy.html");
            }
            if(load1.save=="第四章第二部分")
            {
                window.location.assign("../7.选择是否杀死设计者/7xz.html");
            }
            if(load1.save=="第五章")
            {
                window.location.assign("../8.城市边缘受阻拦/8cs.html");
            }
            if(load1.save=="第六章")
            {
                window.location.assign("../9.发现真相选择流离/9fx.html");
            }
            localStorage.setItem("use",username);
            var d=JSON.stringify(data);
            localStorage.setItem(username,d);
            localStorage.setItem("use",username);
            break;
        }    
    }
    if(i==localStorage.length)
    {
        alert("该用户不存在");
    }
}
function restart(){
    var username=document.getElementById("Oname").value;
    var password=document.getElementById("Opass").value;
    for(i=0;i<localStorage.length;i++)
    {
        if(username==localStorage.key(i))
        {
            var load2=localStorage.getItem(username);
            var load1=JSON.parse(load2);
            if(password!=load1.pass)
            {
                alert("密码错误");
                return;
            }
            else
            {
                window.location.assign("../背景/背景故事.html");
            }
        }
    }
}

function checkc(){
    var username=document.getElementById("Cname").value;
    for(i=0;i<localStorage.length;i++)
    {
        if(username==localStorage.key(i))
        {
            window.location.assign("成就主界面.html");
            localStorage.setItem("use",username);
            break;
        }
    }
    if(i==localStorage.length)
    {
        alert("该用户不存在");
    }

}

function save1(){
     var username=localStorage.getItem("use")
     var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第一章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第一章")
}
function save2(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第二章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第二章")
}
function save3(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第三章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第三章")
}
function save4(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第四章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第四章")
}
function save42(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第四章第二部分"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第四章第二部分")
}
function save5(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第五章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第五章")
}
function save6(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.save="第六章"
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
    alert("已存档至第六章")
}

function getach1(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve1=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach2(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve2=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach3(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve3=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach4(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve4=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach5(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve5=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach6(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve6=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach7(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve7=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function getach8(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.achieve8=1;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}

function score30(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.score+=30;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function score60(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.score+=60;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}
function score90(){
    var username=localStorage.getItem("use")
    var load2=localStorage.getItem(username);
    var load1=JSON.parse(load2);
    load1.score+=90;
    var d=JSON.stringify(load1);
    localStorage.setItem(username,d);
}