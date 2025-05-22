import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Switch() {
  type data = { label: string; actived: boolean; color: string };
  const [data, setData] = useState<data[]>([
    { label: "Despesa", actived: true, color: "red" },
    { label: "Receita", actived: false, color: "#008905" },
    { label: "Cartao", actived: false, color: "#3964FE" },
  ]);
  const trocarAtivo = (switchItem: data) => {
    const novoData = data.map((item) => ({
      ...item,
      actived: item === switchItem,
    }));
    setData(novoData);
  };
  const condicaoPrimeiro = (item: data) => {
    return item == data[0];
  };
  const condicaoUltimo = (item: data) => {
    return item == data[data.length - 1];
  };
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.label}
          activeOpacity={0.6}
          onPress={() => trocarAtivo(item)}
          style={[
            styles.itemWrapper,
            item.actived ? { backgroundColor: item.color } : null,
            condicaoPrimeiro(item) ? styles.primeiro : null,
            condicaoUltimo(item) ? styles.ultimo : null,
          ]}
        >
          <Text style={[styles.text]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemWrapper: {
    backgroundColor: "#555",
    borderRadius: 0,
    padding: 12,
  },
  primeiro: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  ultimo: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
