import CoreConceptsListItem from "../CoreConceptsListItem/CoreConceptsListItem.jsx";
import {CORE_CONCEPTS} from "../../data.js";
import React from "react";

export default function CoreConceptsSection(){
    return (
        <section id="core-concepts">
            {/* Display React core concepts in Ul with reusable list item component. Use props to pass contextual info to each list item component */}
            <ul>
                {/* Use .map() method to create list items and pass props with spread operator */}
                {/* .maps() method reduce code*/}
                {CORE_CONCEPTS.map((conceptItem) =>(<CoreConceptsListItem {...conceptItem}/>))}
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