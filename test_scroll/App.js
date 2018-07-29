import React from 'react';
import { StyleSheet, Text, View,SectionList,ScrollView,Dimensions } from 'react-native';
import dat from './dat';
import ScrollableTabView from 'react-native-scrollable-tab-view';
let _height = Dimensions.get('window').height;
let _width = Dimensions.get('window').width;
export default class App extends React.Component {
    constructor(){
      super();
      this.state={
        enableScrollViewScroll:true
      }
    }
  _SectionHeader(info){
    // console.warn(info.section.title);
    return(
      <View style={styles._item}>
          <Text>{info.section.title}</Text>
      </View>
    );
  }
  _onscroll_list(e){
    if(e.nativeEvent.contentOffset.y==0){
      this.setState({enableScrollViewScroll:true});
    }
  }
  _onscroll_scroll(e){
    // console.log(e.nativeEvent.contentOffset.y);
    if(e.nativeEvent.contentOffset.y==200){
      this.setState({enableScrollViewScroll:false});
    }
  }
  _SectionList(data) {
    return(
      <SectionList
        renderItem={({ item, index, section }) =>
          <View style={styles._item}>
            <Text key={index}>{item}</Text>
          </View>
        }
        renderSectionHeader={this._SectionHeader}
        sections={data}
        style={{ height: _height }}
        onScroll={(e) => this._onscroll_list(e)}

      />
    );
    
  }
  render() {
   
    let _showA = [ 
      { title: '我是A',
        data: [
          'item1', 'item2','item3', 'item4','item5', 'item6',
          'item7', 'item8','item9', 'item10','item11', 'item12'
        ] 
      }
    ]
    return (
      <View style={styles.container}
       
      >
      
      <ScrollView 
      // onStartShouldSetResponderCapture={() => {
      //   this.setState({ enableScrollViewScroll: true });
      // }}
      onScroll={(e)=>this._onscroll_scroll(e)}
      scrollEventThrottle={1}
      scrollEnabled={this.state.enableScrollViewScroll}>
        <View style={{height:200,backgroundColor:'#567'}}></View>
          <View style={styles._view}>
            <ScrollableTabView  scrollEnabled={false}>
              <View styles={styles._view} tabLabel='A' >
                {this._SectionList(dat._showA)} 
              </View>
              <View styles={styles._view} tabLabel='B' >
                {this._SectionList(dat._showB)} 
              </View>
              <View styles={styles._view} tabLabel='C' >
                {this._SectionList(dat._showC)} 
              </View>
              <View styles={styles._view} tabLabel='D' >
                {this._SectionList(dat._showD)} 
              </View>
            </ScrollableTabView>
          </View>
        
         
            
          
        
      </ScrollView>
      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:_width,
    height:_height
  
  
  },
  _item:{
    flex:1,
    height:80,
    alignItems:'center',
    justifyContent:'center'
  },
  _view:{
    height:_height,
    width:_width
  }
});
