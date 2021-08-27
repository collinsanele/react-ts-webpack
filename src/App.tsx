import './styles.css'
import IMAGE from './display.png'

export const App = ()=>{
    return <>
        <img src={IMAGE} width="300" height="100"></img>
        <h1>React Typescript Webpack Starter Template - {process.env.NODE_ENV}</h1>
        <p>{process.env.name}</p>
        <p>{process.env.url}</p>
    </>
}
