import { FaAppStore, FaExternalLinkAlt } from 'react-icons/fa';

function AppCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
      {/* Screenshot Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[9/16]">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="800"%3E%3Crect fill="%23e5e7eb" width="400" height="800"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24"%3EScreenshot%3C/text%3E%3C/svg%3E';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="text-center p-8">
              <FaAppStore className="mx-auto text-6xl text-primary-400 mb-4" />
              <p className="text-gray-500 font-medium">Screenshot Coming Soon</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-lg flex items-center space-x-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            <FaExternalLinkAlt />
            <span>View on App Store</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 font-medium">{project.releaseDate}</span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* App Store Link Button */}
        <a
          href={project.appStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
        >
          <FaAppStore />
          <span>Download on App Store</span>
        </a>
      </div>
    </div>
  );
}

export default AppCard;
