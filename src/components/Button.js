function SubmitButton(props) {
  return (
    <button
      type="submit"
      className="bg-primary shadow-md rounded-lg py-2 px-4 text-white text-[14px]"
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;
