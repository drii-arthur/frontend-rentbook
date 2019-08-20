import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// export default class Navbar extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             dropdownOpen: false
//         };
//     }

//     toggle() {
//         this.setState(prevState => ({
//             dropdownOpen: !prevState.dropdownOpen
//         }));
//     }

//     render() {
//         return (
//             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                 <DropdownToggle caret>
//                     Dropdown
//         </DropdownToggle>
//                 <DropdownMenu>
//                     <DropdownItem header>Header</DropdownItem>
//                     <DropdownItem>Some Action</DropdownItem>
//                     <DropdownItem disabled>Action (disabled)</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>Foo Action</DropdownItem>
//                     <DropdownItem>Bar Action</DropdownItem>
//                     <DropdownItem>Quo Action</DropdownItem>
//                 </DropdownMenu>
//             </Dropdown>
//         );
//     }
// }

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="menu" style={{ listStyle: 'none' }}>
                <Link to={'/Login'}><li>All Category</li></Link>
                <Link to={'/Register'}><li>All time</li></Link>
            </ul>

        </div>

    )
}

export default Navbar

