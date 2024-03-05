import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarCode from "./Components/Navbar";
import CarouselFun2 from "./Components/Carsouelimg";
import About from "./Components/About";
import { TopHeadlines } from "./Components/TopHeadlines";
import { AllNews } from "./Components/AllNews";
import Content from "./Components/Content";
import UserForm from "./UserForm";
import WeddingVenues from "./Components/WeddingVenues";
import AllUsers from "./Component/AllUsers";
import AddUsers from "./Component/AddUsers";
import EditUser from "./Component/EditUser";
import NotFound from "./Component/NotFound";
import WeddingVendors from "./Components/WeddingVendor";
import Footer2 from "./Components/Footer2";
import VendorRegistrationForm from "./Components/VendorRegistrationForm";
import CardsCaurosel from "./Components/CardsCaurosel";
import VendorComponent from "./Component/AddVendor";
import Login from "./login";
import ThankYouPage from "./Components/ThankYou";
import Register from "./Register";
import AdminLogin from "./Components/AdminLogin"
import AllVendors from "./Component/AllVendors";
import UserLogin from "./Components/UserLogin";
import AdminDashboardPage from "./Components/AdminDashboard";
import { PaymentGateway } from "./Components/Payment";
import ContactForm from "./Components/ContactToAdminEmail";
import WeddingCard from "./Components/WeddingCard";
import ContactForm2 from "./Components/UserContactEmail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarCode />
        <Routes>
          <Route path="/" element={<CarouselFun2 />}></Route>
          <Route path="/" element={<CardsCaurosel />}></Route>

          <Route path="/top-headlines" element={<TopHeadlines />}></Route>
          <Route path="/all-news" element={<AllNews />}></Route>
          <Route path="/Content" element={<Content />}></Route>

          <Route path="/About" element={<About />}></Route>
          <Route path="/UserForm" element={<UserForm />}></Route>
          <Route path="/WeddingVenues" element={<WeddingVenues />}></Route>
          <Route path="/WeddingVendors" element={<WeddingVendors />}></Route>
          <Route
            path="/VendorRegistrationForm"
            element={<VendorRegistrationForm />}
          ></Route>
          <Route path="/Vendor" element={<VendorComponent />}></Route>
      
          <Route path ="/adminJWT-login" element={<AdminLogin />}></Route>
          <Route path="/userJWT-login" element={<UserLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />

          <Route path="/register" element={<Register />}></Route>
          <Route path="/all" element={<AllUsers />} />
          <Route path="all-vendor" element={<AllVendors />} />
          <Route path="/add" element={<AddUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route element={<NotFound />} />
          <Route path="visit_again" element={<ThankYouPage />} />
          <Route path="paymentgateway" element={<PaymentGateway />} />
          <Route path="ContactForm" element={<ContactForm />} />

          <Route path="WeddingCard" element={<WeddingCard />} />
          <Route path="email" element={<ContactForm2/>}/>
          
        </Routes>

        <Footer2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
