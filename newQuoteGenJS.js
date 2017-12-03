var inspiredQuotes = [
    'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. We are the change that we seek. -President Barack Obama',
    'Have a vision. Be demanding. -Colin Powell',
    'Love makes your soul crawl out from its hiding place. -Zora Neale Hurston',
    'Never be limited by other people\'s limited imaginations. -Dr. Mae Jemison',
    'Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise. I rise. I rise. -Maya Angelou',
    'What God intended for you goes far beyond anything you can imagine. -Oprah Winfrey',
    'Surround yourself with people who take their work seriously, but not themselves, those who work hard and play hard. -Colin Powell',
    'I did what my conscience told me to do, and you can\'t fail if you do that. -Anita Hill',
    'Life is very short and what we have to do must be done in the now. -Audre Lorde',
    'Don\'t feel entitled to anything you didn\'t sweat and struggle for. -Marian Wright Edelman',
    'Freedom is never given; it is won. -A. Philip Randolph',
    'As you become more clear about who you really are, you\'ll be better able to decide what is best for you - the first time around. -Oprah Winfrey',
    'The cost of liberty is less than the price of repression. -W.E.B. Du Bois',
    'You really can change the world if you care enough. -Marian Wright Edelman',
    'Never underestimate the power of dreams and the influence of the human spirit. We are all the same in this notion: The potential for greatness lives within each of us. - Wilma Rudolph'
    ];
    
function newestQuote(){
    var randomNumber=Math.floor(Math.random() * inspiredQuotes.length);
    document.getElementById("quoteDisplay").innerHTML=inspiredQuotes[randomNumber];
}

function tweetIt() {
	window.open('https://twitter.com/intent/tweet?related=&text=' + document.getElementById("quoteDisplay").textContent);
}