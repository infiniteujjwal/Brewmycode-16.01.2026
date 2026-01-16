import React from 'react';
import { Link } from 'react-router-dom';
import { GhostMascot } from '../components/ui/GhostMascot';

export const Privacy: React.FC = () => {

    return (
        <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 animate-fade-in text-text">
            {/* Header */}
            <div className="mb-16 text-center">
                <div className="flex justify-center mb-6">
                    <GhostMascot size="lg" />
                </div>
                <h1 className="text-4xl md:text-6xl font-medium mb-4">Privacy Policy</h1>
                <p className="text-text-muted">Last updated: January 16, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-12">
                {/* Introduction */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
                    <p className="text-text-muted leading-relaxed">
                        At BrewMy{'{'}Code{'}'} ("we," "us," or "our"), we are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                        when you visit our website or use our AI and workflow automation services.
                    </p>
                    <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                        <p className="text-sm text-text-muted">
                            <strong className="text-text">Company:</strong> BrewMy{'{'}Code{'}'}<br />
                            <strong className="text-text">Business ID:</strong> 3518342-5<br />
                            <strong className="text-text">Address:</strong> Pajamäentie 2B, 00360 Helsinki, Finland<br />
                            <strong className="text-text">Email:</strong>{' '}
                            <a href="mailto:Info@Brewmycode.com" className="text-primary hover:underline">
                                Info@Brewmycode.com
                            </a>
                        </p>
                    </div>
                </section>

                {/* Information We Collect */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">2. Information We Collect</h2>

                    <h3 className="text-xl font-medium mb-3 mt-6">Personal Information</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        When you contact us through our inquiry form, we may collect:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Full name</li>
                        <li>Work email address</li>
                        <li>Company name</li>
                        <li>Job title/role</li>
                        <li>Service interests and project details you provide</li>
                    </ul>

                    <h3 className="text-xl font-medium mb-3 mt-6">Automatically Collected Information</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website or source</li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Respond to your inquiries and provide requested services</li>
                        <li>Communicate with you about our AI enablement, automation, and custom software services</li>
                        <li>Improve and optimize our website and services</li>
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Comply with legal obligations and protect our rights</li>
                        <li>Send relevant updates about our services (with your consent)</li>
                    </ul>
                </section>

                {/* Data Sharing */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">4. Data Sharing and Disclosure</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li><strong className="text-text">Service Providers:</strong> Third-party vendors who assist us in operating our website and providing services</li>
                        <li><strong className="text-text">Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                        <li><strong className="text-text">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                </section>

                {/* Data Security */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Security</h2>
                    <p className="text-text-muted leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or destruction. However, no
                        method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                </section>

                {/* Your Rights (GDPR) */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights (GDPR)</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        As a company based in Finland, we comply with the General Data Protection Regulation (GDPR).
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li><strong className="text-text">Access:</strong> Request a copy of your personal data</li>
                        <li><strong className="text-text">Rectification:</strong> Request correction of inaccurate data</li>
                        <li><strong className="text-text">Erasure:</strong> Request deletion of your personal data</li>
                        <li><strong className="text-text">Restriction:</strong> Request limitation of data processing</li>
                        <li><strong className="text-text">Portability:</strong> Request transfer of your data</li>
                        <li><strong className="text-text">Objection:</strong> Object to certain processing activities</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mt-4">
                        To exercise these rights, please contact us at{' '}
                        <a href="mailto:Info@Brewmycode.com" className="text-primary hover:underline">
                            Info@Brewmycode.com
                        </a>.
                    </p>
                </section>

                {/* Cookies */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cookies and Tracking</h2>
                    <p className="text-text-muted leading-relaxed">
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                        You can control cookie preferences through your browser settings. Essential cookies are necessary
                        for the website to function properly.
                    </p>
                </section>

                {/* Data Retention */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">8. Data Retention</h2>
                    <p className="text-text-muted leading-relaxed">
                        We retain your personal information only for as long as necessary to fulfill the purposes for
                        which it was collected, including satisfying legal, accounting, or reporting requirements.
                        Inquiry data is typically retained for up to 3 years unless you request earlier deletion.
                    </p>
                </section>

                {/* International Transfers */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">9. International Data Transfers</h2>
                    <p className="text-text-muted leading-relaxed">
                        With offices in Helsinki and NYC, your data may be transferred internationally. We ensure
                        appropriate safeguards are in place for such transfers in compliance with applicable data
                        protection laws.
                    </p>
                </section>

                {/* Changes to Policy */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">10. Changes to This Policy</h2>
                    <p className="text-text-muted leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by
                        posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                </section>

                {/* Contact */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contact Us</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If you have questions about this Privacy Policy or wish to exercise your data rights,
                        please contact us:
                    </p>
                    <div className="p-4 bg-background rounded-lg border border-border">
                        <p className="text-text">
                            <strong>BrewMy{'{'}Code{'}'}</strong><br />
                            Pajamäentie 2B<br />
                            00360 Helsinki, Finland<br />
                            <a href="mailto:Info@Brewmycode.com" className="text-primary hover:underline">
                                Info@Brewmycode.com
                            </a>
                        </p>
                    </div>
                </section>
            </div>

            {/* Back to Home */}
            <div className="mt-16 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors"
                >
                    <span>←</span>
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};
