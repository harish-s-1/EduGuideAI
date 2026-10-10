export const api = {
  async get(url: string) {
    return fetch(url, { method: 'GET' });
  },
  async post(url: string, body?: unknown) {
    return fetch(url, {
      method: 'POST',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  }
};
