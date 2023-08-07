
        let sath = [
            {easy:[
                {
                    queez : '2 * ___ = 90 ',
                    choice : ['45','12','56','1'],
                    answer : 0
                },
                {
                    queez : '5+5=_____',
                    choice : ['12','25','10','11'],
                    answer : 2
                },
                {
                    queez : '20-___=7',
                    choice : ['13','5','18','12'],
                    answer : 0
                },
                {
                    queez : '215-___=65',
                    choice : ['135','125','150','145'],
                    answer : 2  
                },
                {
                    queez : '2-46+44=____',
                    choice : ['5','0','15','8'],
                    answer : 1 
                },
                {
                    queez : '1+2+3+4+5+6+7+8+9=____',
                    choice : ['23','46','31','45'],
                    answer : 3 
                },
                {
                    queez : '9-8-7-6-5-4-3-2-1=____',
                    choice : ['-27','-11','-26','-19'],
                    answer : 0 
                },
                {
                    queez : '999 * 1=____',
                    choice : ['122','866','999','998'],
                    answer : 2
                },
                {
                    queez : '2+4+6+8=____',
                    choice : ['18','17','19','20'],
                    answer : 3 
                },
                {
                    queez : '1+3+5+7+9=____',
                    choice : ['23','46','25','45'],
                    answer : 2
                },
            ]},
            {normal:[
                {
                    queez : 'a-b-c-___-e-f',
                    choice : ['d','g','h','i'],
                    answer : 0
                },
                {
                    queez : 'wat__r',
                    choice : ['a','g','e','u'],
                    answer : 2
                },
                {
                    queez : '__orse',
                    choice : ['b','l','s','h'],
                    answer : 3
                },
                {
                    queez : 'mo__se',
                    choice : ['n','u','k','j'],
                    answer : 1
                },
                {
                    queez : 't__',
                    choice : ['v','h','l','w'],
                    answer : 0
                },
                {
                    queez : 'flowe__',
                    choice : ['x','c','b','r'],
                    answer : 3
                },
                {
                    queez : 'c__w',
                    choice : ['m','z','o','p'],
                    answer : 2
                },
            ]},
            {hard:[
                {
                    queez : 'cinema ',
                    choice : ['سینما','سیگار','سیب','باشگاه'],
                    answer : 0
                },
                {
                    queez : 'شمال',
                    choice : ['east','south','north','west'],
                    answer : 2
                },
                {
                    queez : 'باغبان',
                    choice : ['gard','gardener','garden','gardens'],
                    answer : 1
                },
                {
                    queez : 'pulse',
                    choice : ['پوست','خون','رگ','نبض'],
                    answer : 3
                },
                {
                    queez : 'broken',
                    choice : ['شکسته','شکست','شسته','شست'],
                    answer : 0
                },
                {
                    queez : 'دیوار',
                    choice : ['war','wall','warning','whate'],
                    answer : 1
                },
                {
                    queez : 'stool',
                    choice : ['چهارپا','چهارچرخه','چهارپایه','چهارچوب'],
                    answer : 2
                },
                {
                    queez : 'چوب',
                    choice : ['cable','wire','woodworking','wood'],
                    answer : 3
                },
                {
                    queez : 'اهن',
                    choice : ['iron','rock','oil','chain'],
                    answer : 0
                },
            ]}
        ]
        let radio;
        let sathe;
        let settime;
        let aply = document.querySelector('.aply').addEventListener('click', function(){
            document.querySelector(".bodi").style.display = "block";
            let reload = document.querySelector('.reload');
            reload.style.display = 'none';
            reload.addEventListener('click', function(){
                window.location.reload();
            });
            let secound; 
            document.getElementById('timer').innerHTML = 000 + ":" + 59; startTimer();
            function startTimer(){
                let presentTime = document.getElementById('timer').innerHTML;
                let timeArray = presentTime.split(/[:]+/);
                let m = timeArray[0];
                let s = checkSecound((timeArray[1] - 1));
                if(s==59){m=m-1}
                document.getElementById('timer').innerHTML = m + ":" + s;
                settime = setTimeout(startTimer, 1000);
            }    
            function checkSecound(sec){
                if(sec < 10 && sec >= 0){
                    sec = "0" + sec;
                }else{
                    secound = sec+1;
                };
                if(sec < 0){
                    let matnqueezover = document.querySelector('.matnqueezover');
                    sec = clearTimeout(settime);
                    sec = '0';
                    document.querySelector(".bodi").style.display = "none";
                    over();
                    score();
                    matnqueezover.innerText = 'متاسفانه زمان شما برای پاسخگویی به سوالات تمام شده است';
                };
                let color_time = document.querySelector('.ti');
                if(sec <= 40){
                    color_time.style.color = 'green';
                }if(sec < 30){
                    color_time.style.color = 'orange';
                }if(sec < 20){
                    color_time.style.color = 'yellow';
                }if(sec <= 10){
                    color_time.style.color = 'red';
                }
                return sec;
            }
            function over(){
                let queezover = document.querySelector('.queezover');
                let tim = document.querySelector('.tim');
                let butover = document.querySelector('.butover');
                queezover.style.display = 'block';
                tim.innerText = 0 + ':' + secound;
                butover.addEventListener('click',function(){
                    window.location.reload();
                })
            }
            let alert = document.querySelector('.alert');
            let massage = document.querySelector('.massage');
            alert.style.display = 'none';
            radio = document.querySelector('input[type=checkbox]:checked');
            if(radio === null){
                let matnsathsoal = document.querySelector('.matnsathsoal');
                alert.style.display = 'block';
                document.querySelector(".bodi").style.display = "none";
                $(".matnsathsoal").animate({
                    fontSize : '3.6em',
                });
                $(".matnsathsoal").animate({
                    fontSize : '1.2em',
                });
                clearTimeout(settime);
            }else if(parseInt(radio.value) === 0){
                sathe = sath[radio.value].easy;
            }else if(parseInt(radio.value) === 1){
                sathe = sath[radio.value].normal;
            }else if(parseInt(radio.value) === 2){
                sathe = sath[radio.value].hard;
            }
            if(radio.value === null){
                massage.innerText = 'لطفا سطح سوالات را مشخص کنید  '
            }else{
                let numQuestion = 0;
                let numAnswer = 0;
                let quizOver = false;
                creatQuestion();
                next = document.querySelector('.next').addEventListener('click', function(){
                    if(!quizOver){
                        let radioButton = document.querySelector('input[type=radio]:checked');
                        if(radioButton === null){
                            massage.innerText = 'لطفا پاسخی را انتخاب کنید'
                            $(".massage").animate({
                                fontSize : '3.6em',
                            })
                            $(".massage").animate({
                                fontSize : '1.2em',
                            })
                        }else{
                            massage.innerText = '';
                            if(parseInt(radioButton.value) === sathe[numQuestion].answer){
                                numAnswer++;
                                cheraghwhite();
                                cheraghTrue();
                            }else{
                                cheraghwhite();
                                cheraghFalse();
                            }
                            numQuestion++;
                            if(numQuestion < sathe.length){
                                creatQuestion();
                            }else{
                                score();
                                let prev = document.querySelector('.prev');
                                let next = document.querySelector('.next');
                                let reload = document.querySelector('.reload');
                                prev.style.display = 'none';
                                next.style.display = 'none';
                                reload.style.display = 'block';
                            }
                        }
                    }else{
                        quizOver = false;
                        creatQuestion();
                    }
                });
                function cheraghwhite(){
                    let cheragh = document.querySelector('.cheragh-org');
                    let span = document.createElement('span');
                    span.innerHTML = '<span class="cheragh" style="background:white"></span>'
                    cheragh.appendChild(span);
                    $(".cheragh").animate({
                        padding: "3px 12px",
                        margin: "4px",
                        borderradius: "50%",
                    })
                    $(".cheragh").animate({
                        padding: "1px 9px",
                        margin: "2px",
                        borderradius: "50%",
                    })
                }
                function cheraghTrue(){
                    let cheraghover = document.querySelector('.cheraghover');
                    let span = document.createElement('span');
                    span.innerHTML = '<span class="cheragh" style="background:green"></span>';
                    cheraghover.appendChild(span);
                }
                function cheraghFalse(){
                    let cheraghover = document.querySelector('.cheraghover');
                    let span = document.createElement('span');
                    span.innerHTML = '<span class="cheragh" style="background:red"></span>';
                    cheraghover.appendChild(span);
                }
                prev = document.querySelector('.prev').addEventListener('click', function(){
                    massage.innerText = '';
                    let numchoice = sathe[numQuestion].choice.length;
                    let choiceList = document.querySelector('.answer > .choice');
                    let questionText = document.querySelector('.question');
                    let radioButton = document.querySelector('input[type=radio]:checked');
                    console.log(radioButton)
                    radioButton === '';
                    let cheragh = document.querySelector('.cheragh-org');
                    let span = document.querySelector('.cheragh');
                    span.remove();
                    numQuestion--;
                    creatQuestion();
                    choiceList.innerHTML = '';
                    for(i=numchoice-1; i>=0; i--){   
                        let choiceAnswers = sathe[numQuestion].choice[i];
                        let li = document.createElement('li');
                        li.innerHTML = '<li><input type="radio" value="' + i +'"name="dynradio" style="width:20px; height:18px;"/>' + choiceAnswers +'</li>'
                        li.style.listStyle = 'none';
                        choiceList.appendChild(li);
                    }
                })
                function creatQuestion(){
                    let question = sathe[numQuestion].queez;
                    let questionText = document.querySelector('.question');
                    let choiceList = document.querySelector('.answer > .choice');
                    let numchoice = sathe[numQuestion].choice.length;
                    questionText.innerText = question;
                    choiceList.innerHTML = '';
                    for(i=0; i<numchoice; i++){
                        let choiceAnswers = sathe[numQuestion].choice[i];
                        let li = document.createElement('li');
                        li.innerHTML = '<li><input type="radio" value="' + i +'"name="dynradio" style="width:20px; height:18px; cursor:pointer;"/>' + choiceAnswers +'</li>'
                        li.style.listStyle = 'none';
                        choiceList.appendChild(li);
                        li.classList.add('charkhesh_matn');

                    }
                }
                function score(){
                    let text = document.querySelector('.text');
                    let scor = document.querySelector('.scor');
                    let matnqueezover = document.querySelector('.matnqueezover');
                    text.innerText =' تعداد ' + numAnswer +' جواب درست از '+ sathe.length + ' تا ';
                    scor.innerText = ' تعداد ' + numAnswer +' جواب درست از '+ sathe.length + ' تا ';
                    clearTimeout(settime);
                    document.querySelector(".bodi").style.display = "none";
                    matnqueezover.innerText = 'تبریک شما به تمام سوالات پاسخ دادید';
                    over();
                }
            }
        })
    
