import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Lista1 = [
  { key: "Luis" },
  { key: "Adrian" },
  { key: "Juan" },
  { key: "Martin" },
  { key: "Pedro" },
  { key: "Jimena" },
  { key: "Sonia" },
  { key: "Mario" },
  { key: "Carlos" },
  { key: "Simon" },
  { key: "Juancarlos" },
  { key: "Dios" },
];

const Lista2 = [
  { key: "Ciudad 1" },
  { key: "Ciudad 2" },
  { key: "Ciudad 3" },
  { key: "Ciudad 4" },
  { key: "Ciudad 5" },
];

export default function App() {
  const [itemres, setitemres] = useState(null);
  const [op, setOp] = useState(Lista1);
  
  const b1 = () =>{
    Op = Lista1
  }
  const b2 = () =>{
    Op = Lista2
  }

  const Materia = (props) => {
    const itemStyle = {
      backgroundColor: props.nombre === itemres ? "white" : "#d74894",
      color: props.nombre === itemres ? "white" : "gray",
      borderColor: "black",
      height: 40,
      borderWidth: 1,
      minWidth: 200,
      borderRadius: 30,
      padding: 10,
      margin: 10,
    };

    return (
      <TouchableOpacity style={itemStyle}>
        <Text>{props.nombre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulodisenio}>
        Mostrar listado de clientes y ciudad
      </Text>

      <FlatList
        data={op}
        renderItem={({ item }) => <Materia nombre={item.key} />}
        keyExtractor={(item) => item.key}
      />

      <TouchableOpacity style={styles.boton} onPress={b1}>
        <Text>Ciudades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton1} onPress={b2}>
        <Text>Clientes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  titulodisenio: {
    height: 60,
    color: "#8a2be2",
    fontSize: 20,
    textAlign: "center",
  },
  listaestilo: {
    height: 20,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontStyle: "italic",
    borderWidth: 2,
    backgroundColor: "#d74894",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 30,
  },
  boton: {
    backgroundColor: "#32CD32",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
  },
  boton1: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
  },
});
