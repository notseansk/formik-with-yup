type Props = {
  page: string;
};
const Button = ({ page }: Props) => {
  return (
    <div className="flex justify-center items-center pt-4">
      <button
        className="py-3 px-8 font-semibold w-max rounded-xl bg-[#050505b8]"
        type="submit"
      >
        {page}
      </button>
    </div>
  );
};

export default Button;
