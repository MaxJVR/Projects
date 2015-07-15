$(document).ready(function(){ 

    //Quiz instruction card displayed by default.
    $('#introBtn').click(function(){
        $('#introCard').toggle();
        $('#q1Card').toggle();
    });
    //Question 1  
    $('#a1Btn').click(function(){
            player1Score ++
            $('#q1Card').toggle();
            $('#q2Card').toggle();
    });
    $('.q1Btn').click(function(){
        $('#q1Card').toggle();
        $('#q2Card').toggle();   
    });
    //Question 2
    $('#a2Btn').click(function(){
            player1Score ++
            $('#q2Card').toggle();
            $('#q3Card').toggle();
    });
    $('.q2Btn').click(function(){
                $('#q2Card').toggle();
                $('#q3Card').toggle();   
    });
    //Question 3
    $('#a3Btn').click(function(){
            player1Score ++
            $('#q3Card').toggle();
            $('#q4Card').toggle();
    });
    $('.q3Btn').click(function(){
                $('#q3Card').toggle();
                $('#q4Card').toggle();   
    });
    //Question 4
    $('#a4Btn').click(function(){
            player1Score ++
            $('#q4Card').toggle();
            $('#q5Card').toggle();
    });
    $('.q4Btn').click(function(){
                $('#q4Card').toggle();
                $('#q5Card').toggle();   
    });
    //Question 5
    $('#a5Btn').click(function(){
            player1Score ++
            $('#q5Card').toggle();
            $('#q6Card').toggle();
    });
    $('.q5Btn').click(function(){
                $('#q5Card').toggle();
                $('#q6Card').toggle();   
    });
    //Question 6
    $('#a6Btn').click(function(){
            player1Score ++
            $('#q6Card').toggle();
            $('#q7Card').toggle();
    });
    $('.q6Btn').click(function(){
                $('#q6Card').toggle();
                $('#q7Card').toggle();   
    });
    //Question 7
    $('#a7Btn').click(function(){
            player1Score ++
            $('#q7Card').toggle();
            $('#q8Card').toggle();
    });
    $('.q7Btn').click(function(){
                $('#q7Card').toggle();
                $('#q8Card').toggle();   
    });
    //Question 8
    $('#a8Btn').click(function(){
            player1Score ++
            $('#q8Card').toggle();
            $('#q9Card').toggle();
    });
    $('.q8Btn').click(function(){
                $('#q8Card').toggle();
                $('#q9Card').toggle();   
    });
    //Question 9
    $('#a9Btn').click(function(){
            player1Score ++
            $('#q9Card').toggle();
            $('#q10Card').toggle();
    });
    $('.q9Btn').click(function(){
                $('#q9Card').toggle();
                $('#q10Card').toggle();   
    });
    //Question 10
    $('#a10Btn').click(function(){
            player1Score ++
            playerTurn ++
            playerSwitch();
            $('#q10Card').toggle();
            $('#introCard').toggle();
            
    });
    $('.q10Btn').click(function(){
            playerTurn ++
            playerSwitch();
            $('#q10Card').toggle();
            $('#intoCard').toggle();
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
            $('#introCard').toggle();
            //$('#winner').text("Winner is " + winner + "!" );
            $('#scoreCard').toggle();
        }
    }


   

    //TO DO

    //Fix random q10Card dissapear

    //Clean up code, add card q's & a's into arrays

    //Extras add animations to card change