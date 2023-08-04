let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"I'm not here to be perfect, I'm here to be real."` ,
    person: `Lady Gaga`
}, { 
    quote: `"I'm not interested in money. I just want to be wonderful."`,
    person: `Marilyn Monroe`
  },  {
  quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
  person:`Winston Churchill`
  }, {
  quote:`"The only thing that feels better than winning is winning when nobody thought you could."`,
  person:`Hank Aaron`
}, {
quote:`"If you want something done, ask a busy person to do it."`, 
person:`Laura Ingalls Wilder`
}, {
  quote:`"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."` ,
  person:`John Quincy Adams`
}, {
  quote:`"The best way to find out if you can trust somebody is to trust them." `,
  person:`Ernest Hemingway`
}, {
  quote:`"We may encounter many defeats but we must not be defeated."`,
  person:`Maya Angelou`
}, {
   quote:`"In order to be truly happy, you must pursue your dreams and goals."`,
   person:`Oprah Winfrey`
}, {
  quote:`"You can have anything you want if you are willing to give up everything you have."`,
  person:`Oprah Winfrey`
}, {
  quote:`"Don't let anyone tell you what you can't do. Follow your dreams and persist."`,
  person:`Barack Obama`
}, {
    quote:`"You only live once, but if you do it right, once is enough."`,
    person:`Mae West`
}, {
    quote:`"Life is what we make it and how we make it – whether we realize it or not."`,
    person:`Napoleon Hill`
}, {
    quote:`"If you want something you've never had, you must be willing to do something you've never done."`,
    person:` Unknown`
}, {
    quote:`"We may encounter many defeats but we must not be defeated."`,
    person:`Maya Angelou`

}, {
    quote:`"Na mumu dey go to work on Monday."`,
    person:`Idan`
}, {
    quote:`"We no dey follow chase love, na love dey chase us"`,
    person:`Idan Gan Gan`
}];

btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;

});
