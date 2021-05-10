<template>
	<div id="app">
		<div v-for="(item, index) in items" :key="index" class="container-div">
			<h1>{{ item.type }}</h1>
			<VueEditorChief :config="item"></VueEditorChief>
		</div>
	</div>
</template>

<script>
import VueEditorChief from "@/components/VueEditorChief";

export default {
	name: "App",

	data() {
		return {
			items: [
				{
					text: "Hello Input",
					type: "input",
					background: null,
					family: null,
					size: null,
					color: null,
					bold: false,
					italic: false,
					width: "500",
					borderColor: "#000000",
				},
				{
					type: "textarea",
					text: "Hello Textarea",
					background: null,
					family: null,
					size: null,
					color: null,
					bold: false,
					italic: false,
					width: "400",
					borderColor: "#000000",
				},
			],
		};
	},

	components: {
		VueEditorChief,
	},
};
</script>

<style scoped>
#app {
	text-align: center;
}
.container-div {
	margin-top: 70px;
	text-transform: capitalize;
}
</style>
