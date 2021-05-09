# vue-editor-in-chief

## Demo

![Demo](./src/assets/demo.gif)

#### [Codesandbox Example](https://codesandbox.io/s/vue-editor-chief-demo-7kyi9?file=/src/main.js)
## Installation

```
npm install --save vue-editor-in-chief
```

or

```
yarn add vue-editor-in-chief
```

## Declaration

#### Global Import (In main.js file)

```
import VueEditorChief from "vue-editor-in-chief";
import "vue-editor-in-chief/dist/vue-editor-in-chief.css";
Vue.component("VueEditorChief", VueEditorChief);
```

#### Local Import (In any component)

```
<script>
import VueEditorChief from "vue-editor-in-chief";
import "vue-editor-in-chief/dist/vue-editor-in-chief.css";

export default {
  name: "HelloWorld"
  components: {
    VueEditorChief
  }
}
<script>
```

## Basic Usage

#### Example-1

```
<VueEditorChief
  :config="{
    text: 'Hello Input',
    placeholder: 'Type inside input...',
    background: '#D3D3D3',
    family: 'cursive',
    size: 'medium',
    color: '#000000',
    bold: true,
    italic: false,
    width: 300,
    borderColor: '#D3D3D3'
  }"
></VueEditorChief>

```

#### Example-2

```
<VueEditorChief
  :config="{
    type: 'textarea',
    text: 'Hello Textarea',
    placeholder: 'Type inside textarea...',
    background: '#1A76D2',
    family: 'sans-serif',
    size: 'large',
    color: '#000000',
    bold: true,
    italic: true,
    width: 300,
    borderColor: '#1A76D2'
  }"
></VueEditorChief>
```

## Properties

- `config`

  - **Type** - Object
  - **Required** - Yes
  - **Description** - This prop is going to have all values of edit properties.
  - **Properties** -
    | Name | Type | Required | Description | Support Values |
    | ---- | ---- |--------- |------------ |--------------- |
    | text | String/Null | Yes | The text to display. | any string|
    | type | String | No | The type of the text field. | "input", "textarea"|
    | placeholder | String/Null | No | The placeholder for the text box. | any string|
    | bold | Boolean | No | To bold the text. | true/false |
    | italic | Boolean | No | To italic the text. | true/false |
    | color | String/Null | No | To change the color of the text. | any hex color value |
    | background | String/Null | No | To change the color of the text box. | any hex color value |
    | size | String/Null | No | To change the font size of the text. | "xx-small","x-small","small","medium","large","x-large","xx-large","xxx-large","smaller","larger","inherit","initial","unset", |
    | family | String/Null | No | To change the font family of the text. | "serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","emoji","math","fangsong" |
    | width | String/Number | No | To change the width of the text box. | 300 or "300" |
    | borderColor | String | No | To change the border color of the text box. | any hex color value |
