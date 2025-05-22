import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VisaoGeral() {
  type valores = { real: number; previsto: number };
  type infoItem = {
    icon: "add-circle-outline" | "remove-circle-outline" | "card-outline";
    valores: valores;
    label: string;
    color: string;
  };
  const data: infoItem[] = [
    {
      icon: "add-circle-outline",
      valores: { real: 100, previsto: 100 },
      label: "Receitas",
      color: "#FECACA",
    },
    {
      icon: "remove-circle-outline",
      valores: { real: 100, previsto: 100 },
      label: "Despesas",
      color: "#FECACA",
    },
    {
      icon: "card-outline",
      valores: { real: 100, previsto: 100 },
      label: "Cartões de credito",
      color: "#DBEAFE",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Visão Geral</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("eu sou keipu");
          }}
        >
          <Ionicons name="ellipsis-vertical" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        style={{ gap: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.content, { backgroundColor: item.color }]}
          >
            <Ionicons name={item.icon} size={20} color="#000" />
            <View style={{ width: "100%" }}>
              <View style={styles.contentText}>
                <Text>{item.label}</Text>
                <Text>R$ {item.valores.real}</Text>
              </View>
              <View style={styles.contentText}>
                <Text>Previsto</Text>
                <Text>R$ {item.valores.previsto}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: "auto",
    paddingVertical: 15,
    gap: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "85%",
  },
});
