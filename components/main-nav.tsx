"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-lg font-bold transition-colors hover:text-black relative', // Texto grande e em negrito
            route.active ? 'text-red-500' : 'text-neutral-500' // Cor do texto quando ativo
          )}
        >
          {route.label}
          {route.active && (
            <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-red-500"></span> // Linha inferior colorida quando ativo
          )}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
