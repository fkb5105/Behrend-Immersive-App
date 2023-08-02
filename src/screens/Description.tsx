import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { IDescription } from '../constants/types';
import { DESCRIPTION } from '../constants/mocks';
import { WEIGHTS } from '../constants/theme';
import { COLORS } from '../constants/light';

type DescriptionProps = {
  route: {
    params: {
      id: number;
    };
  };
};

const windowWidth = Dimensions.get('window').width;

const Description: React.FC<DescriptionProps> = ({ route }) => {
  const { id } = route.params;
  const description: IDescription | undefined = DESCRIPTION.find((desc) => desc.id === id);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: false });
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(offsetX / windowWidth);
    const newScrollOffset = Math.max(0, offsetX);
    setScrollOffset(newScrollOffset);
  };

  const renderImages = () => {
    if (!description || !description.image_url) {
      return null;
    }
  
    return (
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{ width: `${description.image_url.length * 100}%` }}
      >
        {description.image_url.map((item: string, index: number) => (
          <View key={index} style={styles.slide}>
            {isLoaded || index === 0 ? (
              <>
                <TouchableOpacity onPress={() => setShowCaption(!showCaption)} style={styles.captionButton}>
                  <Text style={styles.captionButtonText}>i</Text>
                </TouchableOpacity>
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                  resizeMode="contain" // Updated resizeMode prop
                  onLoadEnd={() => {
                    if (!isLoaded) {
                      setIsLoaded(true);
                    }
                  }}
                />
                {showCaption && (
                  <View style={styles.captionContainer}>
                    <TouchableOpacity onPress={() => setShowCaption(false)} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    {description.captions && description.captions[index] && (
                      <Text style={styles.captionText}>{description.captions[index]}</Text>
                    )}
                  </View>
                )}
              </>
            ) : (
              <View style={styles.placeholder} />
            )}
          </View>
        ))}
      </ScrollView>
    );
  };
  

  if (!description) {
    return <Text>No description found for ID {id}</Text>;
  }

  const { title, description: desc } = description;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.indicatorContainer}>
        {description.image_url?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: index === Math.floor(scrollOffset / windowWidth) ? '#000' : '#888' },
            ]}
          />
        ))}
      </View>
      {renderImages()}
      <Text style={styles.header}>Description:</Text>
      <Text style={styles.description}>{desc}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: WEIGHTS.h1,
    marginBottom: 16,
    padding: 20,
  },
  image: {
    width: windowWidth,
    aspectRatio: 1,
  },
  header: {
    fontSize: 26,
    marginTop: 40,
    padding: 15,
    fontWeight: WEIGHTS.h2,
    borderBottomWidth: 5,
    borderBottomColor: COLORS.secondary,
  },
  description: {
    color: '#000',
    fontSize: 18,
    padding: 20,
    marginBottom: 30,
    lineHeight: 25,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: '100%',
  },
  placeholder: {
    backgroundColor: '#ccc',
    flex: 1,
    width: windowWidth,
    height: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  indicator: {
    width: 10,
    height: 2,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  captionButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ccc',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  captionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ccc',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 16,
    textAlign: 'center',
  },
});

export default Description; 