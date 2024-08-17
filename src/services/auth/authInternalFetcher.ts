type methods = "POST" | "GET";

export const authenticationInternalFetcher = async (
  url: string,
  payload: object,
  methods: methods = "POST"
) => {
  console.log(payload);
  const baseURL = new URL(import.meta.env.VITE_API_URL ?? "");
  const response = await fetch(new URL(url, baseURL as URL).href, {
    method: methods ?? "POST",
    body: JSON.stringify({ username: "testuser991", password: "secret99" }),
    headers: new Headers({
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
