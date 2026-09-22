# SANGANAK - Expert Tuition & IT Training Website

A modern, responsive static website for SANGANAK tuition and IT training services.

## Features

- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Course Showcase** - Display all courses and training programs
- ✅ **Booking System** - Contact forms for enquiries
- ✅ **Testimonials** - Student reviews and success stories
- ✅ **Pricing Display** - Transparent pricing tiers
- ✅ **SEO Friendly** - Optimized for search engines
- ✅ **Fast Performance** - Pure HTML/CSS/JavaScript (no heavy frameworks)
- ✅ **Easy Deployment** - Deploy to GitHub Pages, Netlify, or Vercel

## Pages

- **index.html** - Homepage with course overview
- **booking.html** - Booking/enquiry page
- **training.html** - Detailed course descriptions
- **about.html** - About SANGANAK
- **contact.html** - Contact form

## Setup & Deployment

### Option 1: GitHub Pages (FREE)

1. Create a new repository: `sanganak-website`
2. Push this code to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch
6. Your site will be live at: `https://username.github.io/sanganak-website/`

### Option 2: Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Click Deploy
5. Get a free Netlify domain or connect your custom domain

### Option 3: Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy
4. Your site is live instantly

## Customization

### Update Contact Forms

Replace `YOUR_FORM_ID` in the forms with your Formspree ID:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in all HTML files

### Update Booking System

Option A: Use Calendly
1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Set up your availability
3. Copy your Calendly link
4. Replace the booking form with the Calendly embed (see `booking.html` comments)

Option B: Keep the contact form
The current form submits to Formspree

### Update Contact Information

Edit these files to add your actual contact details:
- `index.html` - Footer section
- `booking.html` - Contact info section
- `contact.html` - Contact info section
- `about.html` - Contact info section

## File Structure

```
sanganak-website/
├── index.html              # Homepage
├── booking.html            # Booking page
├── training.html           # Courses page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All styling (2500+ lines)
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Your images folder (create this)
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox & grid
- **JavaScript (Vanilla)** - No framework dependencies
- **Responsive Design** - Mobile-first approach

## Performance

- Zero dependencies (no npm packages)
- Optimized CSS (single file, 2500+ lines)
- Fast page loads (no build step needed)
- SEO optimized

## Deployment Commands

```bash
# Initialize Git repository
git init

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/sanganak-website.git

# Add all files
git add .

# Create first commit
git commit -m "Initial SANGANAK website"

# Push to GitHub
git push -u origin main
```

## Support Services Integration

The website supports:
- ✅ **Formspree** for contact forms (free)
- ✅ **Calendly** for booking (free)
- ✅ **Stripe** links for payments
- ✅ **Google Forms** for enquiries
- ✅ **EmailJS** for form handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO Optimization

- Semantic HTML structure
- Meta tags (update in each HTML file)
- Responsive design
- Fast page load times
- Mobile-friendly

## Future Enhancements

- Add image carousel
- Implement student login
- Add payment gateway integration
- Create admin dashboard
- Add blog section
- Implement student progress tracking

## License

This website is the property of SANGANAK. All rights reserved.

## Support

For any issues or questions:
- Email: info@sanganak.co.uk
- Contact form: /contact.html

---

**Last Updated:** September 2026
**Version:** 1.0.0
