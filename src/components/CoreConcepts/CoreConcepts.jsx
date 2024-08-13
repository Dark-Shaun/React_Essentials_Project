import "./CoreConcepts.css"



//Easier way to write the above
export default function CoreConcepts({image,title,description}){
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }


// Alternate Way to write fucntion for getting a component in React

//Building a component that can be reused
// function CoreConcepts(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }