import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/SignIn';
import MainTab from '../stacks/MainTab';
import CardRegister from '../screens/Mapping/CardRegister';
import Chat from '../screens/Dashboard/Concierge/containers/Chat';
import Expectations from '../screens/Dashboard/Travel/containers/Expectations';
import Objective from '../screens/Dashboard/Travel/containers/Objective';
import Preferences from '../screens/Dashboard/Travel/containers/Preferences';
import Schedule from '../screens/Dashboard/Travel/containers/Schedule';

const App = createStackNavigator();

// function AuthRoutes() {
//   return (
//     <App.Navigator screenOptions={{ headerShown: false }}>
//       <App.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//     </App.Navigator>
//   );
// }

function AppRoutes() {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <App.Screen name="Schedule" component={Schedule} />
      <App.Screen name="Preferences" component={Preferences} />
      <App.Screen name="Objective" component={Objective} />
      <App.Screen name="Expectations" component={Expectations} />
      <App.Screen name="MainTab" component={MainTab} />
      <App.Screen name="CardRegister" component={CardRegister} />
      <App.Screen name="Chat" component={Chat} />
    </App.Navigator>
  );
}

export default function Routes() {
  // const signedIn = useSelector((state) => state.user.signed);

  // return signedIn ? AppRoutes() : AuthRoutes();
  return AppRoutes();

}
