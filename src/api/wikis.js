const API_BASE = "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

export function fetchWikis() {
  return request("/wikis");
}

export function fetchWiki(id) {
  return request(`/wikis/${id}`);
}

export function createWiki(wiki) {
  return request("/wikis", {
    method: "POST",
    body: JSON.stringify(wiki)
  });
}

export function updateWiki(id, wiki) {
  return request(`/wikis/${id}`, {
    method: "PUT",
    body: JSON.stringify(wiki)
  });
}

export function deleteWiki(id) {
  return request(`/wikis/${id}`, {
    method: "DELETE"
  });
}
