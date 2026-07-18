function Footer({ content }) {
  return (
    <footer className="bg-white py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-primary text-4xl font-bold mb-6">{content.title}</h2>
        <p className="text-gray-600 mb-8">{content.text}</p>
        <a href={`mailto:${content.email}`} className="text-primary underline font-medium">
          {content.email}
        </a>
      </div>
    </footer>
  );
}

export default Footer;