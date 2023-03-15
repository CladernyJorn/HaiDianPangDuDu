function loadDialog(){
    var a = ["被斯里击败的斯拜乐奄奄一息，似乎有话要说，此时斯里会", "带着你想说的话下地狱去吧，罪人.","生活的意义绝不是体验那些虚无飘渺的快乐，而是在烈火与深海中不断挣扎与探索，朝着那片希望之地一步步前进。"];
	var f = 0;
    var index = 0;
	function bian(){
        index =0;
        document.getElementById("content").innerHTML = '';
		if(f==0){
            var timer = setInterval(function(){
                if(index == a[0].length){
                    clearInterval(timer);
                }
                document.getElementById("content").innerHTML += a[0].charAt(index++); 
            },50);
            }if(f==1){
                document.getElementById("content").innerHTML = a[1];
            }if(f==2){
                document.getElementById("content").innerHTML = a[2];
            }if(f==3){
                document.getElementById("content").innerHTML = a[3];
            }if(f==4){
                document.getElementById("content").innerHTML = a[0];
                f=0;
            }
		f++;
	}
}