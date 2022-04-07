// code your solution here
function superbowlWin(record){
    let answer = record.find(function(game){
       return game.result === "W" 
    });
    if (answer) {
        return answer.year;
    }
}