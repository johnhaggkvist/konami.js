function Konami(callback)
{ 
	var sequence = [
		38, 38, 40, 40, 37, 39, 37, 39, 66, 65
	], current = 0;

	this.trigger = function(event) {
		if (sequence[current++] != event.which) {
			current = 0;
		} else if (current == sequence.length) {
			callback();
		}
	} 

	if (typeof window.jQuery !== "undefined") {
		$('body').keyup(this.trigger);
	}
}
var k = new Konami(function() {
	alert('konami code!');
});