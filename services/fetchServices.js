import Api from '~/Api/api.js'

class FetchServices {

async getFetch(payload) {
    return await Api.doGet('anime?q='+payload.search, payload)
      .then((res) => res)
      .catch((err) => err)
  }

  // https://api.jikan.moe/v4/genres/anime
  // https://api.jikan.moe/v4/top/anime
  async getCarousel(payload) {
    return await Api.doGet('top/anime', payload)
      .then((res) => res)
      .catch((err) => err)
  }
}

export default new FetchServices()
