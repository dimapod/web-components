(function() {
	"use strict";
	var PlopButtonProto = Object.create(HTMLElement.prototype);
	PlopButtonProto.foo = function() {
		alert('foo() called');
	};
	PlopButtonProto.createdCallback = function() {
		var shadow = this.createShadowRoot();
		shadow.innerHTML = "<style>b { color: green; border: 1px solid;	padding: 5px; }</style><b>I'm a SHADOW button</b>";

		this.addEventListener('click', function(e) {
			alert('PLOP!');
		});
	};
	PlopButtonProto.attachedCallback = function() {
	};

	Object.defineProperty(PlopButtonProto, "bar", {value: 5});

	document.registerElement('plop-button', {prototype: PlopButtonProto});
}());
