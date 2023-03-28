import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Profile  from './src/pages/profile/profile';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <NavigationContainer ref={Home}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Perfil" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}