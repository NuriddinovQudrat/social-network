import React, { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";
import themeConfig from "configs/themeConfig";

interface CustomConfigProviderProps {
  children: ReactNode;
}

const CustomConfigProvider: FC<CustomConfigProviderProps> = ({ children }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default CustomConfigProvider;
