const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button
      className="border rounded-2xl px-2 hover:scale-105 hover:bg-amber-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
