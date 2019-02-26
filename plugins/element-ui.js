import Vue from 'vue'
import {
  Alert,
  Badge,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Pagination,
  Tag
} from 'element-ui'

export default () => {
  // element-ui全局配置
  Vue.prototype.$ELEMENT = {
    size: 'small'
  }
  Vue.component('Alert', Alert)
  Vue.component('Badge', Badge)
  Vue.component('Button', Button)
  Vue.component('Dropdown', Dropdown)
  Vue.component('DropdownMenu', DropdownMenu)
  Vue.component('DropdownItem', DropdownItem)
  Vue.component('Form', Form)
  Vue.component('FormItem', FormItem)
  Vue.component('Input', Input)
  Vue.component('Menu', Menu)
  Vue.component('MenuItem', MenuItem)
  Vue.component('Pagination', Pagination)
  Vue.component('Tag', Tag)
}
