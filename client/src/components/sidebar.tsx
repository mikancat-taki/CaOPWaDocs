import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { id: "overview", title: "概要" },
  { id: "features", title: "機能一覧" },
  { id: "calendar", title: "カレンダー機能" },
  { id: "chat", title: "リアルタイムチャット" },
  { id: "translation", title: "翻訳機能" },
  { id: "tools", title: "その他ツール" },
  { id: "usability", title: "使いやすさについて" },
  { id: "technical", title: "技術仕様" },
  { id: "references", title: "参考リポジトリ" },
  { id: "contact", title: "お問い合わせ" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.innerWidth < 768) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
        data-testid="sidebar-overlay"
      />

      {/* Sidebar */}
      <nav 
        className={cn(
          "sidebar sidebar-transition fixed md:relative z-30 w-72 h-screen bg-white shadow-lg border-r border-gray-200 no-print overflow-y-auto",
          !isOpen && "-translate-x-full md:translate-x-0"
        )}
        data-testid="sidebar-nav"
      >
        <div className="p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            目次
          </h3>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
