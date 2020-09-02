class Banner{
    constructor(newDiv,newLi){
        this.index=0;
        this.oBox=newDiv;
        this.oLi=newLi;
        this.oBox.style.backgroundImage="url(img/"+this.index+".jpg)";
        // this.oLi[this.index].style.backgroundColor="red";
    }
    // 设置背景图
    setBgcImage(){
        this.oBox.style.backgroundImage="url(img/"+this.index+".jpg)";
    }
    // 设置小点
    setColor(){
        for(let i=0;i<this.oLi.length;i++){
            if(this.index==i){
                this.oLi[i].style.backgroundColor="#ccc";
             }else{
             this.oLi[i].style.backgroundColor="white";
           }
        }
    }
    
    next(){
        this.index++;
        if(this.index==this.oLi.length){
            this.index=0;
        }
        this.setColor();
        this.setBgcImage();
    }

    prev(){
        this.index--;
        if(this.index==-1){
            this.index=this.oLi.length-1;
        }
        this.setColor();
        this.setBgcImage();
    }


    set(){
        let that=this;
        setInterval(function(){
            that.next();
        },2000)
    }

    eventLi(){
        let that=this;
        for(let i=0;i<this.oLi.length;i++){
            this.oLi[i].onclick=function(){
                that.index=i;
                that.setColor();
                that.setBgcImage();
            }
        }
    }
}
let oBox = document.getElementById("nav");
let oLi = document.getElementsByClassName("nav-list1");

let b = new Banner(oBox, oLi);
b.eventLi();
b.set();



// 切换城市
// let oCity=document.querySelector(".change-city");
// let oSearch=document.querySelector(".header-search");
// oCity.onclick=function(evt){
//     var e = evt || event;
//     e.stopPropagation ? e.stopPropagation():e.cancelBubble = true;
//     oSearch.style.display="block";
// }
// document.onclick=function(){
// oSearch.style.display="none";
// }

  

