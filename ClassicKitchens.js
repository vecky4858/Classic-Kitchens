import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const translations = {
    en: {
        welcome: 'Welcome',
        intro: `May I take this opportunity to thank you for your interest in our company.

The secret of choosing the right fitted kitchen is, first and foremost, finding the right kitchen company to turn your plans into reality.

I have a family run business comprising of myself, my wife Gail and my son Daniel and we are based in Alfaz del Pi near Benidorm on the Costa Blanca.`,
        services: 'Services',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        contact: 'Contact'
    },
    es: { welcome: 'Bienvenido', services: 'Servicios', gallery: 'Galería', testimonials: 'Testimonios', contact: 'Contacto' },
    ru: { welcome: 'Добро пожаловать', services: 'Услуги', gallery: 'Галерея', testimonials: 'Отзывы', contact: 'Контакты' },
    sv: { welcome: 'Välkommen', services: 'Tjänster', gallery: 'Galleri', testimonials: 'Rekommendationer', contact: 'Kontakt' },
    no: { welcome: 'Velkommen', services: 'Tjenester', gallery: 'Galleri', testimonials: 'Anbefalinger', contact: 'Kontakt' },
    de: { welcome: 'Willkommen', services: 'Dienstleistungen', gallery: 'Galerie', testimonials: 'Empfehlungen', contact: 'Kontakt' }
};

export default function ClassicKitchens() {
    const [lang, setLang] = useState('en');
    const t = translations[lang];

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <div className="flex justify-end gap-2">
                {Object.keys(translations).map((l) => (
                    <Button key={l} variant={lang === l ? 'default' : 'outline'} onClick={() => setLang(l)}>
                        {l.toUpperCase()}
                    </Button>
                ))}
            </div>

            <h1 className="text-3xl font-bold text-center">Classic Kitchens</h1>
            <h2 className="text-xl text-center">Alfaz del Pi, Costa Blanca, Spain</h2>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <h3 className="text-2xl font-semibold">{t.welcome}</h3>
                    <p className="whitespace-pre-line">{t.intro || 'Translated content coming soon...'}</p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card><CardContent className="p-4 text-center font-semibold">{t.services}</CardContent></Card>
                <Card><CardContent className="p-4 text-center font-semibold">{t.gallery}</CardContent></Card>
                <Card><CardContent className="p-4 text-center font-semibold">{t.testimonials}</CardContent></Card>
            </div>

            <Card>
                <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{t.contact}</h3>
                    <p><strong>Adrian Tomlinson</strong></p>
                    <p>Telephone: 96 552 8448</p>
                    <p>Mobile: 676 699 700</p>
                    <p>Email: kitchensalfaz@gmail.com</p>
                </CardContent>
            </Card>
        </div>
    );
}
