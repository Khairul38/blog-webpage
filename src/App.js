import { Provider } from "react-redux";
import AllBlog from "./components/AllBlog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <!-- navigation --> */}
        <Navbar />

        {/* <!-- search --> */}
        <Header />

        {/* all blog */}
        <AllBlog />

        {/* <!-- footer --> */}
        <Footer />
      </Provider>
    </>
  );
}

export default App;
