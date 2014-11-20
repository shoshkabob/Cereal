var n = parseInt(process.argv[2]);
var pre = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var suf = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];

for (i = 0; i < n; i++) {
	console.log(pre[Math.floor(Math.random()*pre.length)] + " " + suf[Math.floor(Math.random()*suf.length)]);
}