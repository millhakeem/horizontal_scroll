import { ArticlePageSection } from './components/ArticlesPageSection/ArticlePageSection';
import { Header } from './components/Header/Header';
import { SliderPageSection } from './components/SliderPageSection/SliderPageSection';

import articlesCollection from './mockData/articles.json';
import slideCollection from './mockData/slides.json';

function App() {
    const { article1, article2 } = articlesCollection;
    const slides = slideCollection.slides;

    return (
        <div id='app'>
            <Header />
            <ArticlePageSection article={article1} />
            <SliderPageSection slides={slides} />
            <ArticlePageSection article={article2} />
        </div>
    );
}

export default App;
