function Loader() {
  return (
    <section
      className="loader"
      aria-live="polite"
      aria-label="Loading users"
    >
      <div
        className="loader__spinner"
        role="status"
      />

      <p className="loader__text">
        Loading users...
      </p>
    </section>
  );
}

export default Loader;