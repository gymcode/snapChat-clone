import React from 'react'; 
import {SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image} from 'react-native'; 
import {Ionicons, FontAwesome, MaterialIcons} from '@expo/vector-icons'

import Profile from './profile';

const ListData = [
  {
    id: 1, 
    name: "Kenneth", 
    image: require('./assets/snap7.png'),
    status: "Received .", 
    time: "1min"
  },
  {
    id: 2, 
    name: "Karen", 
    emoji: require('./assets/emoji2.png'),
    image: require('./assets/snap2.png'),
    status: "Delivered .", 
    time: "2mins"
  },
  {
    id: 3, 
    name: "Kelvin", 
    image: require('./assets/snap1.png'),
    status: "Received .", 
    time: "22mins"
  },
  {
    id: 4, 
    name: "Fiifi", 
    emoji: require('./assets/emoji2.png'),
    image: require('./assets/snap4.png'),
    status: "Received .", 
    time: "30mins"
  },
  {
    id: 5, 
    name: "Audrey", 
    emoji: require('./assets/emoji2.png'),
    image: require('./assets/snap5.png'),
    status: "Received .", 
    time: "50mins"
  },
  {
    id: 6, 
    name: "Kplola", 
    image: require('./assets/snap11.png'),
    status: "Received .", 
    time: "1h"
  },
  {
    id: 7, 
    name: "Essel", 
    emoji: require('./assets/emoji2.png'),
    image: require('./assets/snap8.png'),
    status: "Received .", 
    time: "5hrs"
  },
  {
    id: 8, 
    name: "Chairman", 
    emoji: require('./assets/emoji2.png'),
    image: require('./assets/snap9.png'),
    status: "Received .", 
    time: "2 weeks"
  },
  
]

const ListItem = ({name, status, time, id, image, emoji})=>{
  return(
    <View key={id} style={{flexDirection: "row", paddingHorizontal: 10, paddingVertical: 9, marginTop: 8, borderBottomWidth: .3, borderBottomColor: "whitesmoke"}}>
      {/* avatar */}
        <View style={{ flex:1}}> 
            <Image source={image} style={{height: 50, width:50, borderRadius: 50}}/>
        </View>
      {/* name and status section  */}
        <View style={{flex: 5}}>
          {/* name section  */}
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 19}}>{name}</Text>
          </View>
          {/* other section  */}
          <View style={{flexDirection: "row"}}>
            <View style={{height: 12, width: 12, borderWidth: 1, borderColor: "red", marginHorizontal: 10, marginTop: 5, borderRadius: 2}}/>
            <View style={{marginTop:3}}>
              <Text>{status}</Text>
            </View>
            <View style={{marginTop:3}}>
              <Text>{time}</Text>
            </View>
          </View>
        </View>
      {/* friendliness status  */}
        <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 10,flexDirection: "row"}}>
          <Image source={emoji} style={{height: 15, width: 15}}/>
        </View>
      
    </View>
  )
}


export default function App (){
  const [isMode, setisMode] = React.useState(false);

  function cancel(){
    setisMode(false)
  }

  return (
    <SafeAreaView style={styles.container}>
       {/* first section  */}                                                                                                                                                                                                                                                                                                                                 
       <View style={styles.header}>
          {/* avatar */}
          <TouchableOpacity onPress={()=>{setisMode(true)}}>
            <View style={{flex:1}}> 
                <Image source={require('./assets/ken.png')} style={{height: 50, width: 50, borderRadius: 50}}/>
            </View>
          </TouchableOpacity>

          <View style={{flex:9, flexDirection: "row",marginVertical: 7, justifyContent: "center", alignItems: 'center', borderRadius: 20, backgroundColor: "#e5e4e2"}}>
            <View style={{flex:2, marginLeft: 10}}>
              <FontAwesome
               name="search"
               size={20}
              />
            </View>
            <View style={{flex:6}}>
              <TextInput style={{ height: 35, width: 170, borderRadius: 20, }}  placeholder={"Search"}/>
            </View>
            <View style={{flex:3, marginLeft: 100}}>
              <MaterialIcons
              name="person-add"
              size={25}
              />
            </View>
          </View>

          <View style={{justifyContent: "center", alignItems: 'center', flex: 1.2}}> 
              <Ionicons
              name="ios-create"
              size={26}
              />
          </View>

       </View>
      

       {/* individual section */}
       <View>
          <FlatList
          data={ListData}
          renderItem={({item})=> <ListItem image={item.image} emoji={item.emoji} id={item.id} name={item.name} status={item.status} time={item.time}/>}
          />
          
       </View>

       {/* profile modal  */}
        <Profile visible={isMode} down={()=>cancel()}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  header : {
    flexDirection: "row", 
    justifyContent: "space-evenly",
    padding: 10
  }
})