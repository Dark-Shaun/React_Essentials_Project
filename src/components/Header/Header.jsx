import imageFile from "../../assets/react-core-concepts.png"

import "./Header.css"

const arrayMan=["Shaunak","Shaunak Milind"]
function timeChange(){
  return Math.round(Math.random());
}
export default function Header(){
    const changeValue=timeChange()
    return (
        <header>
          <img src={imageFile} alt="Stylized atom" />
          <h1>React Essentials with Shaunak</h1>
          <p>
            Fundamental React concepts you will need for almost any app you are
            going to build! This is the demo project done by Mr. {arrayMan[changeValue]} Alshi
          </p>
        </header>
    )
  }