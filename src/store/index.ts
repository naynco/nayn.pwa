import Vue from "vue"
import Vuex, { StoreOptions, MutationTree } from "vuex"

import { entries } from "./entries"
import { feeds } from "./feeds"
import { RootState } from "./types"
import * as types from "./mutation-types"

Vue.use(Vuex)

const state: RootState = {
  isLoading: false
}
const getters = {}

const mutations: MutationTree<RootState> = {
  [types.SET_LOADING](state: RootState, isLoading: boolean) {
    state.isLoading = isLoading || !state.isLoading
  }
}

const actions = {}

export const options: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
  modules: {
    entries,
    feeds
  }
}
const store = new Vuex.Store<RootState>(options)
export default store
