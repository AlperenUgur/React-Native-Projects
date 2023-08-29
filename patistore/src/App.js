import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import products_data from "./data_app.json";
import PatiCard from "./components/patiCards/PatiCard";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>PATIKASTORE</Text>
        <TextInput style={styles.search_bar} placeholder="Ara..."></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={products_data}
          numColumns={2}
          renderItem={({ item }) => (
            <PatiCard
              imgURL={item.imgURL}
              title={item.title}
              price={item.price}
              inStock={item.inStock ? "" : "STOKTA YOK"}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 150,
  },
  header: {
    padding: 10,
  },
  header_text: {
    color: "#800080",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 0,
  },
  search_bar: {
    padding: 10,
    backgroundColor: "#ECEFF1",
    borderRadius: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;