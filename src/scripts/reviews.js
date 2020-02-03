import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

new Vue ({
  el: "#reviews-component",
  template: "#reviews",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      reviews: [],
      swiperOption: {
        navigation: {
          nextEl: ".reviews__btn_next",
          prevEl: ".reviews__btn_prev"
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0
      }
    }
  },
  methods: {
    arrWithRequiredImage(data) {
      return data.map(item => {
        const requireImg = require(`../images/content/${item.photo}`);
        item.photo = requireImg;
        return item;
      });
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.arrWithRequiredImage(data);
  }
});