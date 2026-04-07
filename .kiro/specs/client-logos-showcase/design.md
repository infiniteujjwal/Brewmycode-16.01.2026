# Design Document: Client Logos Showcase

## Overview

The client logos showcase feature adds a visual section to the Home page displaying logos of six companies that have worked with Brewmy{Code}. This provides social proof and credibility to potential clients while maintaining the existing design aesthetic.

The feature consists of three main components:
1. A reusable `ClientLogos` component that renders the logo grid
2. A data configuration file storing client information (name, logo path, website URL)
3. Logo assets stored in the public directory

The implementation integrates seamlessly with the existing React/TypeScript codebase, theme system, and responsive design patterns. The component will be placed on the Home page between the Services Grid and Philosophy sections, maintaining visual consistency with the Card-based layout pattern used throughout the site.

## Architecture

### Component Structure

```
components/
  ui/
    ClientLogos.tsx       # Main showcase component
data/
  clients.ts              # Client data configuration
public/
  logos/                  # Logo image assets
    discovery-italy.png
    bike-and-roll.png
    ascend-surgical-sales.png
    icu-consulting.png
    mu6.png
    plug-players.png
```

### Integration Points

1. **Home Page Integration**: The `ClientLogos` component will be imported and rendered in `pages/Home.tsx` between the Services Grid section and the Philosophy section.

2. **Theme System Integration**: The component will use CSS custom properties from the existing theme system (`--color-bg`, `--color-surface`, `--color-text`, etc.) to ensure proper light/dark mode support.

3. **Styling Integration**: The component will leverage Tailwind CSS classes consistent with the existing codebase and may optionally use the `Card` component for the container.

### Data Flow

```
clients.ts (data source)
    ↓
ClientLogos.tsx (component)
    ↓
Logo rendering with lazy loading
    ↓
User interaction (click/keyboard)
    ↓
External navigation (new tab)
```

## Components and Interfaces

### ClientLogos Component

**Purpose**: Renders a responsive grid of client logos with optional links to company websites.

**Props Interface**:
```typescript
interface ClientLogosProps {
  className?: string;  // Optional additional CSS classes
}
```

**Key Features**:
- Responsive grid layout (1-2 columns mobile, 2-3 tablet, 3-6 desktop)
- Lazy loading for performance optimization
- Hover effects for interactive logos
- Keyboard navigation support
- Theme-aware styling

**Rendering Logic**:
- Maps over client data array
- Conditionally wraps logos in anchor tags if URL exists
- Applies hover and focus states for interactive elements
- Handles image loading errors with graceful fallback

### Client Data Interface

**Purpose**: Type-safe structure for client information.

```typescript
interface Client {
  id: string;           // Unique identifier (kebab-case)
  name: string;         // Display name
  logoPath: string;     // Path to logo asset (relative to public/)
  websiteUrl?: string;  // Optional company website URL
  altText: string;      // Accessibility description
}
```

**Data Configuration** (`data/clients.ts`):
```typescript
export const CLIENTS: Client[] = [
  {
    id: 'discovery-italy',
    name: 'Discovery Italy',
    logoPath: '/logos/discovery-italy.png',
    websiteUrl: 'https://www.discoveryitaly.com',
    altText: 'Discovery Italy logo'
  },
  // ... additional clients
];
```

## Data Models

### Client Data Structure

The client data will be stored in a TypeScript file (`data/clients.ts`) as a typed array, following the pattern established by `data/workflows.ts`.

**Schema**:
```typescript
type Client = {
  id: string;           // Unique identifier, kebab-case format
  name: string;         // Human-readable company name
  logoPath: string;     // Relative path from public directory
  websiteUrl?: string;  // Optional external link
  altText: string;      // Screen reader description
}
```

**Example Data**:
```typescript
export const CLIENTS: Client[] = [
  {
    id: 'discovery-italy',
    name: 'Discovery Italy',
    logoPath: '/logos/discovery-italy.png',
    websiteUrl: 'https://www.discoveryitaly.com',
    altText: 'Discovery Italy logo'
  },
  {
    id: 'bike-and-roll',
    name: 'Bike & Roll',
    logoPath: '/logos/bike-and-roll.png',
    websiteUrl: 'https://www.bikeandroll.com',
    altText: 'Bike & Roll logo'
  },
  {
    id: 'ascend-surgical-sales',
    name: 'Ascend Surgical Sales',
    logoPath: '/logos/ascend-surgical-sales.png',
    websiteUrl: 'https://www.ascendsurgicalsales.com',
    altText: 'Ascend Surgical Sales logo'
  },
  {
    id: 'icu-consulting',
    name: 'ICU Consulting',
    logoPath: '/logos/icu-consulting.png',
    websiteUrl: 'https://www.icuconsulting.com',
    altText: 'ICU Consulting logo'
  },
  {
    id: 'mu6',
    name: 'MU6',
    logoPath: '/logos/mu6.png',
    websiteUrl: 'https://www.mu6.com',
    altText: 'MU6 logo'
  },
  {
    id: 'plug-players',
    name: 'Plug Players',
    logoPath: '/logos/plug-players.png',
    websiteUrl: 'https://www.plugplayers.com',
    altText: 'Plug Players logo'
  }
];
```

### Logo Asset Requirements

**Format**: PNG or SVG (WebP as alternative)
**Naming Convention**: `{company-name-kebab-case}.{ext}`
**Recommended Dimensions**: 200x80px to 300x120px (maintaining aspect ratio)
**Optimization**: Compressed for web delivery (<50KB per logo)
**Color Mode**: Logos should work on both light and dark backgrounds, or provide theme-specific variants

### Type Definitions

Add to `types.ts`:
```typescript
export interface Client {
  id: string;
  name: string;
  logoPath: string;
  websiteUrl?: string;
  altText: string;
}
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Clickable logos have proper link attributes

For any client in the CLIENTS array with a websiteUrl defined, the rendered logo element should be wrapped in an anchor tag with href matching the websiteUrl, target="_blank", and rel="noopener noreferrer" attributes, and the anchor should be keyboard focusable.

**Validates: Requirements 2.1, 2.2, 6.3**

### Property 2: Non-clickable logos are non-interactive

For any client in the CLIENTS array without a websiteUrl defined, the rendered logo element should not be wrapped in an anchor tag and should not have any click handlers or interactive attributes.

**Validates: Requirements 2.3**

### Property 3: All logos have accessibility text

For any client in the CLIENTS array, the rendered img element should have an alt attribute containing the client's altText value.

**Validates: Requirements 2.5, 6.2**

### Property 4: Logo paths follow naming convention

For any client in the CLIENTS array, the logoPath should follow the pattern `/logos/{kebab-case-name}.{ext}` where the kebab-case-name matches the client's id.

**Validates: Requirements 3.3**

### Property 5: Image loading errors are handled gracefully

For any client logo, if the image fails to load (404 or network error), the component should handle the error event and either display a fallback placeholder or hide the broken image without breaking the layout.

**Validates: Requirements 3.5**

### Property 6: Client data structure is valid

For any client in the CLIENTS array, the object should have all required fields: id (string), name (string), logoPath (string), and altText (string), with websiteUrl being optional (string or undefined).

**Validates: Requirements 5.2**

### Property 7: Component renders based on data array

For any valid CLIENTS array of length N, the ClientLogos component should render exactly N logo elements in the DOM.

**Validates: Requirements 5.4, 5.5**

### Property 8: Images use lazy loading

For any client in the CLIENTS array, the rendered img element should have the loading="lazy" attribute to enable browser-native lazy loading.

**Validates: Requirements 6.1**

### Property 9: Images have dimensions to prevent layout shift

For any client in the CLIENTS array, the rendered img element should have explicit width and height attributes (or CSS equivalents) to reserve space and prevent cumulative layout shift during image loading.

**Validates: Requirements 6.6**


## Error Handling

### Image Loading Failures

**Scenario**: Logo image fails to load (404, network error, CORS issue)

**Handling Strategy**:
- Attach `onError` handler to each `<img>` element
- On error, either:
  - Option A: Hide the failed logo by setting display to none
  - Option B: Display a placeholder with the company name as text
- Log error to console for debugging (development only)
- Prevent broken image icon from displaying

**Implementation**:
```typescript
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none';
  console.warn(`Failed to load logo: ${client.name}`);
};
```

### Missing or Invalid Data

**Scenario**: CLIENTS array is empty, undefined, or contains invalid entries

**Handling Strategy**:
- Validate data structure at runtime (development mode)
- Filter out invalid entries before rendering
- If no valid clients exist, render nothing (graceful degradation)
- TypeScript types prevent most invalid data at compile time

**Implementation**:
```typescript
const validClients = CLIENTS.filter(client => 
  client.id && client.name && client.logoPath && client.altText
);

if (validClients.length === 0) {
  return null; // Don't render empty section
}
```

### External Link Security

**Scenario**: User clicks logo link to external website

**Handling Strategy**:
- Always use `target="_blank"` to open in new tab
- Always include `rel="noopener noreferrer"` to prevent:
  - Tabnapping attacks (noopener)
  - Referrer leakage (noreferrer)
- Validate URLs are properly formatted (optional runtime check)

### Theme Context Missing

**Scenario**: Component rendered outside ThemeProvider

**Handling Strategy**:
- Component should still render with default styles
- CSS custom properties have fallback values in global styles
- No runtime errors should occur

## Testing Strategy

### Unit Testing Approach

Unit tests will focus on specific examples, edge cases, and component behavior verification using React Testing Library and Jest (or Vitest).

**Test Cases**:

1. **Rendering Tests**:
   - Component renders without crashing
   - Renders correct number of logos based on CLIENTS data
   - Renders section heading/title
   - Renders within ThemeProvider context

2. **Accessibility Tests**:
   - All images have alt text
   - Clickable logos are keyboard navigable (can receive focus)
   - Links have proper ARIA attributes

3. **Interactivity Tests**:
   - Logos with URLs render as anchor tags
   - Logos without URLs render as non-interactive elements
   - Links have target="_blank" and rel="noopener noreferrer"

4. **Error Handling Tests**:
   - Image onError handler is attached
   - Component handles empty CLIENTS array gracefully
   - Component handles invalid client data

5. **Edge Cases**:
   - Single client in array
   - All clients have URLs
   - No clients have URLs
   - Mixed URL presence

**Example Unit Test**:
```typescript
describe('ClientLogos', () => {
  it('renders all client logos', () => {
    render(<ClientLogos />);
    const logos = screen.getAllByRole('img');
    expect(logos).toHaveLength(6);
  });

  it('makes logos with URLs clickable', () => {
    render(<ClientLogos />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
```

### Property-Based Testing Approach

Property-based tests will verify universal properties across randomized inputs using **fast-check** (JavaScript/TypeScript property-based testing library).

**Library**: fast-check (https://github.com/dubzzz/fast-check)
**Configuration**: Minimum 100 iterations per property test

**Property Tests**:

Each property test will be tagged with a comment referencing the design document property:

```typescript
// Feature: client-logos-showcase, Property 1: Clickable logos have proper link attributes
fc.assert(
  fc.property(
    fc.array(clientArbitrary, { minLength: 1, maxLength: 20 }),
    (clients) => {
      const { container } = render(<ClientLogos clients={clients} />);
      
      clients.forEach(client => {
        if (client.websiteUrl) {
          const link = container.querySelector(`a[href="${client.websiteUrl}"]`);
          expect(link).toBeTruthy();
          expect(link?.getAttribute('target')).toBe('_blank');
          expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
        }
      });
    }
  ),
  { numRuns: 100 }
);
```

**Property Test Coverage**:

1. **Property 1**: For any clients with URLs, verify anchor attributes
2. **Property 2**: For any clients without URLs, verify non-interactive rendering
3. **Property 3**: For any clients, verify alt text presence
4. **Property 4**: For any clients, verify logo path naming convention
5. **Property 5**: For any clients, verify error handling (simulate load failures)
6. **Property 6**: For any clients, verify data structure validity
7. **Property 7**: For any client array, verify correct render count
8. **Property 8**: For any clients, verify lazy loading attribute
9. **Property 9**: For any clients, verify dimension attributes

**Arbitrary Generators**:
```typescript
const clientArbitrary = fc.record({
  id: fc.stringOf(fc.constantFrom('a', 'b', 'c', '-'), { minLength: 3, maxLength: 20 }),
  name: fc.string({ minLength: 1, maxLength: 50 }),
  logoPath: fc.string().map(s => `/logos/${s}.png`),
  websiteUrl: fc.option(fc.webUrl(), { nil: undefined }),
  altText: fc.string({ minLength: 1, maxLength: 100 })
});
```

### Integration Testing

Integration tests will verify the component works correctly within the Home page context:

1. **Home Page Integration**:
   - ClientLogos renders in correct position on Home page
   - Component integrates with theme system
   - Component doesn't break existing page layout

2. **Theme Integration**:
   - Component renders correctly in light mode
   - Component renders correctly in dark mode
   - Component responds to theme changes

### Visual Regression Testing (Optional)

For responsive layout verification:
- Use tools like Percy, Chromatic, or Playwright screenshots
- Test breakpoints: mobile (375px), tablet (768px), desktop (1280px)
- Verify logo grid adapts correctly at each breakpoint
- Verify hover states and focus indicators

### Performance Testing

1. **Lazy Loading Verification**:
   - Use Lighthouse or WebPageTest
   - Verify images don't load until scrolled into view
   - Check for layout shift (CLS score)

2. **Bundle Size**:
   - Verify component doesn't significantly increase bundle size
   - Check logo assets are properly optimized (<50KB each)

### Testing Checklist

- [ ] All unit tests pass
- [ ] All property tests pass (100+ iterations each)
- [ ] Component renders in Storybook/isolation
- [ ] Component integrates correctly in Home page
- [ ] Accessibility audit passes (axe-core)
- [ ] Keyboard navigation works
- [ ] Screen reader announces logos correctly
- [ ] Works in light and dark themes
- [ ] Responsive at all breakpoints
- [ ] Images lazy load correctly
- [ ] No layout shift during image loading
- [ ] External links open securely in new tabs
- [ ] Error handling works for broken images

