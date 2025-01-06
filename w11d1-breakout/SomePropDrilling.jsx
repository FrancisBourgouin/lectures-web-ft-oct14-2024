function SomeParentComponent(props) {
  const { user } = props;
  return (
    <main>
      <h1>I'm a parent component, you are {!user.id && "not"} logged in</h1>
      <SomeChildComponent />
    </main>
  );
}

function SomeChildComponent(props) {
  const { user } = props;
  return (
    <main>
      <h1>I'm a child component</h1>
      <SomeGrandChildComponent user={user} />
    </main>
  );
}

function SomeGrandChildComponent(props) {
  const { user } = props;
  return (
    <main>
      <h1>I'm a grandchild component</h1>
      <Logout />
    </main>
  );
}
