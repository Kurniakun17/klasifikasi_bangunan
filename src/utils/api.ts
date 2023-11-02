import axios from "axios"

export const submitData = async (body: FormData) => {
  const response = await axios.post('http://localhost:8080/predict_image', body,  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}