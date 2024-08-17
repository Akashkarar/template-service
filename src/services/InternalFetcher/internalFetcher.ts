type methods = "POST" | "GET";

export const internalFetcher = async (
  url: string,
  payload: object,
  methods: methods = "POST"
) => {
  const api_token = "Bv6rZ0i-qeLsXg-Qum9K52f8PKDRvMxQeO2m7zFumu8";
  const baseURL = new URL(import.meta.env.VITE_API_URL ?? "");
  const response = await fetch(new URL(url, baseURL as URL).href, {
    method: methods ?? "POST",
    body: JSON.stringify(payload),
    headers: new Headers({
      "x-api-key": `${api_token}`,
      "x-client-token": `${import.meta.env.VITE_API_CLIENT_TOKEN}`,
      "Content-Type": "application/json",
    }),
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  }
  throw result;
};
