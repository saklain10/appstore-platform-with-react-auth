import { Link } from 'react-router';

const ContactButton = () => {
  return (
    <div className="text-center mt-8">
      <Link to="/contact">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
