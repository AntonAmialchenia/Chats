import axios from "axios";
import { URLS } from "../../constants/urls";
import { ChatList } from "../../interfaces";

export const getChatList = async () => {
  const { data } = await axios.get<{ response: ChatList[] }>(URLS.CHATS, {
    headers: { version: "0.0" },
  });

  return data.response;
};
