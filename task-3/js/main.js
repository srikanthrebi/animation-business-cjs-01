function StartAD(){
    setTimeout(function(){
        
        document.getElementById("bg-1").style.transform='translateX(-400px)';
        document.getElementById("bg-1").style.transition='all 1s ease';
        document.getElementById("bg-2").style.transform='translateX(400px)';
        document.getElementById("bg-2").style.transition='all 1s ease';

    },250)
    setTimeout(function(){
        document.getElementById("copy-1").style.opacity='1';
        document.getElementById("copy-1").style.transform='translateX(0)';
        document.getElementById("copy-1").style.transition='all 1s ease';
       
    },500)
    setTimeout(function(){
        document.getElementById("copy-2").style.opacity='1';
        document.getElementById("copy-2").style.transform='translateX(0)';
        document.getElementById("copy-2").style.transition='all 1s ease';
       
    },750)
    setTimeout(function(){
        document.getElementById("copy-3").style.opacity='1';
        document.getElementById("copy-3").style.transform='translateY(0)';
        document.getElementById("copy-3").style.transition='all 1s ease';
       
    },1000)
    setTimeout(function(){
        document.getElementById("logo").style.opacity='1';
        document.getElementById("logo").style.transform='translateY(0)';
        document.getElementById("logo").style.transition='all 1s ease';
       
    },1350)
    setTimeout(function(){
        document.getElementById("icon-1").style.transform='scale(1)';
        document.getElementById("icon-1").style.transition='all 1s ease';
       
    },1500)
    setTimeout(function(){
        document.getElementById("icon-2").style.transform='scale(1)';
        document.getElementById("icon-2").style.transition='all 1s ease';
       
    },1750)
    setTimeout(function(){
        document.getElementById("icon-3").style.transform='scale(1)';
        document.getElementById("icon-3").style.transition='all 1s ease';
       
    },2000)
    setTimeout(function(){
        document.getElementById("icon-4").style.transform='scale(1)';
        document.getElementById("icon-4").style.transition='all 1s ease';
        document.getElementById("button").style.transform='scale(1)';
        document.getElementById("button").style.transition='all 1s ease';
    },2250)

}Window.load=StartAD();
    