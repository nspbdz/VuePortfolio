import Api from '@/Api/api.js'

export default ({ $axios }, inject) => {
  Api.$axios = $axios
  inject('Api', Api)
}
