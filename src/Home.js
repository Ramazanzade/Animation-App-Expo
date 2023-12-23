import React from 'react';
import { View, StyleSheet, Dimensions,Text, Image, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import data from './data.json'
const { width, height } = Dimensions.get('window');

const Home = () => {
    const renderitem =(item)=>{
        return(
            <View>
                <Image
                    source={item.imge}
                    style={{width:100,height:100}}
                />
                <Text>{item.title}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Svg width={width} height={height*1.5} viewBox={`0 0 ${width} ${height * 1}`} style={{ position: 'absolute' , marginTop:'-75%'}} >
                <Path
                    d={`M${width*0.001} ${height * 0.58} 
                        C ${width * 0.45} ${height * 0.30}, ${width * 0.5} ${height * 0.8}, ${width} ${height * 0.45}
                        L ${width} ${height * 0.7}
                        L 0 ${height * 100} `}
                    fill="#A8F5C4"
                />
                <FlatList
                    data={data}
                    renderItem={({item})=>renderitem(item)}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default Home;
