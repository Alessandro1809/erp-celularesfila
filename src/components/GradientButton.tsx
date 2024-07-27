
interface GradientButtonProps {
  text: string;
  onClick?: () => void;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-black font-bold rounded-md transition duration-300 font-josefin"
      style={{ backgroundImage: 'linear-gradient(to right, #D9F1FF, #30E6FF)' }}
    >
      {text}
    </button>
  );
};


