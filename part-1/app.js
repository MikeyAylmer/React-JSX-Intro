const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Michael" />

    </div>
)
// Can use implicit return if only one expression is being returned.

ReactDOM.render(<App />, document.getElementById("root"))