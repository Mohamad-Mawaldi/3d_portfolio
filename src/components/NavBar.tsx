import { styles } from "../styles";

const NavBar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="logo" className="w-9 h-9 object-contain" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
