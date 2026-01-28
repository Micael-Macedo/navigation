import {
    createBottomTabNavigator,
    BottomTabScreenProps
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type BottomRouteList = {
    home: undefined,
    product: undefined | { id: string },
}

export type BottomRouteProps<T extends keyof BottomRouteList> = BottomTabScreenProps<BottomRouteList, T>

const Tab = createBottomTabNavigator<BottomRouteList>();

export function BottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "#444444",
                tabBarLabelPosition: 'beside-icon'
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color, size }) =>
                        <MaterialIcons name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarLabel: "Produtos",
                    tabBarIcon: ({ color, size }) =>
                        <MaterialIcons name="add-box" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}