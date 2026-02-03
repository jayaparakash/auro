export default function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`btn btn-primary rounded-xl normal-case ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  