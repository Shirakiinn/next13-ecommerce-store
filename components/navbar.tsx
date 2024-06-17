import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import InfoBar from "@/components/infobar";
import TopBar from "@/components/topbar"; // Import the TopBar component

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <TopBar /> {/* Add the TopBar component here */}
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 items-center">
            <img src="https://tinypic.host/images/2024/06/11/OIG1.2NXAfdCmhiE-removebg.png" alt="Logo" style={{ height: 'auto', width: '100px' }} />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
      <InfoBar /> {/* Add the InfoBar component here */}
    </div>
  );
};

export default Navbar;
