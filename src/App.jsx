import { useState, Fragment} from 'react';
import {CORE_CONCEPTS} from "./data.js"
import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx"
import TabButton from "./components/TabButton/TabButton.jsx"
import { EXAMPLES } from './data.js';


function App() {
  const [ selectedTopic,setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  return (
    // <div>
    //   <Header></Header>
    //   <main>
    //     <h2>Reusable Components Example</h2>
    //     <section id="core-concepts">
    //       <ul>
    //       <CoreConcepts {...CORE_CONCEPTS[0]} ></CoreConcepts>
    //       <CoreConcepts {...CORE_CONCEPTS[1]} ></CoreConcepts>
    //       <CoreConcepts {...CORE_CONCEPTS[2]} ></CoreConcepts>
    //       <CoreConcepts {...CORE_CONCEPTS[3]} ></CoreConcepts>
    //     </ul>
    //     </section>
    //     <section id="examples">
    //       {/* Button Examples To be added and then also props.children */}
    //       <menu>
    //         <TabButton onSelect={()=>{handleSelect("Components")}}>Components</TabButton>
    //         <TabButton onSelect={()=>{handleSelect("JSX")}} >JSX</TabButton>
    //         <TabButton onSelect={()=>{handleSelect("Props")}} >Props</TabButton>
    //         <TabButton onSelect={()=>{handleSelect("State")}} >State</TabButton>
    //       </menu>
          
    //         {!selectedTopic ? <p>Please Select a Topic</p>: null}
    //         { selectedTopic ? (<div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //         <p>{EXAMPLES[selectedTopic].description}</p>
    //         <pre>
    //           <code>{EXAMPLES[selectedTopic].code}</code>
    //         </pre>
    //         </div>) : null}
    //     </section>
    //   </main>
    // </div>
    // Other way to return the above is uing fragments and not adding extra elemtsn on the script
    <Fragment>
      <Header></Header>
      <main>
        <h2>Reusable Components Example</h2>
        <section id="core-concepts">
          <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} ></CoreConcepts>
          <CoreConcepts {...CORE_CONCEPTS[1]} ></CoreConcepts>
          <CoreConcepts {...CORE_CONCEPTS[2]} ></CoreConcepts>
          <CoreConcepts {...CORE_CONCEPTS[3]} ></CoreConcepts>
        </ul>
        </section>
        <section id="examples">
          {/* Button Examples To be added and then also props.children */}
          <menu>
            <TabButton buttonClick={selectedTopic==="Components"} onSelect={()=>{handleSelect("Components")}}>Components</TabButton>
            <TabButton buttonClick={selectedTopic==="JSX"} onSelect={()=>{handleSelect("JSX")}} >JSX</TabButton>
            <TabButton buttonClick={selectedTopic==="Props"}onSelect={()=>{handleSelect("Props")}} >Props</TabButton>
            <TabButton buttonClick={selectedTopic==="State"} onSelect={()=>{handleSelect("State")}} >State</TabButton>
          </menu>
          
            {!selectedTopic ? <p>Please Select a Topic</p>: null}
            { selectedTopic ? (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>) : null}
        </section>
      </main>
    </Fragment>



  );
}

export default App;
