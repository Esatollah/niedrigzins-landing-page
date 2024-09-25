import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import logo from "../../public/Logo.jpeg";
import miniLogo from "../../public/mini-icon.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex h-24 w-full shrink-0 items-center bg-[#faf3eb] px-4 md:px-6">
      <Sheet>
        <Link href={"/"} className="lg:hidden">
          <Image src={miniLogo} alt="Logo" className="h-16 w-auto rounded-lg" />
        </Link>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto border-none bg-orange-50 shadow-inner shadow-orange-50 hover:bg-orange-100 lg:ml-0 lg:hidden"
          >
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-orange-50">
          <Link href="/" prefetch={false}>
            <MountainIcon />
            <span className="sr-only">Home</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Kauf
            </Link>
            <Link
              href="/verkauf"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Verkauf
            </Link>
            <Link
              href="/makler"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Makler
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src={logo} alt="Logo" className="h-16 w-auto rounded-lg" />
      </Link>
      <NavigationMenu className="ml-auto hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors hover:bg-orange-100 hover:text-gray-900 focus:bg-orange-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              prefetch={false}
            >
              Kauf
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/verkauf"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors hover:bg-orange-100 hover:text-gray-900 focus:bg-orange-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              prefetch={false}
            >
              Verkauf
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/makler"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors hover:bg-orange-100 hover:text-gray-900 focus:bg-orange-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-100/50 data-[state=open]:bg-gray-100/50"
              prefetch={false}
            >
              Makler
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
    </svg>
  );
}
