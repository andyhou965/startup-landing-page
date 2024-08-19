import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

const navItems = [
  { name: "Features", href: "#" },
  { name: "Developers", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Changelog", href: "#" },
];

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 max-md:backdrop-blur">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
