# 随机位置

`jQuery`插件，随机改变位置

**使用方法**

引入jQuery和插件

```
 <script src="/jQueryRandomSite/lib/src/jquery-1.12.0.min.js"></script>
 <script src="/jQueryRandomSite/lib/src/jquery-random-site.js"></script>
```

调用

```

$(".list").randomSite({
     randomBtn:".btn",//点击按钮
     steep:100,//速度
     notClass:".class",//不需要随机变换的类
     beforeCallBack:new Function(position,item),  //执行前方法
     afterCallBack:new Function(position,item),   //执行后方法
 })
 
```

参数说明

`position`：随机位置

`item`: 被执行对象

**个人学习记录，不足之处，还请多多指教，邮箱 `WWWW.740675013@QQ.COM`**。