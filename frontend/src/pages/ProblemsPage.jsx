import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { Code2Icon, ChevronRightIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { getDiffBadgeColor } from "../lib/util";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;
  const medCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* hearder */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">Sharpen your coding skills</p>
        </div>

        {/* stats */}
        <div className="my-8 card rounded-xl bg-base-100 shadow-2xl">
          <div className="card-body p-2">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-base-content/80">{problems.length}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{medCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* problems */}
        <div className="space-y-5">
          {problems.map((problem) => {
            return (
              <Link
                key={problem.id}
                to={`problems/${problem.id}`}
                className="card rounded-2xl bg-base-100 hover:scale-[1.01] transition-transform"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Code2Icon className="size-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold ">
                              {problem.title}
                            </h2>
                            <span
                              className={`badge rounded-xl font-semibold ${getDiffBadgeColor(problem.difficulty)}`}
                            >
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-base-content/60">
                            {problem.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-base-content/80 my-2">
                        {problem.description.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="text-xs">Solve</span>
                      <ChevronRightIcon className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
