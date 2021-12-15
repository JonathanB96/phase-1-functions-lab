// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    if(pickupLocation>42){
        return pickupLocation-42;
    }
    else{
        return 42-pickupLocation;
    }
  }

function distanceFromHqInFeet(someValue) {
    ;
    return distanceFromHqInBlocks(someValue)*264;
      
  }
  function distanceTravelledInFeet(start, destination){
      
         if(start>destination){
             return(start-destination)*264;
         }
         else{
             return (destination-start)*264;
         }
  }
function calculatesFarePrice(start, destination){
    let fare = distanceTravelledInFeet(start, destination);
    if(fare <=400){
        return 0;
    }
    else if(fare>400 && fare <=2000){
        return ((fare-400)*2)/100;
    }
    else if(fare>2000 && fare<2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }


}