import axios from "axios";

const fetchToken = async () => {
  const token = await axios.get("/api/token").then((res) => res.data);

  return token.message;
};

export default fetchToken;
