# Modern Portfolio Website

A modern, responsive portfolio website with smooth animations and a clean UI. This portfolio template is designed to showcase your skills, projects, and professional experience in an elegant and interactive way.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with attention to detail
- **Smooth Animations**: Engaging animations using AOS (Animate On Scroll) library
- **Interactive Elements**: Dynamic project filtering, typing animation, and more
- **Easy to Customize**: Well-structured code that's easy to modify
- **Cross-Browser Compatible**: Works on all modern browsers
- **Performance Optimized**: Fast loading times and smooth scrolling

## Sections

1. **Hero Section**: Eye-catching introduction with a typing animation
2. **About**: Personal information and background
3. **Skills**: Visual representation of your technical skills
4. **Projects**: Showcase your work with filtering options
5. **Experience**: Timeline of your professional journey
6. **Contact**: Contact form and personal contact information

## How to Customize

### Basic Information

1. Open `index.html` and replace the placeholder content with your personal information:
   - Your name and profession in the hero section
   - About me text
   - Contact details
   - Social media links

2. Update the skills section with your actual skills and proficiency levels.

3. Add your projects to the projects section with appropriate images and links.

4. Update the experience timeline with your work history and education.

### Profile Images

1. Replace the placeholder profile images in the CSS file:
   - Find the `.profile-image` and `.about-profile-image` classes in `styles.css`
   - Replace the background URLs with links to your own images

### Colors and Styling

1. To change the color scheme, modify the CSS variables in the `:root` section of `styles.css`:
   ```css
   :root {
       --primary-color: #4a63e7; /* Main color */
       --secondary-color: #6c757d; /* Secondary color */
       --accent-color: #ff6b6b; /* Accent color */
       /* ... other variables ... */
   }
   ```

### Typing Animation

1. To change the typing animation text, modify the `textArray` in `script.js`:
   ```javascript
   const textArray = ['Web Developer', 'UI/UX Designer', 'Software Engineer', 'Problem Solver'];
   ```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library
- [Font Awesome](https://fontawesome.com/) - Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for placeholder images