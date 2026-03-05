/*
AULA02 - EXERCÍCIO
*/

import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: '#ADFF2F', height: '100%', width: '100%', padding: 20 }}>

      <View style={{ 
        backgroundColor: 'red', 
        height: '18%', 
        width: '100%', 
        borderWidth: 5, 
        borderColor: 'black',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15,
        marginBottom: 15 
      }}>
        <Text style={{ fontSize: 22 }}>COMPONENTE VIEW</Text>
      </View>

      <View style={{ 
        backgroundColor: 'yellow', 
        height: '50%', 
        width: '100%', 
        borderWidth: 5, 
        borderColor: 'black',
        padding: 20,
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 40 }}>CONTEÚDO</Text>
      </View>

      <View style={{ 
        backgroundColor: 'gray', 
        height: '18%', 
        width: '100%', 
        borderWidth: 5, 
        borderColor: 'black',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20
      }}>
        <Text style={{ fontSize: 20 }}>Renan</Text>
        <Text style={{ fontSize: 20 }}>27/02/2026</Text>
      </View>

    </View>
  );
}

export default App;