import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';

export default function NativeComponent() {
  const [Name, setName] = useState("Muhammad Sajjad")
  const [age, setAge] = useState(24)
  const [person, setPerson] = useState([
    { name: 'Object ', id: '1', age: 23 },
    { name: 'Object 1', id: '2', age: 24 },
    { name: 'Object 2', id: '3', age: 25 },
    { name: 'Object 3', id: '4', age: 26 },
    { name: 'Object 4', id: '5', age: 27 },
    { name: 'Object 5', id: '6', age: 28 },
  ])
  // const [person, setPerson] = useState([
  //   { name: 'Object ', key: '1', age: 23 },
  //   { name: 'Object 1', key: '2', age: 24 },
  //   { name: 'Object 2', key: '3', age: 25 },
  //   { name: 'Object 3', key: '4', age: 26 },
  //   { name: 'Object 4', key: '5', age: 27 },
  //   { name: 'Object 5', key: '6', age: 28 },
  // ])
  const pressHandler = (id) => { 

    setPerson((prevPerson)=>{
      return prevPerson.filter(person =>person.id != id)
    })

  }
  const clickHandler = () => {
    // setName("Developer")
    // setPerson({name:"Muhammad Sajjad",age:24})
  }
  return (
    <View >
      {/* <Text style={styles.child}>My name is {Name} and i am {age} year old</Text>
      <TextInput placeholder="e.g. John Doe" value={Name} onChangeText={(val)=>{setName(val)}}  />
      <TextInput placeholder="e.g. 24" keyboardType="numeric" value={age}  onChangeText={(val)=>{setAge(val)}}  /> */}

      <FlatList numColumns="2" keyExtractor={(item)=>item.id} data={person} renderItem={({item})=>(
              <TouchableOpacity  onPress={()=>pressHandler(item.id)}>

              <Text style={styles.list} >{item.name} {item.age}</Text>
              </TouchableOpacity>

      )} />

      {/* <ScrollView>
        {person.map(item => (
       
            <View key={item.key}>

              <Text style={styles.list} >{item.name} {item.age}</Text>
            </View>
          

        ))
        }
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({

  child: {
    color: 'white'
  },
  list: {

    padding: 50,
    height: 200,
    backgroundColor: 'blue',
    color: 'white'


  }

})


