(function() {
	"use strict";

	var PlopButtonProto = Object.create(HTMLElement.prototype);

	PlopButtonProto.createdCallback = function() {
		var t = document.querySelector('#plop-template');

		var clone = document.importNode(t.content, true);
		this.createShadowRoot().appendChild(clone);

		this.addEventListener('click', function(e) {
			alert('PLOP Template!');
		});
	};

	document.registerElement('plop-template-button', {prototype: PlopButtonProto});
}());
