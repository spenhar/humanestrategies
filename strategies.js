var strategy = [
            "Who is your mayor?",  
            "Can you protest without a sign?",
            "What else could you do other than call the police? Be prepared.",
            "Read about microaggressions.",
            "You have a white audience that the Black community may not have. Start a conversation about race.",
            "Write 10 sentences about what 'whiteness' means to you.",
            "'I dont see color' ingores our privilege and erases the reality that our experiences differ greatly.",
            "What proportion of Black Americans are incarcerated? What proportion of White Americans?",
            "How long did slavery last in America?",
            "When did African Americans gain the right to vote?",
            "What is 'gerrymandering'.",
            "How much does your state spend on the police? How much does it spend on education?",
            "Read the history of the NAACP: https://www.history.com/topics/civil-rights-movement/naacp"            
            ];

function choose(){
    var strategyChoice = strategy[Math.floor(Math.random()*strategy.length)];
            
    document.getElementById("theStrategy").innerHTML = strategy;
}
