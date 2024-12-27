let turn ='X'
let circles = [];

function done(n1,n2,n3){
    let Winner_sign = document.getElementById("item" + n1).innerText

    document.getElementById("sign").innerText = Winner_sign + " Is The Winner";
    document.getElementById("sign").style.display='block';

    
    document.getElementById("item" + n1).style.backgroundColor='black';
    document.getElementById("item" + n1).style.color='white';

    setTimeout(function(){
        document.getElementById("item" + n2).style.backgroundColor='black';
        document.getElementById("item" + n2).style.color='white';
    }, 500)
    
    setTimeout(function(){
        document.getElementById("item" + n3).style.backgroundColor='black';
        document.getElementById("item" + n3).style.color='white';
    }, 1000)

    setTimeout(function(){
        document.getElementById("item" + n3).style.backgroundColor='white';
        document.getElementById("item" + n3).style.color='black';
    }, 1750)

    setTimeout(function(){
        document.getElementById("item" + n2).style.backgroundColor='white';
        document.getElementById("item" + n2).style.color='black';
    }, 2250)

    setTimeout(function(){
        document.getElementById("item" + n1).style.backgroundColor='white';
        document.getElementById("item" + n1).style.color='black';
    },2750)

    setTimeout(function(){location.reload()},2800);
}

function win(){
    for ( let i = 1 ; i < 10 ; i++){
        circles[i] = document.getElementById(i);
    }
    if(circles[1].innerHTML == circles[2].innerHTML && circles[2].innerHTML == circles[3].innerHTML){
        if(circles[1].style.fontSize=="125px" && circles[2].style.fontSize=="125px" &&circles[3].style.fontSize=="125px"){
            done(1,2,3);
        }
    }

    if(circles[4].innerHTML == circles[5].innerHTML && circles[5].innerHTML == circles[6].innerHTML){
        if(circles[4].style.fontSize=="125px" && circles[5].style.fontSize=="125px" &&circles[6].style.fontSize=="125px"){
            done(4,5,6);
        }
    }

    if(circles[7].innerHTML == circles[8].innerHTML && circles[8].innerHTML == circles[9].innerHTML){
        if(circles[7].style.fontSize=="125px" && circles[8].style.fontSize=="125px" &&circles[9].style.fontSize=="125px"){
            done(7,8,9);
        }
    }

    if(circles[1].innerHTML == circles[4].innerHTML && circles[4].innerHTML == circles[7].innerHTML){
        if(circles[1].style.fontSize=="125px" && circles[4].style.fontSize=="125px" &&circles[7].style.fontSize=="125px"){
            done(1,4,7);
        }
    }

    if(circles[2].innerHTML == circles[5].innerHTML && circles[5].innerHTML == circles[8].innerHTML){
        if(circles[2].style.fontSize=="125px" && circles[5].style.fontSize=="125px" &&circles[8].style.fontSize=="125px"){
            done(2,5,8);
        }
    }

    if(circles[3].innerHTML == circles[6].innerHTML && circles[6].innerHTML == circles[9].innerHTML){
        if(circles[3].style.fontSize=="125px" && circles[6].style.fontSize=="125px" &&circles[9].style.fontSize=="125px"){
            done(3,6,9);
        }
    }

    if(circles[1].innerHTML == circles[5].innerHTML && circles[5].innerHTML == circles[9].innerHTML){
        if(circles[1].style.fontSize=="125px" && circles[5].style.fontSize=="125px" &&circles[9].style.fontSize=="125px"){
            done(1,5,9);
        }
    }

    if(circles[3].innerHTML == circles[5].innerHTML && circles[5].innerHTML == circles[7].innerHTML){
        if(circles[3].style.fontSize=="125px" && circles[5].style.fontSize=="125px" &&circles[7].style.fontSize=="125px"){
            done(3,5,7);
        }
    }
}

function game(id){
    let element = document.getElementById(id)

    if (turn == 'X'){
        element.style.fontSize="125px";
        turn ='O';
    }
    else  if (turn == 'O'){
        element.style.fontSize="125px";
        turn ='X';
    }
    for ( i=1 ; i<10; i++)
    {
        if(document.getElementById(i).style.fontSize != "125px"){
            document.getElementById(i).innerHTML =   turn;
        }
        
    }
    win();
}