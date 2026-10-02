import type { Metadata } from 'next';
import AgendaPageClient from './AgendaPageClient';

export const metadata: Metadata = {
  title: 'Agenda | CIO CROWN',
  description: 'View the CIO CROWN event agenda.',
};

export default function AgendaPage() {
  return <AgendaPageClient />;
}
