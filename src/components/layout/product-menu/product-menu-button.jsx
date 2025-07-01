import React from 'react'
import { Menu } from 'lucide-react'
import ProductMenu from './product-menu';

export default function ProductMenuButton() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
        <button onClick={() => setOpenMenu(true)}>
            <Menu />
        </button>

        <ProductMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </div>
  )
}
