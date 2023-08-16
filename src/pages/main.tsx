import { Header, Main } from '@/Presentation/Component';

export default function List() {
  return (
    <div className="List">
      <Header />
      <Main type="pokemon" />
    </div>
  );
}
