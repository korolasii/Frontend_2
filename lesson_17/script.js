function check(){
    if(Number(start) >= 0 && Number(end) >= 0){
        if (Number(start) < Number(end)){
            setinter = setInterval(strclock, '1000')
        }else{
            alert('No corect input data')
            clear()
        }
    }else{
        alert('Data isn`t number')
        clear()
    }
}

function strclock(){
    if(start <= end){
        let hour = Math.floor(start/3600),
        min = Math.floor((start - hour*3600)/60),
        sec = start - hour*3600 - min*60;
        if (hour < 10){
            hour = '0' + hour
        }
        if (min < 10){
            min = '0' + min
        }
        if (sec < 10){
            sec = '0' + sec
        }
        clock.innerHTML = `${hour}:${min}:${sec}` 
        start++
    }else{
        clear()
        clearInterval(setinter)
        setinter = null
    }
}

function Form() {
    clearInterval(setinter)
    setinter = null
    start = document.getElementById('start').value,
    end = document.getElementById('end').value;
    check()
}

function clear(){
    document.getElementById('start').value = ''
    document.getElementById('end').value = ''
}

let btnClock = document.getElementById('btnClock'),
setinter,
start = 0,
end = 0;
btnClock.addEventListener('click', Form)
