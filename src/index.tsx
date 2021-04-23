import React from 'react';
import App from './routes';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

interface Props {}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
  },
};

const Src: React.FC<Props> = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

export default Src;
