import Layout from '../components/Layout'

export default function Home(){
  return(
    <Layout>
      <div className="grid gap-20">

        <section className="flex gap-20 items-center pt-10">
          <div className="flex items-center">
            <div className="h-44 w-32 bg-blue-300"></div>
            <div className="rounded-full h-72 w-72 bg-blue-300"></div>
          </div>
          <div>
            <h1 className="text-5xl font-LeagueSpartan font-semibold">Sabe o que vamos estudar por aqui?</h1>
            <h3 className="text-2xl">Olha só esses 2 jeitinhos que você pode estar estudando com a gente:</h3>
          </div>
        </section>

        <section className="flex gap-20 items-center pt-10">
          <div>
            <h1 className="text-4xl font-LeagueSpartan">Redação</h1>
            <h3 className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur ipsam eos quas! Harum aliquid fugiat quia. Ipsam molestiae odit fugiat. Sunt!</h3>
          </div>
          <div className="flex items-center">
            <div className="rounded-full h-72 w-72 bg-pink-300"></div>
          </div>
        </section>

        <section className="flex gap-20 items-center pt-10">
          <div className="flex items-center">
            <div className="rounded-full h-72 w-72 bg-pink-300"></div>
          </div>
          <div>
            <h1 className="text-4xl font-LeagueSpartan">Linguagem</h1>
            <h3 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt exercitationem recusandae veritatis voluptatibus aliquam eligendi cumque fugiat! Labore numquam porro nemo perspiciatis ipsum debitis explicabo totam, cumque nulla reprehenderit.</h3>
          </div>  
        </section>

        <section className="grid flex-row gap-20">
          <div className="grid justify-items-center">
            <h1 className="text-4xl font-Montserrant">Planos</h1>
            <h2 className="text-2xl text-center">Você só pode escolher um entre os planos <br/> Presencial e Online</h2>
          </div>
          <div className="grid grid-cols-2 gap-7 items-center">
            <div className="bg-slate-700 p-9 text-white rounded-md shadow-2xl">
              <div className="rounded-full h-12 w-12 bg-blue-300 mb-6"></div>
              <h1 className="font-bold font-Montserrant text-2xl">Presencial</h1><br/>
              <h2>Redação <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur</h2><br/>
              <h2>Linguagem <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur</h2><br/>
              <h2>Suporte <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur</h2>
              <h1 className="my-4 text-3xl">R$ 00,00</h1>
              <button className="text-3xl text-slate-700 bg-white px-10 py-3 rounded-md">Comprar</button>
            </div>
            <div className="p-9 shadow-2xl rounded-md">
              <div className="rounded-full h-12 w-12 bg-pink-400 mb-6"></div>
              <h1 className="font-bold font-Montserrant text-2xl">Online</h1><br/>
              <h2>Linguagem <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur</h2><br/>
              <h2>Suporte <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque veniam temporibus, impedit aut consectetur rem voluptates consequatur</h2>
              <h1 className="my-4 text-3xl">R$ 00,00</h1>
              <button className="text-3xl text-white bg-pink-400 px-10 py-3 rounded-md">Comprar</button>
            </div>
          </div>
        </section>
        
      </div>
    </Layout>
  )
}