import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProvedorUsuario } from "./data/contexts/ContextoUsuario";
import { ProvedorAgendamento } from "./data/contexts/ContextoAgendamento";
import Cadastro from "./screens/Cadastro";
import Principal from "./screens/Principal";
import Sumario from "./screens/Sumario";
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorUsuario>
      <ProvedorAgendamento>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sumario"
            component={Sumario}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </ProvedorAgendamento>
    </ProvedorUsuario>
  );
}
