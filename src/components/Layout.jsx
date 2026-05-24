export default function Layout({ children }) {
  return (
    <main className="layout">
      <header className="layout__header">
        <h1 className="layout__title">
          <span aria-hidden="true">🐾</span> 춤추는 고양이 <span aria-hidden="true">🎶</span>
        </h1>
        <p className="layout__subtitle">버튼을 눌러 고양이와 함께 춤을 춰보세요!</p>
      </header>
      <div className="layout__content">{children}</div>
      <footer className="layout__footer">
        <p>Made with React + CSS keyframes</p>
      </footer>
    </main>
  );
}
