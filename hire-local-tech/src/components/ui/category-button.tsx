interface CategoryButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
}

export function CategoryButton({ text, color, onClick }: CategoryButtonProps) {
  return (
    <span 
      className={`px-3 py-[6px] rounded-full bg-[${color}] text-sm leading-tight whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </span>
  );
} 