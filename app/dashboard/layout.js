import Subnav from "../components/Subnav";

export default function DashboardLayout({ children }) {
    return (
      <div>
          <Subnav />
          {children}
      </div>
    );
  }
  