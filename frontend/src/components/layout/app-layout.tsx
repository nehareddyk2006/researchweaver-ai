import Header from "./header";
import Sidebar from "./sidebar";
import RightPanel from "./right-panel";
import Workspace from "../dashboard/workspace";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-zinc-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex flex-1 overflow-hidden">
          <section className="flex-1 overflow-auto p-8">
            <Workspace />
          </section>

          <aside className="hidden w-80 border-l bg-white xl:block">
            <RightPanel />
          </aside>
        </main>
      </div>
    </div>
  );
}