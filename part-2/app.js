const App = () => (
    <div>
        <span>
            <Tweets username="PhaserFace" name="Mikey" message="Please Work" />
        </span>
        <br />
        <span>
            <Tweets username="Tay-Money" name="Taylor" message="Got it working baby!" />
        </span>
        <br />
        <span>
            <Tweets username="Sunni Bunny" name="Sunniva" message="I love mommy & daddy" />
        </span>
    </div>
)
// Can use implicit return if only one expression is being returned.

ReactDOM.render(<App />, document.getElementById("root"))