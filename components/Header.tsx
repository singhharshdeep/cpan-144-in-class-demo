export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: 15,
        borderBottom: "1px solid black",
      }}
    >
      <h2>ProductCatalog</h2>
      <div>
        <button>Login</button>
      </div>
    </header>
  );
}
