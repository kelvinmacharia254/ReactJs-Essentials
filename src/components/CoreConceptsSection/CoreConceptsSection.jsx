import CoreConceptsListItem from "../CoreConceptsListItem/CoreConceptsListItem.jsx";
import {CORE_CONCEPTS} from "../../data.js";
import React from "react";

export default function CoreConceptsSection(){
    return (
        <section id="core-concepts">
            {/* Display React core concepts in Ul with reusable list item component. Use props to pass contextual info to each list item component */}
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
    );
}

// export default function CoreConcepts() {
//     return (
//         <section id="core-concepts">
//             <ul>
//                 {CORE_CONCEPTS.map((conceptItem) => (
//                     <CoreConcept {...conceptItem} />
//                 ))}
//             </ul>
//         </section>
//     );
// }