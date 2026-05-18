import React from 'react';
import { Link } from 'react-router-dom';
import { GhostMascot } from '../components/ui/GhostMascot';

export const Terms: React.FC = () => {

    return (
        <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 animate-fade-in text-text">
            {/* Header */}
            <div className="mb-16 text-center">
                <div className="flex justify-center mb-6">
                    <GhostMascot size="lg" />
                </div>
                <h1 className="text-4xl md:text-6xl font-medium mb-4">Terms of Service</h1>
                <p className="text-text-muted">Last updated: January 16, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-12">
                {/* Agreement */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">1. Agreement to Terms</h2>
                    <p className="text-text-muted leading-relaxed">
                        By accessing or using the services provided by BrewMy{'{'}Code{'}'} (Business ID: 3518342-5),
                        you agree to be bound by these Terms of Service. If you do not agree to these terms,
                        please do not use our services.
                    </p>
                    <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                        <p className="text-sm text-text-muted">
                            <strong className="text-text">Company:</strong> BrewMy{'{'}Code{'}'}<br />
                            <strong className="text-text">Business ID:</strong> 3518342-5<br />
                            <strong className="text-text">Registered Address:</strong> Pajamäentie 2B, 00360 Helsinki, Finland<br />
                            <strong className="text-text">Contact:</strong>{' '}
                            <a href="mailto:Info@Brewmycode.com" className="text-primary hover:underline">
                                Info@Brewmycode.com
                            </a>
                        </p>
                    </div>
                </section>

                {/* Services Description */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">2. Description of Services</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        BrewMy{'{'}Code{'}'} provides the following services:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li><strong className="text-text">AI Automation:</strong> Intelligent automation systems powered by artificial intelligence</li>
                        <li><strong className="text-text">Workflow Automation:</strong> Streamlining and automating business processes</li>
                        <li><strong className="text-text">Custom Software Development:</strong> Bespoke software solutions tailored to your needs</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mt-4">
                        Specific service details, deliverables, and pricing will be outlined in individual
                        project agreements or statements of work.
                    </p>
                </section>

                {/* Client Responsibilities */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">3. Client Responsibilities</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        As a client, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Provide accurate and complete information necessary for service delivery</li>
                        <li>Respond to requests for feedback and approvals in a timely manner</li>
                        <li>Ensure you have the rights to any materials, data, or content you provide</li>
                        <li>Comply with all applicable laws and regulations in your use of our services</li>
                        <li>Pay for services as agreed in the project agreement</li>
                        <li>Maintain confidentiality of any proprietary methodologies shared during engagement</li>
                    </ul>
                </section>

                {/* Intellectual Property */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">4. Intellectual Property</h2>

                    <h3 className="text-xl font-medium mb-3 mt-6">Client Materials</h3>
                    <p className="text-text-muted leading-relaxed">
                        You retain ownership of all materials, data, and content you provide to us. You grant
                        us a limited license to use these materials solely for the purpose of delivering our services.
                    </p>

                    <h3 className="text-xl font-medium mb-3 mt-6">Deliverables</h3>
                    <p className="text-text-muted leading-relaxed">
                        Upon full payment, ownership of custom-developed deliverables transfers to you, unless
                        otherwise specified in the project agreement. Pre-existing tools, frameworks, and
                        methodologies used in development remain the property of BrewMy{'{'}Code{'}'}.
                    </p>

                    <h3 className="text-xl font-medium mb-3 mt-6">Website Content</h3>
                    <p className="text-text-muted leading-relaxed">
                        All content on this website, including text, graphics, logos, and software, is the
                        property of BrewMy{'{'}Code{'}'} and protected by intellectual property laws.
                    </p>
                </section>

                {/* Confidentiality */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">5. Confidentiality</h2>
                    <p className="text-text-muted leading-relaxed">
                        We treat all client information as confidential. We will not disclose your confidential
                        information to third parties without your consent, except as required by law or as
                        necessary to provide our services with trusted subcontractors who are bound by
                        confidentiality obligations.
                    </p>
                </section>

                {/* Payment Terms */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">6. Payment Terms</h2>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Payment terms will be specified in individual project agreements</li>
                        <li>Invoices are payable within 14 days unless otherwise agreed</li>
                        <li>Late payments may incur interest as permitted by Finnish law</li>
                        <li>We reserve the right to suspend services for overdue accounts</li>
                        <li>All prices are exclusive of VAT unless stated otherwise</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">7. Limitation of Liability</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        To the maximum extent permitted by law:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Our total liability is limited to the amount you paid for the specific service giving rise to the claim</li>
                        <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
                        <li>We are not liable for loss of profits, data, business opportunities, or reputation</li>
                        <li>We do not guarantee that AI systems will be error-free or achieve specific business outcomes</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mt-4">
                        These limitations do not apply to liability that cannot be excluded under applicable law.
                    </p>
                </section>

                {/* Warranties and Disclaimers */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">8. Warranties and Disclaimers</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We warrant that services will be performed with reasonable skill and care. However:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>AI and automation solutions may require ongoing adjustment and optimization</li>
                        <li>Results depend on data quality and business context you provide</li>
                        <li>We do not warrant that third-party integrations will always function without interruption</li>
                        <li>Website content is provided "as is" without warranties of any kind</li>
                    </ul>
                </section>

                {/* Termination */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">9. Termination</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Either party may terminate a service agreement:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>With 30 days written notice (unless otherwise specified)</li>
                        <li>Immediately for material breach that remains uncured for 14 days after notice</li>
                        <li>If the other party becomes insolvent or enters bankruptcy</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mt-4">
                        Upon termination, you are responsible for payment of all services rendered up to
                        the termination date.
                    </p>
                </section>

                {/* Governing Law */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">10. Governing Law and Disputes</h2>
                    <p className="text-text-muted leading-relaxed">
                        These Terms are governed by the laws of Finland. Any disputes arising from these Terms
                        or our services shall be resolved in the courts of Helsinki, Finland. Before initiating
                        legal proceedings, both parties agree to attempt good-faith negotiation to resolve
                        any disputes.
                    </p>
                </section>

                {/* Website Use */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">11. Website Use</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        When using our website, you agree not to:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                        <li>Use the site for any unlawful purpose</li>
                        <li>Attempt to gain unauthorized access to any systems or networks</li>
                        <li>Interfere with the proper functioning of the website</li>
                        <li>Copy, modify, or distribute website content without permission</li>
                        <li>Submit false or misleading information through our forms</li>
                    </ul>
                </section>

                {/* Changes to Terms */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">12. Changes to Terms</h2>
                    <p className="text-text-muted leading-relaxed">
                        We reserve the right to modify these Terms at any time. Changes will be effective
                        upon posting to this page. Your continued use of our services after changes
                        constitutes acceptance of the modified Terms. For existing project agreements,
                        the terms in effect at the time of signing will apply.
                    </p>
                </section>

                {/* Contact */}
                <section className="bg-surface p-8 rounded-2xl shadow-recessed">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">13. Contact Information</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        For questions about these Terms of Service, please contact us:
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
