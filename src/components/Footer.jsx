function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © {currentYear} Portfolio. Built with React & Tailwind CSS.
        </p>
        <p className="text-sm">
          All iOS apps are available on the App Store.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
