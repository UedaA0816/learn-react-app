import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter, Link, useLocation } from "react-router-dom";

type TestProps = {
	// name: string;
};

const Test: React.FC<TestProps> = () => {
  const location = useLocation<{num:string}>()
  const [state, setstate] = useState("")
  console.log(location);
  useEffect(() => {
    const num = location.state?.num + location.pathname
    setstate(num)   
    console.log("useEffect");
    
  }, [location])
  
	return (
		<div className="text-xl whitespace-normal">
			<p>{location.pathname}</p>
      <p>{state}</p>
      <input type="text" value={state} onChange={(change)=>{setstate(change.target.value)}} />
			<div>
				<div>
					<Link
						to={{
							pathname: "/",
							state: { num: state },
						}}>
						/
					</Link>
				</div>
				<div>
        <Link
						to={{
							pathname: "/about",
							state: { num: state },
						}}>
						/about
					</Link>
				</div>
				<div>
        <Link
						to={{
							pathname: "/dashboard",
							state: { num: state },
						}}>
						/dashboard
					</Link>
				</div>
			</div>
		</div>
	);
};

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Test/>
				</Route>
				<Route path='/about'>
					<Test/>
				</Route>
				<Route path='/dashboard'>
					<Test/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
