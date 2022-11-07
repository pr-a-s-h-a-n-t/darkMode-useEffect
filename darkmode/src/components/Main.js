import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Hello Developer...</h1>
            <ul className="main--facts">
                <li>React Was first released in 2013</li>
                <li>React Was originally created by Jordan Walke</li>
                <li>React Has well over 100K stars on GitHub</li>
                <li>React Is maintained by Facebook</li>
                <li>React Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}