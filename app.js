/*function MainContent(){
    return(
        <div className = "MainContent">
            <p>Interesting course this is</p>
        </div>
    )
}


ReactDOM.render(
<MainContent />, 
document.getElementById("root"))


const root = document.getElementById("root")
const text = document.createElement("h1")
text.textContent = "I love Muyiwa with my life";
text.className = "text"
root.appendChild(text)

const nav = (
    <nav className="navbar">
        <h1>Muyiwa</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root")) */


const sample = (
    <div>
        <h1>Iam the header</h1>
        <h2>Smaller header</h2>
        <h3>Smallest header</h3>
    </div>
)

ReactDOM.append(sample, document.getElementById("root"))
