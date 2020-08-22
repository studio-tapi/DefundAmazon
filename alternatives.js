// preferSearch means that you're unlikely to get good search results from the
// product title and to try to use whatever's in the search field instead

const alternatives = {
	'books': {
		"Powells": "https://www.powells.com/searchresults?keyword={{query}}",
		"Barnes & Noble": "https://www.barnesandnoble.com/s/{{query}}"
	},
	'arts-crafts': {
		"Cheap Joe's": "https://www.cheapjoes.com/nsearch/?q={{query}}",
		"Blick": "https://www.dickblick.com/search/?q={{query}}",
		"H.R. Meininger": "https://www.meininger.com/search.php?search_query={{query}}"
	},
	'beauty': {
		"Sephora": "https://www.sephora.com/search?keyword={{query}}",
		"Ulta": "https://www.ulta.com/ulta/a/_/Ntt-{{query}}"
	},
	'hpc': { // health something something
		preferSearch: true,
		"HealthWarehouse": "https://www.healthwarehouse.com/solr/result/?q={{query}}",
		"Sephora": "https://www.sephora.com/search?keyword={{query}}",
		"Ulta": "https://www.ulta.com/ulta/a/_/Ntt-{{query}}"
	},
	'electronics': {
		"GameStop": "https://www.gamestop.com/search/?q={{query}}",
		"Newegg": "https://www.newegg.com/p/pl?d={{query}}",
		"TigerDirect": "https://www.tigerdirect.com/applications/SearchTools/search.asp?keywords={{query}}",
		"Monoprice": "https://www.monoprice.com/search/index?keyword={{query}}"
	},
	'aht': { // audio & home theater
		preferSearch: true,
		"Newegg": "https://www.newegg.com/p/pl?d={{query}}",
		"TigerDirect": "https://www.tigerdirect.com/applications/SearchTools/search.asp?keywords={{query}}",
		"Monoprice": "https://www.monoprice.com/search/index?keyword={{query}}"
	},
	'pc': {
		"Newegg": "https://www.newegg.com/p/pl?d={{query}}",
		"TigerDirect": "https://www.tigerdirect.com/applications/SearchTools/search.asp?keywords={{query}}",
		"Monoprice": "https://www.monoprice.com/search/index?keyword={{query}}"
	},
	'videogames': {
		"GameStop": "https://www.gamestop.com/search/?q={{query}}"
	},
	'home-garden': {
		"Bed Bath & Beyond": "https://www.bedbathandbeyond.com/store/s/{{query}}"
	},
	'kitchen': {
		"Bed Bath & Beyond": "https://www.bedbathandbeyond.com/store/s/{{query}}"
	},
	"grocery": {
		"Thrive Market": "https://thrivemarket.com/search/results?filter%5Bsearch%5D={{query}}"
	},
	'*': {
		"Target": "https://www.target.com/s?searchTerm={{query}}"
	}
}
