import { Center, HStack, View, Text, Box } from "native-base";
import React from "react";
import { footerItems } from "./footerItems";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                padding: 15,
                paddingTop: 5,
                borderTopWidth: 1,
                borderTopColor: "#B3B3B3",
            }}
        >
            <HStack alignItems="center" justifyContent="space-between">
                {footerItems.map((item, idx) => {
                    return (
                        <View
                            style={{ position: "relative", justifyContent: "center", alignItems: "center" }}
                            key={`footer ${idx}`}
                        >
                            {idx === 2 && (
                                <Box
                                    style={{
                                        position: "absolute",
                                        backgroundColor: "#4EBB62",
                                        top: 0,
                                        right: 0,
                                        borderRadius: 10,
                                        margin: 2,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        zIndex: 1,
                                    }}
                                    key={`footer ${idx}`}
                                    _text={{ color: "white", fontWeight: "bold", fontSize: "12" }}
                                >
                                    10
                                </Box>
                            )}
                            <MaterialIcons name={item.icon} size={34} color={idx === 0 ? "blue" : "#525D6F"} />
                            <Text style={{ fontSize: 14, color: idx === 0 ? "blue" : "#525D6F" }}>{item.title}</Text>
                        </View>
                    );
                })}
            </HStack>
        </View>
    );
};

export default Footer;
