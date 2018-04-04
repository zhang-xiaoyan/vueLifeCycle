<template>
	<section class="index_wrap">
		<div class="bg1">测试vConsole</div>
	</section>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		created(){
			this.$store.dispatch({
				type:'getRecentlyOrders'
			}).then((res) => {
				console.log('测试axios成功:', res);
			}).catch((err) => {
				console.log('测试axios失败:', err);
			});
		}
	}
</script>
<style lang="less" scoped>
.index_wrap{
	.bg1{
		height: 0.4rem;
		line-height: 0.4rem;
		width: 2rem;
		background: green;
		color: white;
		text-align: center;
		margin: 0.2rem auto;
	}
}
</style>
