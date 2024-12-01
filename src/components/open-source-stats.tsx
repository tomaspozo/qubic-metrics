import { useDateRange } from "@/hooks/use-date-range";
import { useMemo } from "react";

import {
  RiCloseCircleLine,
  RiExportLine,
  RiEyeLine,
  RiFolderOpenLine,
  RiGitBranchLine,
  RiGitRepositoryCommitsLine,
  RiGroup2Line,
  RiStarLine,
} from "@remixicon/react";

import { formatString } from "@/lib/formatters";
import { useGetGithubStatsOverviewQuery } from "@/api/client";
import { StatCard } from "./stat-card";

export function OpenSourceStats() {
  const [range] = useDateRange();

  const { data: overviewStats } = useGetGithubStatsOverviewQuery(range);

  const cardData = useMemo(
    () => [
      {
        id: "commits",
        icon: <RiGitRepositoryCommitsLine className="h-5 w-5 text-chart-2" />,
        label: "Commits",
        value: formatString(overviewStats?.commits),
      },
      {
        id: "starsCount",
        icon: <RiStarLine className="h-5 w-5 text-chart-2" />,
        label: "Stars",
        value: formatString(overviewStats?.starsCount),
      },
      {
        id: "contributors",
        icon: <RiGroup2Line className="h-5 w-5 text-chart-2" />,
        label: "Contributors",
        value: formatString(overviewStats?.contributors),
      },
      {
        id: "watchersCount",
        icon: <RiEyeLine className="h-5 w-5 text-chart-2" />,
        label: "Watchers",
        value: formatString(overviewStats?.watchersCount),
      },
      {
        id: "openIssues",
        icon: <RiFolderOpenLine className="h-5 w-5 text-chart-2" />,
        label: "Open issues",
        value: formatString(overviewStats?.openIssues),
      },
      {
        id: "closedIssues",
        icon: <RiCloseCircleLine className="h-5 w-5 text-chart-2" />,
        label: "Closed issues",
        value: formatString(overviewStats?.closedIssues),
      },
      {
        id: "branches",
        icon: <RiGitBranchLine className="h-5 w-5 text-chart-2" />,
        label: "Branches",
        value: formatString(overviewStats?.branches),
      },
      {
        id: "releases",
        icon: <RiExportLine className="h-5 w-5 text-chart-2" />,
        label: "Releases",
        value: formatString(overviewStats?.releases),
      },
    ],
    [overviewStats]
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <StatCard
          key={card.id}
          icon={card.icon}
          title={card.label}
          stat={card.value}
        />
      ))}
    </div>
  );
}
