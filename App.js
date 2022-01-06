import ScreenNavigations from './src/router/Customer/ScreenNavigations';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <ScreenNavigations/>;
  }

  
}