import React from "react";
import _ from "lodash";

import { Container, Content, Tab, Tabs } from "native-base";

import { CalendarDay } from "../components/CalendarDay";
import { DrawerMenuButton } from "../components/DrawerMenuButton";

import { activeDay } from "../utils/utils";
import style from "../constants/Styles";
import schelude from "../data/schelude";

export class HarmonogramScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: "Harmonogram",
      headerLeft: <DrawerMenuButton />,
      headerTintColor: "black"
    };
  };

  componentDidMount() {
    setTimeout(this._tabs.goToPage.bind(this._tabs, activeDay()));
  }

  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={style.tab.tabBarUnderlineStyle}
          ref={component => (this._tabs = component)}
        >
          <Tab heading="Pátek" {...style.tab}>
            <CalendarDay schelude={schelude.friday} />
          </Tab>
          <Tab heading="Sobota" {...style.tab}>
            <CalendarDay schelude={schelude.saturday} />
          </Tab>
          <Tab heading="Neděle" {...style.tab}>
            <CalendarDay schelude={schelude.sunday} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
