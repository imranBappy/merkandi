import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Disable server-side rendering for this component
});
const Textarea = ({
  label,
  value,
  error,
  required,
  name,
  onChange = () => {},
}) => {
  return (
    <div className="relative">
      <div style={{ marginLeft: 1 }} className="flex items-center gap-1 ">
        <p className=" py-1 text-sm">{label}</p>
        {required && <p className=" text-xl text-red-600">*</p>}
      </div>
      <JoditEditor
        value={value}
        tabIndex={1}
        onChange={(newContent) =>
          onChange({
            target: {
              name: name,
              value: newContent,
            },
          })
        }
      />
      <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
        {error}
      </p>
    </div>
  );
};

export default Textarea;
