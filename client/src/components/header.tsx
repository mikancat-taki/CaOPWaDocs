import { Button } from "@/components/ui/button";
import { Download, FileText, Menu } from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  onSidebarToggle: () => void;
}

export function Header({ onSidebarToggle }: HeaderProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (format: "html" | "pdf") => {
    setIsDownloading(true);
    try {
      const response = await apiRequest("POST", "/api/download", { format });
      
      if (format === "html") {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "CaOPWa_Documentation.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast({
          title: "ダウンロード完了",
          description: "HTMLファイルをダウンロードしました。",
        });
      } else {
        // For PDF, trigger browser print dialog
        window.print();
        toast({
          title: "PDF生成",
          description: "ブラウザの印刷機能を使用してPDFを生成してください。",
        });
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: "ダウンロードに失敗しました。",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 no-print">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSidebarToggle}
              className="md:hidden"
              data-testid="button-sidebar-toggle"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">CaOPWa Documentation</h1>
                <p className="text-sm text-gray-600">便利ツールアプリドキュメント</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => handleDownload("html")}
              disabled={isDownloading}
              className="bg-primary hover:bg-primary/90"
              data-testid="button-download-html"
            >
              <Download className="h-4 w-4 mr-2" />
              HTMLダウンロード
            </Button>
            <Button
              onClick={() => handleDownload("pdf")}
              disabled={isDownloading}
              variant="secondary"
              className="bg-orange-600 hover:bg-orange-700 text-white"
              data-testid="button-download-pdf"
            >
              <FileText className="h-4 w-4 mr-2" />
              PDFダウンロード
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
