<template>
	<!-- Proceed only if user provide item prop, text property in item,
       a valid type or not provided any type at all
  -->
	<div
		class="dropdown-vec"
		v-if="
			item &&
				item.hasOwnProperty('text') &&
				((isTypeProvided && isValidType) || !isTypeProvided)
		"
	>
		<!-- Default text field type -->
		<input
			class="text-field-vec"
			v-if="!isTypeProvided || item.type == 'input'"
			v-model="item.text"
			:placeholder="placeholder"
			:style="styleObj"
		/>

		<!-- If user provides textarea option -->
		<textarea
			class="text-field-vec"
			rows="6"
			v-if="item.type == 'textarea'"
			v-model="item.text"
			:placeholder="placeholder"
			:style="styleObj"
		/>

		<!-- parent dropdown -->
		<div class="dropdown-content-vec">
			<!-- parent dropdown's features -->
			<div class="btn-group-vec">
				<!-- Background color -->
				<button
					v-if="item.hasOwnProperty('background')"
					class="sub-menu-btn-vec"
				>
					<div class="sub-menu-vec">
						<div
							v-for="(color, index) in COLORS"
							:key="index"
							:class="[
								'sub-menu-icons-vec',
								'colors-square-vec',
								{ 'highlight-border-vec': item.background == color },
							]"
							:style="{ background: color }"
							@click="item.background = color"
						></div>
					</div>
					<div
						class="sub-menu-btn-icon-vec colors-square-vec highlight-border-vec"
						:style="{ background: item.background }"
					></div>
				</button>

				<!-- Bold -->
				<button
					v-if="item.hasOwnProperty('bold')"
					@click="item.bold = !item.bold"
					:class="{ 'highlight-background-vec': item.bold }"
				>
					<span :class="[{ 'font-bold-vec': item.bold }]">B</span>
				</button>

				<!-- Italic -->
				<button
					v-if="item.hasOwnProperty('italic')"
					@click="item.italic = !item.italic"
					:class="{ 'highlight-background-vec': item.italic }"
				>
					<span :class="[{ 'font-bold-vec': item.bold }]">I</span>
				</button>

				<!-- Font Family -->
				<button v-if="item.hasOwnProperty('family')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(family, index) in FONT_FAMILIES"
							:key="index"
							:class="[
								'sub-menu-labels-vec',
								{ 'font-bold-vec': item.family == family },
							]"
							@click="item.family = family"
						>
							{{ family }}
						</div>
					</div>
					<span class="sub-menu-btn-icon-vec">
						F<span class="sub-script-vec">F</span>
					</span>
				</button>

				<!-- Font Size -->
				<button v-if="item.hasOwnProperty('size')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(size, index) in FONT_SIZES"
							:key="index"
							@click="item.size = size"
							:class="[
								'sub-menu-labels-vec',
								{ 'font-bold-vec': item.size == size },
							]"
						>
							{{ size }}
						</div>
					</div>
					<span class="sub-menu-btn-icon-vec"
						>T<span class="sub-script-vec">T</span></span
					>
				</button>

				<!-- Font Color -->
				<button v-if="item.hasOwnProperty('color')" class="sub-menu-btn-vec">
					<div class="sub-menu-vec">
						<div
							v-for="(color, index) in COLORS"
							:key="index"
							:class="[
								'sub-menu-icons-vec',
								'colors-square-vec',
								{ 'highlight-border-vec': item.color == color },
							]"
							:style="{ background: color }"
							@click="item.color = color"
						></div>
					</div>
					<span
						class="sub-menu-btn-icon-vec"
						:style="{ borderBottom: `3px solid ${item.color}` }"
						>A</span
					>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "VueEditorChief",

	data() {
		return {
			item: this.config ? this.config : null,

			COLORS: [
				"#F5F5F5",
				"#D3D3D3",
				"#BC8F8F",
				"#FFAC77",
				"#FFEB3B",
				"#FFC107",
				"#FB8C01",
				"#41BBB4",
				"#00FFFF",
				"#1A76D2",
				"#9C27B0",
				"#F587C7",
				"#E53935",
				"#FF6347",
				"#CDDC39",
				"#8BC34A",
				"#00FA9A",
				"#607D8B",
				"#795548",
				"#000000",
			],

			FONT_SIZES: [
				"xx-small",
				"x-small",
				"small",
				"medium",
				"large",
				"x-large",
				"xx-large",
				"xxx-large",
				"smaller",
				"larger",
				"inherit",
				"initial",
				"unset",
			],

			FONT_FAMILIES: [
				"serif",
				"sans-serif",
				"monospace",
				"cursive",
				"fantasy",
				"system-ui",
				"ui-serif",
				"ui-sans-serif",
				"ui-monospace",
				"ui-rounded",
				"emoji",
				"math",
				"fangsong",
			],
		};
	},

	props: {
		config: {
			type: Object,
		},
	},

	computed: {
		placeholder() {
			return this.item.placeholder
				? this.item.placeholder
				: "Type text here...";
		},

		isTypeProvided() {
			return this.item.hasOwnProperty("type");
		},

		isValidType() {
			return ["textarea", "input"].includes(this.item.type);
		},

		styleObj() {
			return {
				// font weight
				fontWeight:
					this.item.hasOwnProperty("bold") && this.item.bold ? "bold" : null,

				// font style
				fontStyle:
					this.item.hasOwnProperty("italic") && this.item.italic
						? "italic"
						: null,

				// color
				color: this.item.hasOwnProperty("color") ? this.item.color : null,

				// background
				background: this.item.hasOwnProperty("background")
					? this.item.background
					: null,

				// font size
				fontSize: this.item.hasOwnProperty("size") ? this.item.size : null,

				// font family
				fontFamily: this.item.hasOwnProperty("family")
					? this.item.family
					: null,

				// input box width
				width: this.item.hasOwnProperty("width")
					? `${this.item.width}px`
					: "250px",

				// input box border
				border: `1px solid ${
					this.item.borderColor ? this.item.borderColor : "lightgrey"
				}`,
			};
		},
	},
};
</script>

<style>
.text-field-vec {
	padding: 10px;
}
.text-field-vec:focus {
	outline: none;
}
.highlight-border-vec {
	border: 1px solid black;
}
.font-bold-vec {
	font-weight: bold;
}
.highlight-background-vec {
	background: #ededed !important;
}
.colors-square-vec {
	width: 10px;
	height: 10px;
	display: inline-block;
}
.sub-script-vec {
	vertical-align: sub;
	font-size: 13px;
}

/* parent dropdown */
.dropdown-vec {
	position: relative;
	display: inline-block;
}
.dropdown-content-vec {
	position: absolute;
	min-width: 160px;
	display: none;
	z-index: 10;
}
.dropdown-vec:hover .dropdown-content-vec {
	display: block;
}

/* btn group's buttons (inside parent dropdown) */
.btn-group-vec {
	width: 550px;
}
.btn-group-vec button {
	width: 90px;
	min-height: 62px;
	background-color: #fff;
	border: 1px solid lightgray;
	color: #000;
	font-size: 18px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	padding: 15px 8px;
	cursor: pointer;
	float: left;
	outline: none;
}
.btn-group-vec:after {
	content: "";
	clear: both;
	display: table;
}
.btn-group-vec button:not(:last-child) {
	border-right: none; /* Prevent double borders */
}

/* sub menus of any button */
.sub-menu-vec {
	display: none;
	width: 100%;
}
.sub-menu-btn-vec:hover .sub-menu-vec {
	display: block;
}
.sub-menu-btn-vec:hover .sub-menu-btn-icon-vec {
	display: none;
}
.sub-menu-labels-vec {
	padding-top: 10px;
	font-size: 13px;
}
.sub-menu-icons-vec {
	margin: 5px;
}
.sub-menu-labels-vec:hover {
	color: red;
}
</style>
