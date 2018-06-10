$(document).ready(function(){
    var scoreSum = 0
    var numWins = 0
    var numLosses = 0

   
    $("#numWins").text('Wins: ' + numWins)
    $("#numLosses").text('Losses '+ numLosses)
    $("#scoreSum").text('Currently at: '+ scoreSum)

        var goalNumber= Math.floor(Math.random() * 102 + 19); 
        $("#goalNumber").text('Goal Number: '+ goalNumber)

        var val1 = Math.floor(Math.random() * 12  + 1)
        var val2 = Math.floor(Math.random() * 12  + 1)
        var val3 = Math.floor(Math.random() * 12  + 1)
        var val4 = Math.floor(Math.random() * 12  + 1)

    $("#dog1").on("click", function(){
         scoreSum = scoreSum + val1
         $("#scoreSum").text('Currently at: '+ scoreSum)
         if(scoreSum === goalNumber){
             win()
         }
         else if(scoreSum > goalNumber){
             lose()
         }
    })
    $("#dog2").on("click", function(){
        scoreSum += val2
        $("#scoreSum").text('Currently at: '+ scoreSum)
         if(scoreSum === goalNumber){
             win()
         }
         else if(scoreSum > goalNumber){
             lose()
         }
    })
    $("#dog3").on("click", function(){
        scoreSum += val3
        $("#scoreSum").text('Currently at: '+ scoreSum)
         if(scoreSum === goalNumber){
             win()
         }
         else if(scoreSum > goalNumber){
             lose()
         }
    })
    $("#dog4").on("click", function(){
        scoreSum += val4
        $("#scoreSum").text('Currently at: '+ scoreSum)
         if(scoreSum === goalNumber){
             win()
         }
         else if(scoreSum > goalNumber){
             lose()
         }
    })
    function win(){
        numWins ++
    
        $("#numWins").text('Wins: ' + numWins) 
        reset()
        
    }
    function lose(){
        numLosses ++ 
        $("#numLosses").text('Losses '+ numLosses)
        reset()
        

    }
    function reset(){
        goalNumber= Math.floor(Math.random() * 102 + 19); 
        $("#goalNumber").text('Goal Number: '+ goalNumber)
        val1 = Math.floor(Math.random() * 12  + 1)
        val2 = Math.floor(Math.random() * 12  + 1)
        val3 = Math.floor(Math.random() * 12  + 1)
        val4 = Math.floor(Math.random() * 12  + 1)
        scoreSum = 0
        $("#scoreSum").text('Currently at: '+ scoreSum)
    }
})