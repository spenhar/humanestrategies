var strategies = [
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
            "Read the history of the NAACP: https://www.history.com/topics/civil-rights-movement/naacp",
            "Do you see yourself as 'one of the good ones'? Make an argument against that.",
            "There is a history of white women's racism within feminism. Read about it.",
            "What is your role in racist systems?",
            "In what ways is the medical system in America racist?",
            "What are you defending right now?",
            "In what way is 'normal' to you racist?",
            "Why do we allow destructive rioting after sporting events?",
            "Have you gotten more concerned about property damage than lives lost?",
            "If a police officer does harm, what processes in place for reprecussions?",
            "What is the historical relationship between white supremacy and the police?",
            "Why do or don't you post about what you believe on social media?",
            "What does the phrase 'white silence is white violence' mean to you?",
            "As a child, were you ever the only one who looked like you at a party? As an adult?",
            "Have you ever been singled out by a teacher because of your race?",
            "When you turn on the TV, do you mostly see people who look like you? Why?",
            "Per capita, how many people died in police custody last year in the US? In Germany? In the UK?",
            "Per capita, how many people were arrested last year in the United States? In Australia? In Sweden?",
            "Per capita, how many people are in prison or jail in the United States? How does this compare to other countries?",
            "What was the Tulsa Race Massacre?",
            "What proportion of the United States is white?",
            "What is your favorite book by a Black author? Your second?",
            "What is your favorite movie with a Black protagonist?",
            "How large is the income gap between Blacks and whites in America? And the wealth gap?"
            ];

function choose(){
    var strategyChoice = strategies[Math.floor(Math.random()*strategies.length)];
    strategy = strategyChoice;   
    document.getElementById("theStrategy").innerHTML = strategy;
}
