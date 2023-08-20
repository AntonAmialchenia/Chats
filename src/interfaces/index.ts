export interface Icon {
  className?: string;
}

export interface ChatList {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  private: boolean;
  last_message: LastMessage;
  users: User[];
  count_unread: number;
}

export interface LastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
}
