import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { downloadRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get documentation sections
  app.get("/api/documentation", async (req, res) => {
    try {
      const sections = await storage.getDocumentationSections();
      res.json(sections);
    } catch (error) {
      console.error("Failed to get documentation sections:", error);
      res.status(500).json({ message: "Failed to retrieve documentation" });
    }
  });

  // Download documentation
  app.post("/api/download", async (req, res) => {
    try {
      const { format } = downloadRequestSchema.parse(req.body);

      if (format === "html") {
        const htmlContent = await storage.generateHTML();
        
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Content-Disposition", "attachment; filename=CaOPWa_Documentation.html");
        res.send(htmlContent);
      } else if (format === "pdf") {
        // For PDF, we'll just send a success response and let the frontend handle print
        res.json({ message: "PDF generation initiated" });
      } else {
        res.status(400).json({ message: "Invalid format specified" });
      }
    } catch (error) {
      console.error("Failed to generate download:", error);
      res.status(500).json({ message: "Failed to generate download" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
