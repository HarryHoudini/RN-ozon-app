import { Box, Heading, View, Image, Text, Button, SimpleGrid } from "native-base";
import React from "react";
import { products } from "../../data/product";

const Main = () => {
    return (
        <Box style={{ marginTop: 10, padding: 5 }}>
            <Heading size="lg" color="#111">
                Успей купить
            </Heading>
            <View style={{ marginTop: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {products.map((product, idx) => (
                    <Box key={`${product.name} ${idx}`} style={{ marginBottom: 10, width: '26%' }} mx={2}>
                        <Image
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg",
                            }}
                            resizeMode="cover"
                            alt={product.name}
                            size="xl"
                        />
                        <Text>{product.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</Text>
                        <Text style={{fontSize: 14, height: 40}}>{product.name}</Text>
                        <Box
                            style={{
                                backgroundColor: "#00A0FF",
                                borderRadius: 8,
                                marginTop: 20,
                                width: 102,
                                alignItems: "center",
                            }}
                            px={1.5}
                            py={1.5}
                        >
                            <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>В корзину</Text>
                        </Box>
                    </Box>
                ))}
            </View>
        </Box>
    );
};

export default Main;
