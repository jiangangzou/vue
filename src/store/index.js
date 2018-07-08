import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    latitude: '',
    longitude: '',
    cartList: {},
    userInfo: null,
    shopId: null,
    products: [],
    shopDetail: null

}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})