import Layout from '@/components/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<ToastContainer
				position="top-center"
				autoClose={1200}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				theme="colored"
				limit={1}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}
