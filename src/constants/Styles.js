import Color from "./Colors";

export default {
  textContent: {
    color: Color.mainColor
  },
  container: {
    minHeight: 50,
    width: "100%"
  },
  badgeView: {
    style: {
      flex: 1,
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "flex-start"
    }
  },
  badge: {
    style: {
      marginTop: 3,
      marginRight: 3
    },
    backgroundColor: [Color.grassGreen, Color.goldenBay, Color.warmOrange, Color.grassGreen],
    color: [Color.white, Color.black, Color.white, Color.white],
    text: {
      style: {
        fontSize: 15,
        lineHeight: 30
      }
    }
  },
  tab: {
    tabStyle: {
      backgroundColor: "#fff"
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
      fontWeight: "bold"
    }
  }
};
