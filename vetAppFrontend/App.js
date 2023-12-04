import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentsScreen from './AppointmentsScreen';
import AddAppointmentScreen from './AddAppointmentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="AddAppointment" component={AddAppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
