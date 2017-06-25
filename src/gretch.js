const baseUrl = "https://gretch.io";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

class Gretch {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  fetch(url) {
    return fetch(`${baseUrl}/?url=${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-GRETCH-API-KEY": this.apiKey
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err));
  }
}

export default Gretch;
