var strategy = [
            "Who is your representative?",  
            "Can you protest without a sign?"
            ];

function choose(){
    var strategyChoice = person[Math.floor(Math.random()*strategy.length)];
            
    document.getElementById("strategy").innerHTML = strategy;
}