import ScreenshotFrame from './ScreenshotFrame';

function AppCard({ project, onSelect }) {
  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="group h-full w-full text-left rounded-2xl border border-line bg-surface p-5 flex flex-col transition-colors hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        aria-haspopup="dialog"
      >
        <ScreenshotFrame
          project={project}
          className="w-full aspect-square rounded-xl ring-1 ring-inset ring-black/5 mb-5"
        />

        <p className="text-sm text-ink-faint mb-1.5">
          {project.releaseDate}
          {project.group === 'other' ? ' · Other' : ' · iOS'}
        </p>
        <h3 className="text-xl font-semibold tracking-tight text-ink mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-muted leading-relaxed mb-5">
          {project.summary}
        </p>
        <span className="mt-auto inline-flex items-center text-sm font-medium text-ink-muted group-hover:text-accent transition-colors">
          View project
          <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </button>
    </article>
  );
}

export default AppCard;
