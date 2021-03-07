window.onload = function (){
            var button1 = document.getElementById("button1");
            button1.onclick = function (){
                var mess = confirm("您确定要支付吗？");
                if (mess){
                    location.href = "支付.html";
                }
            }
        }