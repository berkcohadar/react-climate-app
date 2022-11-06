import Header from "./components/Layout/Header";
import Body from "./components/Layout/Body";
import Footer from "./components/Layout/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <Content/>
      </Body>
      <Footer />
    </div>
  );
}

export default App;

/*

The idea is that data API can provide an easy access point to any data,
and we can make it better for one of the datasets with your help.
Let's for example take the Australia Station dataset, there are quite a few stations.
Can you make a very simple UI, which would give a user some visual information about this dataset? 

What can be done? I would ask you to open your creativity here, but a couple ideas would be:
some regional visualization for stations,
maybe some station groupings, with common information about the dataset and the groups,
some weather variable explanations, maybe some nice plots.

What I would like to see there in general:
1. controls: forms/fields/buttons/lists/tabs etc and their interaction
2. simple and yet interesting visual solutions
3. some UX thought process, given the idea of this interface you come up with

*/
