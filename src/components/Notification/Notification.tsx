import { Icon, View, useColorModeValue, Box } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

function Notification() {
    return (
        <Box mr="1" style={{ position: "relative" }}>
            <MaterialIcons name="notifications-none" color="#fff" size={35} />
            <Box
                style={{
                    position: "absolute",
                    top: 0,
                    right: -3,
                    backgroundColor: "#E4304E",
                    borderRadius: 10,
                    padding: 1,
                    paddingRight: 5,
                    paddingLeft: 5,
                }}
                _text={{ color: "white", fontSize: 11, fontWeight: 'bold' }}
            >
                99
            </Box>
        </Box>
    );
}

export default Notification;
