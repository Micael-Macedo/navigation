import { NavigationContainer } from "@react-navigation/native";
import { BottomRoutes } from "./BottomRoutes";

//Informa todas as rotas disponiveis no app
export function Routes(){
    return (
    <NavigationContainer>
        <BottomRoutes />
    </NavigationContainer>
    )
}