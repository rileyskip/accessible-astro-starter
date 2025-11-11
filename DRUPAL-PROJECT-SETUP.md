# Drupal Theming Updates Portfolio Page - Setup Guide

## ✅ What's Been Completed

I've successfully created a new portfolio page for "Drupal Theming Updates" with the following:

### Files Created/Modified:

1. **`src/content/projects/project-07.mdx`** - The main portfolio page content
2. **`src/pages/portfolio/[...page].astro`** - Updated to include the new project in the Development section
3. **`src/pages/portfolio/[project].astro`** - Updated to support the 7th project image

### Project Features:

- Comprehensive content describing the Drupal theming project
- Multiple sections covering design system, UI components, theme switching, and performance
- Image placeholders ready for your 11 uploaded images
- Properly categorized under "Development" in the portfolio

## 📸 Next Step: Add Your Images

To complete the setup, you need to save your 11 uploaded images to the project. Here's how:

### Image Locations

Save each image to: **`public/projects/`**

### Image Filenames and Descriptions:

1. **`drupal-01.png`** - Green checkmark (design approval/success)
2. **`drupal-02.png`** - Rutgers branding elements (R logos with text)
3. **`drupal-03.png`** - Form components (toggles, buttons, checkboxes)
4. **`drupal-04.png`** - Crop/frame tool icon
5. **`drupal-05.png`** - Masonry grid layout (also used as featured image)
6. **`drupal-06.png`** - Sun icon (light mode theme)
7. **`drupal-07.png`** - Sun and moon split view (theme switching)
8. **`drupal-08.png`** - Landscape/mountain view (responsive design)
9. **`drupal-09.png`** - Mobile phone with rocket (performance)
10. **`drupal-10.png`** - Document/page layouts
11. **`drupal-11.png`** - Pinned Rutgers page layout

### Quick Steps:

1. Open your file browser to: `/Applications/github/accessible-astro-starter/public/projects/`
2. Save/copy each of your 11 uploaded images to this folder
3. Rename them according to the list above (`drupal-01.png` through `drupal-11.png`)
4. Rebuild your Astro site: `npm run build` or `npm run dev`

## 🎯 How to Access the New Page

Once the images are in place:

- **Portfolio Listing**: Visit `/portfolio/` - The project will appear in the "Development" section
- **Direct Page**: Visit `/portfolio/project-07/` to see the full project page

## 📝 Project Details

- **Title**: Drupal Theming Updates
- **Author**: Riley Skipper
- **Description**: Comprehensive UI/UX improvements and theme modernization for Rutgers University's Drupal platform
- **Category**: Development
- **Featured Image**: Uses `drupal-05.png` (masonry grid)

## 🔧 Customization

If you want to customize the content:

- Edit: `src/content/projects/project-07.mdx`
- The page uses MDX format, so you can add more React/Astro components if needed
- Follow the existing project structure for consistency

## 🎨 Alternative: Use Different Images

If you want to use different images than the 11 uploaded ones:

1. Save your preferred images to `public/projects/`
2. Update the image paths in `project-07.mdx` to match your new filenames
3. Make sure the featured image in `[project].astro` points to the right file

## ✨ Testing

After adding the images, test the page:

```bash
npm run dev
```

Then visit:
- http://localhost:4321/portfolio/ (see it in the Development section)
- http://localhost:4321/portfolio/project-07/ (view the full page)

---

**Note**: The current setup uses a placeholder image (project-image-5.png) for the portfolio listing thumbnail until you add the actual Drupal images. Once `drupal-05.png` is in place, it will display properly!

