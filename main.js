var bio = document.getElementById('bio');

var typewriter = new Typewriter(bio, {
	loop: false,
	delay: 100,
	cursor: '█'
});

typewriter
	.pauseFor(1000)
	.typeString("<p class='h1 d-inline'>Hi, I'm Aashrut Vaghani.</p><br>")
	.pauseFor(300)
	.typeString("<p class='h2 d-inline'>I'm an IT Engineering Student.</p>")
	.pauseFor(1000)
	.start();