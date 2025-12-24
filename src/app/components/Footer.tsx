export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>
          © {new Date().getFullYear()} Barrett Cartage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
