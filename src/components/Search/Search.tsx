import React from "react";
import { Box, Icon, Input, useColorModeValue } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function Search() {
    return (
        <Box w="80%" style={{ backgroundColor: "#fff", borderRadius: 20 }}>
            <Input
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="search" />}
                        size={"md"}
                        ml="2"
                        mr="-2"
                        color={useColorModeValue("black", "gray.300")}
                    />
                }
                InputRightElement={
                    <Icon
                        as={<MaterialIcons name="qr-code-scanner" size={24} color="black" />}
                        size="md"
                        m="2"
                        color={useColorModeValue("black", "gray.300")}
                    />
                }
                placeholder="Искать на Ozon"
                placeholderTextColor="#525D6F"
                variant="rounded"
            />
        </Box>
    );
}

export default Search;
