//variables
const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
	{
		quote: 'The distance between dreams and reality is called discipline',
		person: 'Akinnimi stefan',
	},
	{
		quote:
			'If you want to buy things without looking at the price tag you have to be able to work without looking at the clock',
		person: 'Akinnimi Kolawole',
		s,
	},
	{
		quote:
			'Every single person has to go thorough something that absolutely destroys them so they can find out who they really are',
		person: 'Steve',
	},
	{
		quote: 'Become a ghost, forget attention, you just grow in private',
		person: 'Akinnimi Stefan',
	},
	{
		quote:
			'Go to war with the man in the mirror and dont come back until you win',
		person: 'Akinnimi Emmanuel',
	},
	{
		quote:
			'Brutal consistency, Dedication, Patience, Discipline, focus and Grit',
		person: 'Akinnimi Damilola',
	},
	{
		quote: 'A man who can control is lust is unstoppable',
		person: 'Akinnimi Stefan',
	},
	{
		quote: 'Porn is the modern day serial killer of men',
		person: 'Akinnimi Emmanuel',
	},
];

btn.addEventListener('click', function () {
	const random = Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
});
