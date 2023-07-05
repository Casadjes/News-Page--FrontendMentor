import { Article } from "./Article";
import articleImgPc from "../assets/image-retro-pcs.jpg";
import articleGaming from "../assets/image-gaming-growth.jpg";
import articleTopLaptops from "../assets/image-top-laptops.jpg";

export const ArticlesContainer = () => {
	return (
		<section className='mt-6 md:flex md:flex-wrap md:gap-10'>
			<Article
				img={articleImgPc}
				number={"01"}
				title={"Reviving Retro PCs"}
				text={"What happens when old PCs are given modern upgrades?"}
			/>
			<Article
				img={articleTopLaptops}
				number={"02"}
				title={"Top 10 Laptops of 2022"}
				text={"Our best picks for various needs and budgets"}
			/>
			<Article
				img={articleGaming}
				number={"03"}
				title={"The Growth of Gaming"}
				text={"How oandemic has sparked fresh opportunities"}
			/>
		</section>
	);
};
