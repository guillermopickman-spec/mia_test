import { FileText, Download, Calendar, Search } from "lucide-react";

export default function ReportsPage() {
  const mockReports = [
    {
      id: 1,
      title: "Q4 2024 Market Analysis - Tech Sector",
      description: "Comprehensive analysis of technology market trends and competitive landscape",
      date: "2024-12-15",
      status: "completed",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Competitive Intelligence Report - AI Companies",
      description: "Deep dive into AI market leaders and emerging players",
      date: "2024-12-10",
      status: "completed",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Industry Trend Analysis - Cloud Services",
      description: "Market trends and growth projections for cloud service providers",
      date: "2024-12-05",
      status: "completed",
      size: "3.1 MB",
    },
    {
      id: 4,
      title: "Startup Ecosystem Report - FinTech",
      description: "Analysis of financial technology startups and investment patterns",
      date: "2024-11-28",
      status: "completed",
      size: "2.7 MB",
    },
    {
      id: 5,
      title: "Market Opportunity Assessment - Healthcare Tech",
      description: "Evaluation of market opportunities in healthcare technology sector",
      date: "2024-11-20",
      status: "completed",
      size: "2.2 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground mt-2">
              View and manage your generated intelligence reports
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search reports..."
                className="bg-card border border-input rounded-md pl-10 pr-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockReports.map((report) => (
            <div
              key={report.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {report.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      <span>•</span>
                      <span>{report.size}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full">
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-sm">
          Showing {mockReports.length} reports • In production, these would be fetched from the backend API
        </div>
      </div>
    </div>
  );
}
