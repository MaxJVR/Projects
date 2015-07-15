$(document).ready(function(){ 

    //Quiz instruction card displayed by default.
    $('#introBtn').click(function(){
        $('#introCard').toggle("drop");
        $('#q1Card').toggle("drop");
    });
    //Question 1
    $('#a1Btn').click(function(){
            player1Score ++
            $('#q1Card').toggle("drop");
            $('#q2Card').toggle("drop");
    });
    $('.q1Btn').click(function(){
        $('#q1Card').toggle("drop");
        $('#q2Card').toggle("drop");   
    });
    //Question 2
    $('#a2Btn').click(function(){
            player1Score ++
            $('#q2Card').toggle("drop");
            $('#q3Card').toggle("drop");
    });
    $('.q2Btn').click(function(){
                $('#q2Card').toggle("drop");
                $('#q3Card').toggle("drop");   
    });
    //Question 3
    $('#a3Btn').click(function(){
            player1Score ++
            $('#q3Card').toggle("drop");
            $('#q4Card').toggle("drop");
    });
    $('.q3Btn').click(function(){
                $('#q3Card').toggle("drop");
                $('#q4Card').toggle("drop");   
    });
    //Question 4
    $('#a4Btn').click(function(){
            player1Score ++
            $('#q4Card').toggle("drop");
            $('#q5Card').toggle("drop");
    });
    $('.q4Btn').click(function(){
                $('#q4Card').toggle("drop");
                $('#q5Card').toggle("drop");   
    });
    //Question 5
    $('#a5Btn').click(function(){
            player1Score ++
            $('#q5Card').toggle("drop");
            $('#q6Card').toggle("drop");
    });
    $('.q5Btn').click(function(){
                $('#q5Card').toggle("drop");
                $('#q6Card').toggle("drop");   
    });
    //Question 6
    $('#a6Btn').click(function(){
            player1Score ++
            $('#q6Card').toggle("drop");
            $('#q7Card').toggle("drop");
    });
    $('.q6Btn').click(function(){
                $('#q6Card').toggle("drop");
                $('#q7Card').toggle("drop");   
    });
    //Question 7
    $('#a7Btn').click(function(){
            player1Score ++
            $('#q7Card').toggle("drop");
            $('#q8Card').toggle("drop");
    });
    $('.q7Btn').click(function(){
                $('#q7Card').toggle("drop");
                $('#q8Card').toggle("drop");   
    });
    //Question 8
    $('#a8Btn').click(function(){
            player1Score ++
            $('#q8Card').toggle("drop");
            $('#q9Card').toggle("drop");
    });
    $('.q8Btn').click(function(){
                $('#q8Card').toggle("drop");
                $('#q9Card').toggle("drop");   
    });
    //Question 9
    $('#a9Btn').click(function(){
            player1Score ++
            $('#q9Card').toggle("drop");
            $('#q10Card').toggle("drop");
    });
    $('.q9Btn').click(function(){
                $('#q9Card').toggle("drop");
                $('#q10Card').toggle("drop");   
    });
    //Question 10
    $('#a10Btn').click(function(){
            player1Score ++
            playerTurn ++
            $('#q10Card').toggle("drop");
            $('#introCard').toggle("drop");
            playerSwitch();
    });
    $('.q10Btn').click(function(){
            playerTurn ++
            $('#q10Card').toggle("drop");
            $('#intoCard').toggle("drop");
            playerSwitch();
    });
    //Winner Card
    $('#replay').click(function(){
            location.reload();
        });

});

    var player1Score = 0
    var player2Score = 0
    var playerTurn = 0

   
    function playerSwitch() {
        if(playerTurn === 1){
            $('#player1Total').attr('data-badge', player1Score);
            this.player1Score = 0
        }
        if(playerTurn === 2){
            this.player2Score = player1Score
            $('#player2Total').attr('data-badge', player2Score);
            $('#introCard').toggle("drop");
            $('#scoreCard').toggle("drop");
        }
    }

   //  function winner(){
   //      if(player1Score > player2Score){ 
   //          $('#score').text("The force is with " + '#name1')
   //      }else if (player1Score < player2Score){
   //          $('#score').text("The force is with " + '#name2')
   //      }else if (player1score === player2Score){ 
   //          $('#score').text("I find your lack of win, disturbing...")
   //      }
   // }

    //TO DO

    //Fix bugs

    //Clean up code, add card q's & a's into arrays

    //Update winner card to get winning player's name