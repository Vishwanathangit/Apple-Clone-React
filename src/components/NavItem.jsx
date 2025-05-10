import React, { useState } from 'react';
import Dropdown from './Dropdown';

const NavItem = ({ label, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-black cursor-pointer">{label}</button>
      {dropdown && isOpen && <Dropdown dropdown={dropdown} />}
    </li>
  )
}
export default NavItem;