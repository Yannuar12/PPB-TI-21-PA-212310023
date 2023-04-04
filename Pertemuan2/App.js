import { ImageBackground, ScrollView, Text, View } from 'react-native';
import Bicycle from './Components/Bicycle';
import Car from './Components/Car';
import Motorcycle from './Components/Motorcycle';
import Student from './components/Student';



export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* <Student /> */}
      <Student />
    </ScrollView>
  );
};