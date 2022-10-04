import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/auth";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const initState = {
  email: "",
  password: "",
};

export default function Signup() {
  const [formData, setFormData] = useState(initState);

  const handleSubmit = ()=>{ createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(error.message);
    })
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.header}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.inputBox}
        value={formData.email}
        textContentType="emailAddress"
        placeholder="email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
        textContentType="password"
        secureTextEntry={true}
        style={styles.inputBox}
        value={formData.password}
        placeholder="password"
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />
      <TouchableOpacity style={styles.myButton} onPress={handleSubmit}>
        <Text style={styles.butttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: { fontSize: 50, fontWeight: "bold", color: "grey" },
  inputBox: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cf7b15",
    padding: 10,
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "500",
  },
  myButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  butttonText: {
    fontSize: 20,
    color: "#cf7b15",
  },
});
