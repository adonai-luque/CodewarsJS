// If you can read this...
// Dictionary NATO comes preloaded

function to_nato(words) {
	[',', '.', '!', '?'].forEach(s => { NATO[s] = s });
  return words.match(/[a-zA-Z,.!?]/g).map(l => NATO[l.toLowerCase()]).join(' ');
}