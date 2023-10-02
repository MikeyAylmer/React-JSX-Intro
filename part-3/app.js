const App = () => (
    <div>
        <Person age={19} />
        <Person age={11} />
        <Person age={29} />

    </div>
)
// Can use implicit return if only one expression is being returned.

ReactDOM.render(<App />, document.getElementById("root"))