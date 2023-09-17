import { useNavigate } from "react-router-dom";
import { MenuSidebar } from "@models/index";

interface Props {
  Menu: MenuSidebar[];
}

function Sidebar({ Menu }: Props) {
  const Navigate = useNavigate();

  const Navigation = (menu: string) => {
    Menu.map((item) => {
      menu === item.title && item.route && Navigate(item.route);
    });
  };

  return (
    <div className="sticky top-1 items-center justify-center flex flex-wrap gap-2">
      {Menu.map((Menu, index) => (
        <button
          onClick={() => Navigation(Menu.title)}
          key={index}
          className="container rounded-md gap-2 bg-black w-32 flex flex-col justify-center items-center hover:scale-95"
        >
          {Menu.tools ? (
            <div className="w-full flex justify-center items-center">
              {Menu.tools}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <h3>{Menu.title}</h3>
              <img src={Menu.src} className="w-10" alt="" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;