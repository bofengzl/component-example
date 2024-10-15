<template>
	<Body :lang="locale">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Body>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();
</script>

<style lang="less">

</style>
