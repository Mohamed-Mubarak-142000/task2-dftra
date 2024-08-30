import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
