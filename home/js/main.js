window.onload=function() {
    //console.log("onload");
    //console.log(document.getElementById("scrollTop"));
    //console.log(document.documentElement.scrollTop);
    document.getElementById("#scrollTop").onclike= funtion(){
        //console.log("onclick");
        //document.documentElement.scrollTop=0;
        //window.scrollTo(0,0);
        //window.scrollTo({top: 0, left: 0});
        window.scrollTo({top:0, left: 0, behavior:'smooth'});
    }
}