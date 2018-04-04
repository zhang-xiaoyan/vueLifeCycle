<template>
	<section>
		<div>首页</div>
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

</style>
