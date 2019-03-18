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
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start"
    }
  },
  badge: {
    style: {
      marginTop: 3,
      marginRight: 3
    },
    backgroundColor: [Color.yellow, Color.blue, Color.green],
    color: [Color.black, Color.white, Color.white],
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
      color: Color.mainColor
    },
    activeTabStyle: {
      backgroundColor: Color.white
    },
    activeTextStyle: {
      color: Color.navActive
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
      fontSize: 20
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
};
