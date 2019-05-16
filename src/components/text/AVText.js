/* eslint-disable react/no-multi-comp */
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
          // eslint-disable-next-line react/destructuring-assignment
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
    const { padding, style, bold } = this.props;
    let textStyle;
    if (padding) {
      textStyle = {
        paddingLeft: 10,
        ...style
      };
    }
    if (bold) {
      textStyle = {
        fontFamily: 'exo-bold',
        ...style
      };
    }
    return (
      <Text
        {...this.props}
        style={{
          paddingTop: 10, fontFamily: 'exo', fontSize: 18, color: Colors.black, ...style, ...textStyle
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
    const { style } = this.props;
    const cssStyle = {
      paddingTop: 15, fontFamily: 'exo-bold', fontSize: 22, color: Colors.spaceNavy, ...style
    };
    return <Text {...this.props} style={cssStyle} />;
  }
}

class Anchor extends React.Component {
  _handlePress = () => {
    const { href, onPress } = this.props;
    Linking.openURL(href);
    // eslint-disable-next-line no-unused-expressions, react/destructuring-assignment
    onPress && this.props.onPress();
  };

  render() {
    const { children } = this.props;
    return (
      // eslint-disable-next-line no-underscore-dangle
      <Text {...this.props} style={{ color: Colors.orange, fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={this._handlePress}>
        {children}
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
