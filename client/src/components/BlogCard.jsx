
import React from 'react';
import { useNavigate } from 'react-router-dom';

const stripHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-105 hover:shadow-primary/25 duration-300 cursor-pointer bg-white transition-transform"
    >
      <img src={image} alt={title} className="aspect-video w-full object-cover" />

      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>

      <div className="p-5">
        <h5 className="font-semibold mb-2 text-gray-900 text-base">
          {title}
        </h5>

        <p className="text-xs text-gray-600 line-clamp-3">
          {stripHTML(description)}
        </p>

        <span className="text-primary text-xs font-semibold mt-2 inline-block hover:translate-x-1 transition-transform">
          Read More →
        </span>
      </div>
    </div>
  );
};

export default BlogCard;

// Stays in line with other elements (like inline)
// Can have width, height, padding, and margin (like block)
// Slices it to show only the first 80 characters. starts from 0

// User needs to be redirected when he clicks a card for that we will use use navigate on the card

/**
 * Blog Card Enhancements:
 * - Clean text preview using `line-clamp` to show only the first 3 lines (HTML tags stripped with DOMParser).
 * - Installed Tailwind plugin: `@tailwindcss/line-clamp` and enabled it in `tailwind.config.js`.
 * - Adds a “Read More →” prompt below each description.
 * - Smooth card scaling and shadow effect on hover for better interactivity.
 * - Fully responsive and styled using Tailwind CSS utility classes.
 */

