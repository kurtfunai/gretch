const baseUrl = "https://api.gretch.io";

class Gretch {
  constructor(apiKey) {
    this.apiKey = apiKey;
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
    .then(response => {
      if (!response.ok) {
        throw Error(`[Gretch] ${response.statusText}`);
      }
      return response
    })
    .then(response => response.json())
  }
}

export default Gretch;
