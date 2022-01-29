// Loop
// Using this while Loop
var num = 0;
while(num<=100){
    if(num%3==0 && num%4==0){
        console.log(num,'Divide number is 3 & 4');
    }else if(num%4==0){
        console.log(num,'Divide number is 4');
    }else if (num%3==0){
        console.log(num,'Divide number is 3');
    }else{
        console.log(num);
    }

    num++;
}

// Using this For Loop
for(var i = 0; i<=100; i++){
    if(i%3==0 && i%4==0){
        console.log(i,"Divided by 3 & 4");
    }else if(i%3==0){
        console.log(i,"Divided by 3");

    }else if(i%4==0){
        console.log(i,"Divided by 4");

    }else{
        console.log(i);
    }
}

// Variable 
 var booksName = ['math','eng','bang','ict'];
 var number = 30;
 console.log(booksName.length);

 // array
 var bazar = ['fish','sobji','egg','rich'];
 var index=bazar.indexOf('fish');
 console.log(index);
 var position = bazar[3];
 positions=bazar[2];
 console.log(position);
 console.log(positions);
  bazar.push('oil')
 console.log(bazar);
 bazar.pop();
 console.log(bazar);
 bazar.unshift('sorisha');
 console.log(bazar);
 bazar.shift();
 console.log();

 // condition 
 var num =18;
 if(num<15 && num>=10){
     console.log(num);
 }else if(num==0 || num<=20){
     console.log(num);
 }else{
     console.log(num);
 }
