import React from 'react';
import { Text, Linking } from 'react-native';
import Colors from '../../constants/Colors';

class PageHeader extends React.Component {
  render() {
    return <Text {...this.props} style={{ fontFamily: 'exo-bold', fontSize: 30, color: Colors.hanBlue }} />;
  }
}

class EventHeader extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={{
          fontFamily: 'exo-bold', fontSize: 22, color: Colors.black, paddingBottom: 5
        }}
      />
    );
  }
}

class EventTime extends React.Component {
  render() {
    return <Text {...this.props} style={{ fontFamily: 'exo', fontSize: 18, color: Colors.gray }} />;
  }
}

class EventSpeaker extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={{
          fontFamily: 'exo', fontSize: 18, color: Colors.gray, ...this.props.style
        }}
      />
    );
  }
}

class EventPlace extends React.Component {
  render() {
    return <Text {...this.props} style={{ fontFamily: 'exo', fontSize: 18, color: Colors.navy }} />;
  }
}

class AVText extends React.Component {
  render() {
    let { style } = this.props;
    if (this.props.padding) {
      style = {
        paddingLeft: 10,
        ...this.props.style
      };
    }
    if (this.props.bold) {
      style = {
        fontFamily: 'exo-bold',
        ...this.props.style
      };
    }
    return (
      <Text
        {...this.props}
        style={{
          paddingTop: 10, fontFamily: 'exo', fontSize: 18, color: Colors.black, ...style
        }}
      />
    );
  }
}

class AVHeader extends React.Component {
  render() {
    const cssStyle = {
      paddingTop: 5, fontFamily: 'exo-bold', fontSize: 25, color: Colors.hanBlue
    };
    return <Text {...this.props} style={cssStyle} />;
  }
}

class AVHeader2 extends React.Component {
  render() {
    const cssStyle = {
      paddingTop: 15, fontFamily: 'exo-bold', fontSize: 22, color: Colors.spaceNavy
    };
    return <Text {...this.props} style={cssStyle} />;
  }
}

class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} style={{ color: Colors.orange, fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={this._handlePress}>
        {this.props.children}
      </Text>
    );
  }
}


export {
  PageHeader,
  EventHeader,
  EventTime,
  EventSpeaker,
  EventPlace,
  AVText,
  AVHeader,
  AVHeader2,
  Anchor
};
