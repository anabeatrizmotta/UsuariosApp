import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View>
            <Image source={require('')}></Image>
            <View style={styles.star}></View>
            <Text>Teste</Text>
        </View>
    )
}