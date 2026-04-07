import React from 'react';
import { CLIENTS } from '../../data/clients';
import { Client } from '../../types';

interface ClientLogosProps {
  className?: string;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ className = '' }) => {
  return (
    <section className={`${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {CLIENTS.map((client) => {
          const logoImage = (
            <img
              src={client.logoPath}
              alt={client.altText}
              loading="lazy"
              width={150}
              height={60}
              className="h-12 w-auto object-contain"
            />
          );

          return (
            <div
              key={client.id}
              className="flex items-center justify-center"
            >
              {client.websiteUrl ? (
                <a
                  href={client.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {logoImage}
                </a>
              ) : (
                logoImage
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
