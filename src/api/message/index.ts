import axios from "axios";
import { URLS } from "../../constants/urls";
import { Message } from "../../interfaces";

export const getMessage = async (id: string) => {
  const { data } = await axios.get<{ response: Message[] }>(
    URLS.MESSAGES + `?chat_id=${id}&limit=20`,
    {
      headers: { version: "0.0" },
    },
  );

  return data.response;
};
