import TabButtonListItem from "../TabButtonListItem/TabButtonListItem.jsx";
import React from "react";
import {EXAMPLES} from "../../data.js";

export default function CoreConceptsExampleSection() {

    const [content, setContent] = React.useState('Please click a tab button to show related example.');
    function handleSelect(selectedButton){
        let tabContent = EXAMPLES[selectedButton].code;
        setContent(tabContent);
        console.log(`${selectedButton} tab clicked`);
    }

    return (
        <section id="examples">
            {/* Illustrate React concepts by illustration of how to create tab buttons, props and state */}
            <h2>Examples</h2>
            <menu>
                <TabButtonListItem onSelect={() => {
                    handleSelect('components')
                }}>Components</TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('jsx')
                }}>Jsx</TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('props')
                }}>Props</TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('state')
                }}>State</TabButtonListItem>
            </menu>
            <pre>
                <code>
                   {content}
                </code>
            </pre>

        </section>
    )
}