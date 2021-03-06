import Color from './Colors';

export default {
  textContent: {
    color: Color.mainColor
  },
  container: {
    minHeight: 50,
    width: '100%'
  },
  badgeView: {
    style: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '95%'
    }
  },
  badge: {
    backgroundColor: [Color.av_grey, Color.av_yellow, Color.av_orange, Color.av_grey],
    color: [Color.black, Color.black, Color.white, Color.black],
  },
  tab: {
    tabStyle: {
      backgroundColor: '#fff'
    },
    textStyle: {
      color: Color.mainColor,
      fontFamily: 'exo'
    },
    activeTabStyle: {
      backgroundColor: Color.white
    },
    activeTextStyle: {
      color: Color.navActive,
      fontFamily: 'exo'
    },
    tabBarUnderlineStyle: {
      backgroundColor: Color.navBackground
    },
    borderBottomColor: {
      color: Color.mainColor
    }
  },
  activity: {
    header: {
      fontSize: 20,
      paddingTop: 0,
    },
    icon: {
      fontSize: 50
    }
  },
  drawer: {
    style: {
      height: 200,
      backgroundColor: Color.mainColor
    }
  },
  header: {
    style: {

    },
  },
  time: {
    style: {
      color: Color.navy,
      fontWeight: 'bold'
    }
  }
};
