function superbowlWin(array){
    let winObject = array.find((ob) => ob.result === 'W');
    if(winObject){
        return winObject.year;
    }
}