import { createContext } from "react";
import { message } from "antd";

export const MessageContext = createContext();

export function MessageContextWrapper({ children }) {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
}
