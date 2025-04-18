import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from "./Components/Hero";
// import PhoneNumber from "./Components/PhoneNumber";
import ProofOfFunds from "./Components/ProofOfFunds";
import DriverLicense from "./Components/DriverLicense";
import BussinessVerification from "./Components/BussinessVerification";
import CloserVerification from "./Components/CloserVerification";
import AdminVerified from "./Components/AdminVerified";
import "./App.css";
import PhoneNumberWithOtp from './Components/PhoneNumberWithOtp';

const HeroSteps = [
  {
    name: "Phone Verification",
    Component: ({ onVerified }) => (
      <>
        {/* <PhoneNumber /> */}
        <PhoneNumberWithOtp onVerified={onVerified} />,
      </>
    ),
  },
  {
    name: "Proof of Funds",
    Component: ProofOfFunds,
  },
  {
    name: "ID/Driver’s License",
    Component: DriverLicense,
  },
  {
    name: "Business Verification",
    Component: BussinessVerification,
  },
  {
    name: "Closer Verification",
    Component: CloserVerification,
  },
  {
    name: "Admin Verified",
    Component: AdminVerified,
  },
];

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero stepsConfig={HeroSteps} />
        <Footer />
      </BrowserRouter>  
    </>
  );
}

export default App;