import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Input,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";


export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handlePress = () => {
    setTodos([...todos, { item: text, id: Date.now() }]);
    setText("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        <Image
          style={{
            width: "100%",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={{
            uri: "https://ouch-cdn2.icons8.com/ME581HDgzFgUTYyj5qZPe5_4cGpkecmIsM0aUWYrLVA/rs:fit:256:344/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDE1/LzNhODAyOTVlLWJk/MzctNDU1MS1iNDY3/LTJjOWRhYjg3ZjY3/Mi5wbmc.png",
          }}
        />
        <View style={{alignItems: 'center'}}>
           <Text style={{ fontSize: 50, fontWeight: "bold", color: "grey",}}>
          To-Do List
        </Text>
        </View>

        <TextInput
          style={styles.inputBox}
          placeholder="Enter Todo"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <TouchableOpacity style={{backgroundColor:"black",padding:10,borderRadius:10,alignItems:"center"}} onPress={handlePress}>
          <Text style={{fontSize:20,color:"#cf7b15"}}>Add to do</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView style={{ fontSize: 50 }}>
          {todos.map((todo) => (
            <View key={todo.id} style={{flexDirection:"row",justifyContent:"space-between", padding: 10,
            backgroundColor: "#cf7b15",
            borderRadius: 10,
            marginVertical: 5,
            color: "white",}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                width:"80%"
              }}
              id={Date.now()}
            >
              {todo.item}
            </Text>
            <AntDesign name="delete" size={24} color="black" onPress={()=>handleDelete(todo.id)} />
            </View>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  
      // <Signup />
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "white",
  },
  inputBox: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cf7b15",
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
  },
});
