import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function StatCard({
  title,
  stat,
  change,
  icon,
}: {
  title: string;
  stat: string;
  change?: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat}</div>
        {change && <p className="text-xs text-muted-foreground">{change}</p>}
      </CardContent>
    </Card>
  );
}
