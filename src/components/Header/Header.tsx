import { HStack, View } from "native-base";
import React from "react";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";

function Header() {
    return (
        <View style={{ backgroundColor: "#17191D", padding: 15, paddingTop: "7%", alignItems: "center" }}>
            <HStack space={3} justifyContent="space-between" alignItems="center">
                <Search />
                <Notification />
            </HStack>
        </View>
    );
}

export default Header;
