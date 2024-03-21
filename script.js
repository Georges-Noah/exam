// cepd
var cj = document.querySelector(".cepd .jours .valeur");
var ch = document.querySelector(".cepd .heures .valeur");
var cm = document.querySelector(".cepd .minutes .valeur");
var cs = document.querySelector(".cepd .secondes .valeur");

// bepc
var bj = document.querySelector(".bepc .jours .valeur");
var bh = document.querySelector(".bepc .heures .valeur");
var bm = document.querySelector(".bepc .minutes .valeur");
var bs = document.querySelector(".bepc .secondes .valeur");

// bac 1
var b1j = document.querySelector(".bac1 .jours .valeur");
var b1h = document.querySelector(".bac1 .heures .valeur");
var b1m = document.querySelector(".bac1 .minutes .valeur");
var b1s = document.querySelector(".bac1 .secondes .valeur");

// bac 2
var b2j = document.querySelector(".bac2 .jours .valeur");
var b2h = document.querySelector(".bac2 .heures .valeur");
var b2m = document.querySelector(".bac2 .minutes .valeur");
var b2s = document.querySelector(".bac2 .secondes .valeur");


// Add space around a number
function addSpace(nb) {
	return " " + nb + " ";
}

// Transforming single digit number to
// two digits by prefixing with 0
function to2dg(nb) {
	let res = "" + nb + "";
	if(res.length == 1)
		res = "0" + res;
	return addSpace(res);
}

var cepd = setInterval(function() {
	let cepd_date = new Date(2024, 5, 18, 7, 0, 0, 0);
	let remain = cepd_date.getTime() - (new Date().getTime());

	let seconds, rSeconds;
	let minutes, rMinutes;
	let hours, rHours;
	let days, rDays;

	rSeconds = parseInt(remain / 1000);
	rMinutes = parseInt(rSeconds / 60);
	seconds = parseInt(rSeconds - (rMinutes * 60));
	rHours = parseInt(rMinutes / 60);
	minutes = parseInt(rMinutes - (rHours * 60));
	rDays = parseInt(rHours / 24);
	hours = parseInt(rHours - (rDays * 24));
	days = rDays;

	seconds = to2dg(seconds);
	minutes = to2dg(minutes);
	hours = to2dg(hours);
	days = to2dg(days);

	cj.innerHTML = days;
	ch.innerHTML = hours;
	cm.innerHTML = minutes;
	cs.innerHTML = seconds;

	// console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}, 1000);

var bepc = setInterval(function() {
	let bepc_date = new Date(2024, 5, 10, 7, 0, 0, 0);
	let remain = bepc_date.getTime() - (new Date().getTime());

	let seconds, rSeconds;
	let minutes, rMinutes;
	let hours, rHours;
	let days, rDays;

	rSeconds = parseInt(remain / 1000);
	rMinutes = parseInt(rSeconds / 60);
	seconds = parseInt(rSeconds - (rMinutes * 60));
	rHours = parseInt(rMinutes / 60);
	minutes = parseInt(rMinutes - (rHours * 60));
	rDays = parseInt(rHours / 24);
	hours = parseInt(rHours - (rDays * 24));
	days = rDays;

	seconds = to2dg(seconds);
	minutes = to2dg(minutes);
	hours = to2dg(hours);
	days = to2dg(days);

	bj.innerHTML = days;
	bh.innerHTML = hours;
	bm.innerHTML = minutes;
	bs.innerHTML = seconds;

	// console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}, 1000);

var bac1 = setInterval(function() {
	let bac1_date = new Date(2024, 4, 27, 7, 0, 0, 0);
	let remain = bac1_date.getTime() - (new Date().getTime());

	let seconds, rSeconds;
	let minutes, rMinutes;
	let hours, rHours;
	let days, rDays;

	rSeconds = parseInt(remain / 1000);
	rMinutes = parseInt(rSeconds / 60);
	seconds = parseInt(rSeconds - (rMinutes * 60));
	rHours = parseInt(rMinutes / 60);
	minutes = parseInt(rMinutes - (rHours * 60));
	rDays = parseInt(rHours / 24);
	hours = parseInt(rHours - (rDays * 24));
	days = rDays;

	seconds = to2dg(seconds);
	minutes = to2dg(minutes);
	hours = to2dg(hours);
	days = to2dg(days);

	b1j.innerHTML = days;
	b1h.innerHTML = hours;
	b1m.innerHTML = minutes;
	b1s.innerHTML = seconds;

	// console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}, 1000);

var bac2 = setInterval(function() {
	let bac2_date = new Date(2024, 5, 17, 7, 0, 0, 0);
	let remain = bac2_date.getTime() - (new Date().getTime());

	let seconds, rSeconds;
	let minutes, rMinutes;
	let hours, rHours;
	let days, rDays;

	rSeconds = parseInt(remain / 1000);
	rMinutes = parseInt(rSeconds / 60);
	seconds = parseInt(rSeconds - (rMinutes * 60));
	rHours = parseInt(rMinutes / 60);
	minutes = parseInt(rMinutes - (rHours * 60));
	rDays = parseInt(rHours / 24);
	hours = parseInt(rHours - (rDays * 24));
	days = rDays;

	seconds = to2dg(seconds);
	minutes = to2dg(minutes);
	hours = to2dg(hours);
	days = to2dg(days);

	b2j.innerHTML = days;
	b2h.innerHTML = hours;
	b2m.innerHTML = minutes;
	b2s.innerHTML = seconds;

	// console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}, 1000);