import React, { useRef } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

const CProjectsScreen = () => {

    // return (
    //     <View style={{
    //         paddingTop: 50,
    //         paddingLeft: 50
    //     }}>
            
    //         <Text>Open ActionSheet</Text>
       
    //     </View>
    // )


    const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={'slide'}
        customStyles={{
          wrapper: {
            backgroundColor: "#000",
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
              height: '95%',
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
          }
        }}
      >

      </RBSheet>
    </View>
  );
}

export default CProjectsScreen
