# Imps Element Fullscreen

A vue js directive that can easily move to element fullscreen view. Available for vue2 and vue3 both

[![N|Solid](https://www.iampapaisarkar.in/powered-by.svg)](https://www.iampapaisarkar.in)

[![N|Solid](https://www.iampapaisarkar.in/hire-me.svg)](https://www.upwork.com/freelancers/~01b68508e481c72291)

## Documentation
see documentation [here](https://www.iampapaisarkar.in/npm-packages.html#element-fullscreen)

## installation
### Vue2
```sh
npm i imps-element-fullscreen --tag=v2
```
### Vue3
```sh
npm i imps-element-fullscreen --tag=v3
```
## Usage

```vue
#Vue 2 
// import and use in your main.js file

import Vue from 'vue'
import App from './App.vue'
import ImpsElementFullscreen from './imps-element-fullscreen'

Vue.use(ImpsElementFullscreen);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

```vue
// use on vue components 

<template>
  <div id="app">
    <div style="padding: 50px; border: 1px solid red; background-color: yellow;">
      <button type="button" @click="fullscreen">{{ isFullscreen ? 'Windowed' : 'Fullscreen'}}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      isFullscreen: false
    }
  },
  methods:{
    fullscreen(e){
      const target = e.target.parentNode
      this.$elementFullscreen(target)
      .then((response) => {
        this.isFullscreen = response;
      })
      .catch((error) => {
        console.error("Fullscreen activation failed:", error);
      });
    }
  }
}
</script>

```

```vue
#Vue 3 
// import and use in your main.js file

import { createApp } from 'vue';
import App from './App.vue';
import ImpsElementFullscreen from 'imps-element-fullscreen';

const app = createApp(App);

// Install the plugin globally
app.use(ImpsElementFullscreen);

app.mount('#app');
```

```vue
// use on vue components (composition api)

<template>
  <div>
    <div style="padding: 50px; border: 1px solid red; background-color: yellow;">
      <button type="button" @click="fullscreen">{{ isFullscreen ? 'Windowed' : 'Fullscreen'}}</button>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance  } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance();
    const elementFullscreen = app.appContext.config.globalProperties.$elementFullscreen;
    const isFullscreen = ref(false);

    const fullscreen = (e) => {
      const target = e.target.parentNode
      elementFullscreen(target)
      .then((response) => {
        isFullscreen.value = response;
      })
      .catch((error) => {
        console.error("Fullscreen activation failed:", error);
      });
    };

    return {
      isFullscreen,
      fullscreen
    };
  },
};
</script>

```
## License

[MIT](https://choosealicense.com/licenses/mit/)