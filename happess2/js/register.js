
// 手机号
var oIpone=document.querySelector(".regist-ipone-num");
var oIponein=document.querySelector(".regist-ipone-in");

oIpone.onblur=function(){
    var reg=/^(13|15|18)\d{9}$/;
    if(reg.test(this.value)){
        oIponein.innerHTML="正确";
        oIponein.style.color="red";
    }else{
        oIponein.innerHTML="重新输入";
        oIponein.style.color="red";
    }
}
// 密码
var oPwd=document.querySelector(".regist-pwd-num");
var oPwdin=document.querySelector(".regist-pwd-in");

oPwd.onblur=function(){
    var reg=/^\w{8,20}$/
    if(reg.test(this.value)){
        oPwdin.innerHTML="正确";
        oPwdin.style.color="red";
    }else{
        oPwdin.innerHTML="重新输入";
        oPwdin.style.color="red";
    }
}

// 再次确认密码
let oAgain=document.querySelector(".regist-again-num");
let oAgainin=document.querySelector(".regist-again-in");

oAgain.onblur=function(){
   if (oAgain.value==oPwd.value){
    oAgainin.innerHTML="输入正确";
    oAgainin.style.color="red";
   }else{
    oAgainin.innerHTML="重新输入";
    oAgainin.style.color="red";
   }
}

// 验证码


