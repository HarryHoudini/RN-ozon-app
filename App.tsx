import React from "react";
import { Box, Button, Center, NativeBaseProvider, ScrollView, View } from "native-base";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import Main from "./src/components/Main/Main";

export default function App() {
    return (
        <NativeBaseProvider>
            <View
                style={{
                    flex: 1,
                }}
            >
                <ScrollView>
                    <Header />
                    <Main />
                </ScrollView>
                <Footer />
            </View>
        </NativeBaseProvider>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
