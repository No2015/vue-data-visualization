import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import ConfigFormItem from '@/components/other/ConfigFormItem.vue';
import ChartTitle from '@/components/charts/supplement/ChartTitle.vue';

import 'remixicon/fonts/remixicon.css';
import '@/assets/styles/element-override.scss';
import '@/assets/styles/chart-component.scss';

createApp(App as any)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'mini' })
  .component('ConfigFormItem', ConfigFormItem)
  .component('ChartTitle', ChartTitle)
  .mount('#app');
