import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Alert } from 'react-native';
import {Button} from "native-base";
import {FontAwesome} from "@expo/vector-icons";



//get array of length 25
var itemArray = new Array(25).fill('empty');
var count =0;

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      randomNumber :"",
      isScractched : false
    };
  }
  //when app loads up
  componentDidMount() {
    //call generateRandomNumber  method
    this.setState({ randomNumber : this.generateRandomNumber()}
    );
  };
  
  
  generateRandomNumber=() =>{
    //generate random number
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({randomNumber:randomNumber ,isScractched:true});
    //console.log(randomNumber);
    return randomNumber;

  };
  
  scratchItem = itemNumber =>{
    //decide lucky or unluckey besed on radomnum=scratchItem
    if(this.state.randomNumber == itemNumber) {
      itemArray[itemNumber] = "lucky";

    }
    else{
      itemArray[itemNumber] = "unlucky";

    }
    this.forceUpdate();
  };
  
  
  scratchItemIcon =itemNumber => {
    //find right icon
    if(itemArray[itemNumber] == "lucky"){
      return "dollar";
    }else if(itemArray[itemNumber] == "unlucky"){
      return "frown-o";
    }else{
      return "circle";
    }
  };
  
  
  scratchItemColor = itemNumber => {
    //find right color
    if(itemArray[itemNumber] == "lucky"){
      return "green";
    }else if(itemArray[itemNumber] == "unlucky"){
      return "red";
    }else{
      return "black";
    }
  };
  
  showAllItem =() => {
    //button-revel all icon
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber]='lucky';
    this.forceUpdate();
  };
  
  resetGame = () => {
    //button-reset the game
    this.setState({randomNumber:this.generateRandomNumber()},
    () => {
      itemArray.fill("empty");
      this.forceUpdate();
    });
    count = 0;
  };

  pressCount = () =>{
    count = count+1;
   // console.log(count);
    if(count ===5){
      Alert.alert("RESTRICTION!\nclick reset or show all coupons for further play")
    }
    else if(count >5){
      this.resetGame();
     
    }

  };
  
 render(){

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Text style={styles.toptext  }>scratch and win game!</Text>
      </View>
      <View style = {styles.grid}>
        <View style = {styles.itemrow}>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            
            this.scratchItem(0);
            this.pressCount();
          
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(0)}
             size={50}
             color={this.scratchItemColor(0)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(1);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(1)}
             size={50}
             color={this.scratchItemColor(1)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(2);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(2)}
             size={50}
             color={this.scratchItemColor(2)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(3);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(3)}
             size={50}
             color={this.scratchItemColor(3)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(4);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(4)}
             size={50}
             color={this.scratchItemColor(4)}

            
            />
          </TouchableOpacity>


        </View>
        <View style = {styles.itemrow}>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(5);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(5)}
             size={50}
             color={this.scratchItemColor(5)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(6);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(6)}
             size={50}
             color={this.scratchItemColor(6)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(7);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(7)}
             size={50}
             color={this.scratchItemColor(7)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(8);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(8)}
             size={50}
             color={this.scratchItemColor(8)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(9);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(9)}
             size={50}
             color={this.scratchItemColor(9)}

            
            />
          </TouchableOpacity>
          </View>
         <View style = {styles.itemrow}>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(10);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(10)}
             size={50}
             color={this.scratchItemColor(10)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(11);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(11)}
             size={50}
             color={this.scratchItemColor(11)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(12);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(12)}
             size={50}
             color={this.scratchItemColor(12)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(13);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(13)}
             size={50}
             color={this.scratchItemColor(13)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(14);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(14)}
             size={50}
             color={this.scratchItemColor(14)}

            
            />
          </TouchableOpacity>
         </View>
           <View style = {styles.itemrow}>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(15);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(15)}
             size={50}
             color={this.scratchItemColor(15)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(16);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(16)}
             size={50}
             color={this.scratchItemColor(16)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(17);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(17)}
             size={50}
             color={this.scratchItemColor(17)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(18);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(18)}
             size={50}
             color={this.scratchItemColor(18)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(19);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(19)}
             size={50}
             color={this.scratchItemColor(19)}

            
            />
          </TouchableOpacity>
         </View> 
         <View style = {styles.itemrow}>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(20);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(20)}
             size={50}
             color={this.scratchItemColor(20)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(21);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(21)}
             size={50}
             color={this.scratchItemColor(21)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(22);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(22)}
             size={50}
             color={this.scratchItemColor(22)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(23);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(23)}
             size={50}
             color={this.scratchItemColor(23)}

            
            />
          </TouchableOpacity>
          <TouchableOpacity style ={styles.item}
          onPress={() =>{
            this.scratchItem(24);
            this.pressCount();
          }}
          >
            <FontAwesome
             name={this.scratchItemIcon(24)}
             size={50}
             color={this.scratchItemColor(24)}

            
            />
          </TouchableOpacity>

         </View>
         
      </View>
      <Button 
      onPress={() =>{this.showAllItem();}}
      
      full success style = {styles.button}>
        <Text style = {styles.buttonText}> show all coupons</Text>
      </Button>
       
      <Button 
      onPress={() =>{this.resetGame();}}
      full primary style = {styles.button}>
      
        <Text style = {styles.buttonText}> Reset</Text>
      </Button>
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{

  },
  itemrow:{
    flexDirection:"row",
    
  },
  item:{
    alignItems:"center",
    borderWidth:2,
    borderColor:"#AE1438",
    padding:10
  },
  button:{
    marginVertical:15
  },
  buttonText:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",

  },
  topBar:{
    backgroundColor:"#E83350",
    height:50,
    width:Dimensions.get("window").width,
    justifyContent:"center",
    marginVertical:20
    
  },
  toptext:{
    color:"#fff",
    textAlign:"center"
    
  }
});

