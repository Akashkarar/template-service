export const generateTemplate: React.FormEventHandler<HTMLFormElement> = async (
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
  console.log(response.json())
  if(response.ok){

    return response
  }
};
