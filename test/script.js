class scrol{
    static getElement(selector){
        return document.querySelectorAll(selector)
    }
    static positionStartElement(array){
        let list = []
        array.forEach(element => {
            list.push(element.getBoundingClientRect().y)
        });
        return list
    }
    static heightWindow(){
        return document.documentElement.clientHeight
    }
    static checkPositionDown(positionNowArray, windowheight){
        positionNowArray.forEach(element => {
            if (element>0 && element<windowheight){
                scrollBy(0,element)
                return
            }
        });
    }
    static checkPositionUp(positionNowArray, windowheight){
        positionNowArray.forEach(element => {
            if (element>0 && element<windowheight){
                scrollBy(0,element-windowheight)
                return
            }
        });
    }

    static scrollEnd(){
        let positionNowArray = scrol.positionStartElement(elementArray)
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let heightWindow = scrol.heightWindow();
        if(currentScrollTop > lastScrollTop){
            scrol.checkPositionDown(positionNowArray, heightWindow)
        }else{
            scrol.checkPositionUp(positionNowArray, heightWindow)
        }
        lastScrollTop = currentScrollTop;
    }
}

let positionNowArray = [],
elementArray = scrol.getElement('.slide'),
previousScrollPosition = window.pageYOffset,
timer,
lastScrollTop = 0;

window.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(function() {
        scrol.scrollEnd();
    }, 1000);
});

