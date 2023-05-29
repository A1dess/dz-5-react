import { Link } from "react-router-dom";

const routes = [
    {
      path: "/",
      label: "About",
      id: 2,
    },
  {
    path: "/main",
    label: "Main",
    id: 1,
  },
  {
    path: "posts",
    label: "Posts",
    id: 3,
  },
];

const NavbarMenu = () => {
  return (
    <>
    <div>
      {routes.map((el) => (
        <Link
          style={{ marginRight: "40px" }}
          to={el.path}
          key={`${el.id} ${el.label}`}
        >
          {el.label}
        </Link>
      ))}
    </div> 
    </>
  );
};

export default NavbarMenu;