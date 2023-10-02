
const Tweets = (props) => {
    return (
        <div className="tweets">
            <h2>Tweets</h2>
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Tweet: {props.message}</p>
        </div>
    )
}
