import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base';
import { DrawerMenuButton } from '../components/DrawerMenuButton';

import {
  Anchor, AVText, AVHeader, AVHeader2
} from '../components/text/AVText';
import { AVBadge } from '../components/AVBadge';

class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Důležité informace',
    headerLeft: <DrawerMenuButton />,
  });

  render() {
    return (
      <Container>

        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem>
              <Body>
                <AVHeader>Vysvětlivky k Harmonogramu</AVHeader>
                <View style={{
                  paddingTop: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
                >

                  <AVBadge
                    text="Přednášky"
                    eventType={1}
                  />

                  <AVBadge
                    text="Volnočasové aktivity"
                    eventType={2}
                  />
                  <AVBadge
                    text="Duchovní aktivity"
                    eventType={3}
                  />
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <AVHeader>Obecné</AVHeader>

                <AVText>Náramku na ruce se nezbavuj - díky němu se dostaneš na program nebo do jídelny.</AVText>
                <AVText padding>- Vše důležité se dozvíš na recepci na Stojanově (a na nástěnkách u recepce)</AVText>
                <AVText padding>- budou zde vyvěšené přihlašovací archny na přednášky a workshopy</AVText>
                <AVText padding>- můžeš si zde zapůjčit sportovní náčiní, deky či společenské hry</AVText>
                <AVText padding>- budou zde aktuální informace o zpovědích, duchovních rozhovorech a o setkání s psychoterapeutem a koučem</AVText>
                <AVText padding>- zde ti také odpoví na veškeré dotazy (nebo zjistí odpověď).</AVText>
                <AVText>
Sleduj aktuální informace na
                  <Anchor href="https://www.facebook.com/absolventskyvelehrad/">Facebooku</Anchor>
                  {' '}
a
                  <Anchor href="https://instagram.com/absolventskyvelehrad/">Instagramu</Anchor>
                  {' '}
#av19
                </AVText>
                <AVText>
V případě zdravotních potíží kontaktuj naši zdravotnici Evu Výkrutovou (tel.
                  <Anchor href="tel:+420602281238">602 281 238</Anchor>
)
                </AVText>
                <AVText>Po celou dobu konání AV19 je možné využít Dětský koutek. Hlídání dětí tentokrát nebude zajištěno, můžete se domluvit mezi sebou :)</AVText>
                <AVText>V neděli prosíme o vyklizení pokojů na Stojanově i VDCM do 13 hodin (do závěrečné mše). Věci si můžeš nechat v sále na Stojanově.</AVText>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <AVHeader>Ubytování</AVHeader>
                <AVText>Prosíme o dodržování nočního klidu na ubytování od 22 hodin.</AVText>
                <AVText>Klíče od pokojů na Stojanově nemusíš po dobu AV nechávat na recepci. Před odjezdem je však vrať do kasičky na recepci!</AVText>
                <AVText>Všechny prostory setkání jsou nekuřácké.</AVText>
                <AVText>
                  V pokojích na Stojanově i na VDCM se prosím přezouvej.
                </AVText>
                <AVHeader2>Otevírací doba ubytování</AVHeader2>
                <AVText>Stojanov 7:30 - 22:00</AVText>
                <AVText>VDCM 7:30 - 22:00 (zavřeno během bloků a mší)</AVText>
                <AVHeader2>Noční otevírací doba</AVHeader2>
                <AVText>Vchod bude uzavřen ve 22:00, od této doby budeme dveře otevírat každou půl hodinu až do 2 hod (tzn. ve 22:30, 23:00, 23:30, 00:00, 00:30, 1:00, 1:30, 2:00)</AVText>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <AVHeader>Aktuální aktivita</AVHeader>
                <AVText>
                  - Na přednášky a workshopy se zapisuj do archů vyvěšených na
                  recepci Stojanov.
                </AVText>
                <AVText>
                  - S veškerými dotazy se může obrátit na pořadatele na recepci
                  Stojanov.
                </AVText>
                <AVText>Sleduj informace na Facebooku a Instagramu #av19</AVText>
                <AVText>
                  - V případě zdravotních potíží kontaktujte naší zdravotnici Evu
                  (602 281 238)
                </AVText>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export { HomeScreen };
