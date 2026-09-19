import { certifications } from '../data/certifications';

function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-3">
            Certifications
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Credentials and coursework that support the work above.
          </p>
        </div>

        {certifications.length === 0 ? (
          <p className="text-ink-muted py-12 border-t border-b border-line">
            Certifications will be added here.
          </p>
        ) : (
          <div>
            {certifications.map((cert) => {
              const content = (
                <>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      {cert.date && (
                        <span className="text-sm text-ink-faint">{cert.date}</span>
                      )}
                    </div>
                    {cert.issuer && (
                      <p className="text-ink-muted leading-relaxed">{cert.issuer}</p>
                    )}
                  </div>
                  {cert.credentialUrl && (
                    <span className="hidden sm:inline-flex text-sm font-medium text-ink-muted group-hover:text-accent transition-colors whitespace-nowrap">
                      View credential
                      <span aria-hidden="true" className="ml-1.5">
                        →
                      </span>
                    </span>
                  )}
                </>
              );

              const rowClassName =
                'group w-full text-left py-7 md:py-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-center';

              return (
                <article key={cert.id} className="border-t border-line last:border-b">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${rowClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-paper rounded-sm`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={rowClassName}>{content}</div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
