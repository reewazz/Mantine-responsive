import React, { useState } from "react";
import { Burger, Drawer, Group } from "@mantine/core";

export const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <nav className="h-20 flex items-center justify-between px-6 lg:px-24 text-white absolute w-full z-50 font-sans bg-transparent">
        <div className="logo text-2xl font-extrabold cursor-pointer">
          COFFEE
        </div>

        <div className="hidden lg:flex nav-items">
          <div className="nav-item px-4 py-1 mx-1 cursor-pointer rounded hover:bg-black/20">
            Gallery
          </div>
          <div className="nav-item px-4 py-1 mx-1 cursor-pointer rounded hover:bg-black/20">
            About Us
          </div>
          <div className="nav-item px-4 py-1 mx-1 cursor-pointer rounded hover:bg-black/20">
            Contact
          </div>
        </div>

        <div className="hidden lg:flex icons">
          <div className="cart text-white text-2xl px-4 py-1 mx-1 cursor-pointer">
            <i className="ri-shopping-cart-2-line"></i>
          </div>
          <div className="search text-white text-2xl px-4 py-1 mx-1 cursor-pointer">
            <i className="ri-search-2-line"></i>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            size="sm"
          />
        </div>
      </nav>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size="md"
        classNames={{ drawer: "bg-gray-800 text-white" }}
      >
        <Group direction="column" spacing="md" grow>
          <div className="nav-item cursor-pointer rounded hover:bg-black/20 p-2">
            Gallery
          </div>
          <div className="nav-item cursor-pointer rounded hover:bg-black/20 p-2">
            About Us
          </div>
          <div className="nav-item cursor-pointer rounded hover:bg-black/20 p-2">
            Contact
          </div>
          <div className="icon cursor-pointer p-2 flex items-center">
            <i className="ri-shopping-cart-2-line text-2xl"></i>
            <span className="ml-2">Cart</span>
          </div>
          <div className="icon cursor-pointer p-2 flex items-center">
            <i className="ri-search-2-line text-2xl"></i>
            <span className="ml-2">Search</span>
          </div>
        </Group>
      </Drawer>
    </div>
  );
};
