import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  title: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function NavItem({
  title,
  icon: Icon,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href="#"
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
        active
          ? "bg-indigo-600 text-white shadow-sm"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
      )}
    >
      <Icon className="h-5 w-5" />
      {title}
    </Link>
  );
}