import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/anochr.jpg"
import Wrapper from "./Wrapper";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <Wrapper>
        <div className="flex h-[78px] items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="CepahsHR"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-[#111111] hover:text-[#173FD7]"
            >
              Product
              <ChevronDown size={14} strokeWidth={1.8} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-[#111111] hover:text-[#173FD7]"
            >
              Solution
              <ChevronDown size={14} strokeWidth={1.8} />
            </a>

            <a
              href="#"
              className="text-sm font-medium text-[#111111] hover:text-[#173FD7]"
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-sm font-medium text-[#111111] hover:text-[#173FD7]"
            >
              About Us
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button className="rounded-full bg-[#193FD3] px-8 py-3 text-sm font-medium text-white hover:bg-[#1535b8]">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 py-5 lg:hidden">
            <div className="flex flex-col gap-5">

              <a
                href="#"
                className="flex items-center justify-between text-sm font-medium"
              >
                Product
                <ChevronDown size={15} />
              </a>

              <a
                href="#"
                className="flex items-center justify-between text-sm font-medium"
              >
                Solution
                <ChevronDown size={15} />
              </a>

              <a
                href="#"
                className="text-sm font-medium"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-sm font-medium"
              >
                About Us
              </a>

              <Button className="w-full rounded-full bg-[#193FD3] py-3 text-sm font-medium text-white">
                Book a Demo
              </Button>

            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

export default Navbar;