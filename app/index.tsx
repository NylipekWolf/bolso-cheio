import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Button, Dialog, Icon } from "react-native-paper";
import { listaMeses } from "@/utils/date.utils";
import VisaoGeral from "@/components/visaoGeral";
import AddNota from "@/components/addNota";
const { width } = Dimensions.get("screen");
export default function Index() {
  const [mes, setMes] = useState("Janeiro");
  const trocarMes = (direcao: string) => {
    let index = listaMeses.findIndex((item) => item == mes.toString());
    direcao == "up" ? (index += 1) : (index -= 1);

    if (index > listaMeses.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = listaMeses.length - 1;
    }
    setMes(listaMeses[index]);
  };
  const items: Items[] = [
    {
      id: "1",
      componente: {
        icon: "wallet",
        descricao: "Você tem uma receita predente no total de R$ 120,50",
        buttonAction: undefined,
        buttonName: "Verificar",
      },
    },
    {
      id: "2",
      componente: {
        icon: "wallet",
        descricao: "Você tem vai receber nos proximos dias de R$ 1000,50",
        buttonAction: undefined,
        buttonName: "Verificar",
      },
    },
    {
      id: "3",
      componente: {
        icon: "wallet",
        descricao: "Você gastou o total de R$ 2200,50",
        buttonAction: undefined,
        buttonName: "Verificar",
      },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerMenu}>
          <Ionicons name="menu-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => {
              trocarMes("down");
            }}
          >
            <Ionicons name="arrow-back-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.text}>{mes}</Text>
          <TouchableOpacity
            onPress={() => {
              trocarMes("up");
            }}
          >
            <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.headerConfig}>
          <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ gap: 20 }} style={styles.scroll}>
        <FlatList
          style={styles.flastList}
          data={items}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 11 }} />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Ionicons name={item.componente.icon} size={20} color="#D9D9D9" />
              <Text>{item.componente.descricao}</Text>
              <View style={styles.button}>
                <Button
                  mode="contained"
                  buttonColor="#008905"
                  onPress={() => {}}
                >
                  {item.componente.buttonName}
                </Button>
              </View>
            </View>
          )}
        ></FlatList>

        {<VisaoGeral></VisaoGeral>}
        {<AddNota></AddNota>}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    height: "100%",
    gap: 10,
  },
  header: {
    backgroundColor: "#3964FE",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    fontFamily: "26px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerConfig: {
    alignSelf: "flex-start",
  },
  headerMenu: {
    alignSelf: "flex-start",
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  scroll: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  flastList: {
    flex: 1,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 130,
    paddingHorizontal: 20,
    width: width - 40,
    gap: 10,
  },
  button: {
    width: 200,
    borderBottomEndRadius: 10,
  },
});
interface Items {
  id: string;
  componente: {
    icon: "wallet";
    descricao: string;
    buttonAction: void | undefined;
    buttonName: string;
  };
}
