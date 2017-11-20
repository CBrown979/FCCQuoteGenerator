var inspiredQuotes = [
    'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. -Harriet Tubman',
    'What God intended for you goes far beyond anything you can imagine. -Oprah Winfrey',
    'I did what my conscience told me to do, and you can\'t fail if you do that. -Anita Hill',
    'Life is very short and what we have to do must be done in the now. -Audre Lorde',
    'Mistakes are a fact of life. It is the response to the error that counts. -Nikki Giovanni',
    'Don\'t feel entitled to anything you didn\'t sweat and struggle for. -Marian Wright Edelman',
    'No matter what accomplishments you make, somebody helped you. -Althea Gibson',
    'As you become more clear about who you really are, you\'ll be better able to decide what is best for you - the first time around. -Oprah Winfrey',
    'We can say "Peace on Earth." We can sing about it, preach about it or pray about it, but if we have not internalized the mythology to make it happen inside us, then it will not be. -Betty Shabazz',
    'It\'s not the load that breaks you down, it\'s the way you carry it. -Lena Horne',
    'It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences. -Audre Lorde',
    'There\'s always something to suggest that you\'ll never be who you wanted to be. Your choice is to take it or keep on moving. -Phylicia Rashad',
    'Don\'t wait around for other people to be happy for you. Any happiness you get you\'ve got to make yourself. -Alice Walker',
    'Give light and people will find the way. -Ella Baker',
    'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.  -Oprah Winfrey',
    'All great achievements require time. -Maya Angelou',
    'The kind of beauty I want most is the hard-to-get kind that comes from within - strength, courage, dignity. -Ruby Dee',
    'Service is the rent that you pay for room on this earth. -Shirley Chisholm',
    'You don\'t make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas. - Shirley Chisholm'
    ];
    
function newestQuote(){
    var randomNumber=Math.floor(Math.random() * inspiredQuotes.length);
    document.getElementById("quoteDisplay").innerHTML=inspiredQuotes[randomNumber];
};

