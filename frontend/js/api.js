class API {
  constructor(baseUrl) {
    if (API.instance) {
      return API.instance;
    }

    this.baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
    };

    API.instance = this;
  }

  async sendRequest(method, path, data) {
    const url = this.baseUrl + path;

    const response = await fetch(url, {
      method,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    const responseData = await response.json();

    return responseData;
  }

  async create(resource, data) {
    return this.sendRequest("POST", resource, data);
  }

  async read(resource, id) {
    const path = id ? `${resource}/${id}` : resource;
    return this.sendRequest("GET", path);
  }

  async update(resource, id, data) {
    const path = `${resource}/${id}`;
    return this.sendRequest("PUT", path, data);
  }

  async delete(resource, id) {
    const path = `${resource}/${id}`;
    return this.sendRequest("DELETE", path);
  }
}

const api = new API("http://localhost:3000/api/v1/");
export default api;
