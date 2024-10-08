export const generateTemplate: React.FormEventHandler<HTMLFormElement> = async (
  data
) => {
  const response = await fetch(
    `${process.env.REACT_APP_YOUR_VARIABLE_NAME}/generate`,
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
