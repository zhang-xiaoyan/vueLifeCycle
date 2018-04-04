<template>
		<section class="hotel_wrap">
			<transition name="tfade" mode="out-in">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"></router-view>
				</keep-alive>
			</transition>

			<!-- <transition name="fade" mode="out-in"> -->
			<router-view v-if="!$route.meta.keepAlive"></router-view>
			<!-- </transition> -->
		</section>

</template>

<script>
	export default {
    name: 'app',
    data(){
    	return{
    		// 'msg' :　'苍天已死，黄天当立，岁在甲子，天下大吉'
      }
    },
    created(){
      if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
	.hotel_wrap{
		height: 100%;
	}
  .tfade-enter-active, .tfade-leave-active {
      transition: opacity .1s;
  }
  .tfade-enter, .tfade-leave-active {
      opacity: 0;
  }
</style>
