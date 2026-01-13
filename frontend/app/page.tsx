import { Activity, Bot, FileText, TrendingUp } from "lucide-react";

export default function Home() {
  const stats = [
    {
      title: "Active Missions",
      value: "12",
      description: "Currently running",
      icon: Bot,
      color: "text-blue-500",
    },
    {
      title: "Reports Generated",
      value: "48",
      description: "This month",
      icon: FileText,
      color: "text-green-500",
    },
    {
      title: "Success Rate",
      value: "94%",
      description: "Mission completion",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      title: "System Health",
      value: "Healthy",
      description: "All systems operational",
      icon: Activity,
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Overview of your Market Intelligence Agent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-card border border-border rounded-lg p-6 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {stat.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="text-foreground font-medium">
                  Market analysis completed for TechCorp
                </p>
                <p className="text-sm text-muted-foreground">
                  2 hours ago
                </p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="text-foreground font-medium">
                  Competitive intelligence report generated
                </p>
                <p className="text-sm text-muted-foreground">
                  5 hours ago
                </p>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs font-medium">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-foreground font-medium">
                  Industry trend analysis in progress
                </p>
                <p className="text-sm text-muted-foreground">
                  1 day ago
                </p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-medium">
                Processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
