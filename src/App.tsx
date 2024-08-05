import { useState } from "react";
import Cards from "./components/Card";
import LineGraph from "./components/LineGraph";
import PieChart from "./components/PieChart";
import HorizontalLineGraph from "./components/HorizontalLineGraph";
import TodoList from "./components/TodoList";
import PrimaryCard from "./components/PrimaryCard";
import NavBar from "./components/NavBar";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";


function App() {
  const [count, setCount] = useState(0);
  const tasks = useQuery(api.tasks.get);

  const useEffect = () => {
    console.log(tasks);
  }
  return (
    <div>
      <div id="wrapper">
        <NavBar />
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav className="navbar navbar-expand bg-white shadow mb-4 topbar">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                        </form>
                        <ul className="navbar-nav flex-nowrap ms-auto">
                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                                <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form className="me-auto navbar-search w-100">
                                        <div className="input-group"><input className="bg-light border-0 form-control small" type="text" placeholder="Search for ..."/><button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button></div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg"/>
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg"/>
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
                                                <div className="bg-warning status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg"/>
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                                <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div className="d-none d-sm-block topbar-divider"></div>
                            <li className="nav-item dropdown no-arrow">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span></a>
                                    <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
                    </div>
                    <Cards />
                    <div className="row">
                        <LineGraph />
                        <PieChart />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                          <HorizontalLineGraph />
                          <TodoList />
                        </div>
                        <div className="col">
                            <div className="row">
                               <PrimaryCard />
                                <PrimaryCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © MoneyInThisEconomy 2024</span></div>
                </div>
            </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/chart.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="assets/js/theme.js"></script>
    </div>
  );
}

export default App;
