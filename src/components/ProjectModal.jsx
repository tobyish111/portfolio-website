import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaAppStore, FaTimes } from 'react-icons/fa';
import { getAccent } from '../utils/projectStyles';
import ScreenshotFrame from './ScreenshotFrame';

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const accent = getAccent(project.accent);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-surface border border-line rounded-t-2xl sm:rounded-2xl shadow-xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-10 bg-surface/95 backdrop-blur border-b border-line">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-ink-faint">
            Project
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-ink-muted hover:text-ink hover:bg-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label="Close"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="px-5 py-8 sm:px-10 sm:py-10 max-w-2xl">
          <div className="flex items-start gap-5 mb-8">
            <ScreenshotFrame
              project={project}
              alt={`${project.title} icon`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.35rem] ring-1 ring-black/10 shrink-0"
            />
            <div className="min-w-0 pt-0.5">
              <p className="text-sm text-ink-faint mb-1">
                {project.category} · {project.releaseDate}
              </p>
              <h2
                id="project-dialog-title"
                className="font-serif text-3xl md:text-4xl text-ink leading-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>

          <div>
            <p className="font-serif text-lg md:text-[1.25rem] leading-[1.75] text-ink-muted mb-8">
              {project.description}
            </p>

            {project.breakdown && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-ink mb-3">
                  How it works/Learning Experience
                </h3>
                <p className="text-ink-muted leading-[1.75]">
                  {project.breakdown}
                </p>
              </div>
            )}

            {project.highlights?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-ink mb-3">
                  What it does
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-muted leading-relaxed">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${accent.text} bg-current`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-paper text-ink-muted border border-line"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.appStoreLink && (
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-accent transition-colors"
              >
                <FaAppStore />
                View on the App Store
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-accent transition-colors"
              >
                {project.linkLabel || 'View project'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectModal;
