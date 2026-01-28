import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

//Informa todas as rotas disponiveis no app
export function Routes(){
    return (
    <NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>
    )
}