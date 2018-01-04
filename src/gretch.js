const baseUrl = "https://api.gretch.io";

const defaultHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

class Gretch {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  checkStatus(response) {
    if (!response.ok) {
      throw Error(`[Gretch] ${response.statusText}`);
    }
    return response
  }
  fetch(url) {
    return fetch(`${baseUrl}/fetch?url=${url}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-GRETCH-API-KEY": this.apiKey
      }
    })
    .then(this.checkStatus)
    .then(response => {
      return response.json()
    })
  }
}

export default Gretch;
