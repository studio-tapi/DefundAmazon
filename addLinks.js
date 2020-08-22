var titleElement = document.getElementById('productTitle');
if (titleElement) {
	const template = '<a href="{{link}}" title="{{category}}"><div class="a-button-stack"><span class="a-button a-spacing-small a-button-base"><span class="a-button-inner"><span class="a-button-text">{{label}}</span></span></span></div></a>';
	
	let subject = '';
	
	const subnav = document.getElementById('nav-subnav');
	let category = '';
	if (subnav) {
		category = subnav.getAttribute('data-category').toLowerCase();
		for (let alternative in alternatives) {
			if (category.includes(alternative))
			{
				subject = alternative;
				break;
			}
		}
	}
	
	let query = titleElement.innerText;
	
	if (alternatives[subject] && alternatives[subject].preferSearch) {
		const search = document.getElementById('twotabsearchtextbox').getAttribute('value');
		if (search) {
			query = search;
		}
	}
	
	function render(subject) {
		if (alternatives[subject]) {
			for (let alternative in alternatives[subject]) {
				if (alternative != 'preferSearch') {
					document
						.getElementById('submit.add-to-cart')
						.closest('.a-button-stack')
						.parentElement
						.insertAdjacentHTML(
							'beforebegin',
							template
								.replace('{{category}}', category)
								.replace('{{link}}', alternatives[subject][alternative].replace('{{query}}', query))
								.replace('{{label}}', 'Search ' + alternative)
						);
				}
			}
		}
	}
	
	if (subject) {
		render(subject);
	}
	
	render('*');
	
	document.getElementById('addToCart_feature_div').insertAdjacentHTML('beforebegin', '<hr/>');
}
