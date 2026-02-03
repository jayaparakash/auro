import { useNavigate } from "react-router-dom";

export default function PrimaryButton({
  children,
  className = "",
  type = "button",
  to = "/contact",   // default route
  onClick,
  ...rest
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e); // allow custom click if provided
    } else {
      navigate(to); // default navigation
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={[
        "btn border-0 bg-auro-accent text-white hover:bg-auro-accent/90",
        "rounded-xl px-6 shadow-md",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
