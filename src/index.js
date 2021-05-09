import VueEditorChief from "./components/VueEditorChief.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-editor-chief", VueEditorChief);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

VueEditorChief.install = install;

export default VueEditorChief;
