window.onload = function (){
            const span = document.getElementById("span");
            let time = span.innerText;
            setInterval(function (){
                time--;
                span.innerText = time;
                if (time == 0){
                    location.href = "倒计时.html";
                }
            },1000);
            const button1 = document.getElementById("button1");
            button1.onclick = function (){
                location.href = "倒计时.html";
            }
        }