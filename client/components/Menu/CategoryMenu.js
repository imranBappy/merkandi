import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import MenuItem from "./MenuItem";
import MenuLoader from "./MenuLoader";

const CategoryMenu = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <MenuLoader />;
  return (
    <div className="full bg-white z-30 relative">
      <ul className="w-full">
        {data?.categories.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
