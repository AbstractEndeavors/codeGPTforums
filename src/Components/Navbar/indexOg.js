import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/forums' activeStyle>
			Forums
		</NavLink>
		<NavLink to='/members' activeStyle>
			Members
		</NavLink>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
		<NavLink to='/register' activeStyle>
			Register
		</NavLink>
		<NavLink to='/whatsnew' activeStyle>
			WhatsNew
		</NavLink>
		<NavLink to='/search' activeStyle>
			Search
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

