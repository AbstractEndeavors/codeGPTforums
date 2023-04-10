import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import './../../assets/styles.css';
import './../../assets/style2.css';
const Navbar = () => {
return (
	<>
<div className="p-navSticky p-navSticky--primary" data-xf-init="sticky-header"><nav className="p-nav"><div className="p-nav-inner">
<Bars />
<NavMenu>
<NavLink to='/categories' activeStyle>
    <div class="p-navEl is-selected" data-has-children="true"><a href="/" class="p-navEl-link p-navEl-link--splitMenu " data-nav-id="forums">Forums</a><a data-xf-key="1" data-xf-click="menu" data-menu-pos-ref="< .p-navEl" class="p-navEl-splitTrigger" role="button" tabindex="0" aria-label="Toggle expanded" aria-expanded="false" aria-haspopup="true"></a><div class="menu menu--structural" data-menu="menu" aria-hidden="true"><div class="menu-content"><a href="/postform" class="menu-linkRow u-indentDepth0 js-offCanvasCopy " rel="nofollow" data-nav-id="newPosts">New post</a><a href="search/?type=post" class="menu-linkRow u-indentDepth0 js-offCanvasCopy " data-nav-id="searchForums">Search forums</a></div></div></div>
</NavLink>
<NavLink to='/members' activeStyle>
	Members
</NavLink>
<NavLink to='/login' activeStyle>
	Login
</NavLink>
<NavLink to='/register' activeStyle>
	<hr class="offCanvasMenu-separator"/><div class="offCanvasMenu-linkHolder"><a href="register/" class="offCanvasMenu-link" data-xf-click="overlay" data-menu-close="true">Register</a></div>
</NavLink>
<NavLink to='/postform' activeStyle>
	WhatsNew
</NavLink>
<NavLink to='/search' activeStyle>
	Search
</NavLink>
<NavLink to='/slider' activeStyle>
	slider
</NavLink>
{/* Second Nav */}
{/* <NavBtnLink to='/login'>Sign In</NavBtnLink> */}
</NavMenu>
<NavBtn>
<NavBtnLink to='/signin'>Sign In</NavBtnLink>
</NavBtn>
    </div>
	</nav>
	</div>

	</>
);
};

export default Navbar;

