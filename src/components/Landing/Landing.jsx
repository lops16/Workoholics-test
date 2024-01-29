import "./Landing.scss";
import CircleIcon from "@mui/icons-material/Circle";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Mug from "../../images/Mug1.png";
import PinkTShirt from "../../images/Tshirt1.png";
import BlackTShirt from "../../images/Tshirt2.png";
import PinkBottle from "../../images/Bottle1.png";
import { useEffect, useRef, useState } from "react";

export default function Landing() {
	const [currentTShirt, setCurrentTShirt] = useState(PinkTShirt);

	const handleBlackTShirtChange = () => {
		setCurrentTShirt(BlackTShirt);
	};
	const handlePinkTShirtChange = () => {
		setCurrentTShirt(PinkTShirt);
	};

	const refs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.dataset.animation === "l") {
							entry.target.classList.add("animate-on-scroll-l");
						} else {
							entry.target.classList.add("animate-on-scroll-r");
						}
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.2,
			}
		);

		refs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			refs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, []);

	const addToRefs = (el) => {
		if (el && !refs.current.includes(el)) {
			refs.current.push(el);
		}
	};

	return (
		<>
			<div className="wrapper">
				<main>
					<section id="main-product">
						<h1>
							<span className="title-one">LOREM</span>
							<span className="title-over-image">IPSUM</span>
							<span className="title-two">DOLOR</span>
						</h1>
						<div className="line-one"></div>
						<div className="line-two"></div>
						<img src={Mug} alt="Pink mug" />
					</section>
					<section ref={addToRefs} id="main-info" className="animatable">
						<p>
							{" "}
							<CircleIcon className="dotIco" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							<span> vulputate dui efficitur </span> ultrices pharetra. Praesent
							tempor mollis purus nec fringilla.{" "}
						</p>
					</section>
					<section
						ref={addToRefs}
						id="t-shirt"
						className="animatable"
						data-animation="l"
					>
						<div className="product-info">
							<h2>T-shirt</h2>
							<p>
								Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
								mollis purus.
							</p>
							<button
								id="btn-black-tShirt"
								onClick={handleBlackTShirtChange}
							></button>
							<button
								id="btn-pink-tShirt"
								onClick={handlePinkTShirtChange}
							></button>
							<button id="btn-buy">
								Buy <SubdirectoryArrowRightIcon className="arrowIco" />
							</button>
						</div>
						<img src={currentTShirt} alt="Pink T-shirt" />
					</section>
					<section ref={addToRefs} id="bottle" className="animatable">
						<div className="product-info">
							<h2>Bottle</h2>
							<p>
								Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
								mollis purus.
							</p>
							<button id="btn-pink-bottle"></button>
							<button id="btn-buy">
								Buy <SubdirectoryArrowRightIcon className="arrowIco" />
							</button>
						</div>
						<img src={PinkBottle} alt="Pink Bottle" />
					</section>
				</main>
				<aside>
					<section id="contact">
						<div className="line"></div>
						<h4>Contact us</h4>
					</section>
				</aside>
			</div>
		</>
	);
}
