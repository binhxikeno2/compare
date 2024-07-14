import { ConfigProvider, ThemeConfig } from 'antd';

import { RenderEmpty } from '@/components';

type AntdConfigProps = {
  children: React.ReactElement;
};

export const AntdConfig = ({ children }: AntdConfigProps) => {
  const theme: ThemeConfig = {
    components: {
      Input: {
        controlHeight: 40,
      },
      Select: {
        controlHeight: 40,
      },
    },
  };

  return (
    <ConfigProvider theme={theme} renderEmpty={RenderEmpty}>
      {children}
    </ConfigProvider>
  );
};
