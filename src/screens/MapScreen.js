import React from 'react';
import { Image, Modal, TouchableOpacity, Text } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Header,
  Right,
  Button,
  Icon
} from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
import DrawerMenuButton from '../components/DrawerMenuButton';
import {
  AVHeader, AVText, AVHeader2
} from '../components/text/AVText';


class MapScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Mapy',
    headerLeft: <DrawerMenuButton />,
  });

  state = {
    index: 0,
    modalVisible: false,
    text: null
  };

  render() {
    const images = [{
      props: {
        source: require('../assets/images/maps/velehrad.png'),
        text: 'Mapa Velehradského komplexu'
      }
    },
    {
      props: {
        source: require('../assets/images/maps/pout.png'),
        text: 'Mapa pouti se 4 zastaveními'
      }
    }
    ];

    const { index, modalVisible } = this.state;

    return (
      <Container>
        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem>
              <Body>
                <AVHeader>Mapy</AVHeader>
                <AVText>Klikni na mapu pro přiblížení.</AVText>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <AVHeader2 style={{ paddingBottom: 15 }}>Mapa Velehradského komplexu </AVHeader2>
                <TouchableOpacity
                  onPress={() => this.setState({ modalVisible: true, index: 0, })}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/images/maps/velehrad.png')}
                    onPress={() => this.setState({ modalVisible: true })}
                  />
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <AVHeader2 style={{ paddingBottom: 15 }}>Mapa pouti se 4 zastaveními </AVHeader2>
                <TouchableOpacity
                  onPress={() => this.setState({ modalVisible: true, index: 1 })}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/images/maps/pout.png')}
                  />
                </TouchableOpacity>

              </Body>
            </CardItem>
          </Card>

        </Content>
        <Modal
          visible={modalVisible}
          transparent
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            renderHeader={() => header(this)
            }
            imageUrls={images}
            index={index}
          />
        </Modal>
      </Container>
    );
  }
}


function header(state) {
  return (
    <Header style={{ backgroundColor: '#000' }}>
      <Right>
        <Button
          transparent
          onPress={() => { state.setState({ modalVisible: false }); }}
        >
          <Icon name="close-circle" />
        </Button>
      </Right>
    </Header>
  );
}

export default MapScreen;
