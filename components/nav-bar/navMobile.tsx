import logoNav from "./../../src/assets/BK_f_white.png";

export default function NavMobile() {
  return (
    <section className="nav-mobile-root">
      <div className="nav-mobile-content">
        <div className="nav-mobile-slide-root">
          <i className="fa-solid fa-bars"></i>
        </div>
        <img className="nav-mobile-main-logo" src={logoNav} alt="el-diablito-13"></img>
      </div>
    </section>
  );
}
