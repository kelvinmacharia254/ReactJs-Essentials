import Header from './components/Header/Header.jsx'
import CoreConceptsListItem from './components/CoreConceptsListItem/CoreConceptsListItem.jsx'
import { CORE_CONCEPTS } from "./data.js";

function App(){
    return (
        <>
            <Header/>
            <main>
                <h2>Core Concepts</h2>
                <section id="core-concepts">
                    {/* Display React core concepts in Ul with reusable list item component and props*/}
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