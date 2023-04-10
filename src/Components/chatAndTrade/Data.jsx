import axios from "axios";

export const fetchData = async (input: any,API_KEY: string) => {
  const response = await axios.post("https://api.openai.com/v1/completions",input,{headers: {"Content-Type": "application/json","Authorization": `Bearer ${API_KEY}`},});
  return response.data.choices[0].text;
};
