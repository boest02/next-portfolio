import { extendTheme } from '@chakra-ui/react';

    const theme = extendTheme({
      config: {
        initialColorMode: 'light', // or 'dark'
        useSystemColorMode: false, // or true
      },
      // ... other theme customizations
    });

    export default theme;