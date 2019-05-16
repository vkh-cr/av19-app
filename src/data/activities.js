// TODO: add all parameters for speakers and find way how to show it
import _ from 'lodash';
import speakers from './speakers';
import place from './places';

function speakerById(id) {
  return _.find(speakers, ['id', id]);
}

function placeById(id) {
  return _.find(place, ['id', id]).place;
}

function getTime(block) {
  switch (block) {
    case 0:
      return 'Pátek 21:00 - xx:xx';
    case 1:
      return 'Sobota 9:00 - 10:30';
    case 2:
      return 'Sobota 10:50 - 12:20';
    case 3:
      return 'Sobota 16:30 - 18:00';
    case 4:
      return 'Sobota 20:00 - xx:xx';
    case 5:
      return 'Neděle 9:00 - 10:00';
    case 6:
      return 'Neděle 10:20 - 11:20';
    case 7:
      return 'Sobota 13:40 - 15:00';
    default:
      return '';
  }
}

export default [
  {
    id: 7,
    name: 'Čajovna',
    speaker: speakerById(0),
    time: 'Pátek večer, sobota večer',
    description:
      'Ve sklepě gymnázia se můžeš zastavit i na výborný čaj a něco dobrého. Chvilku posedět, popovídat si a odpočnout 🙂',
    day: 1,
    block: 0,
    type: 2,
    place: placeById(8),
    capacity: 999
  },
  {
    id: 8,
    name: 'Ranní rozcvičky',
    speaker: speakerById(17),
    time: 'Každé ráno v 7:15',
    description:
      'Ve zdravém těle, zdravý duch. Aby mohlo tělo načerpat duchovní osvěžení, je potřeba ho dobře nastartovat na ranní rozcvičce.',
    day: 1,
    block: null,
    type: 2,
    place: placeById(14),
    capacity: 999
  },
  {
    id: 9,
    name: 'Čajovna',
    speaker: speakerById(0),
    time: 'Pátek večer, sobota večer',
    description:
      'Ve sklepě gymnázia se můžeš zastavit i na výborný čaj a něco dobrého. Chvilku posedět, popovídat si a odpočnout 🙂',
    day: 0,
    block: null,
    type: 2,
    place: placeById(3),
    capacity: 999,
  },
  {
    id: 10,
    name: 'Čajovna',
    speaker: speakerById(0),
    time: 'Pátek večer, sobota večer',
    description:
      'Ve sklepě gymnázia se můžeš zastavit i na výborný čaj a něco dobrého. Chvilku posedět, popovídat si a odpočnout 🙂',
    day: 1,
    block: 4,
    type: 2,
    place: placeById(3),
    capacity: 999,
  },
  {
    id: 100,
    name: 'Čo je dobre vedieť pred manželstvom',
    speaker: speakerById(10),
    time: getTime(1),
    description: 'Dnes si väčšina mladých ľudí vyberá z dvoch možností. Žiť spolu bez manželstva alebo vstúpia do manželstva nepripravení. Čo je manželstvo a ako sa naň treba pripraviť? Prečo je manželstvo lepšia voľba akožiť spolu bez záväzku? Na tieto otázky aj mnohé iné radi zodpovieme...',
    day: 1,
    block: 1,
    type: 1,
    place: placeById(10),
    capacity: 30
  },
  {
    id: 101,
    name: 'Změnit srdce. Změnit město. Změnit svět… Žít evangelium v přátelství s chudými.',
    speaker: speakerById(12),
    time: getTime(1),
    description: 'Z modlitby a čtení Božího slova vychází hlubší láska k chudým, která vytváří základ pro mírové soužití. Díky přátelství s Bohem a s chudými práce komunity zahrnuje i vyjednávání mírových dohod pro země, kde je stále válka, a také vedení mezináboženského dialogu. Proto komunita stojí na 3 pilířích: modlitba, chudí a mír. Nyní má na celém světě více než 65 000 členů a působí v 72 zemích. V České republice je od roku 1993, kde se zaměřuje zejména na službu lidem bez domova. Před 3 lety vznikla v Praze další služba, kterou mají na starosti mladí lidé.',
    day: 1,
    block: 1,
    type: 1,
    place: placeById(11),
    capacity: 30
  },
  {
    id: 102,
    name: 'Svoboda v Kristu',
    speaker: speakerById(9),
    time: getTime(1),
    description: 'Svoboda je základním darem, který jsme od Krista dostali. Vychází z velikonoční události a má výrazně křestní charakter. Přijímá se vírou, živí nadějí a osvědčuje láskou. Tu svobodu  nám vydobyl Kristus (Gal 5,1). Svobodný život v Kristu předpokládá odvahu převzít zodpovědnost za naše povolání. Svoboda je vždy spojena s ohledem na prospěch bližního. K tomu je potřeba žít zásadní vztah – vztah k Bohu. Svobodné křesťanství je statečné, kreativní, angažované. I zdravě kritické. Předpokladem pravdivé a láskyplné kritické angažovanosti křesťana je pokora – před Bohem i lidmi.',
    day: 1,
    block: 1,
    type: 1,
    place: placeById(5),
    capacity: 40
  },
  {
    id: 103,
    name: 'Rodina je v krizi. Ale co s tím?',
    speaker: speakerById(7),
    time: getTime(1),
    description: 'Rodina je hodně skloňované téma, kolem kterého je spousta otázek. Host rozumí preventivní sociální práci v rodině, postupy sociálních pracovníků při ohrožení dítěte a doprovázení dítěte do nové rodiny/ústavu. „Ani já systému nerozumím a z některých věcí mi jde hlava kolem. Už o něm ale něco vím a chci se o to podělit“.',
    day: 1,
    block: 1,
    type: 1,
    place: placeById(12),
    capacity: 30
  },
  {
    id: 104,
    name: 'S vírou do všech končin světa aneb Zeptej se svého nuncia!',
    speaker: speakerById(19),
    time: getTime(1),
    description: 'Charles Daniel Balvo, novopečený apoštolský nuncius v České republice, rodák z amerického Brooklynu, se s námi podělí o své zkušenosti z diplomatických služeb Vatikánu v Ghaně, Ekvádoru, Chile, v České republice, Jordánsku a Litvě, o práci nuncia na Novém Zélandu, Cookových ostrovech, ostrově Fidži, Marshallových ostrovech, Kiribati, ve Federativních státech Mikronésie, Nauru, Palau, na ostrově Samoa, Tongu a Vanuatu a Keni a Súdánu. Jak se na těchto místech prožívá víra? V čem tyto zkušenosti mohou být pro Středoevropana inspirující?',
    day: 1,
    block: 1,
    type: 1,
    place: placeById(1),
    capacity: 80
  },
  {
    id: 105,
    name: 'Je rozhodnutí založit rodinu hrdinstvím?',
    speaker: speakerById(11),
    time: getTime(2),
    description: 'Je pozoruhodné, že rodinná přání podle statistik značná část mladých lidí neuskuteční. Cílem přednášky je zamyšlení nad možnými příčinami a častými úskalími. Úvaha bude vycházet z křesťanského pohledu na současnou politickou situaci u nás, i  s ohledem na volby do Evropského parlamentu.',
    day: 1,
    block: 2,
    type: 1,
    place: placeById(5),
    capacity: 40,
  },
  {
    id: 106,
    name: 'Dobrovolníkem na kraji světů',
    speaker: speakerById(14),
    time: getTime(2),
    description: 'Dobrovolníci, kteří strávili rok svého života v rozvojové zemi vám představí jak se pro tuto službu rozhodli, kde ji absolvovali, co na ní dělali a co jim do života přinesla. Zažili rok plný výzev, zkoušek, radostí a jejich hlavní cíl byl zcela obyčejný… mít rád ty děti a mladé, s kterými se denně setkávali a snažit se jim dát to nejlepší ze sebe. Na přednášce se vám představí dobrovolníci z Ekvádoru, Zambie, Bulharska a možná i další…. Dozvíte se také základní informace o programu Adopce nablízko a o možnosti přihlásit se do kurzu dobrovolnictví.',
    day: 1,
    block: 2,
    type: 1,
    place: placeById(9),
    capacity: 30,
  },
  {
    id: 107,
    name: 'Být člověkem a společností s hodnotami po dvou totalitách?',
    speaker: [speakerById(2), speakerById(3)],
    time: getTime(2),
    description: 'Známe je z televize, textů i sociálních sítí - dnes se jich však můžeme ptát přímo, a to na jejich bohaté životní zkušenosti, tak na fungování jednotlivce v současném světě. Beseda zaměřená na zapojení člověka ve společnosti, na současné tendence a tlaky a jejich kořeny, nevyléčené rány z problematické minulosti státu, na odpovědnost člověka “viditelného” a aktivního na formování společnosti a jejího veřejného mínění, přinese i postřehy z bádání Jiřího Padevěta o životě na našem území během nacismu a komunismu či diskuzi nad tím, co jsou křesťanské hodnoty, o kterých se tolik mluví.',
    day: 1,
    block: 2,
    type: 1,
    place: placeById(7),
    capacity: 80
  },
  {
    id: 108,
    name: 'Vztah jako důvod a  základ stvoření',
    speaker: speakerById(21),
    time: getTime(2),
    description: 'Vztah je láska, nic dalšího vztahem není. Láska je alfa i omega lidské existence (bez lásky není člověka). Bůh dává příležitost k naplnění lásky – smyslu lidství (svoboda…). Druhy lásky, hierarchie lásky, projevy lásky. Různá provinění proti lásce…',
    day: 1,
    block: 2,
    type: 1,
    place: placeById(3),
    capacity: 50
  },
  {
    id: 109,
    name: 'Patagonie a jiná zákoutí',
    speaker: speakerById(23),
    time: getTime(7),
    description: 'Jaké to bylo v Patagonii? Nateklo mi do bot? A jaké to je vlastně stále pendlovat mezi odlišnými světy? Je vůbec možné poznat cizí zemi skrz cestování nebo je lepší se tam rovnou nastěhovat a najít si práci? Kdy je lepší cestovat sám a kdy s partnerem? Kolik toho člověk vlastně unese na zádech a proč by k tomu měl tahat ještě hudební nástroje? Je španělština všude španělštinou? Vypadá to v Patagonii jako na Aljašce? O tom a možná taky úplně o něčem jiném bych si s Vámi v sobotu ráda popovídala.',
    day: 1,
    block: 7,
    type: 1,
    place: placeById(10),
    capacity: 30,
  },
  {
    id: 110,
    name: 'Uzdravuje Bůh i dnes?',
    speaker: speakerById(18),
    time: getTime(3),
    description: 'Uzdravuje Bůh i dnes? Uzdraví Bůh i mě? A co to vlastně znamená, že Bůh uzdravuje? Odpovědi na tyto otázky budeme hledat v Písmu svatém, v církevních dokumentech, v dějinách církve i v životech našich současníků.',
    day: 1,
    block: 3,
    type: 1,
    place: placeById(5),
    capacity: 50,
  },
  {
    id: 111,
    name: 'Slečna Krásná a pan Božský, aneb Jak ideál vtělit do reality',
    speaker: speakerById(13),
    time: getTime(5),
    description: 'Představa naší (budoucí) rodiny souvisí s tím, jakým způsobem vnímáme vztah, sami sebe, události a jaký máme postoj ke změně v našem životě. Podle jakých kritérií hledáme ideálního partnera a tvoříme ideál o sobě v partnerském vztahu? Prozkoumáme svůj ideál (já), naše očekávání od ideálního partnera (ty) a ukážeme v kontextu, jaké mohou být sdílené cíle a hodnoty v naší (budoucí) rodině.',
    day: 2,
    block: 5,
    type: 1,
    place: placeById(10),
    capacity: 30
  },
  {
    id: 112,
    name: 'Cesty k radosti',
    speaker: speakerById(5),
    time: getTime(5),
    description: 'Celá řada věcí v našem životě je jinak, než bychom si přáli. Jsme často zklamáni svými blízkými, politickou situací, stavem společnosti, zlem ve světě apod. V naší společnosti roste navzdory nebývalému blahobytu spotřeba antidepresiv. Umíme se bavit, ale ztratili jsme schopnost se radovat. Jaké cesty křesťanská spiritualita nabízí člověku, aby dosáhl opravdového štěstí a naplnění života? Dá se naučit radovat?',
    day: 2,
    block: 5,
    type: 1,
    place: placeById(3),
    capacity: 70,
  },
  {
    id: 113,
    name: '„Postav dům, zasaď strom a zploď syna – ideálně do třiceti!“',
    speaker: speakerById(27),
    time: getTime(5),
    description:
      'Život nikdy nebyl snadnější než dnes, nikdy jsme neměli větší možnosti ani víc volného času. Je lepší cestovat, studovat, prokrastinovat nebo se vrhnout do rodinného života? Jaká je přirozená role chlapa ve společnosti a v rodině? Inspiraci nabídne Jan Balák, Challenger, otec, zakladatel Albánské výzvy, cestovatel, konstruktér, majitel stavební minifirmy i autor myšlenky domu pro mladé páry Solodum.cz.',
    day: 2,
    block: 5,
    type: 1,
    place: placeById(5),
    capacity: 50
  },
  {
    id: 114,
    name: 'Jak oživovat prostor kolem sebe? ',
    speaker: speakerById(15),
    time: getTime(5),
    description: 'Jak realizovat své dary? Jak najít kuráž k tomu měnit věci, začít něco zcela nového? Jak oživovat město a společenství, v němž žijeme? Jaká je cesta od zdánlivě bláznivého nápadu k jeho realizaci? I toho se dotkne beseda s autorem mnohých projektů, které vnáší umění do veřejného prostoru.',
    day: 2,
    block: 5,
    type: 1,
    place: placeById(7),
    capacity: 70
  },
  {
    id: 115,
    name: 'Jak jsem se nestal politikem',
    speaker: speakerById(1),
    time: getTime(6),
    description: 'Povídání o kadeřníkovi a zároveň ženatém duchovním, který nechtěl být zbabělcem a tak souhlasil s kandidaturou na senátora. Spojení práce, duchovního a rodinného života s kampaní do Senátu PČR. Co mu  setkání s nejvyšší politikou dalo a vzalo? Odpovědi si přijďte poslechnout.',
    day: 2,
    block: 6,
    type: 1,
    place: placeById(5),
    capacity: 50
  },
  {
    id: 116,
    name: 'Modlitba činem (prací)',
    speaker: speakerById(26),
    time: getTime(6),
    description: 'Jak souvisí modlitba s prací? Proč nelze oddělit akci od kontemplace?\nJak spojit modlitbu a všední činy vlastního života?\nNabízí zamyšlení a sdílení nad zásadními tématy života křesťana.',
    day: 2,
    block: 6,
    type: 1,
    place: placeById(9),
    capacity: 30
  },
  {
    id: 117,
    name: 'Hamlet i Romeo, sportovec i křesťan, Dr. Strange i Tolstého Nikolaj',
    speaker: speakerById(31),
    time: getTime(6),
    description: 'Křesťan a talent, sláva a umění. Jak rozpoznat své dary a dobře s nimi naložit? Jak zůstat autentický? Jak se umělecky projevit? Jak se snoubí kariéra úspěšného herce a dabéra s životem křesťana? Co vnáší víra do této kreativní a exponované profese? Nakolik je pro lidi, kteří v něčem prorazí, zavazující být pro ostatní vzorem? Vnímají tuto odpovědnost? Může sláva měnit život, případně měnit charakter? Jak v současném světě neztrácet víru? Jak se ve společnosti uplatnit? Jaká dilemata musí křesťan v hereckém světě řešit? I kolem těchto témat zakrouží moderovaná diskuze s usměvavým mladým hercem.',
    day: 2,
    block: 6,
    type: 1,
    place: placeById(7),
    capacity: 70
  },
  {
    id: 118,
    name: 'Hnutí Mary’s Meals - jednoduché řešení hladu ve světě',
    speaker: speakerById(6),
    time: getTime(1),
    description: 'Nikdo z nás si nevybral v jaké zemi a v jakých podmínkách se narodí. Můžeme v klidu žít a snažit se nevidět životy jiných lidí? Opravdu neexistuje možnost, jak efektivně řešit problémy světa? Pojďme se zamyslet nad tím, jak by se dal vyřešit jeden z největších problémů – hlad.',
    day: 2,
    block: 6,
    type: 1,
    place: placeById(10),
    capacity: 30
  },
  {
    id: 119,
    name: 'Vězněm i s vězeňským duchovním, jezuitou, poutníkem, chartistou…',
    speaker: speakerById(4),
    time: getTime(7),
    description: 'Během debaty s populárním jezuitou, spisovatelem a člověkem, který zná život za mřížemi z vlastní zkušenosti politického vězně i pozice duchovního, probereme otázky víry, osobní odpovědnosti, statečnosti, povolání zvládání nemoci, odpuštění, viny, zapojení ve společnosti. Během přijde i na vzpomínky na Havla, Kajínka i pěší poutě.',
    day: 1,
    block: 7,
    type: 1,
    place: placeById(5),
    capacity: 50
  },
  {
    id: 200,
    name: 'Kostelní rétorika, aneb jak se správně rozmluvit a přečíst veřejně text',
    speaker: speakerById(20),
    time: getTime(1),
    description: 'Krátký workshop, kde si společně projdeme základní rozmlouvací techniku (artikulační, dechovou, posazení hlasu), dále si vyzkoušíme základní metodu, jak zpracovat strach z vystoupení před publikem, nahlédneme společně do základních principů rétoriky. A na závěr si ukážeme, jak si připravit text, který budeme číst v kostele a názorně si dané čtení každý vyzkouší na mikrofon.',
    day: 1,
    block: 1,
    type: 2,
    place: placeById(9),
    capacity: 12
  },
  {
    id: 201,
    name: 'Modlitba tancem na téma “Ale co já?”',
    speaker: speakerById(28),
    time: getTime(2),
    description: 'Společenství žen z Brna - Biskupské. Modlíme se tancem, zpěvem, rozjímáním nad písmen, svěřujeme Pánu naše životní partnery a povolání a všechny potřebné.  "Ale co já?" Název našeho workshopu pro vás. Ale co já, jaký jsem já v srdci. Jaké je moje srdce. Srdce jako na dlani - vyzkoušíme si vlastní modlitbu pohybem a tancem a také společně vytvoříme taneční chválu našemu Pánu. (Doporučujeme pohodlné oblečení.)',
    day: 1,
    block: 2,
    type: 2,
    place: placeById(10),
    capacity: 20
  },
  {
    id: 202,
    name: 'Krav Maga – hodina a půl sebeobrany',
    speaker: speakerById(16),
    time: getTime(2),
    description:
      'Krav maga patří mezi nejúčinnější sebeobranné systémy a je používaná mnoha armádními i policejními jednotkami. Zároveň je pro svou jednoduchost oblíbená mezi lidmi, kteří chtějí zlepšit svou fyzičku, zvýšit sebevědomí a chtějí se naučit bránit. Přijďte si na hodinu a půl zacvičit s Honzou Adamčíkem, který absolvoval instruktorský kurz pod vedením Mateuzse Soga a nyní vede tréninky Krav Maga v Ostravě.',
    day: 1,
    block: 2,
    type: 2,
    place: placeById(11),
    capacity: 15
  },
  {
    id: 203,
    name: 'Bibliodrama',
    speaker: speakerById(22),
    time: 'Sobota 13:40 - 15:00 + 16:30 - 18:00',
    description: 'Jedná se o „herecké“ rozvedení nazíravého způsobu meditace svatého Ignáce z Loyoly, při kterém excercitant rozjímá nad postoji a motivacemi osob vyskytujících se ve vybraných evangelijních situacích. Účastníci se budou v malých skupinách (4 – 5 členů) pokoušet znázornit jednání těchto osob (svědků Ježíšových činů nebo postav z jeho podobenství), a tím si hlouběji uvědomit a zakusit motivace a pocity, které formovaly jejich postoje a jednání. \n\nOproti běžnému čtení biblického textu je tento způsob rozšířený o fyzickou zkušenost ztělesňování jednání vybrané postavy (prožitek, který se přitom dostavuje je mnohem intenzivnější). Další odlišností je nezvyklý úhel pohledu na biblickou událost: například očima postavy, jež s Ježíšovým postojem nesouhlasí.',
    day: 1,
    block: 7,
    type: 2,
    place: placeById(9),
    capacity: 12
  },
  {
    id: 204,
    name: 'Nenásilná komunikace',
    speaker: speakerById(24),
    time: getTime(3),
    description: 'Eva Čepelková je manželka a matka, lektorka angličtiny a překladatelka. Aby se na mateřské nezbláznila, prochází výcvikem Mediace pro život. Má ráda nenásilnou komunikaci a chtěla by se podělit o to, co pro ni znamená.',
    day: 1,
    block: 3,
    type: 2,
    place: placeById(10),
    capacity: 12
  },
  {
    id: 205,
    name: 'Beauty Workshop - Jak je vnímaná krása ženy u nás a ve světě?',
    speaker: speakerById(25),
    time: getTime(3),
    description: 'Co je opravdovým kouzlem krásy a jakým způsobem může líčení uškodit či naopak změna vizáže může proměnit přístup k sobě sama a tím zlepšit kvalitu života? Jak to vypadá v praxi, když si jedna žena jde za svým cílem – žít své sny? Pokud se chceš zasmát, ponaučit, obdivovat fotografie s příběhy z dalekých cest a především proniknout do tajemství trendy technik  makeupartistů o dokonale přirozeném vzhledu na každý den, Leona tě naučí krok po kroku zvýraznit tvé přednosti.',
    day: 1,
    block: 3,
    type: 2,
    place: placeById(11),
    capacity: 20,
  },
  {
    id: 206,
    name: 'Intercross – trošku netradiční sport',
    speaker: speakerById(17),
    time: getTime(3),
    description:
      'Chcete si vyzkoušet nějaký nový sport? Intercross by mohl být to pravé. Je to bezkontaktní týmová míčová hra, která vzešla z lakrosu. V podstatě vzdušný hokej 🙂 Je to elegantní sport, kde nevyhrajete díky rychlosti nebo síle, ale díky společnému úsilí o vítězství. Intercross nás naučí Jakub Konček.',
    day: 1,
    block: 3,
    type: 2,
    place: placeById(14),
    capacity: 20,
  },
  {
    id: 207,
    name: 'Speed dating',
    speaker: speakerById(0),
    time: getTime(3),
    description:
      'Jedinečná příležitost k seznámení v bezpečném prostředí mezi mladými nezadanými věřícími a zdarma. Při speed datingu si naproti sobě posedají muži a ženy. Mají několik minut na to, aby se vzájemně poznali, a po uplynutí doby se muži přesouvají k vedlejšímu stolečku, aby poznali další ženu. Oba si zapíšou, zda si padli do oka či ne. Pořadatelé na konci předají kontakty mezi dvojicemi, které si padly do oka. A ještě historická zajímavost: Rychlé rande vymyslel rabín Yaacov Deyo, který chtěl zvýšit počet židovských svateb. (Že z toho bude svatba ale rozhodně neslibujeme.)',
    day: 1,
    block: 3,
    type: 2,
    place: placeById(8),
    capacity: 30
  },
  {
    id: 208,
    name: 'Setkání regionů',
    speaker: speakerById(0),
    time: 'Sobota 19:30 - 20:00',
    description: 'Cítíme, že každý mladý člověk potřebuje společenství, kam patří a kdese cítí doma. Mnohdy se v záplavě informací ztrácí kontakt a najít dobré společenství je dřina. Nabízíme ti prostor, kde se můžeš potkat s dalšími věřícími (třeba i z tvého regionu) a domluvit se s nimi na pravidelném setkávání či jiné aktivitě. Věříme, že v každém z nás je obrovský potenciál a společně dokážeme velké věci! Pojďme do toho!',
    day: 1,
    block: 4,
    type: 2,
    place: placeById(8),
    capacity: 999,
  },
  {
    id: 209,
    name: 'Posezení u cimbálu',
    speaker: speakerById(0),
    time: getTime(4),
    description:
      'Zveme tě na pohodový večer ve sklepě gymnázia. Čeká tě kvalitní víno vyráběné tradiční metodou v rodinném Vinařství Pavel Husák, o kterém si na baru můžeš popovídat přímo s vinařem. K tanci i poslechu zahraje cimbálová muzika Slačáci.',
    day: 1,
    block: 4,
    type: 2,
    place: placeById(8),
    capacity: 999,
  },
  {
    id: 210,
    name: 'Poprvé na Velehradu',
    speaker: speakerById(0),
    time: 'Pátek 20:00 - 21:00',
    description: 'Jsi poprvé na Velehradu? Chceš se seznámit s okolím a třeba dalšími lidmi, abys AV prožil ve společenství? Přidej se k nám na poznávací projížďku po Velehradu. Sejdeme se hned po mši svaté venku, před Stojanovem (hlavní budovou).',
    day: 0,
    block: 0,
    type: 2,
    place: placeById(14),
    capacity: 999,
  },
  {
    id: 211,
    name: 'Swinguj do hodiny',
    speaker: speakerById(29),
    time: 'Sobota 20:00 - 21:00',
    description: 'Na workshopu tě naučíme základům swingového tance Lindy Hop, což  je tanec, který se nejčastěji tančil na swingovou hudbu. Vznikl spontánně na tančírnách v Harlemu v New Yorku mezi 20-30. lety 20. století.  Jde o společenský tanec, často veselý a energický, u kterého se střídají partneři. Je ideální na to se pořádně vyřádit a odreagovat! Dresscode: pohodlné oblečení, obuv – nízké podpatky.',
    day: 1,
    block: 4,
    type: 2,
    place: placeById(7),
    capacity: '???'
  },
  {
    id: 212,
    name: 'Strachy a strašáci, co limitují naše životy',
    speaker: speakerById(30),
    time: getTime(5),
    description: 'Pakliže máme plně vyvinuté sebevědomí, jsme si dobře vědomi svých nedostatků i silných stránek. Přesto někdy není snadné vykročit vpřed. Co nám brání, a co nás posiluje?.. Workshop nebude přednáškový, ale budeme pracovat s vašimi konkrétními vstupy a situacemi. ',
    day: 2,
    block: 5,
    type: 2,
    place: placeById(1),
    capacity: 10
  },
  {
    id: 213,
    name: 'Netradiční sporty - frisbee',
    speaker: speakerById(17),
    time: getTime(6),
    description: 'Frisbí. Frisbíčko. Hážeš, hraješ, makáš, směješ se. Dojdi, bude sranda.',
    day: 2,
    block: 6,
    type: 2,
    place: placeById(14),
    capacity: 20,
  },
  {
    id: 214,
    name: 'Sport i deskovky',
    speaker: speakerById(0),
    time: 'Téměř kdykoliv',
    description:
      'V době poledního klidu si nabsa registraci můžete zapůjčit deky, deskové hry i sportovní náčiní. Velehrad nabízí spoustu prostoru pro aktivní odpočinek.',
    day: 1,
    block: 7,
    type: 2,
    place: placeById(4),
    capacity: 999,
  },
  {
    id: 215,
    name: 'Strachy a strašáci, co limitují naše životy',
    speaker: speakerById(30),
    time: getTime(6),
    description: 'Pakliže máme plně vyvinuté sebevědomí, jsme si dobře vědomi svých nedostatků i silných stránek. Přesto někdy není snadné vykročit vpřed. Co nám brání, a co nás posiluje?.. Workshop nebude přednáškový, ale budeme pracovat s vašimi konkrétními vstupy a situacemi. ',
    day: 2,
    block: 6,
    type: 2,
    place: placeById(1),
    capacity: 10
  },
  {
    id: 300,
    name: 'Chvály',
    speaker: speakerById(0),
    time: getTime(0),
    description: 'Večer chval můžeš prožít společně i s chválovou kapelou Lamačské chvály ze Slovenska. Jejich touhou je uctívat a chválit Boha, jedině on je jediný schopen naslouchat vždy a všude. Když se Lamačských chval zeptáš, kdo je to publikum pro které chtějí hrát, odpoví Ti - je to Bůh, neboť on dokáže naslouchat stále. A tak pokud to i Tebe táhne, přijď a odevzdej se. Cílem chval jsou prorocké chvály a jejich šíření se všude.',
    day: 0,
    block: 0,
    type: 3,
    place: placeById(7),
    capacity: 999,
  },
  {
    id: 301,
    name: 'Přímluvná modlitba',
    speaker: speakerById(32),
    time: getTime(3),
    description: 'Existuje mnoho způsobů modlitby. Patří mezi ně i modlitba přímluvná, která vytryskne naprosto spontánně, když se v člověku setkají víra v Boha a láska k druhým lidem: Víra v Boha, protože přímluvou vyznáváme, že Bůh může a chce vykonat pro druhého dobro neskonale větší, než jakého je schopen člověk. A láska k bližnímu, protože nebýt lhostej ný k nouzi druhého a chtít pro druhé dobro je projevem lásky. V mnoha  případech totiž chceme pro někoho skutečně to nejlepší, ale nemůže me mu to dát - zde se otevírá prostor pro přímluvnou modlitbu.',
    day: 1,
    block: 3,
    type: 3,
    place: placeById(3),
    capacity: 56
  },
  {
    id: 302,
    name: 'Taizé, tichá adorace',
    speaker: speakerById(0),
    time: getTime(4),
    description: '',
    day: 1,
    block: 4,
    type: 3,
    place: placeById(3),
    capacity: 999
  },
];
