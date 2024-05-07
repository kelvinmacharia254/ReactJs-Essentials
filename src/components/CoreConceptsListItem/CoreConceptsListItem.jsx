import './CoreConceptsListItem.css'
// export default function CoreConceptsListItem(props){
//     return (
//         <li>
//             <img src={props.image} alt={props.title}/>
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//      )
//     }
//

export default function CoreConceptsListItem({title, description, image}){
    return (
        <li>
            <img src={image} alt={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
     )
    }