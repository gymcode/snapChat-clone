import React from 'react'; 
import {View, Modal, Text, TouchableOpacity, Image} from 'react-native'
import {Entypo, Ionicons} from '@expo/vector-icons'


export default function Profile({visible, down}) {
    return(
        <Modal style={{backgroundColor: "red", flex: 1}} visible={visible} animationType="slide">
            <View style={{ marginTop: 25, padding: 20, justifyContent: "space-between"}}> 
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={down}>
                            <Entypo
                            name="chevron-thin-down"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 4, justifyContent: "center", alignItems: 'center', marginTop: 20}}>
                        <View style={{}}>
                            <Image source={require('./assets/profile.jpg')} style={{height: 120, width: 120, borderRadius: 10}}/>
                        </View>
                        <View style={{justifyContent: "center", alignItems: 'center',}}>
                            <Text>Kenneth</Text>
                            <View style={{flexDirection: "row"}}>
                                <Text>sdsdfsd . </Text>
                                <Text>sdsdfsd . </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1, justifyContent: "flex-end", flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Ionicons
                            name="ios-settings"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* add friend section  */}
                <View style={{height: 60, width: "100%", backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                        <Text>fsdf</Text>
                    </View>

                    {/* add friends */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                        <Text>Add friend</Text>
                    </View>

                    <View style={{flex: 1}}>
                        <Text>fbsdf</Text>
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30, borderBottom: 10}}>
                    <Text style={{fontSize: 20}}>stories</Text>
                    <View style={{height: 20, width:85, backgroundColor: "#e5e4e2", borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center',}}>
                        <View style={{paddingHorizontal: 5}}>
                            <Text>1</Text>
                        </View>
                         <Text style={{fontSize: 12}}>Custom story</Text>  
                    </View>
                </View>

                <View style={{height: 60, width: "100%", marginTop: 15,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                        <Text>fsdf</Text>
                    </View>

                    {/* add friends */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                        <Text>Add friend</Text>
                    </View>

                    <View style={{flex: 1}}>
                        <Text>fbsdf</Text>
                    </View>
                </View>

                <View style={{height: 60, width: "100%", marginTop: 15,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                        <Text>fsdf</Text>
                    </View>

                    {/* add friends */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                        <Text>Add friend</Text>
                    </View>

                    <View style={{flex: 1}}>
                        <Text>fbsdf</Text>
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30, borderBottom: 10}}>
                    <Text style={{fontSize: 20}}>Bitmoji</Text>
                </View>

            </View>
        </Modal>
    )
}