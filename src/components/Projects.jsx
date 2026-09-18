import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import AppCard from './AppCard';
import ProjectModal from './ProjectModal';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ios', label: 'iOS' },
  { id: 'other', label: 'Other' },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.group === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-3">
            Selected work
          </h2>
          <p className="text-ink-muted leading-relaxed">
            iOS apps and other software projects. Open one to read what it does
            and why I built it.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Project categories"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                  isActive
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink-muted border-line hover:text-ink hover:border-ink/30'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {visibleProjects.length === 0 ? (
          <p className="text-ink-muted py-12 border-t border-b border-line">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleProjects.map((project) => (
              <AppCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
