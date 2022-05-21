import '../css/SideNavbar.css';
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';

export const SideNavbar=( props ) => {

  const location=useLocation();
  return (
    // d-flex flex-column flex-shrink-0 
    <>
      <div className="side_bar">
        <ul className="nav nav-pills flex-column mb-auto">
          {
            <li >
              <Link to='/dashboard' className={`nav-link ${location.pathname.endsWith( "dashboard" )||location.pathname.endsWith( '/' )||location.pathname.endsWith( 'd' )? "side_bar_active":'side_bar_link'}`} aria-current="page">
                {/* <i className="fa-solid fa-user side_bar_icon" /> */}
                <span className='side_bar_icon'> <DashboardIcon /> </span>
                Home
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/organizations' className={`nav-link  ${location.pathname.includes( "organizations" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <WorkIcon /> </span>

                Organizations
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/candidates' className={`nav-link  ${location.pathname.includes( "people" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PeopleIcon /> </span>
                People
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/employees' className={`nav-link  ${location.pathname.includes( "events" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PeopleIcon /> </span>
                Events
              </Link>
            </li>
          }
          
        </ul>
      </div>

    </>

  )
}
