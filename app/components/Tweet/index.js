import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

/* Styles */
import styles from './styles';

/* Images */
import images from 'app/config/images';

class Tweet extends Component {
  render() {
    return (
			<View style={styles.item}>
				<View style={styles.container}>
					<View style={styles.profileImageContainer}>
						<Image
							source={images.profileImage}
							style={styles.profileImage}
						/>
					</View>
					<View style={styles.content}>
						<View style={styles.authorContent}>
							<Text style={styles.authorName}>Rafael Câmara</Text>
							<Text style={styles.tweetDetails}>@rafaelcamaram</Text>
							<Text style={styles.tweetDetails}>- 6d</Text>
						</View>
						<View style={styles.tweetContent}>
							<Text>Interested in #Firebase for your chat app? @DeKoServidoni shows how to implement it:
								bit.ly/2rc8p8l
								#ACSnippets</Text>
						</View>
					</View>
				</View>
				<View style={styles.splitLine}/>
			</View>
    )
  }
}

export default Tweet;