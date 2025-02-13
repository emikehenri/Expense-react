import { Cardcomp} from '../components/dashboard_comp/card_component';
import { Sidebar } from '../components/dashboard_comp/sidebar';
import { Maincomponent } from '../components/dashboard_comp/main_component';

export default function Dashboard() {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
            <Maincomponent/>
          {/* Navbar */}
          
  
          {/* Dashboard Grid */}
          <Cardcomp />
        </div>
      </div>
    );
  }
  