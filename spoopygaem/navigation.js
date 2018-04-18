//Declaration of constant getElementById's 
const room = document.getElementById("bodyContainer");
const leftNav = document.getElementById("leftNav");
const rightNav = document.getElementById("rightNav");
const forwardNav = document.getElementById("forwardNav");
const backNav = document.getElementById("backNav");
const NPC = document.getElementById("clueNPC");


/*=========================================================================
                            THE ROOM NUMBERS
=========================================================================*/
/*(1) ENTRANCE*/  let entrance = "url(images/rooms/entrance.jpg) no-repeat center fixed";

/*(2) STUDY*/  let study = "url(images/rooms/study.jpg) no-repeat center fixed";

/*(3) LIBRARY*/ let library = "url(images/rooms/library.jpg) no-repeat center fixed";

/*(4) BALLROOM */ let ballroom = "url(images/rooms/ballroom.jpg) no-repeat center fixed";

/*(5) KITCHEN*/ let kitchen = "url(images/rooms/kitchen.jpg) no-repeat center fixed";

/*(6)* DINING ROOM*/ let diningroom = "url(images/rooms/diningroom.jpg) no-repeat center fixed";

/*(7) BATHROOM*/ let bathroom = "url(images/rooms/bathroom.jpg) no-repeat center fixed";

/*(8)* LOUNGE*/ let lounge = "url(images/rooms/lounge.jpg) no-repeat center fixed";

/*(9) FRONT HALLWAY*/ let frontHallway = "url(images/rooms/fronthallway.jpg) no-repeat center fixed";

/*(10) REAR HALLWAY*/ let rearHallway = "url(images/rooms/rearhallway.jpg) no-repeat center fixed";

/*(11) END OF HALLWAY*/ let endHallway = "url(images/rooms/endhallway.jpg) no-repeat center fixed"


//This is the starting room (bedroom)
room.style.background = entrance;
let roomNum = 1


/*=========================================================================================
                                LEFT NAVIGATION
===========================================================================================*/

//This cycles through the rooms floorplan from the left navigation tool
leftNav.addEventListener("click",function(){
   
    //From Front Entrance to Lounge
    if (roomNum == 1 ){
     room.style.background = lounge;
     NPC.style.display = "initial";
     NPC.style.marginLeft = "-70%";
     roomNum = 8;

     } 

     //From Study to Front Entrance
     else if (roomNum == 2){
        room.style.background = entrance ;
        NPC.style.marginLeft = "-25%";
        NPC.style.display = "initial";
        roomNum = 1;

        
    }

    //From Front Hallway to Bathroom
    else if (roomNum == 9){
        room.style.background = bathroom;
        NPC.style.display ="none";
        roomNum = 7;
        
    }

    //From Rear Hallway to Dining Room
    else if(roomNum == 10){
        room.style.background = diningroom;
        NPC.style.display = "none";
        roomNum = 6;
        
    }

    //From Library to Rear Hallway
    else if (roomNum == 3){
        room.style.background = rearHallway;
        NPC.style.display="none";
        roomNum = 10;
       
    }
    
    //From End of Hallway to Kitchen
    else if(roomNum == 11){
        room.style.background = kitchen;
        NPC.style.display = "none";
        roomNum = 5;
        console.log(roomNum);
    }
})

/*=========================================================================================
                                RIGHT NAVIGATION
===========================================================================================*/


//This cyrcles throug the rooms floorplan from the right 
rightNav.addEventListener("click",function(){
    
    //From Front Entrance to Study
    if (roomNum == 1){
        room.style.background = study;
        NPC.style.display = "none";
        roomNum = 2;
    
     
    }

    //From Lounge to Front Entrance
    else if (roomNum == 8){
        room.style.background = entrance ;
        NPC.style.display = "initial";
        NPC.style.marginLeft = "-25%";
        roomNum = 1;

    }

    //From Bathroom to Front Hallway
    else if(roomNum == 7 ){
        room.style.background = frontHallway ;
        NPC.style.display = "none";
        roomNum = 9;
     
    }

    //From Rear Hallway to Library
    else if(roomNum == 10){
        room.style.background = library;
        NPC.style.display = "initial";
        NPC.style.marginLeft = "-40%";
        roomNum = 3;
    }

    //From Dining Room to Rear Hallway
    else if (roomNum == 6){
        room.style.background = rearHallway;
        NPC.style.display = "none";
        roomNum = 10;
    }

    else if(roomNum == 5){
        room.style.background = endHallway;
        NPC.style.display = "initial";
        NPC.style.marginLeft = "-40%";
        roomNum = 11;
       
    }
})

/*=========================================================================================
                            FORWARD NAVIGATION
===========================================================================================*/

forwardNav.addEventListener("click",function(){

    //From the entrance to the front Hallway
    if (roomNum == 1){
        room.style.background = frontHallway;
        NPC.style.display = "none";
        roomNum = 9;
    }

    //From the front hallway to the rear hallway
    else if (roomNum == 9){
        room.style.background = rearHallway;
        NPC.style.display = "none";
        roomNum = 10;
    }

    //From the Rear Hallway to the End of the Hallway
    else if (roomNum == 10){
        room.style.background = endHallway;
        NPC.style.display = "initial";
        NPC.style.marginLeft = "-40%";
        roomNum = 11;
     
    }

    //From the End of Hallway to the Ballroom
    else if (roomNum == 11){
        room.style.background = ballroom;
        NPC.style.display = "none";
        roomNum = 4;
        
    }

    //From the Dining Room to Kitchen
    else if(roomNum == 6){
        room.style.background = kitchen;
        NPC.style.display = "none";
        roomNum = 5;

    }

})

/*=========================================================================================
                                    BACK NAVIGATION
===========================================================================================*/

backNav.addEventListener("click",function(){

        //from front hallway to entrance
        if(roomNum == 9){
            room.style.background = entrance;
            NPC.style.display = "initial";
            NPC.style.marginLeft = "-25%";
            roomNum = 1;
     
        }

        //From rear hallway to front hallway
        else if (roomNum == 10){
            room.style.background = frontHallway;
            NPC.style.display = "none";
            roomNum = 9;
         
        }

        //From end of hallway to rear hallway 
        else if (roomNum == 11){
            room.style.background = rearHallway;
            NPC.style.display = "none";
            roomNum = 10;

        }

        //From Kitchen to Dining Room 
        else if (roomNum == 5){
            room.style.background = diningroom;
            NPC.style.display = "none";
            roomNum = 6;
 
        }

        else if (roomNum == 4){
            room.style.background = endHallway;
            NPC.style.display ="initial";
            NPC.style.marginLeft = "-40%";
            roomNum = 11;

        }
})


