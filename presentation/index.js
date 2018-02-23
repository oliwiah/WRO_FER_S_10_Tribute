// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const people = [
  {
    name:'Maciej Szewczyk',
    text: "jak to... ?"
  },
  {
    name:'Krzysztof Stefański',
    text: "popatrz, narazie jest tak..."
  },
  {
    name:'Andżelika Jezierska',
    text: "Popatrz Tomek jeszcze nie wypił"
  },
  {
    name:'Monika Cilińska',
    text: "dlaczego ja to muszę stylować..."
  },
  {
    name:'Kamila Skonieczna',
    text: "... ja Ci pomogę pokaż"
  },
  {
    name:'Oliwia Hajszprych',
    text:"Przecież to przed chwilą działało!"
  },
  {
  name:  'Michał Kowalski',
  text: "Spokojnie, ja to w końcu ogarnę"
  },
  {
  name:  'Wojciech Nowacki',
  text: "co wy z tym Miliczem"
  },
  {
  name:  'Tomasz Daniel',
  text:"Chyba kupie dwa pączki... bo było za mało mięsa.."
  },
  {
  name:  'Agnieszka Skalska',
  text:"Musimy napisać otulającego div'a"
  },
  {
  name:  'Katarzyna Pastuszka',
  text: "To już koniec?"
  }
]


// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Pachruść...
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          ... kiedy jedno słowo oznacza wszystko ;p
        </Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>Sławni programiści </Heading>
        {people.map((elem,i)=>{
          return <Text key={i} size={6} textColor="secondary">{elem.name}</Text>
        })}
      </Slide>
      <Slide transition={["zoom"]} bgColor="primary">
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                  Jak zapamięta Was mentor;p
                </Text>
              </Slide>
      {people.map((elem,i)=>{
        return <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>{elem.text}</Quote>
            <Cite>{elem.name}</Cite>
          </BlockQuote>
        </Slide>
      })}



      </Deck>
    );
  }
}
