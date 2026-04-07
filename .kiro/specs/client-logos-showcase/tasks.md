# Implementation Plan: Client Logos Showcase

## Overview

This implementation plan breaks down the client logos showcase feature into discrete coding tasks. The feature adds a visual section to the Home page displaying logos of six client companies, providing social proof and credibility. The implementation follows the existing React/TypeScript patterns, integrates with the theme system, and includes comprehensive testing.

## Tasks

- [ ] 1. Create Client data type and configuration
  - [x] 1.1 Add Client interface to types.ts
    - Define Client interface with id, name, logoPath, websiteUrl (optional), and altText fields
    - _Requirements: 5.2_
  
  - [x] 1.2 Create data/clients.ts configuration file
    - Export CLIENTS array with all six client entries (Discovery Italy, Bike & Roll, Ascend Surgical Sales, ICU Consulting, MU6, Plug Players)
    - Include proper logoPath, websiteUrl, and altText for each client
    - Follow kebab-case naming convention for IDs
    - _Requirements: 3.3, 5.1, 5.3_
  
  - [x] 1.3 Write property test for client data structure validity
    - **Property 6: Client data structure is valid**
    - **Validates: Requirements 5.2**
  
  - [x] 1.4 Write property test for logo path naming convention
    - **Property 4: Logo paths follow naming convention**
    - **Validates: Requirements 3.3**

- [ ] 2. Add placeholder logo assets
  - [x] 2.1 Create public/logos directory
    - Create directory structure for logo assets
    - _Requirements: 3.1_
  
  - [x] 2.2 Add placeholder logo files
    - Create placeholder PNG files for all six clients following naming convention
    - Files: discovery-italy.png, bike-and-roll.png, ascend-surgical-sales.png, icu-consulting.png, mu6.png, plug-players.png
    - _Requirements: 3.2, 3.3_

- [ ] 3. Implement ClientLogos component
  - [x] 3.1 Create components/ui/ClientLogos.tsx
    - Import CLIENTS data and Client type
    - Define ClientLogosProps interface with optional className
    - Implement component shell with section container
    - _Requirements: 1.1, 4.1_
  
  - [x] 3.2 Implement logo grid layout
    - Create responsive grid using Tailwind classes (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
    - Map over CLIENTS array to render logo items
    - Apply consistent spacing and sizing
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 1.6_
  
  - [ ] 3.3 Implement logo rendering with conditional linking
    - Conditionally wrap logos in anchor tags when websiteUrl exists
    - Add target="_blank" and rel="noopener noreferrer" to links
    - Render img elements with src, alt, loading="lazy", width, and height attributes
    - _Requirements: 2.1, 2.2, 2.3, 6.1, 6.6_
  
  - [ ] 3.4 Add hover and focus states
    - Apply hover effects to clickable logos (opacity, scale, or filter)
    - Add focus-visible styles for keyboard navigation
    - Ensure non-clickable logos have no interactive styling
    - _Requirements: 2.4, 6.4_
  
  - [ ] 3.5 Implement image error handling
    - Add onError handler to img elements
    - Hide broken images or show fallback on load failure
    - _Requirements: 3.5_
  
  - [ ] 3.6 Add section heading and styling
    - Add heading text describing the section
    - Apply theme-aware styling using CSS custom properties
    - Integrate with Card component or similar styling pattern
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [ ] 3.7 Write property test for clickable logos
    - **Property 1: Clickable logos have proper link attributes**
    - **Validates: Requirements 2.1, 2.2, 6.3**
  
  - [ ] 3.8 Write property test for non-clickable logos
    - **Property 2: Non-clickable logos are non-interactive**
    - **Validates: Requirements 2.3**
  
  - [ ] 3.9 Write property test for accessibility text
    - **Property 3: All logos have accessibility text**
    - **Validates: Requirements 2.5, 6.2**
  
  - [ ] 3.10 Write property test for lazy loading
    - **Property 8: Images use lazy loading**
    - **Validates: Requirements 6.1**
  
  - [ ] 3.11 Write property test for image dimensions
    - **Property 9: Images have dimensions to prevent layout shift**
    - **Validates: Requirements 6.6**
  
  - [ ] 3.12 Write property test for error handling
    - **Property 5: Image loading errors are handled gracefully**
    - **Validates: Requirements 3.5**
  
  - [ ] 3.13 Write property test for render count
    - **Property 7: Component renders based on data array**
    - **Validates: Requirements 5.4, 5.5**
  
  - [ ] 3.14 Write unit tests for ClientLogos component
    - Test component renders without crashing
    - Test correct number of logos rendered
    - Test links have proper attributes
    - Test keyboard navigation
    - Test theme integration
    - _Requirements: 1.1, 2.1, 2.2, 2.5, 6.3, 6.4_

- [ ] 4. Integrate ClientLogos into Home page
  - [ ] 4.1 Import ClientLogos component in pages/Home.tsx
    - Add import statement for ClientLogos component
    - _Requirements: 4.1_
  
  - [ ] 4.2 Add ClientLogos section to Home page
    - Place ClientLogos component between Services Grid and Philosophy sections
    - Wrap in section element with appropriate spacing (mb-40 or similar)
    - Apply consistent max-width and padding with other sections
    - _Requirements: 4.1, 4.3_
  
  - [ ] 4.3 Write integration test for Home page
    - Test ClientLogos renders in correct position
    - Test component doesn't break existing layout
    - Test theme integration works correctly
    - _Requirements: 4.1, 4.6_

- [ ] 5. Add internationalization support (if needed)
  - [ ] 5.1 Add translation keys to LanguageContext
    - Add "home.clients.title" key for section heading in all languages (en, fi, sv)
    - Add any other necessary translation keys
    - _Requirements: 4.4_
  
  - [ ] 5.2 Update ClientLogos to use translations
    - Import useLanguage hook
    - Use t() function for section heading
    - _Requirements: 4.4_

- [ ] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Final verification and accessibility audit
  - [ ] 7.1 Verify responsive design at all breakpoints
    - Test mobile (375px), tablet (768px), and desktop (1280px) layouts
    - Ensure grid adapts correctly
    - _Requirements: 1.3, 1.4, 1.5_
  
  - [ ] 7.2 Verify theme integration
    - Test component in light mode
    - Test component in dark mode
    - Ensure proper contrast and visibility
    - _Requirements: 1.7, 4.6_
  
  - [ ] 7.3 Verify accessibility compliance
    - Check all images have alt text
    - Verify keyboard navigation works
    - Verify focus indicators are visible
    - Check contrast ratios meet WCAG standards
    - _Requirements: 2.5, 6.2, 6.3, 6.4, 6.5_
  
  - [ ] 7.4 Run accessibility audit with axe-core or similar tool
    - Use automated accessibility testing tool
    - Fix any issues found
    - _Requirements: 6.2, 6.3, 6.4, 6.5_

- [ ] 8. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests should use fast-check library with minimum 100 iterations
- The design uses TypeScript/React, so all implementation should follow those patterns
- Logo assets are placeholders initially and should be replaced with actual client logos
- The component integrates with existing theme system and responsive design patterns
