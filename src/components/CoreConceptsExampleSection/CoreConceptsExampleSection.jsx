import TabButtonListItem from "../TabButtonListItem/TabButtonListItem.jsx";
import React from "react";
import {EXAMPLES} from "../../data.js";

export default function CoreConceptsExampleSection() {

    const [content, setContent] = React.useState();
    function handleSelect(selectedButton){
        setContent(selectedButton);
    }

    let tabContent = 'Please click a tab button to show related example.'
    if(content){
        tabContent =(
            <div>
                <h3>{EXAMPLES[content].title}</h3>
                <p>{EXAMPLES[content].description}</p>
                <pre>
                    <code>{EXAMPLES[content].code}</code>
                </pre>
            </div>
        )
    }


    return (
        <section id="examples">
            {/* Illustrate React concepts by illustration of how to create tab buttons, props and state */}
            <h2>Examples</h2>
            <menu>
                <TabButtonListItem onSelect={() => {
                    handleSelect('components')}}>
                    Components
                </TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('jsx')
                }}>
                    Jsx
                </TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('props')
                }}>
                    Props
                </TabButtonListItem>
                <TabButtonListItem onSelect={() => {
                    handleSelect('state')
                }}>
                    State
                </TabButtonListItem>
            </menu>
            {tabContent}
        </section>
    )
}