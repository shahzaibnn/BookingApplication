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
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {recommendedBooks, allCategories} from '../model/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function BookDetailScreen({navigation, route}) {
  const [displayData, setDisplayData] = useState(route.params.data);

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (ratings.length == 0) {
      for (let i = 0; i < Array.from(displayData.rating)[0]; i++) {
        setRatings(ratings => [
          ...ratings,
          <FontAwesome
            name="star"
            size={25}
            color="#5f3734"
            style={{marginLeft: Dimensions.get('window').width * 0.03}}
          />,
        ]);
      }

      for (let i = 0; i < 5 - Array.from(displayData.rating)[0]; i++) {
        setRatings(ratings => [
          ...ratings,
          <FontAwesome
            name="star-o"
            size={25}
            color="#5f3734"
            style={{marginLeft: Dimensions.get('window').width * 0.03}}
          />,
        ]);
      }
    }
  }, []);

  return (
    <View style={{backgroundColor: '#e0d9c7'}}>
      <FlatList
        ListHeaderComponent={
          <View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginTop: '5%', marginHorizontal: '3%'}}>
              <Ionicons name="arrow-back-sharp" size={30} color="#000000" />
            </TouchableOpacity>
            <View style={{marginTop: '3%', marginHorizontal: '5%'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#5f3734',
                  fontSize: 25,
                  // fontStyle: 'italic',
                  marginBottom: '2%',
                }}>
                {displayData.name}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: '#761518',
                  fontWeight: 'bold',
                  marginBottom: '5%',
                }}>
                {displayData.tagline}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '8%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', color: '#000000'}}>
                    Published from{' '}
                  </Text>
                  <Text style={{color: '#96b16f', fontWeight: 'bold'}}>
                    {displayData.publisher}
                  </Text>
                </View>

                <Text style={{fontWeight: 'bold', color: '#000000'}}>
                  {displayData.publishingDate}
                </Text>
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4%',
                  color: '#000000',
                }}>
                ISBN: {displayData.isbn}
              </Text>
            </View>

            <View style={{alignItems: 'flex-end'}}>
              <Image
                resizeMode="contain"
                style={{
                  height: 200,
                  width: Dimensions.get('window').width * 0.8,
                  borderBottomLeftRadius: 32,
                  borderTopLeftRadius: 32,
                }}
                source={{
                  uri: displayData.pic,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '5%',
              }}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>By: </Text>
              <Text style={{color: '#96b16f', fontWeight: 'bold'}}>
                {displayData.author}
              </Text>
            </View>

            <View
              style={{
                marginTop: '5%',
                marginHorizontal: '5%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 25, color: '#96b16f', fontWeight: 'bold'}}>
                {displayData.rating}
              </Text>

              {ratings}
            </View>

            <Text
              style={{
                marginTop: '2%',
                marginHorizontal: '5%',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#000000',
              }}>
              Reviews
            </Text>

            <View
              style={{
                marginVertical: '5%',
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginHorizontal: Dimensions.get('window').width * 0.05,
              }}
            />
          </View>
        }
        ItemSeparatorComponent={
          <View
            style={{
              marginVertical: '5%',
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginHorizontal: Dimensions.get('window').width * 0.05,
            }}
          />
        }
        ListFooterComponent={
          <View
            style={{
              marginVertical: '5%',
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginHorizontal: Dimensions.get('window').width * 0.05,
            }}
          />
        }
        data={displayData.reviews}
        renderItem={({item}) => (
          <View
            style={{marginHorizontal: Dimensions.get('window').width * 0.05}}>
            <Text style={{fontSize: 18, color: '#000000', fontStyle: 'italic'}}>
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
