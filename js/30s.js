var flag = true
var love = 0

function newgame() {
	var timer = 0;
	if(flag) {
		love = 0
		$('#heart').addClass('animated infinite pulse')
		$('#heart').css('color', 'red')
		$('#msg').html("I Miss U!")
		$('#msg2').html("")
		timer = setInterval(function(){love ++;}, 1);
		flag = false;
	} else {
		$('#heart').removeClass('animated infinite pulse')
		clearInterval(timer)
		miss = love - 30000;
		console.log(miss);
		if(Math.abs(miss) <= 100){
			$('#msg').html("❤❤❤❤❤")
			$('#msg2').html("恭喜你！离30s只差了" + miss + "毫秒。")
		} else if(Math.abs(miss) > 100 && Math.abs(miss) <= 1000 ){
			$('#msg').html("❤❤❤❤")
			$('#msg2').html("真可惜！离30s还差了" + miss + "毫秒。")
		} else if(Math.abs(miss) > 1000 && Math.abs(miss) <= 3000 ){
			$('#msg').html("❤❤❤")
			$('#msg2').html("QAQ！离30s还差了" + parseInt(Math.abs(miss)/60) + "秒。")
		} else if(Math.abs(miss) > 3000 && Math.abs(miss) <= 5000 ){
			$('#msg').html("❤❤")
			$('#msg2').html("Orz！离30s还差了" + parseInt(Math.abs(miss)/60) + "秒。")
		} else if(Math.abs(miss) > 5000){
			$('#msg').html("❤")
			$('#msg2').html("一点时间观念都没有:-(！离30s还差了" + parseInt(Math.abs(miss)/1000) + "秒。")
		}
		flag = true;
	}
}