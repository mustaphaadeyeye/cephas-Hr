import React, { useState } from "react";
import { ChevronDown, ChevronUp, X, Check } from "lucide-react";
import Wrapper from "../components/Wrapper";

const roles = [
  {
    id: "hr-leaders",
    tag: "/SOLUTIONS/HR-LEADERS",
    icon: "🏅",
    title: "HR Leaders & People Ops",
    quote:
      "Automate repetitive HR admin and focus on building high-performing teams.",
    stats: [
      { value: "80%", label: "Reduction in manual admin hours" },
      { value: "3x", label: "Faster onboarding completion" },
      { value: "100%", label: "Digital employee records" },
    ],
    theme: {
      headerBg: "bg-[#eef2ff]",
      accentText: "text-[#193FD3]",
      pillBg: "bg-[#e0e7ff]",
      pillText: "text-[#193FD3]",
      iconBg: "bg-[#dbe4ff]",
      iconColor: "text-[#193FD3]",
      toggleBg: "bg-[#193FD3]",
      progressColor: "#193FD3",
    },
    painPoints: [
      "Disorganized paper records and manual employee files",
      "Slow, inconsistent onboarding workflows",
      "Leave request bottlenecks clogging email inboxes",
      "Disjointed, opinion-based performance reviews",
    ],
    modules: [
      {
        title: "People & Core HR",
        description:
          "Unified employee directory and digital record management — org charts, lifecycle timelines, department structures.",
      },
      {
        title: "Recruitment & ATS",
        description:
          "End-to-end candidate tracking, interview scheduling, scorecards and digital offer letter generation.",
      },
      {
        title: "Onboarding & Offboarding",
        description:
          "Automated workflows for IT, HR and Finance handoffs, asset assignments, and exit clearances.",
      },
      {
        title: "Performance & 360° Reviews",
        description:
          "Evidence-backed KPI tracking tied directly to completed tasks and project milestones — not just opinions.",
      },
    ],
    dashboard: {
      type: "pipeline",
      title: "HR Operations",
      metrics: [
        { label: "Open Roles", value: "14" },
        { label: "Onboarding", value: "7 active" },
        { label: "Leave Requests", value: "4 pending" },
        { label: "Attrition Risk", value: "2 flagged", danger: true },
      ],
      pipelineTitle: "Onboarding Pipeline",
      pipeline: [
        { initial: "A", stage: "Day 1 — Contract signing", progress: 25 },
        { initial: "J", stage: "Day 3 — IT setup", progress: 55 },
        { initial: "S", stage: "Day 5 — Complete", progress: 100 },
      ],
    },
  },
  {
    id: "founders-ceos",
    tag: "/SOLUTIONS/FOUNDERS-CEOS",
    icon: "🎯",
    title: "Founders & CEOs",
    quote:
      "Total workforce visibility, zero compliance risks, and scalable operations.",
    stats: [
      { value: "100%", label: "Statutory tax accuracy" },
      { value: "35%", label: "Reduction in labor cost variance" },
      { value: "Real-time", label: "Workforce visibility at executive level" },
    ],
    theme: {
      headerBg: "bg-[#e8f3fd]",
      accentText: "text-[#0973D4]",
      pillBg: "bg-[#d6ecfc]",
      pillText: "text-[#0973D4]",
      iconBg: "bg-[#d6ecfc]",
      iconColor: "text-[#0973D4]",
      toggleBg: "bg-[#0973D4]",
      progressColor: "#0596F1",
    },
    painPoints: [
      "Lack of real-time headcount and cost clarity",
      "Unexpected labor cost overruns and budget variance",
      "Regulatory non-compliance penalties and audit exposure",
      "Tool fragmentation forcing manual data reconciliation",
    ],
    modules: [
      {
        title: "Executive Analytics & Dashboards",
        description:
          "Live visibility into labor costs, headcount growth, productivity and company-wide utilization — in one view.",
      },
      {
        title: "CephasHR AI Intelligence",
        description:
          "Predictive insights surfacing turnover risk, workload bottlenecks, and cost forecast anomalies automatically.",
      },
      {
        title: "Payroll & Statutory Governance",
        description:
          "Automated labor law, pension, and tax compliance — so regulatory exposure is eliminated at source.",
      },
    ],
    dashboard: {
      type: "chart",
      title: "Executive Overview",
      metrics: [
        { label: "Headcount", value: "324" },
        { label: "Utilization", value: "87%", success: true },
        { label: "Payroll Run", value: "₦48.2M" },
      ],
      chartTitle: "Labor Cost Trend",
      chartBars: [40, 55, 70, 90, 60, 75, 50, 35, 45, 30, 55, 65],
      alert: "AI: 2 attrition risks flagged this week",
    },
  },
  {
    id: "finance-ops",
    tag: "/SOLUTIONS/FINANCE-OPS",
    icon: "💰",
    title: "Finance & Operations Managers",
    quote:
      "Connect workforce time directly to zero-error payroll and real-time project costing.",
    stats: [
      { value: "100%", label: "Payroll accuracy — zero manual calculation" },
      { value: "60%", label: "Faster expense reconciliation" },
      { value: "0", label: "Duplicate expense payouts with AI detection" },
    ],
    theme: {
      headerBg: "bg-[#e7f8ef]",
      accentText: "text-[#0F8A4B]",
      pillBg: "bg-[#d3f3e0]",
      pillText: "text-[#0F8A4B]",
      iconBg: "bg-[#d3f3e0]",
      iconColor: "text-[#0F8A4B]",
      toggleBg: "bg-[#0F8A4B]",
      progressColor: "#16a34a",
    },
    painPoints: [
      "Manual payroll calculations causing errors and audit risk",
      "Expense fraud and duplicate receipt submissions",
      "Missing billable hours inflating project cost estimates",
      "Untracked company hardware creating asset liability",
    ],
    modules: [
      {
        title: "Payroll & Compensation",
        description:
          "Multi-structure payroll with automated deductions, statutory compliance, and one-click disbursement to bank accounts.",
      },
      {
        title: "Expense & Claims Automation",
        description:
          "Mobile receipt scanning with AI policy-violation detection and duplicate claim flagging before manager review.",
      },
      {
        title: "Asset Management",
        description:
          "Digital logs of hardware allocations, condition tracking, warranty records, and digital return sign-offs.",
      },
      {
        title: "Time & Timesheet Approvals",
        description:
          "Direct pipeline connecting approved billable hours to payroll runs and client project budget sheets.",
      },
    ],
    dashboard: {
      type: "list",
      title: "Finance & Payroll",
      rows: [
        { label: "July Payroll", note: "Disbursed", value: "₦48.2M", color: "text-[#0F8A4B]" },
        { label: "Expense Claims", note: "₦670k Pending", value: "₦3.4M", color: "text-amber-500" },
        { label: "Overtime Cost", note: "+₦190k overspend", value: "₦1.2M", color: "text-red-500" },
      ],
      profitTitle: "Project Profitability",
      profitProgress: 78,
      profitLabel: "+22% margin",
    },
  },
  {
    id: "project-managers",
    tag: "/SOLUTIONS/PROJECT-MANAGERS",
    icon: "📊",
    title: "Project Managers & Team Leads",
    quote:
      "Align team capacity with project execution without burning out your people.",
    stats: [
      { value: "92%", label: "On-time milestone delivery rate" },
      { value: "40%", label: "Reduction in scheduling conflicts" },
      { value: "100%", label: "Billable hours captured vs. estimated" },
    ],
    theme: {
      headerBg: "bg-[#f1ecfe]",
      accentText: "text-[#7c3aed]",
      pillBg: "bg-[#e4d9fd]",
      pillText: "text-[#7c3aed]",
      iconBg: "bg-[#e4d9fd]",
      iconColor: "text-[#7c3aed]",
      toggleBg: "bg-[#7c3aed]",
      progressColor: "#7c3aed",
    },
    painPoints: [
      "Schedule conflicts and double-booked team members",
      "Unbalanced workloads causing burnout and missed deadlines",
      "Untracked project hours leading to underbilling",
      "Missing dependencies causing cascading milestone delays",
    ],
    modules: [
      {
        title: "Smart Calendar & Scheduling",
        description:
          "Automatic conflict detection and workload-based task allocation based on real-time team bandwidth and leave calendars.",
      },
      {
        title: "Project & Task Management",
        description:
          "Multi-view boards — Kanban, Gantt, Timeline, and List — with full milestone dependency tracking.",
      },
      {
        title: "Time Tracking & Timers",
        description:
          "Task-level 1-click timers distinguishing billable vs. non-billable hours, feeding directly into project cost reports.",
      },
      {
        title: "AI Productivity Assistant",
        description:
          "Automated summaries of team output, hours spent per project, and milestone velocity — surfaced weekly.",
      },
    ],
    dashboard: {
      type: "sprint",
      title: "Project Manager View",
      metrics: [
        { label: "Milestones", value: "6/8" },
        { label: "Budget Burn", value: "68%", color: "text-amber-500" },
        { label: "Billable Hours", value: "1,240h" },
        { label: "Risk Level", value: "Low", success: true },
      ],
      sprintTitle: "Sprint Timeline",
      sprint: [
        { stage: "Discovery", progress: 100 },
        { stage: "Design", progress: 100 },
        { stage: "Build", progress: 72 },
        { stage: "QA", progress: 0 },
      ],
    },
  },
];

const Dashboard = ({ role }) => {
  const { theme, dashboard } = role;

  if (dashboard.type === "pipeline") {
    return (
      <>
        <div className="mb-5 grid grid-cols-2 gap-3">
          {dashboard.metrics.map((metric, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-3">
              <p className="text-xs text-gray-400">{metric.label}</p>
              <p
                className={`mt-1 text-sm font-bold ${
                  metric.danger ? "text-red-500" : theme.accentText
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <p className="mb-3 text-xs font-semibold text-gray-500">
            {dashboard.pipelineTitle}
          </p>
          <div className="space-y-3">
            {dashboard.pipeline.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${theme.iconBg} ${theme.accentText}`}
                >
                  {step.initial}
                </span>
                <div className="flex-1">
                  <p className="mb-1 text-[11px] text-gray-500">{step.stage}</p>
                  <div className="h-1.5 w-full rounded-full bg-gray-100">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${step.progress}%`,
                        backgroundColor: theme.progressColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (dashboard.type === "chart") {
    return (
      <>
        <div className="mb-5 grid grid-cols-3 gap-3">
          {dashboard.metrics.map((metric, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-3">
              <p className="text-xs text-gray-400">{metric.label}</p>
              <p
                className={`mt-1 text-sm font-bold ${
                  metric.success ? "text-green-500" : theme.accentText
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-xl border border-gray-100 bg-white p-4">
          <p className="mb-3 text-xs font-semibold text-gray-500">
            {dashboard.chartTitle}
          </p>
          <div className="flex h-24 items-end gap-1.5">
            {dashboard.chartBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, backgroundColor: theme.progressColor, opacity: 0.85 }}
              />
            ))}
          </div>
        </div>

        <div className={`rounded-xl px-4 py-3 text-xs font-medium ${theme.pillBg} ${theme.pillText}`}>
          {dashboard.alert}
        </div>
      </>
    );
  }

  if (dashboard.type === "list") {
    return (
      <>
        <div className="mb-4 space-y-3">
          {dashboard.rows.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3"
            >
              <div>
                <p className="text-xs font-medium text-gray-600">{row.label}</p>
                <p className="text-[11px] text-gray-400">{row.note}</p>
              </div>
              <p className={`text-sm font-bold ${row.color}`}>{row.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-500">
              {dashboard.profitTitle}
            </p>
            <span className="text-xs font-bold text-green-500">
              {dashboard.profitLabel}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-[#0596F1]"
              style={{ width: `${dashboard.profitProgress}%` }}
            />
          </div>
        </div>
      </>
    );
  }

  if (dashboard.type === "sprint") {
    return (
      <>
        <div className="mb-5 grid grid-cols-2 gap-3">
          {dashboard.metrics.map((metric, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-3">
              <p className="text-xs text-gray-400">{metric.label}</p>
              <p
                className={`mt-1 text-sm font-bold ${
                  metric.success
                    ? "text-green-500"
                    : metric.color
                    ? metric.color
                    : theme.accentText
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <p className="mb-3 text-xs font-semibold text-gray-500">
            {dashboard.sprintTitle}
          </p>
          <div className="space-y-3">
            {dashboard.sprint.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-16 shrink-0 text-[11px] text-gray-500">
                  {step.stage}
                </span>
                <div className="h-1.5 flex-1 rounded-full bg-gray-100">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${step.progress}%`,
                      backgroundColor: theme.progressColor,
                    }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-[11px] text-gray-400">
                  {step.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return null;
};

const RoleCard = ({ role, isOpen, onToggle }) => {
  const { theme } = role;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Header row — always visible */}
      <button
        onClick={onToggle}
        className={`flex w-full items-start justify-between p-6 text-left transition-colors ${
          isOpen ? theme.headerBg : "bg-white"
        }`}
      >
        <div className="flex-1">
          <p className="mb-1 text-[10px] font-medium text-gray-400">
            {role.tag}
          </p>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-lg">{role.icon}</span>
            <h3 className="text-base font-semibold text-[#111111]">
              {role.title}
            </h3>
          </div>
          <p className="mb-3 text-sm italic text-gray-500">"{role.quote}"</p>

          <div className="flex flex-wrap gap-2">
            {role.stats.map((stat, i) => (
              <span
                key={i}
                className={`rounded-full px-3 py-1 text-xs font-medium ${theme.pillBg} ${theme.pillText}`}
              >
                <span className="font-bold">{stat.value}</span> {stat.label}
              </span>
            ))}
          </div>
        </div>

        <span
          className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            isOpen ? `${theme.toggleBg} text-white` : "bg-gray-100 text-gray-500"
          }`}
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {/* Expanded detail panel */}
      {isOpen && role.painPoints && (
        <div className="border-t border-gray-100 p-6">
          {/* Breadcrumb */}
          <p className="mb-6 text-xs text-gray-400">
            Solutions <span className="mx-1 text-gray-300">›</span> By Role{" "}
            <span className="mx-1 text-gray-300">›</span>
            <span className={`font-medium ${theme.accentText}`}>
              {role.title}
            </span>
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: pain points + modules */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Pain Points Solved
              </p>
              <ul className="mb-6 space-y-2.5">
                {role.painPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Highlighted Modules
              </p>
              <ul className="space-y-4">
                {role.modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.iconBg}`}
                    >
                      <Check size={12} className={theme.iconColor} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#111111]">
                        {mod.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                        {mod.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: dashboard mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#fafbfc] p-5">
              <p className="mb-4 text-sm font-semibold text-[#111111]">
                {role.dashboard.title}
              </p>
              <Dashboard role={role} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RoleSelector = () => {
  const [openId, setOpenId] = useState(null);

  const toggleRole = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#f7f8fa] py-16">
      <Wrapper>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
            Choose your role and perspective
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Each role gets a tailored view of the platform built around their
            specific outcomes.
          </p>
        </div>

        <div className="mx-auto flex  flex-col gap-4">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              isOpen={openId === role.id}
              onToggle={() => toggleRole(role.id)}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default RoleSelector;