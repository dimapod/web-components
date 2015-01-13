(function() {
	"use strict";
	var PlopButtonProto = Object.create(HTMLElement.prototype);
	PlopButtonProto.foo = function(name) {
		alert('foo() called: ' + name);
	};
	PlopButtonProto.createdCallback = function() {
		var shadow = this.createShadowRoot();
		shadow.innerHTML = "<style>b { color: green; border: 1px solid;	padding: 5px; }</style><b>I'm a SHADOW button</b>";

		this.addEventListener('click', function(e) {
			console.log('event intern', e);
			this.dispatchEvent(new Event('build'));
		});
	};
	PlopButtonProto.attachedCallback = function() {
	};

	Object.defineProperty(PlopButtonProto, "bar", {value: 5});

	document.registerElement('plop-button', {prototype: PlopButtonProto});
}());
