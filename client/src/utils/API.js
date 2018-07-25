import axios from "axios";

export default {
  // Gets articles from the NYT API
  getLocationData: function(googleId, location) {
    return axios.post("/api/location/" + location , { key: googleId });
  }
}