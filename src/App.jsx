import Header from './components/Header/Header.jsx'
import CoreConceptsExampleSection from "./components/CoreConceptsExampleSection/CoreConceptsExampleSection.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection.jsx";


function App(){
    return (
        <>
            <Header/>
            <main>
                <h2>Core Concepts</h2>
                <CoreConceptsSection/>
                <CoreConceptsExampleSection/>
            </main>
        </>
        )
}
export default App;

/* Core concepts
1. Components:
    - These reusable modules that renders a part of overall app UI.
	- Components can be big or small but must serve a single obvious purpose.
	e.g. The Header components has been designed and styles in its own directory and imported here in App.jsx for rendering.

2. JSX:
	- JSX (JavaScript and  XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript.
	- It is commonly used in React.js applications to describe the structure of user interface components.
	- The file have an extension.jsx
	  Writing jsx markup: https://react.dev/learn/writing-markup-with-jsx
	  e.g.The Header component is written in jsx so is this file App.jsx.

3. Props:
   - Used for passing data to child components
 */