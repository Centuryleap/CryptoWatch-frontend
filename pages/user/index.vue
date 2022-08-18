<template>
	<div></div>
</template>

<script>
export default {
	middleware({ app, redirect }) {
		redirect(app.$signup("details"));
	}
}
</script>

<style>

</style>