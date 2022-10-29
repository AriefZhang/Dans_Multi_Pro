const { Chart } = require("../models");
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

class Charts {
  static async getJobAPI(req, res) {
    let API_URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"

    const options = {
      method: 'GET',
    }
    try {
      const { description, location, full_time, page } = req.body
      const pageQuery = page ? page : 1

      API_URL = API_URL + `?page=${pageQuery}`
      API_URL = description ? API_URL + `&description=${description}` : API_URL + ''
      API_URL = location ? API_URL + `&location=${location}` : API_URL + ''
      API_URL = full_time ? API_URL + `&full_time=${full_time}` : API_URL + ''

      let resp = await fetch(API_URL, options)
      let data = await resp.json()

      res.status(200).json(data);
    } catch (err) {
      console.error(err)
    }
  }

  static async getJobAPIById(req, res) {
    let API_URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions/"

    const options = {
      method: 'GET',
    }
    try {
      const { id } = req.params

      API_URL = API_URL + id

      let resp = await fetch(API_URL, options)
      let data = await resp.json()

      res.status(200).json(data);
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Charts;
