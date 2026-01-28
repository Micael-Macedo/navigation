import { View } from "react-native";

import { BottomRouteProps } from "@/routes/BottomRoutes";

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Title from "@/components/Title";

export function Product({navigation, route }: BottomRouteProps<'product'>) {

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => {navigation.goBack()}} />
                <Title>Product {route.params?.id}</Title>
            </Header>
        </View>
    )
};
