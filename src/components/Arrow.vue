<template>
    <div class="arrow">
<a href="/"><img src="@/assets/logoresonance.png" alt="resonance" ></a>

	</div>
</template>



<script>
export default {
    name:'Arrow'
}
</script>


<style>

/* arrow*/
.arrow{
	position: fixed;
	bottom: 25px;
	right: 25px;
	width: 40px;
	height: 40px;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
	background: transparent;
	border-radius: 50%;
	transition: width 0.5s, height 0.5s, transform 0.5s;
}

.arrow img{
	width: 40px;
	height: 40px;
	z-index: 1;
}
</style>
