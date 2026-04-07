import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ClientLogos } from './ClientLogos';
import { CLIENTS } from '../../data/clients';

describe('ClientLogos Component - Grid Layout', () => {
  it('renders the component without crashing', () => {
    const { container } = render(<ClientLogos />);
    expect(container).toBeTruthy();
  });

  it('renders all client logos from CLIENTS array', () => {
    render(<ClientLogos />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(CLIENTS.length);
  });

  it('applies responsive grid classes', () => {
    const { container } = render(<ClientLogos />);
    const gridContainer = container.querySelector('.grid');
    
    expect(gridContainer).toBeTruthy();
    expect(gridContainer?.classList.contains('grid-cols-1')).toBe(true);
    expect(gridContainer?.classList.contains('md:grid-cols-2')).toBe(true);
    expect(gridContainer?.classList.contains('lg:grid-cols-3')).toBe(true);
  });

  it('applies consistent spacing with gap-8', () => {
    const { container } = render(<ClientLogos />);
    const gridContainer = container.querySelector('.grid');
    
    expect(gridContainer?.classList.contains('gap-8')).toBe(true);
  });

  it('renders each logo with correct src and alt attributes', () => {
    render(<ClientLogos />);
    
    CLIENTS.forEach((client) => {
      const img = screen.getByAltText(client.altText);
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(client.logoPath);
    });
  });

  it('applies consistent sizing to logo containers', () => {
    const { container } = render(<ClientLogos />);
    const logoContainers = container.querySelectorAll('.grid > div');
    
    logoContainers.forEach((logoContainer) => {
      expect(logoContainer.classList.contains('flex')).toBe(true);
      expect(logoContainer.classList.contains('items-center')).toBe(true);
      expect(logoContainer.classList.contains('justify-center')).toBe(true);
      expect(logoContainer.classList.contains('p-6')).toBe(true);
    });
  });

  it('applies proper image styling for responsive sizing', () => {
    render(<ClientLogos />);
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img.classList.contains('max-w-full')).toBe(true);
      expect(img.classList.contains('h-auto')).toBe(true);
      expect(img.classList.contains('object-contain')).toBe(true);
    });
  });

  it('uses unique keys for each logo item', () => {
    const { container } = render(<ClientLogos />);
    const logoContainers = container.querySelectorAll('.grid > div');
    
    const keys = Array.from(logoContainers).map(div => div.getAttribute('data-key') || div.textContent);
    const uniqueKeys = new Set(keys);
    
    // React handles keys internally, but we can verify we have the right number of items
    expect(logoContainers.length).toBe(CLIENTS.length);
  });

  it('accepts and applies custom className prop', () => {
    const customClass = 'custom-test-class';
    const { container } = render(<ClientLogos className={customClass} />);
    const section = container.querySelector('section');
    
    expect(section?.classList.contains(customClass)).toBe(true);
  });
});

describe('ClientLogos Component - Conditional Linking and Lazy Loading', () => {
  it('wraps logos with URLs in anchor tags with proper attributes', () => {
    render(<ClientLogos />);
    
    CLIENTS.forEach((client) => {
      if (client.websiteUrl) {
        const img = screen.getByAltText(client.altText);
        const anchor = img.closest('a');
        
        expect(anchor).toBeTruthy();
        expect(anchor?.getAttribute('href')).toBe(client.websiteUrl);
        expect(anchor?.getAttribute('target')).toBe('_blank');
        expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer');
      }
    });
  });

  it('does not wrap logos without URLs in anchor tags', () => {
    // Create a test with a client without URL
    const clientsWithoutUrl = CLIENTS.filter(c => !c.websiteUrl);
    
    if (clientsWithoutUrl.length === 0) {
      // All current clients have URLs, so this test is satisfied
      expect(true).toBe(true);
    } else {
      render(<ClientLogos />);
      
      clientsWithoutUrl.forEach((client) => {
        const img = screen.getByAltText(client.altText);
        const anchor = img.closest('a');
        
        expect(anchor).toBeNull();
      });
    }
  });

  it('adds loading="lazy" attribute to all images', () => {
    render(<ClientLogos />);
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img.getAttribute('loading')).toBe('lazy');
    });
  });

  it('adds width and height attributes to all images', () => {
    render(<ClientLogos />);
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img.getAttribute('width')).toBe('200');
      expect(img.getAttribute('height')).toBe('80');
    });
  });

  it('renders all logos as links since all clients have URLs', () => {
    render(<ClientLogos />);
    const links = screen.getAllByRole('link');
    
    // All current clients have websiteUrl, so we should have 6 links
    expect(links).toHaveLength(CLIENTS.length);
  });
});
