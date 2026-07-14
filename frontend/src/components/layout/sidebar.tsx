import { bottomNavigation, navigation } from "@/constants/navigation";
import NavItem from "./nav-item";

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r bg-white">
      <div className="border-b px-6 py-8">
        <h1 className="text-2xl font-bold tracking-tight">
          ResearchWeaver
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Research Intelligence OS
        </p>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">
        {navigation.map((item, index) => (
          <NavItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            active={index === 0}
          />
        ))}
      </nav>

      <div className="border-t px-4 py-6 space-y-2">
        {bottomNavigation.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
}