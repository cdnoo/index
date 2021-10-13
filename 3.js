//低
var randoms = {
	ads_codes: ['<script type="text/javascript" src="https://agathaedith.com:22559/szsisskota/yiwir1ndc0zujpmx4pvmx/336/yiwir"><'+'/script>','<script type="text/javascript" src="https://teresacd.cn/mocjwhsnvs/jqgvg1olg0xzklfi4gwun/1591/jqgvg"><'+'/script>                                                            ','<script src="https://j8.njaeqjx.com/22bfcb52b1.j8"><'+'/script>'],
	ads_weight: [10,10,10],

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

//小
//顶
//tj
document.write(unescape("%3Cspan id='cnzz_stat_icon_1280238316'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1280238316' type='text/javascript'%3E%3C/script%3E"));
