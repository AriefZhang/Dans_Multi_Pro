const axios = require("axios")

const recruitment = axios.create({
  baseURL: "http://dev3.dansmultipro.co.id/api/recruitment/"
})

module.exports = recruitment