import Header from './components/Header/Header.jsx'
import CoreConceptsListItem from './components/CoreConceptsListItem/CoreConceptsListItem.jsx'
import TabButtonListItem from "./components/TabButtonListItem/TabButtonListItem.jsx";
import { CORE_CONCEPTS } from "./data.js";
import React from "react";

function App(){

    const [content, setContent] = React.useState('Please click a tab button to show related example.');
    function handleSelect(selectedButton){
        setContent(selectedButton);
        console.log(`${selectedButton} tab clicked`);
    }
    return (
        <>
            <Header/>
            <main>
                <h2>Core Concepts</h2>
                <section id="core-concepts">
                    {/* Display React core concepts in Ul with reusable list item component and props to customize each list item component */}
                    <ul>
                        {/* passing props using object bracket and dot notation*/}
                        <CoreConceptsListItem
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        {/*  pass props using spread operator */}
                        <CoreConceptsListItem {...CORE_CONCEPTS[1]} />
                        <CoreConceptsListItem {...CORE_CONCEPTS[2]} />
                        <CoreConceptsListItem {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    {/* Illustrate React concepts by illustration of how to create tab buttons, props and state */}
                    <h2>Examples</h2>
                    <menu>
                        <TabButtonListItem onSelect={()=>{handleSelect('components')}}>Components</TabButtonListItem>
                        <TabButtonListItem onSelect={()=>{handleSelect('jsx')}}>Jsx</TabButtonListItem>
                        <TabButtonListItem onSelect={()=>{handleSelect('props')}}>Props</TabButtonListItem>
                        <TabButtonListItem onSelect={()=>{handleSelect('state')}}>State</TabButtonListItem>
                    </menu>
                    {content}
                </section>
            </main>
        </>
        )
}
export default App;

/* Core concepts
1. Components:
    - These reusable modules that renders a part of overall app UI.
	- Components can be big or small but must serve a single obvious purpose.
	e.g. The Header components has been designed and styles in its own directory and imported here.

2. JSX:
	- JSX (JavaScript and  XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript.
	- It is commonly used in React.js applications to describe the structure of user interface components.
	- The file have an extension.jsx
	  Writing jsx markup: https://react.dev/learn/writing-markup-with-jsx
	  e.g.The Header component is written in jsx so is the this file App.jsx.

3. Props:

 */