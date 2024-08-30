import {
  DateRangeOutlined,
  FavoriteBorderOutlined,
  LocationOnSharp,
} from "@mui/icons-material";

const CardContent = () => {
  return (
    <div className="w-full p-1 lg:p-4 border border-green-600 bg-green-50 my-2 rounded-md">
      <div className="flex items-center justify-between flex-wrap lg:px-5">
        {/**content img */}
        <div className=" flex items-start flex-wrap">
          <img
            src="https://source.unsplash.com/random/300x300"
            alt="img"
            className="w-[100px] h-[100px] object-cover border"
          />

          <div className="p-2">
            <h1 className="text-2xl">Gaming UI Designer </h1>
            <p className="text-gray-500">RockStar Games</p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-2 p-2 border border-gray-300 w-[40px] h-[40px] rounded-full">
          <FavoriteBorderOutlined />
        </div>
      </div>

      <div className="p-2 flex items-center justify-start flex-wrap gap-2 lg:gap-20">
        <div className="flex items-center justify-center gap-2">
          <LocationOnSharp />
          <p className="text-gray-500">El-Mansoura Egypt</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <DateRangeOutlined />
          <p className="text-gray-500">10 days ago</p>
        </div>
      </div>

      <div className="p-2 flex items-center justify-start flex-wrap gap-2 lg:gap-20">
        <p className="text-gray-500 bg-white p-1 px-3 capitalize">
          0-3 years experience
        </p>
        <p className="text-gray-500 bg-white p-1 px-3 capitalize">full time</p>
        <p className="text-gray-500 bg-white p-1 px-3 capitalize">remote</p>
      </div>

      <p className="p-2 capitalize font-normal mt-5">
        create / design - IT / software development - gaming
      </p>
    </div>
  );
};

export default CardContent;
