import { Inter, Lusitana, Roboto,Abel } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const playwrite = localFont({
  src: '../../public/fonts/PlaywriteMXGuides-Regular.ttf',
  display: 'swap',
});

export const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
});