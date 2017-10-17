/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Great Small Towns to Visit
        </Text>
        <Text style={styles.paragraph}>
        by &lt;name&gt;Adam Bodie&lt;/name&gt;
        </Text>
        <Text style={styles.paragraph}>
          There&apos;s more to life than big city lights and super metropolis action. There&apos;s nothing wrong with getting away and visiting small towns. After all, with lots of commotion and jam-packed streets and buildings, there is absolutely nothing wrong with enjoying the quieter things in life. Small town folks, quiet strolls along the streets, little if any traffic. Those are the best things about small towns. Many of them might seem as passing points, but there are a few that are particularly fascinating, whether it&apos;s for scenery or historical significance. Here is a list (in alphabetical order by city name) for some great small towns to visit that I have personally visited.
        </Text>
        <FlatList
            data={[
                {key: 1,
                city: 'Alexandria',
                state: 'Minnesota',
                image: require('./assets/images/alexandria.jpg'),
                 population: 11070,
                 fame: 'Historic Vikings',
                 near: 'Minneapolis',
                 miles: 120,
                 direction: ' miles NW',
                description: 'Immersed in Viking Culture, come to Alexandria, where Vikings may or may not have come visited in the early 13th-14th Century. Home of the Kensington Runestone, which might or might not be a Viking-written tablet, come check it out for yourself to see for yourself. And being in the Land of 10,000 Lakes, Alexandria is home of numerous lakes and a gateway to other lakes further north.'
                },
                {key: 2,
                city: 'Clear Lake',
                state: 'Iowa',
                image: require('./assets/images/clearlake.jpg'),
                population: 7777,
                fame: 'The Day The Music Died',
                near: 'Des Moines',
                miles: 100,
                direction: ' miles N',
                description: 'Located about halfway between Des Moines and Minneapolis, Clear Lake offers many tourist spots along the lake for which the town is named after. It of course is famous for the Surf Ballroom, where the great musicians Buddy Holly, Ritchie Valens and The Big Bopper played their last show before their tragic death from a plane crash famously known as "The Day the Music Died." For those looking to pay their respect, the crash site has a monument just miles away from town.'
                },
                {key: 3,
                city: 'Guntersville',
                state: 'Alabama',
                image: require('./assets/images/guntersville.jpg'),
                population: 8197,
                fame: 'Gateway to Lake Guntersville',
                near: 'Huntsville',
                miles: 60,
                direction: ' miles SE',
                description: 'Located on the shores of Alabama\'s largest lake, Lake Guntersville, Guntersville offers plenty of fun around the lake, complete with that Southern Charm, as the lake is well known for being one of the top Bass fishing spots in the country. Be sure to take a stroll at Lake Guntersville State Park to enjoy views of the lake. Other surprises await...'},
                {key: 4,
                city: 'Hannibal',
                state: 'Missouri',
                image: require('./assets/images/hannibal.jpg'),
                population: 17400,
                fame: 'Hometown of Mark Twain',
                near: 'St. Louis',
                miles: 100,
                direction: ' miles NW',
                description: 'Hannibal, Missouri, located NW of St. Louis along the Mississippi River, is popular with tourists due to its history with its most famous resident, Mark Twain. Take a walk back in time to when Mark Twain was coming up with many of his stories and see his inspirations all in a few blocks when visiting the Mark Twain Boyhood Museum. But of course, it\'s not all Mark Twain, Huck Finn and Tom Sawyer as the town offers great views of the Mississippi River from Cardiff Hill, home of the, you guessed it, the Mark Twain Memorial Lighthouse'
                },
                {key: 5,
                city: 'Hood River',
                state: 'Oregon',
                image: require('./assets/images/hoodriver.jpg'),
                population: 7929,
                fame: 'Wind Surfing Capital of the World',
                near: 'Portland',
                miles: 60,
                direction: ' miles E',
                description: 'Come visit Hood River, just 60 miles east of Portland, where there\'s plenty of action in the Columbia River Gorge. From windsurfing in the Columbia to mountain opportunities at nearby Mt. Hood, Hood River is the perfect place for fun and action. But if scenery isn\'t enough for you, Hood River is home to many wineries and breweries to enjoy. And with a new waterfront full of exciting and hip restaurants, there\'s never a dull opportunity in Hood River.'
                },
                {key: 6,
                city: 'Lahaina',
                state: 'Hawaii',
                image: require('./assets/images/lahaina.jpg'),
                population: 11704,
                fame: 'Maui',
                near: 'Honolulu',
                miles: 100,
                direction: ' miles E (via plane)',
                description: 'Maui is an amazing island, and without any big towns, you will find plenty of small town experience. But Lahaina, though one of the bigger towns on the island, is the perfect starting point to lots of fun. Whether it\'s the Pacific Ocean or the West Maui Mountains, Lahaina is a great scenic place, with plenty of shops, luaus and even a Buddhist temple. And since Maui is a small island, day trips to the awe-inspiring Haleakala National Park and famous Road to Hana, the fun never ends in Lahaina.'
                },
                {key: 7,
                city: 'Lookout Mountain',
                state: 'Georgia',
                image: require('./assets/images/lookout.jpg'),
                 population: 3209,
                 fame: 'Rock City',
                 near: 'Chattanooga',
                miles: 10,
                direction: ' miles SW',
                description: 'Chances are if you have been in the Deep South, you will see signs to "See Rock City." Look no further to Lookout Mountain, home of the beautiful Rock City, with Rock gardens, waterfalls, and views of maybe as many as seven states. But there\'s more than Rock City, Lookout Mountain is also home of the Lookout Mountain Incline on the mountain the town is named after, and just on the other side of the Georgia border is the magnificent underground Ruby Falls.'
                },
                {key: 8,
                city: 'Mitchell',
                state: 'South Dakota',
                image: require('./assets/images/mitchell.jpg'),
                 population: 15000,
                 fame: 'The Corn Palace',
                 near: 'Sioux Falls',
                 miles: 60,
                 direction: ' miles W',
                description: 'Mitchell, South Dakota, a small city west of Sioux Falls, is famous for The Corn Palace, a marvelous structure built in the Moorish Revival stylee, complete with murals made out of all types of corn. But there are museums and other places to visit as well while in Mitchell.'
                },
                {key: 9,
                city: 'Williams',
                state: 'Arizona',
                image: require('./assets/images/williams.jpg'),
                population: 3023,
                fame: 'Gateway to the Grand Canyon',
                near: 'Flagstaff',
                miles: 30,
                direction: ' miles W',
                description: 'Those looking to have fun at the Grand Canyon should consider visiting Williams as well. Known as the Gateway to the Grand Canyon, Williams is also the beginning point of the Grand Canyon Railway, taking passengers to the Grand Canyon by Train. But there\'s more to Williams than the Grand Canyon. Williams also offers a great small town atmosphere, a wild west atmosphere and lots of Route 66 history.'
                },
                {key: 10,
                city: 'Wisconsin Dells',
                state: 'Wisconsin',
                image: require('./assets/images/wisconsindells.jpg'),
                population: 2678,
                fame: 'Waterpark Capital of the World',
                near: 'Milwaukee',
                miles: 100,
                direction: ' miles W',
                description: 'Love waterparks? Then Wisconsin Dells is the place to be. Unofficially the "Waterpark capital of the World," Wisconsin Dells and neighboring Lake Delton host a number of water parks, including Mt. Olympus Water and Theme Park and Kalahari Resort. But there are plenty of opportunities for those who don\'t love water, such as Top Secret, a museum that is a model of the White House upside-down, and for scenic lovers, there\'s "The Dells of the Wisconsin River," which contains beautiful bluffs.'}
            ]}
            renderItem={({item}) => <View>
              <View style={{flex: 1, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 225}} source={item.image} />
              </View>
              <Text style={styles.secondaryTitle}>{item.city}</Text>
              <Text style={styles.secondaryParagraph}> {item.state} </Text>
              <View style={styles.info}>
                  <Text style={styles.infoParagraph}>
                    Famous for: {item.fame}
                  </Text>
                  <Text style={styles.infoParagraph}>
                    Population: {item.population}
                  </Text>
                  <Text style={styles.infoParagraph}>
                    {item.miles}{item.direction} of {item.near}
                  </Text>
              </View>
            <Text style={styles.paragraph}>
                Why should I visit {item.city}?
             </Text>
            <Text style={styles.paragraph}>
                {item.description}
             </Text>
            </View>}
      />
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'anton-regular',
    padding: 20,
    margin: 0,
    color: '#000',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: 'navy'
  },
  secondaryTitle: {
      fontSize: 28,
      textAlign: 'left',
      margin: 0,
      color: '#000',
      fontWeight: 'bold',
      marginLeft: 50
  },
  paragraph: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
    fontSize: 16,
    padding: 10
  },
  secondaryParagraph: {
      color: 'gray',
      fontSize: 14,
      marginLeft: 80
    },
  info: {
    padding: 5,
    backgroundColor: 'navy',
    margin: 5,
    marginLeft: 50
  },
  infoParagraph: {
      textAlign: 'left',
      color: '#FFFFFF',
      marginBottom: 5,
      fontSize: 16
    }
});
