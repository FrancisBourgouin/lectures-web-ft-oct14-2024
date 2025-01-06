function SomeParentComponent(props) {
  const { user } = props;
  return (
    <UserContext.Provider value={user}>
      <main>
        <h1>I'm a parent component, you are {!user.id && "not"} logged in</h1>
        <SomeChildComponent />
      </main>
    </UserContext.Provider>
  );
}

function SomeChildComponent(props) {
  return (
    <main>
      <h1>I'm a child component</h1>
      <SomeGrandChildComponent />
    </main>
  );
}

function SomeGrandChildComponent(props) {
  const userInfo = useContext(UserContext)

  return (
    <main>
      <h1>I'm a grandchild component</h1>
      <Logout />
    </main>
  );
}
