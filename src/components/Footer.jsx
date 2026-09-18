function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-sm text-ink-faint">
        <p>© {currentYear} Toby Buckmaster</p>
        <p>All iOS apps are available on the App Store.</p>
      </div>
    </footer>
  );
}

export default Footer;
