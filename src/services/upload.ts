export const uploadTemplate: React.FormEventHandler<HTMLFormElement> = async (
  data
) => {
  const response = await fetch(
    "https://ratnaafinuatcustomer.aiplservices.com/api/generate",
    {
      body: JSON.stringify(data),
      headers: {
        "x-api-key": "dqewe",
        "x-client-token": "dqewe",
      },
      method: "POST",
    }
  );
  const result = await response.json();
  if (result.ok) {
    console.log(result);
    return result;
  }
  return result;
};
