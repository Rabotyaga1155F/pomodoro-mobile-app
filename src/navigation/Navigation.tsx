import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './routes.ts';
import {TypeRootStackParamList} from './navigation.types.ts';

export default function Navigation() {
  const Stack = createNativeStackNavigator<TypeRootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {routes.map(page => (
          <Stack.Screen
            key={page.name}
            name={page.name}
            component={page.component}
            options={page.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
