import { DocsAlert } from './components/docsAlert';
import { DocsBtn } from './components/docsBtn';
import { DocsForm } from './components/docsForm';

export const DocsPage: PageProps = () => {
  return (
    <div className="max-w-lg px-4 w-full mx-auto">
      <DocsForm />
      <DocsBtn />
      <DocsAlert />
    </div>
  );
};
