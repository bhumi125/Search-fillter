import "./App.css";
import { useState } from "react";
import userData from "./userData/userData";
import InterFaceField from "./component/interFaceField/interFaceField";
import Formfield from "./component/formFiield/formfield";
// import { useForm } from "react-hook-form";
// ============================================================
//mock data
interface item {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

function App() {
  const [keyword, setKeyword] = useState<string>("");

  const filtered = userData.filter((item: item) => {
    const sumName = `${item.first_name} ${item.last_name}`;
    const res = sumName.toLocaleLowerCase().includes(keyword);
    return res;
  });
  console.log(keyword);

  // ============================================================

  return (
    <div className="bg-white w-full xl:w-[390px] m-auto pb-6 rounded-lg overflow-hidden	">
      <div className=" bg-[url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb')] bg-auto w-[100%]">
        <Formfield keyword={keyword} setKeyword={setKeyword} />
      </div>
      <InterFaceField filtered={filtered} />
    </div>
  );
}

export default App;
