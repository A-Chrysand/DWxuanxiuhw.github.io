/*---------------------全局设置---------------------*/
var bol = 1;				//设置1向上翻 -1向下翻
var height = 36;			//设置导航栏高度
var deg = 90;				//设置翻转角度
var donghuashijian = 0.1;	//设置动画时间
var frontcolor = "rgb(100,200,100)";     //设置滑块前面颜色
var backcolor = "pink";        //设置滑块背面颜色

/*---------------------全局设置---------------------*/
document.documentElement.style.setProperty('--hei', height);
document.documentElement.style.setProperty('--dg', deg);
document.documentElement.style.setProperty('--donghuashijian', donghuashijian);
document.documentElement.style.setProperty('--frontcolor', frontcolor);
document.documentElement.style.setProperty('--backcolor', backcolor);
if (bol == 1)//向上翻
{
    document.documentElement.style.setProperty('--A1', '1');
    document.documentElement.style.setProperty('--A2', '1');
    document.documentElement.style.setProperty('--d1', '1');
    document.documentElement.style.setProperty('--d2', '-1');
}
else {//向下翻
    document.documentElement.style.setProperty('--A1', '1');
    document.documentElement.style.setProperty('--A2', '-1');
    document.documentElement.style.setProperty('--d1', '-1');
    document.documentElement.style.setProperty('--d2', '1');
}

window.onload = function () {
    var mytab = document.getElementById("Nav_Head");
    var myul = mytab.getElementsByTagName("ul")[0];
    var myli = myul.getElementsByTagName("li");
    var mydiv = mytab.getElementsByTagName("iframe");
    for (i = 0, len = myli.length; i < len; i++) {
        myli[i].index = i;
        myli[i].onclick = function () {
            for (var n = 0; n < len; n++) {
                myli[n].className = "";
                mydiv[n].className = "hiddenone";
            }
            this.className = "slyes";
            mydiv[this.index].className = "";
        }
    }
}



