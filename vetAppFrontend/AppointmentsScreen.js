import React from 'react';
import { View, Text, Button } from 'react-native';

const AppointmentsScreen = ({ navigation }) => {
  // Fetch and display appointments data from the backend

  return (
    <View>
      <Text>Appointments Screen</Text>
      {/* Display appointments */}
      <Button title="Add Appointment" onPress={() => navigation.navigate('AddAppointment')} />
    </View>
  );
};

export default AppointmentsScreen;
