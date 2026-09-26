import { useState } from 'react';
import { getAccent } from '../utils/projectStyles';

function ScreenshotFrame({ project, className = '', alt = '' }) {
  const [failed, setFailed] = useState(false);
  const accent = getAccent(project.accent);
  const showImage = project.screenshot && !failed;

  return (
    <div className={`relative overflow-hidden ${accent.soft} ${className}`}>
      {showImage ? (
        <img
          src={project.screenshot}
          alt={alt}
          className="w-full h-full object-cover object-center"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center px-4 text-center ${accent.text}`}>
          <span className="text-sm font-semibold leading-snug">{project.title}</span>
        </div>
      )}
    </div>
  );
}

export default ScreenshotFrame;
