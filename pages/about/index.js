import TeamMembers from "@/components/TeamMembers";
import { getTeamMembers } from "@/prisma/process";
import Image from "next/image";

const About = ({ teams }) => {
  return (
    <div className="wrapper py-10">
      <div className="w-full overflow-hidden">
        <Image
          src={
            "https://res.cloudinary.com/dyaj1dlzu/image/upload/v1684691482/About_Acquire_xlhqdt.jpg"
          }
          alt="acquire banner"
          width={440}
          height={20}
          className="w-full h-[12rem]"
        />
      </div>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste
          quasi libero sapiente, reprehenderit adipisci, debitis corrupti
          deleniti voluptatem distinctio, assumenda recusandae sit! Vel qui
          fugit pariatur nobis excepturi perspiciatis Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Unde, nulla! Ex sed et aperiam corporis
          tempora laboriosam esse impedit suscipit dolorem accusamus cupiditate
          in, minima veniam assumenda consequatur minus debitis enim iste fugit.
          Omnis non accusantium beatae consectetur nemo vero fugiat minima illo
          corporis doloribus, sed incidunt quaerat voluptatem amet porro nulla
          quibusdam rerum! Praesentium iure deserunt unde veritatis non
          consequatur libero veniam odit laboriosam. Minus esse accusamus
          consequatur aperiam! Vitae, perferendis ex. Itaque, et ipsa suscipit
          veritatis nisi obcaecati provident placeat similique tempore. Minus,
          alias ullam nemo rerum expedita porro deserunt, tempore, ipsam
          voluptate odio reprehenderit vitae maxime esse id veritatis
          perspiciatis. Asperiores, commodi, obcaecati consectetur similique
          ullam vero libero natus deserunt quibusdam repellendus mollitia maxime
          cum. Cum perspiciatis quisquam iste delectus ratione enim explicabo
          labore ex similique officia mollitia quia nihil omnis at recusandae
          dolorum, sint voluptas minima itaque quidem! Quisquam dolore sequi
          culpa aut nesciunt. Ipsa voluptatum quam fugit officiis consequatur
          aspernatur alias fugiat quidem ratione, ad, pariatur magnam deleniti.
          Temporibus recusandae minus, blanditiis deleniti mollitia, adipisci
          cupiditate expedita nulla inventore iusto quaerat fugit doloribus
          illum, minima reprehenderit? Suscipit expedita ut laudantium tenetur
          cumque quaerat debitis aspernatur eaque nemo asperiores sint facilis
          nulla reiciendis temporibus, repellat culpa. Tenetur nesciunt
          voluptates commodi ratione enim inventore molestiae eligendi
          exercitationem, aperiam, rerum iste cum natus harum molestias
          repudiandae! Cupiditate suscipit aut minima exercitationem facilis
          rerum excepturi vero, nobis similique odio nemo harum at officia minus
          labore. Obcaecati cumque molestiae nulla magni rerum pariatur rem
          eligendi! Repellendus, non quos! Pariatur perspiciatis repudiandae
          fugit, harum quisquam, cupiditate illum nihil delectus illo, labore
          eveniet quas laborum accusamus non placeat consectetur ipsum tempore.
          Pariatur nostrum laborum debitis enim, porro cumque, laboriosam
          perspiciatis corporis aliquam nobis totam facere, harum iusto dolor
          eveniet laudantium vel error velit quod quae. Ipsum obcaecati architecto
          recusandae quibusdam et, ratione cum debitis, unde fuga est dicta
          accusantium ipsam libero explicabo officiis sunt nesciunt mollitia
          inventore, expedita pariatur totam nam eius aliquam itaque. Laudantium
          consequatur, esse tempore excepturi neque iusto voluptatem unde
          repudiandae necessitatibus libero rem quaerat vitae sapiente minima
          sit, nostrum distinctio harum velit aliquid! Eius neque necessitatibus
          fuga corrupti maiores, omnis officiis perspiciatis reprehenderit
          deleniti, nulla natus.
        </p>
      </div>
      <h1 className="text-center font-bold text-2xl mb-10">Meet The Team</h1>

      <div className="flex justify-center gap-10 mt-10">
        {teams.map((team) => (
          <TeamMembers key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  const teams = await getTeamMembers();

  return {
    props: {
      teams,
    },
  };
};
