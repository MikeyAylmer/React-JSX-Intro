// Example of if else if else statmenets inside components
const Person = (props) => {
    let reply;
    const todos = [
        <li>Surfing</li>,
        <li>Hiking</li>,
        <li>Coding</li>
    ]
    if (props.age > 18) {
        reply = <h3>Please GO VOTE!!</h3>
    } else if (props.age < 18) {
        reply = <h3>You Must be 18</h3>
    } else {
        reply = "Come in, you CAN drink!"
    }
    return (
        <div>
            <p>
                <b>Person:</b> I am {props.age} years old.
            </p>
            <p>
                <b>Hobbies:</b> {todos}
            </p>
        </div>
    )
}