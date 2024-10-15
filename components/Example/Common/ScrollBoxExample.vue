<template>
	<div v-if="partners">
		<CaseTitle>ScrollBox</CaseTitle>
		<ScrollBox
			id="partner-marquee-1"
			:speed="100000"
			:width="160"
			:height="160"
			:space="20"
		>
			<div
				class="w-240px h-240px bg-white border-1px border-gray/5 border-solid flex-shrink-0 inline-block <lg:(w-160px h-160px)"
				v-for="item in partners[0]"
			>
				<div class="w-full h-full flex-center">
					<img :src="item.imgUrl" alt="" />
				</div>
			</div>
		</ScrollBox>
		<ScrollBox
			class="mt-20px"
			id="partner-marquee-2"
			:speed="80000"
			:width="160"
			:height="160"
			:space="20"
		>
			<div
				class="w-240px h-240px bg-white border-1px border-gray/5 border-solid flex-shrink-0 inline-block <lg:(w-160px h-160px)"
				v-for="item in partners[1]"
			>
				<div class="w-full h-full flex-center">
					<img :src="item.imgUrl" alt="" />
				</div>
			</div>
		</ScrollBox>
	</div>
</template>

<script setup lang="ts">
import { componentApi } from '@/data'

const { data: partners } = await useAsyncData(() => componentApi.ScrollBoxExampleApi.getPartners());
</script>
