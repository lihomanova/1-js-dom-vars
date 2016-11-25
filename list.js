'use strict';
var a=new Array();
var names=['Алексей','Дмитрий','Екатерина','Иван','Александр','Мария'];
var jobs=['менеджер','президент','архитектор','машинист','инженер','продавец'];
var woman=['Наталия','Екатерина','Нина','Юлия','Виктория','Ольга','Елена','Мария','Анастасия','Дарья','Ксения','Полина','Ирина','Вера','Надежда','Евгения'];


for (var i=0; i<10; i++){
  var obj1={};

  var randNames=Math.floor(Math.random()*names.length);
  var randJobs=Math.floor(Math.random()*jobs.length);
  var maxA=35;
  var minA=20;
  var randAge=minA+Math.floor(Math.random()*(maxA+1-minA));
  var maxM=120;
  var minM=20;
  var randMoney=minM+Math.floor(Math.random()*(maxM+1-minM));
  obj1.name=names[randNames];
  obj1.job=jobs[randJobs];
  obj1.age=randAge;
  obj1.money=randMoney;
a[i]=obj1;


}

var elem = document.querySelectorAll('li');
for (var j=0; j<10; j++){
  elem[j].innerText=a[j].name+' - '+a[j].job+' - '+a[j].age+' - '+a[j].money;

  if (a[j].money<50){
    elem[j].style.background='red';
  } else if (a[j].money>50 && a[j].money<80) {
     elem[j].style.background='yellow';
  } else {
    elem[j].style.background='green';
  }

  if (a[j].age>20 && a[j].age<27) {
    elem[j].innerHTML='<strong>'+a[j].name+'</strong>'+' - '+a[j].job+' - '+a[j].age+' - '+a[j].money;
  }


  if (a[j].job=='инженер') {
    elem[j].style.textDecoration='Underline';
  }

  for (var x=0; x<woman.length; x++){
    if (a[j].name==woman[x]){
      elem[j].style.fontSize='1.5em';
    }
  }

}


//elem.style.background = 'red';
//console.log(a);

//var elem = document.getElementsByTagName('li');

  //console.log(elem);
//b.style.color='red';

//console.log(document.getElementById('content'));
