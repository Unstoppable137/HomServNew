import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth, useOAuth } from "@clerk/clerk-expo";

export default function LogoutBtn() {
    const { signOut } = useAuth(); // Access the signOut method from useAuth hook

    const handleLogout = async () => {
        try {
            await signOut(); // Call the signOut method to log the user out
        } catch (err) {
            console.error("Logout error", err);
        }
    };
  
    return (
    
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    borderRadius: 5,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
});