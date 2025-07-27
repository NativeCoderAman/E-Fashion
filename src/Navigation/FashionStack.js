import { createStackNavigator } from "@react-navigation/stack";
import FashionHome from "../Screens/FashionHome";
import FashionService from "../Screens/FashionService";

const Stack = createStackNavigator();

export default function FashionStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FashionHome" component={FashionHome} />
      <Stack.Screen name="FashionService" component={FashionService} />
    </Stack.Navigator>
  );
}
