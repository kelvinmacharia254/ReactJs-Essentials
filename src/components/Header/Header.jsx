import reactImg from '/src/assets/react-core-concepts.png'
import './Header.css';

export default function Header(){
    return (
            <header>
                <img src={reactImg} alt="atomReact"/>
                <h1>React Essetials</h1>
                <p>
                    Fundamental React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
    )}

