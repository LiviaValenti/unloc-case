import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Form from './components/Form/Form';
import { Flex } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#C4EE4D',
      primarydark: '#9BBD3B',
      secondary: '#375418',
      faded: '#ABB493',
      background: '#111407'
    },
  },
  fonts: {
    body: 'Source Sans Pro',
  },
});

function App() {
  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <ChakraProvider theme={theme}>
        <Form />
      </ChakraProvider>
    </Flex>
  );
}

export default App;
