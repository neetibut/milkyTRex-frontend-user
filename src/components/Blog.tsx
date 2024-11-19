

const Blog = () => {
  return (
    <div className="flex flex-row m-5 p-10 space-x-8">
      <div className="p-10 m-5">
        <div className="text-7xl py-2">Blog</div>
        <div className="text-5xl py-4 w-[250px]">รวมวิธีการชง เกร็ดความรู้</div>
        <div className="text-xl py-2">ด้านชาที่น่าสนใจ</div>
        <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10">
          เริ่มเลย
        </button>
      </div>
      <div className="flex-row pl-5 hidden md:flex ">
        <div className="px-0 m-5  rounded-3xl bg-slate-300  border-2 border-black">
          <div className="p-0">
            <img
              src="src/assets/backgroundcover.svg"
              className=" w-full h-48 object-cover rounded-t-3xl border-2 border-b-black "
            />
          </div>
          <div className="p-3 ">
            <div className="p-3 py-8">Degasความลับที่ทำให้กาแฟของ คุณอร่อยขึ้น</div>
            <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10">
              อ่านต่อ
            </button>
          </div>
        </div>
        <div className="px-0 m-5  rounded-3xl bg-slate-200 border-2   border-black">
          <div className="p-0">
            <img
              src="src/assets/backgroundcover.svg"
              className=" w-full h-48 object-cover rounded-t-3xl border-2 border-b-black "
            />
          </div>
          <div className="p-3 ">
            <div className="p-3 py-8">Degasความลับที่ทำให้กาแฟของ คุณอร่อยขึ้น</div>
            <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10">
              อ่านต่อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
