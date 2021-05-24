import * as React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { authStart } from "../redux/modules/authDetails";
import Header from "./Header/Header";

const App = () => {
	const dispatch = useAppDispatch();
	const isAuthenticating = useAppSelector((state) => {
		return state.authDetails.isAuthenticating;
	});
	const startAuth = () => {
		dispatch(authStart());
	};
	return (
		<div className="App">
			<Header />
			{
				<div
					style={{
						width: "100%",
						height: "100%",
						background: "#dfdfdf",
						fontSize: "24px",
						margin: "0.4rem",
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
					necessitatibus? Fugiat illum mollitia molestias ea esse iure quos,
					consectetur cum dolorum magni ex nisi deleniti quod velit voluptatum
					ab voluptatibus veritatis? Officia pariatur illum architecto optio
					enim, quam maiores sunt atque. Doloremque at odio eius non odit nisi
					nulla aperiam cupiditate, fuga atque pariatur mollitia voluptas
					necessitatibus beatae deserunt aliquam illum ducimus omnis quaerat
					harum repellendus voluptatibus, veritatis fugit totam. Voluptates sunt
					dignissimos libero doloribus voluptatem veritatis obcaecati nisi
					optio? Repellat, unde aspernatur velit deserunt totam assumenda saepe
					delectus perferendis cum voluptatem fuga repellendus. Unde ad mollitia
					necessitatibus consectetur ratione consequuntur molestias corrupti
					expedita in, fugit sint, architecto quidem culpa totam, nesciunt
					officiis! Ipsam pariatur eos ad officia quasi tempore tenetur
					aspernatur maxime! Voluptatibus iusto sunt molestias. Sequi, modi nisi
					facere ea consectetur nam earum voluptas iusto. Similique rerum sunt
					autem voluptate porro repudiandae aspernatur reprehenderit amet labore
					neque a tempore, quaerat quos culpa facilis quidem voluptatibus optio
					saepe. Quis eos aut, vitae voluptatibus distinctio quidem architecto
					quas temporibus dolores quo. Exercitationem, expedita accusamus! Ipsum
					qui deserunt labore iste quaerat? Iste harum corrupti soluta aliquid
					placeat pariatur, inventore deserunt dolore maiores eveniet non ipsa
					omnis voluptate officia velit enim cupiditate at ratione aliquam
					aperiam, suscipit ullam iure! Sapiente sint voluptatem excepturi harum
					provident earum? Doloribus unde, qui temporibus fugit dolor, deleniti
					ratione in corporis aut vel non sit exercitationem voluptatem? Earum
					ipsum quas blanditiis natus delectus error veniam consequuntur, iusto
					veritatis! Provident nihil asperiores eos et consequuntur ex
					explicabo, nostrum illum maxime vero aspernatur accusamus aperiam
					mollitia assumenda numquam, ratione, molestias soluta reiciendis
					quibusdam? Iusto officia, reiciendis quo iste repellendus
					reprehenderit omnis officiis minima quidem molestias maiores facere
					sit voluptatum dolor totam quasi eius, consequatur accusamus, non
					tenetur doloremque eum libero. Libero dignissimos nam omnis nisi
					deleniti porro nostrum corporis rerum provident? Officiis minus
					mollitia inventore repellat sequi tempore sapiente eos in praesentium
					esse distinctio non ipsam fugiat, quidem labore quam optio magnam
					aliquam assumenda? Deserunt iure itaque quis id recusandae
					reprehenderit? Voluptatibus qui voluptas minima. Quisquam illum fuga
					deleniti iusto distinctio laboriosam qui a quas porro non
					necessitatibus, vitae perspiciatis similique reiciendis modi quaerat
					voluptas dolore. Illum possimus nobis minima atque asperiores iste
					natus iusto recusandae ullam eius quidem porro est quod sit non rerum
					tempore autem molestias enim odio ex delectus, cum beatae? Enim
					dolorum hic, porro natus non voluptatum vero quaerat animi,
					perspiciatis blanditiis itaque voluptates veniam? Commodi aliquid
					velit, rerum soluta aliquam delectus voluptatum porro neque excepturi
					aperiam ratione dolor quis minima labore ab deserunt odit. Porro, unde
					dolore cum fugiat ut nisi ullam blanditiis dignissimos quasi commodi,
					fugit, iusto molestiae laudantium impedit repellat eveniet aliquam
					vitae. Tempora consectetur harum illum cum aperiam! Totam maiores sed
					distinctio soluta libero aperiam perferendis deleniti exercitationem
					dolore quaerat eveniet ea sint unde quae doloremque fugit accusamus,
					amet, dolor magni aliquam odio! Quidem, dicta debitis. Magnam suscipit
					alias voluptatem eligendi assumenda. Architecto, voluptatem eos? Amet
					nemo adipisci nostrum veniam veritatis quo rem beatae id voluptatem
					illo velit facilis repudiandae magni, provident magnam eveniet
					voluptatum, eius repellendus, nulla odio expedita. Asperiores aliquam
					accusantium at mollitia autem cum blanditiis ipsam nulla corporis sint
					molestias est vero eveniet ab, temporibus quos quis, obcaecati optio
					eligendi possimus! Repellat eaque dolores nobis asperiores quos
					voluptatem itaque eum! Neque id laboriosam, exercitationem autem
					eveniet illo porro magni ipsa distinctio quia doloremque dolorum omnis
					dolorem accusamus perferendis magnam ducimus quaerat ratione
					voluptatum accusantium et perspiciatis culpa obcaecati dolore. Laborum
					ab possimus vel, explicabo error odit in accusamus quam eligendi
					ducimus perspiciatis quae fuga sit eius libero reiciendis sunt
					dolores, repudiandae nostrum temporibus inventore aut nesciunt
					mollitia. Explicabo esse cum magnam molestias laborum quas iusto?
					Ipsam repellendus voluptatum ullam repellat odit recusandae eum aut.
					Esse soluta pariatur, veniam, in maiores facere eos rerum nulla cum a
					placeat beatae culpa dolore aliquid, tempora aliquam provident! Qui
					quam ab cum eligendi, molestiae assumenda facilis. Doloribus sapiente
					dignissimos laborum hic praesentium sed eveniet reprehenderit
					laboriosam, exercitationem enim fugiat, beatae cupiditate nisi quo
					magni fugit quidem facere illum! Pariatur error voluptatibus aperiam
					eius sapiente quae non porro tempore. Alias perferendis error delectus
					assumenda, magni, ut provident deserunt minima ex fugit asperiores
					quis eaque aliquid. At molestiae accusamus est cum sint veniam
					voluptatem pariatur nihil libero expedita, animi minima inventore eum
					aut impedit, quibusdam placeat, consequatur numquam aliquam aperiam?
					Ratione cumque quod aut soluta, possimus perspiciatis, officia tempora
					perferendis, esse nobis cum beatae blanditiis neque. Cumque ipsa
					dolore cupiditate consequuntur nulla esse illo doloribus assumenda
					alias veniam soluta officiis animi quas, eius eum itaque repudiandae
					magnam exercitationem repellat distinctio? Debitis deserunt suscipit
					natus saepe distinctio temporibus harum sequi quidem ea tempora.
					Explicabo sapiente soluta aliquam temporibus non, quo atque fuga
					voluptatem beatae assumenda quod illo dolore. Magnam voluptates
					corporis enim eos quae rem inventore ratione laboriosam doloremque
					asperiores, provident maxime rerum saepe optio voluptatum repellat aut
					minus harum molestiae voluptatibus a distinctio ad expedita illo.
					Amet, hic eos error quo officiis quibusdam quam necessitatibus. Enim
					blanditiis repellat itaque tenetur dolores a ab mollitia facere dicta
					rerum officiis tempora voluptatum, impedit, nisi corrupti ea
					praesentium deserunt officia nostrum voluptatem? Exercitationem ullam,
					libero asperiores ipsa reiciendis provident in eius ab cumque atque
					nesciunt nostrum explicabo corrupti harum dolore distinctio
					perferendis voluptatum quas voluptate hic impedit voluptatibus neque!
					Omnis, quam, illo asperiores nihil inventore sint dolorum, eum in
					veritatis error vero maiores placeat officia sunt ipsa dolores
					laudantium. Nostrum reiciendis cupiditate ipsa tempore exercitationem,
					nemo maxime eligendi nulla earum, id officia delectus aliquid
					veritatis rerum consequatur reprehenderit dolorum suscipit beatae
					accusamus error sit! Eius doloribus ipsum consectetur repellat maxime
					praesentium, ea ratione laudantium, recusandae ullam cumque modi enim
					perspiciatis non amet odio reiciendis fugit, facere dignissimos
					maiores rem deserunt natus alias! Eos nobis, velit facere enim
					reprehenderit harum perferendis porro, consequatur iure quo alias rem,
					minima voluptatem! Eius itaque molestiae, pariatur esse dolore
					dignissimos, quis perspiciatis voluptates ullam repudiandae suscipit
					ad quaerat quae porro nihil cupiditate nobis cumque vitae! Tempore
					repellendus ex beatae suscipit libero reprehenderit dolorum ullam
					quisquam aut molestias, doloribus harum incidunt? Dignissimos eum
					praesentium illum quaerat quasi amet ad veritatis aliquid libero
					nesciunt, magnam doloribus, voluptatem dolorem nulla ipsum quam!
					Similique ad esse obcaecati hic natus eum mollitia dolor omnis minima
					veritatis voluptas reiciendis, deserunt odit dolorem molestiae magnam.
					Quas accusantium sed, mollitia, necessitatibus voluptatibus, magnam
					aut obcaecati reiciendis provident commodi quo ipsa in rerum veritatis
					incidunt dignissimos laudantium sint! Sit, animi! Quaerat ducimus
					quisquam impedit deleniti perspiciatis vel asperiores nobis cupiditate
					tenetur eius voluptatibus, consectetur earum rem sint inventore, quod
					minima mollitia velit provident voluptatem veritatis laboriosam quos
					similique? Aut perferendis repellendus mollitia voluptatem nemo
					voluptas molestias, labore illum temporibus ex, consequuntur vitae
					dolor ducimus totam? Delectus, quasi in. Nesciunt animi, similique
					velit aspernatur deleniti asperiores obcaecati facilis consequatur
					adipisci inventore minus ea eveniet unde accusamus modi eos voluptatum
					nemo ipsam quod, placeat fugit laudantium quas. Suscipit fugiat
					excepturi dolor blanditiis delectus quod, quis unde accusantium
					sapiente voluptatum aut nulla perspiciatis beatae a quidem pariatur
					autem sit natus temporibus molestiae, eaque ratione. Suscipit minima
					animi cumque soluta harum excepturi sequi? Tenetur nisi corrupti rem
					dolor distinctio dicta adipisci consequatur voluptatibus a enim
					assumenda sed, doloremque animi perferendis repudiandae recusandae
					dolores eligendi. Blanditiis, aliquid at error incidunt nulla dicta
					aliquam dolore labore consequatur corporis ipsa eius molestiae in
					quas, tenetur adipisci iste iusto quibusdam. Eius quas sit similique
					culpa dolores tenetur unde. Perspiciatis quia deserunt aliquid sit
					commodi amet ducimus accusamus aspernatur nam explicabo rem,
					perferendis a maxime fuga omnis eveniet voluptatibus itaque deleniti!
					Minus itaque dolorum voluptate ut quas architecto maxime labore
					quisquam quae illum aliquid soluta delectus inventore quasi
					accusantium, praesentium, est laudantium alias sapiente incidunt
					recusandae culpa nostrum? Alias, itaque, iure laborum aspernatur
					excepturi debitis fugit amet a reprehenderit fugiat quisquam! Quia
					natus veniam perferendis, voluptatibus dolores assumenda fugit autem,
					ipsam suscipit illo sint delectus? Neque aliquam fugiat iure libero
					illum voluptates. Totam, eaque? Impedit dolores accusamus eius non
					amet. Ab quos, voluptatum cumque adipisci quam dolores sequi velit!
					Architecto ipsa quam nobis voluptas rerum, facere, porro odio minima
					laboriosam obcaecati eum recusandae consequuntur maxime minus
					quibusdam corporis. Laudantium nihil excepturi possimus explicabo
					totam reprehenderit quisquam odio accusantium corrupti. Molestias
					dolores deleniti repellendus delectus iure, vel ab in maiores ea,
					ullam laboriosam et commodi beatae tempore, nostrum ad esse minus
					voluptatibus? Expedita eveniet, maxime excepturi at ut voluptas
					dignissimos eius optio facere, nisi unde enim impedit error voluptate
					non perspiciatis et atque sint, ipsum nam! Perspiciatis nihil velit
					quis eius.
				</div>
			}
		</div>
	);
};
export default App;
