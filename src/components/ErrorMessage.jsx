function ErrorMessage({
  message,
  onRetry,
}) {
  return (
    <section
      className="error-message"
      role="alert"
    >
      <h2>
        Something went wrong
      </h2>

      <p>{message}</p>

      <button
        type="button"
        className="primary-button"
        onClick={onRetry}
      >
        Retry
      </button>
    </section>
  );
}

export default ErrorMessage;