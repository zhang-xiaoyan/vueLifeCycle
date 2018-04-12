<template>
	<section class="index_wrap">
		<div class="bg1">测试vConsole</div>
		<div class="bg1">{{timeText}}</div>
	</section>
</template>
<script>
	export default {
		data(){
			return{
				timeText: ''
			}
		},
		created(){
			this.testAjax();
			// 倒计时
			//let totalTime = '300'; // 60*5
			this.countdownTime();
		},
		methods:{
			testAjax(){
				this.$store.dispatch({
					type:'getRecentlyOrders'
				}).then((res) => {
					console.log('成功:', res);
				}).catch((err) => {
					console.log('失败:', err);
				});
			},
			countdownTime(){
				let nowTime = new Date();
				let endTime = new Date("2018/04/12, 16:32:20");
				let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
				//let d = parseInt(leftTime / (24 * 60 * 60));
				let h = parseInt(leftTime / (60 * 60) % 24);
				let m = parseInt(leftTime / 60 % 60);
				let s = parseInt(leftTime % 60);
				h = this.addZero(h);
				m = this.addZero(m);
				s = this.addZero(s);
				this.timeText = h + ":" + m + ":" + s;
				if(leftTime<=0){
					this.timeText = "活动已结束";
					return;
				}
				setTimeout(this.countdownTime, 1000);
			},
			addZero(i){
				if(i<10){
					i = "0" + i;
				}return i;
			}
		}
	}
</script>
<style lang="less" scoped>
.index_wrap{
	.bg1{
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.14rem;
		width: 2rem;
		background: green;
		color: white;
		text-align: center;
		margin: 0.2rem auto;
	}
}
</style>
