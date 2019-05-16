import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base';
import DrawerMenuButton from '../components/DrawerMenuButton';
import {
  AVHeader, AVText
} from '../components/text/AVText';


class SpiritScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Duchovní program',
    headerLeft: <DrawerMenuButton />,
  });

  render() {
    return (
      <Container>

        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem>
              <Body>
                <AVHeader>Motto AV19</AVHeader>
                <AVText>Nemyslím, že bych již byl u cíle anebo již dosáhl dokonalosti; běžím však, abych se jí zmocnil, protože mne se zmocnil Kristus Ježíš. (Filipským 3, 12)</AVText>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <AVText>Celým setkáním nás bude provázet 3. kapitola Filipským, a především výše zmíněný úryvek. Každý den společně prožijeme mši svatou, chybět nebudou ani ranní modlitby, o duchovní program bude postaráno i večer. </AVText>
                <AVText>
                  Doprovázet nás bude kněz Jan Pacner z Brna, se kterým, jakožto i dalšími kněžími, se můžeš setkat také při svátosti smíření či duchovních rozhovorech. K dispozici k rozhovorům budou i další zasvěcené osoby, všechny poznáš podle symbolu naslouchajícího ucha. Když je potkáš a budeš mít něco na srdci, neboj se je oslovit. Bližší informace o místě zpovědí a duchovních rozhovorů na daný den dostaneš na
                  <AVText bold> nástěnce u recepce Stojanov.</AVText>
                </AVText>
                <AVText>
                  Pokud rád/a chválíš Pána hudbou a zpěvem, neměly by ti uniknout páteční večerní
                  <AVText bold> Lamačské chvály</AVText>
                  {' '}
                  nebo sobotní též večerní modlitby se
                  <AVText bold> zpěvy z Taizé</AVText>
                  . Během jejich konání bude možné využít přímluvné modlitby.
                </AVText>
                <AVText>
                  Během celého setkání se můžeš
                  <AVText bold> vydat na malou pouť po okolí</AVText>
                  , mapka se zastaveními k zamyšlení a hlubšímu rozjímání nad mottem letošního AV je vyvěšena na recepci nebo si ji můžeš
                  <AVText bold> otevřít tady v aplikaci</AVText>
                  . Můžeš se těšit na celkem čtyři zastavení, na nichž tě čekají úryvky z Písma, otázky k zamyšlení, modlitba a jeden delší úryvek z Božího slova k rozjímání. Jednotlivá zastavení na sebe navazují, a proto ducháčci doporučují absolvovat je v určeném pořadí. K nasávání rovněž vybízí atmosféra místa, které z hlediska osídlení a vyznávání Pána sahá hluboko do dějin našeho národa. Nech se alespoň na chvíli unést ze současné každodennosti a spolu s celou krajinou chval v srdci Hospodina.
                </AVText>
              </Body>
            </CardItem>
          </Card>
          <View style={{ padding: 10 }} />
        </Content>
      </Container>
    );
  }
}

export default SpiritScreen;
