// import React, { useRef } from 'react';
// import { View, StyleSheet, Dimensions, Text, Image, FlatList, Animated } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
// const { width, height } = Dimensions.get('window');
// const Home = () => {
//     const data = [
//         {
//             id: 1,
//             price: 34.45,
//             title: "accusamus beatae ad facilis cum  qui sunt",
//             imge: require('../assets/imge/1.png'),
//             imge1: require('../assets/imge/y.png')

//         },
//         {
//             id: 2,
//             price: 24.45,
//             title: "accusamus beatae ad facilis cum similique qui sunt",
//             imge: require('../assets/imge/2.png'),
//             imge1: require('../assets/imge/y1.png')

//         },
//         {
//             id: 3,
//             price: 44.45,
//             title: "accusamus  ad facilis cum similique qui sunt",
//             imge: require('../assets/imge/3.png'),
//             imge1: require('../assets/imge/y2.png')


//         },
//         {
//             id: 4,
//             price: 24.45,
//             title: "accusamus beatae ad facilis cum similique qui sunt",
//             imge: require('../assets/imge/2.png'),
//             imge1: require('../assets/imge/y1.png')

//         },
        
//         {
//             id: 5,
//             price: 24.45,
//             title: "accusamus beatae ad facilis cum similique qui sunt",
//             imge: require('../assets/imge/1.png'),
//             imge1: require('../assets/imge/y1.png')

//         },

//     ]
//     const scrollX = useRef(new Animated.Value(0)).current;

//     const renderitem = (item, index) => {
//         const inputRange = [(index - 1) * 200, index * 200, (index + 1) * 200];
//         const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [-5, 25, -5]
//         });
//         return (
//             <Animated.View style={{transform: [{ translateY: translateY }],        }}>
//                 <Image
//                     source={item.imge}
//                     style={{ width: 200, height: 200 }}
//                 />
//             </Animated.View>
//         )
//     }
//     return (
//         <View style={styles.container}>
//             <Svg width={width} height={height * 1.5} viewBox={`0 0 ${width} ${height * 1}`} style={{ position: 'absolute', marginTop: '-75%' }} >
//                 <Path
//                     d={`M${width * 0.001} ${height * 0.58} 
//                         C ${width * 0.45} ${height * 0.30}, ${width * 0.5} ${height * 0.8}, ${width} ${height * 0.45}
//                         L ${width} ${height * 0.7}
//                         L 0 ${height * 100} `}
//                     fill="#A8F5C4"
//                 />

//             </Svg>
//             <FlatList
//                 data={data}
//                 renderItem={({ item, index }) => renderitem(item, index)}
//                 keyExtractor={(item, index) => index.toString()}
//                 style={{ position: 'absolute', zIndex: 2, marginTop: '20%' }}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={Animated.event(
//                     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                     { useNativeDriver: false }
//                 )}
//                 scrollEventThrottle={26}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
// });

// export default Home;
