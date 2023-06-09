import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Transferencias from "./screens/Transferencias/Transferencias"


const Pilha = createStackNavigator()


export default function Routers({ navigation }) {
    return (
        <NavigationContainer>
            <Pilha.Navigator screenOptions={{ headerShown: false }}>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                />
                <Pilha.Screen
                    name="Transferencias"
                    component={Transferencias}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
