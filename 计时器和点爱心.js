// 使用方法
// 设置一个标签的id是showtime2
// 并且body上有onload="oneday()"
var dateArr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    function oneday() {
        var date2 = new Date();
        var date3 = new Date(2019,10,4,0,0,0)

        var day2 = date2.getDate();
        var month2 = date2.getMonth(); //getMonth()是从0开始
        var year2 = date2.getFullYear();

        var day3 = date3.getDate();
        var month3 = date3.getMonth(); //getMonth()是从0开始
        var year3 = date3.getFullYear();

        var hours2 = date2.getHours() + 1
        var minutes2 = date2.getMinutes()
        var seconds2 = date2.getSeconds()
        var result = 0; // 目标年
        var result2 = 0; // 初始年
        var result3 = 0; // 总共
        for (var i = 0; i < month2; i++) {
            result += dateArr[i];
        }
        result += day2;
        //判断是否闰年 目标年
        if (month2 > 1 && (year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0) {
            result += 1;
        }
        // console.log(result);


        for (var j = 0;j < month3; j++){
            result2 += dateArr[j]
        }
        result2 += day3
        // 判断是否闰年 初始年
        if (month3 > 1 && (year3 % 4 == 0 && year3 % 100 != 0) || year3 % 400 == 0) {
            result2 += 1;
        }
        for(var n = year3;n < year2;n++){

            if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
                result3 += 1;
            }
            result3 += 365
        }
        result3 = result3 + result - result2
        document.getElementById("showtime2").innerHTML = result3 + "天" + hours2 + '时' + minutes2 + '分' + seconds2 + '秒';
        setTimeout("oneday()", 100);


        var click_cnt = 0;
        var $html = document.getElementsByTagName("html")[0];
        var $body = document.getElementsByTagName("body")[0];
        $html.onclick = function(e) {
            var $elem = document.createElement("b");
            $elem.style.color = "#E94F06";
            $elem.style.zIndex = 9999;
            $elem.style.position = "absolute";
            $elem.style.select = "none";
            var x = e.pageX;
            var y = e.pageY;
            $elem.style.left = (x - 10) + "px";
            $elem.style.top = (y - 20) + "px";
            clearInterval(anim);
            switch (++click_cnt) {
                case 10:
                    $elem.innerText = "OωO";
                    break;
                case 20:
                    $elem.innerText = "(๑•́ ∀ •̀๑)";
                    break;
                case 30:
                    $elem.innerText = "(๑•́ ₃ •̀๑)";
                    break;
                case 40:
                    $elem.innerText = "(๑•̀_•́๑)";
                    break;
                case 50:
                    $elem.innerText = "（￣へ￣）";
                    break;
                case 60:
                    $elem.innerText = "(╯°口°)╯(┴—┴";
                    break;
                case 70:
                    $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                    break;
                case 80:
                    $elem.innerText = "╮(｡>口<｡)╭";
                    break;
                case 90:
                    $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                    break;
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                    $elem.innerText = "(ꐦ°᷄д°᷅)";
                    break;
            case 120:
            click_cnt = 0;
            break;
                default:
            // 手动更换下面这行双引号里面的内容 如"😀"
                    $elem.innerText = "❤(๑•́ ∀ •̀๑)❤";
                    break;
            }
            $elem.style.fontSize = Math.random() * 10 + 8 + "px";
            var increase = 0;
            var anim;
            setTimeout(function() {
                anim = setInterval(function() {
                    if (++increase == 150) {
                        clearInterval(anim);
                $body.removeChild($elem);
                    }
                    $elem.style.top = y - 20 - increase + "px";
                    $elem.style.opacity = (150 - increase) / 120;
                }, 8);
            }, 70);
            $body.appendChild($elem);
        };
    }