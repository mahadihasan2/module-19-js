function condition(num){
    // var num1=0;
    // console.log(i);
    for(var i=1; i<=num; i++){
        if(i%3==0 && i%4==0){
            console.log('Number divided 3 & 4 is=',i);

        }else if(i%3==0){
            console.log('Number divided 3  is=',i);
        }else if(i%4==0){
            console.log('Number divided is 4 =',i);
            
        }else{
            console.log(i);
        }
    }
    // while(num1<=100){
    //     if(num1%3==0 && num1%4==0){
    //         console.log('Number divided 3 & 4 is=',num1);

    //     }else if(num1%3==0){
    //         console.log('Number divided 3  is=',num1);
    //     }else if(num1%4==0){
    //         console.log('Number divided is 4 =',num1);
            
    //     }else{
    //         console.log(num1);
    //     }

    //     num1++;
    // }

}


condition(5);