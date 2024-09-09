'use client';
import Main from '@/components/layout/Main';
import Banner from '@/components/layout/banner/banner';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import PaymasterBundlerApp from './_components/PaymasterBundlerDemo';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function PaymasterBundlerPage() {
  return (
    <>
      <Header />
      <Main>
        <Banner
          pageName="Paymaster Bundler"
          pageUrl="paymaster-bundler"
          wip={true}
        />
        <div className="rounded-lg bg-gray-900 px-4 py-6 text-white">
          <PaymasterBundlerApp />
        </div>
      </Main>
      <Footer />
    </>
  );
}