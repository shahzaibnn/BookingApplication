import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import {recommendedBooks, allCategories} from '../model/data';

export default function BooksListingScreen({navigation}) {
  return (
    <View style={{backgroundColor: '#e0d9c7'}}>
      <View
        style={{
          marginTop: '2%',
          marginHorizontal: '3%',
          backgroundColor: '#e0d9c7',
        }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  //   marginTop: '3%',
                }}>
                <Text
                  style={{
                    color: '#761518',
                    fontWeight: 'bold',
                    fontSize: 30,
                    // borderRadius: 8,
                    // borderWidth: 1,
                  }}>
                  Books Listing
                </Text>
              </View>

              <View
                style={{
                  marginLeft: Dimensions.get('window').width * 0.02,
                  marginTop: '5%',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#761518',
                    fontSize: 16,
                    fontStyle: 'italic',
                  }}>
                  Recommended
                </Text>
              </View>
              <View style={{marginTop: '2%'}}>
                <FlatList
                  ListFooterComponent={<View style={{width: 15}}></View>}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  horizontal
                  //   numColumns={2}
                  //   key={item => item.id + '_'}
                  data={recommendedBooks}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('BookDetail', {
                          data: item,
                        })
                      }
                      style={{
                        elevation: 2,

                        // borderWidth: 2,
                        borderRadius: 24,
                        // borderColor: '#000000',
                        marginLeft: Dimensions.get('window').width * 0.02,
                        // marginVertical: Dimensions.get('window').height * 0.01,
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          //   elevation: 20,

                          height: Dimensions.get('window').height * 0.2,
                          width: Dimensions.get('window').width * 0.26,
                          borderRadius: 24,
                        }}
                        source={{
                          uri: item.pic,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              <View
                style={{
                  marginLeft: Dimensions.get('window').width * 0.02,
                  marginTop: '5%',
                  marginBottom: '2%',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#761518',
                    fontSize: 16,
                    fontStyle: 'italic',
                  }}>
                  All Categories
                </Text>
              </View>
            </View>
          }
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListFooterComponent={<View style={{width: 15}}></View>}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          //   columnWrapperStyle={{flexWrap: 'wrap'}}
          //   horizontal
          numColumns={2}
          key={item => item.id + '_'}
          data={allCategories}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BookDetail', {
                  data: item,
                })
              }
              style={{
                elevation: 2,

                borderRadius: 24,

                justifyContent: 'center',
                // marginLeft: Dimensions.get('window').width * 0.01,
                marginVertical: Dimensions.get('window').height * 0.005,
              }}>
              <Image
                style={{
                  height: Dimensions.get('window').height * 0.3,
                  width: Dimensions.get('window').width * 0.465,
                  borderRadius: 24,
                }}
                resizeMode={'contain'}
                source={{
                  uri: item.pic,
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
