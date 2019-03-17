(function($,win){
    $.fn.randomSite = function(options){
        var defaults = {
            randomBtn:".random-btn",
            steep:100,
            notClass:null,
            beforeCallBack:new Function(),
            afterCallBack:new Function()
        };
        var obj = $.extend(true,defaults,options),_this = this,newPosition = [];
        var canChid  = ( obj.notClass === null)? _this.children() : _this.children(":not("+obj.notClass+")");

        
        function getDefPos(){
            return  $.map(canChid,function(item,index){
                return position = $(item).position();
            });
        };
        var post = getDefPos();
        
        function getrandomrPost(){
           var randomArry = [];
           for(var i = 0;i <Math.pow(post.length,post.length);i++){
                var random = Math.floor(Math.random()*post.length);
                if(randomArry.length  === 0||randomArry.indexOf(random) < 0){
                    if(randomArry.length < post.length){
                        randomArry.push(random)
                    }else{
                        break;
                    }
                };
           };
           return randomArry;
        };
        function getNewPosition(){ return $.map(getrandomrPost(), function (elementOrValue, indexOrKey) { return post[elementOrValue]});};
        function setElPosition(){
            obj.beforeCallBack(post,canChid,post)
            post = getNewPosition()
            obj.afterCallBack(post,canChid,getrandomrPost())
            $.each(canChid,function(index,item){
                $(item).stop().animate({
                    "left":post[index].left,
                    "top": post[index].top
                })
            });
        }

        $(obj.randomBtn).on("click",function () {
            setElPosition(post)
            return false;
        });
    }
})(jQuery,Window)