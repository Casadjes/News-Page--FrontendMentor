import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewsContainer } from "./components/NewsContainer";
import { ArticlesContainer } from "./components/ArticlesContainer";

function App() {
	return (
		<main className='px-4 pt-6'>
			<Header />
			<div className='lg:flex lg:gap-8'>
				<MainArticle />
				<NewsContainer />
			</div>
			<ArticlesContainer />
		</main>
	);
}

export default App;
