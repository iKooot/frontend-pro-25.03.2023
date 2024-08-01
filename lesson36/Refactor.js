class  Foo extends Component {
    state = {
        count: 0,
    }

    clickHandler() {
        // this.setState({ count: this.state.count + 1 })
        this.setState((prevState) => ({ count: prevState.count + 1 }))
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        return <>
            <span>{this.state.count}</span>
            <button onClick={this.clickHandler.bind(this)}>click</button>
        </>
    }
}

export function Users({ color }) {
    const [users, setUsers] = useState([]);
    const [selectedUserId, selectUser] = useState(null);
    const [userBgColor, setUserBgColor] = useState(color);
    // need move in separate file
    const getUsers = () =>
        fetch("https://example.com/users").then((res) =>
            res.json()
        );
    // need use effect
    const getData = async () => {

        await getUsers().then((users) => {
            setUsers(users);
        });
    }


    getData();

    // redunate
    console.log(selectedUserId);

    return (
        <div
            style={{
                // dont use inline
                backgroundColor: userBgColor
            }}
        >
            <div>
                {users.map(({id: userId, name, email}) => (
                    <User
                        // need key prop
                        name={name}
                        email={email}
                        selected={selectedUserId === userId}
                        userId={userId}
                        // need pass arrow function in useCallback
                        onClick={() => selectUser(userId)}
                    />
                ))}
            </div>
        </div>
    );
}

function Interval() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTimer(timer + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [timer]);

    return <p>{timer}</p>
}