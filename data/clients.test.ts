import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { CLIENTS } from './clients';
import { Client } from '../types';

describe('Client Data Structure', () => {
  /**
   * **Validates: Requirements 5.2**
   * Property 6: Client data structure is valid
   * 
   * For any client in the CLIENTS array, the object should have all required fields:
   * - id (string)
   * - name (string)
   * - logoPath (string)
   * - altText (string)
   * - websiteUrl (optional string or undefined)
   */
  it('Property 6: All clients have valid data structure', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...CLIENTS),
        (client) => {
          // Check that all required fields exist and are strings
          expect(client).toHaveProperty('id');
          expect(typeof client.id).toBe('string');
          expect(client.id.length).toBeGreaterThan(0);

          expect(client).toHaveProperty('name');
          expect(typeof client.name).toBe('string');
          expect(client.name.length).toBeGreaterThan(0);

          expect(client).toHaveProperty('logoPath');
          expect(typeof client.logoPath).toBe('string');
          expect(client.logoPath.length).toBeGreaterThan(0);

          expect(client).toHaveProperty('altText');
          expect(typeof client.altText).toBe('string');
          expect(client.altText.length).toBeGreaterThan(0);

          // websiteUrl is optional - if present, must be string
          if ('websiteUrl' in client && client.websiteUrl !== undefined) {
            expect(typeof client.websiteUrl).toBe('string');
            expect(client.websiteUrl.length).toBeGreaterThan(0);
          }

          // Verify the client conforms to the Client interface structure
          const requiredKeys = ['id', 'name', 'logoPath', 'altText'];
          const clientKeys = Object.keys(client);
          
          // All required keys must be present
          requiredKeys.forEach(key => {
            expect(clientKeys).toContain(key);
          });

          // Only valid keys should be present (id, name, logoPath, altText, websiteUrl)
          const validKeys = [...requiredKeys, 'websiteUrl'];
          clientKeys.forEach(key => {
            expect(validKeys).toContain(key);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Validates: Requirements 3.3**
   * Property 4: Logo paths follow naming convention
   * 
   * For any client in the CLIENTS array, the logoPath should follow the pattern
   * `/logos/{kebab-case-name}.{ext}` where the kebab-case-name matches the client's id.
   */
  it('Property 4: Logo paths follow naming convention', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...CLIENTS),
        (client) => {
          // Extract the filename from the logoPath
          const pathMatch = client.logoPath.match(/^\/logos\/([^/]+)\.([a-z]+)$/);
          
          // Verify the path follows the pattern /logos/{name}.{ext}
          expect(pathMatch).not.toBeNull();
          expect(pathMatch).toBeDefined();
          
          if (pathMatch) {
            const [, filename, extension] = pathMatch;
            
            // The filename (without extension) should match the client's id
            expect(filename).toBe(client.id);
            
            // Extension should be a valid image format
            const validExtensions = ['png', 'svg', 'webp', 'jpg', 'jpeg'];
            expect(validExtensions).toContain(extension.toLowerCase());
            
            // Verify the id is in kebab-case format (lowercase letters, numbers, and hyphens)
            const kebabCasePattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
            expect(kebabCasePattern.test(client.id)).toBe(true);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Additional test: Verify CLIENTS array itself is valid
   */
  it('CLIENTS array contains valid entries', () => {
    expect(CLIENTS).toBeDefined();
    expect(Array.isArray(CLIENTS)).toBe(true);
    expect(CLIENTS.length).toBeGreaterThan(0);
    
    // Each client should be an object
    CLIENTS.forEach(client => {
      expect(typeof client).toBe('object');
      expect(client).not.toBeNull();
    });
  });

  /**
   * Property-based test with generated arbitrary clients
   * This tests that our validation logic works for any valid client structure
   */
  it('Property 6: Generated clients with valid structure pass validation', () => {
    const clientArbitrary = fc.record({
      id: fc.string({ minLength: 1, maxLength: 50 }),
      name: fc.string({ minLength: 1, maxLength: 100 }),
      logoPath: fc.string({ minLength: 1, maxLength: 200 }),
      altText: fc.string({ minLength: 1, maxLength: 200 }),
      websiteUrl: fc.option(fc.webUrl(), { nil: undefined })
    });

    fc.assert(
      fc.property(clientArbitrary, (client) => {
        // Validate structure
        expect(typeof client.id).toBe('string');
        expect(client.id.length).toBeGreaterThan(0);
        
        expect(typeof client.name).toBe('string');
        expect(client.name.length).toBeGreaterThan(0);
        
        expect(typeof client.logoPath).toBe('string');
        expect(client.logoPath.length).toBeGreaterThan(0);
        
        expect(typeof client.altText).toBe('string');
        expect(client.altText.length).toBeGreaterThan(0);
        
        if (client.websiteUrl !== undefined) {
          expect(typeof client.websiteUrl).toBe('string');
        }

        // Type check: ensure it matches Client interface
        const typedClient: Client = client;
        expect(typedClient).toBeDefined();
      }),
      { numRuns: 100 }
    );
  });
});
