import LocationLandingPage from '../../components/location/LocationLandingPage';
import { NOIDA_LOCATION_DATA } from '../../data/locations/noidaData';

export const metadata = {
  title: NOIDA_LOCATION_DATA.meta.title,
  description: NOIDA_LOCATION_DATA.meta.description,
  keywords: NOIDA_LOCATION_DATA.meta.keywords,
  alternates: {
    canonical: NOIDA_LOCATION_DATA.meta.canonical,
  },
  openGraph: {
    title: NOIDA_LOCATION_DATA.meta.title,
    description: NOIDA_LOCATION_DATA.meta.description,
    url: NOIDA_LOCATION_DATA.meta.canonical,
    siteName: 'Markencia',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: NOIDA_LOCATION_DATA.meta.title,
    description: NOIDA_LOCATION_DATA.meta.description,
  },
};

export default function NoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(NOIDA_LOCATION_DATA.schema),
        }}
      />
      <LocationLandingPage data={NOIDA_LOCATION_DATA} />
    </>
  );
}
