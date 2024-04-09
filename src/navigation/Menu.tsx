import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text, Image } from 'react-native'; // Import Text and Image components
import Screens from './Screens';
import { Block, Button } from '../components';
import { useTheme, useTranslation } from '../hooks';
import { COLORS } from '../constants/light';

const Drawer = createDrawerNavigator();

interface DrawerContentProps extends DrawerContentComponentProps {
  navigation: any; // Explicitly define the type of navigation prop
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { assets } = useTheme();

  const handleNavigation = (to: string) => {
    navigation.navigate(to, { active: to });
  };

  const screens = [
    { name: t('screens.home'), to: 'Home', icon: assets.home },
    { name: t('screens.maps'), to: 'Maps', icon: assets.location },
    { name: t('screens.gallery'), to: 'AR Gallery', icon: assets.image },
    { name: t('screens.history'), to: 'History', icon: assets.register },
    { name: t('screens.objects'), to: 'Objects', icon: assets.basket },
    { name: t('screens.about'), to: 'About', icon: assets.profile },
  ];

  return (
    <Block>
      {screens.map((screen, index) => (
        <Button
          key={`menu-screen-${screen.name}-${index}`}
          onPress={() => handleNavigation(screen.to)}
          style={{ flexDirection: 'row', alignItems: 'center' }} // Align icon and text horizontally
        >

          <Text>{screen.name}</Text>
        </Button>
      ))}
    </Block>
  );
};

const Menu = () => {
  const { gradients } = useTheme();

  return (
    <Block gradient={gradients.light}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={(props: DrawerContentComponentProps) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '60%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}
        headerShown={false} // Hide the top menu bar
      >
        <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    </Block>
  );
};

export default Menu;
