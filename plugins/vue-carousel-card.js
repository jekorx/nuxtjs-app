import Vue from 'vue'
import {
  CarouselCard,
  CarouselCardItem
} from 'vue-carousel-card'

export default () => {
  Vue.component(CarouselCard.name, CarouselCard)
  Vue.component(CarouselCardItem.name, CarouselCardItem)
}
