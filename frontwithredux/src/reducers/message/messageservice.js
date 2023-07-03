import axios from "axios";
import { host } from "../../utils/apiroutes";
import { useNavigate } from "react-router-dom";

const getallmessages = async (data) => {
  const response = await axios.post(`${host}/api/msg/getmsg`,data);
  return response.data;
};
const sendmessages = async (msgdata) => {
  const response = await axios.post(`${host}/api/msg/addmsg`, msgdata);
  return response.data;
};

const msgService = { getallmessages, sendmessages };

export default msgService;
