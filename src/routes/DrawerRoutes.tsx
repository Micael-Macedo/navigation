import {
    createDrawerNavigator,
    DrawerScreenProps
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type DrawerRouteList = {
    home: undefined,
    product: undefined | { id: string },
}

export type DrawerRouteProps<T extends keyof DrawerRouteList> = DrawerScreenProps<DrawerRouteList, T>

const Drawer = createDrawerNavigator<DrawerRouteList>();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: "red",
                drawerInactiveTintColor: "#444444",
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: "Início",
                    drawerIcon: ({ color, size }) =>
                        <MaterialIcons name="home" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerLabel: "Produtos",
                    drawerIcon: ({ color, size }) =>
                        <MaterialIcons name="add-box" size={size} color={color} />
                }}
            />
        </Drawer.Navigator>
    )
}