import { Stack } from "expo-router";
import './globals.css'



// it is hiding all route headers or root layout header

export default function RootLayout() {
  return <Stack >

       <Stack.Screen 
       name="(tabs)"
       options={{headerShown:false}}
       
       />
       <Stack.Screen
        name="movies/[id]"
        options={{headerShown:false}}
       
       />



  </Stack>;
}
