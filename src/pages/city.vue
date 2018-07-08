<template>
        <div class="city_container">
          <head-top go-back="true" :head-title="cityname">
              <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
          </head-top>
          <form action="" class="city_form" v-on:submit.prevent>
              <div>
                  <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model="inputValue">
              </div>
              <div>
                  <input type="submit"name="submit" class="city_submit input_style" @click="postpois" value="提交">
              </div>
          </form>
          <ul class="getpois_ul">
                <li v-for="(item, index) in placelist" :key="index" @click="nextpage(index, item.geohash)">
                  <h4 class="pois_name ellipsis">{{item.name}}</h4>
                  <p class="pois_address ellipsis">{{item.address}}</p>
                </li>
              </ul>          
          <div class="search_none_place" v-if="!placelist.length">很抱歉，无结果</div>
        </div>
        </template>
        <script>
        import headTop from '@/components/headTop'
        import {currentcity, searchplace} from '@/api/getData'
        export default {
          components: {
            'head-top': headTop
          },
          data () {
            return {
              cityid: '',
              cityname: '',
              inputValue: '',
              placelist: []
            }
          },
          async mounted () {
            this.cityid = this.$route.params.cityid
            const data = await currentcity(this.cityid)
            this.cityname = data.data.name
          },
         methods: {
             nextpage (index,geohash) {
                 console.log(index,geohash)
                 this.$router.push({
                     path: '/msite',
                     query: {
                         geohash
                     }
                 })
             },
             async postpois() {
                 if(this.inputValue) {
                      this.placelist = await  searchplace(this.cityid,this.inputValue)
                    //  console.log(data);
                   
                 }
             }
         }
        }
        </script>
        <style lang="stylus">
        @import '../style/mixin';
        .city_container
            padding-top 2.3rem
        .change_city
            right 0.4rem
            sc(0.6rem,#fff)
            ct()

        </style>
        