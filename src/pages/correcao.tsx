import Layout2 from '@/components/Layout2'
import InitialSection from '../components/InitialSection'

export default function Correcao(){
  return(
    <Layout2>
      <InitialSection ordem={true} titulo='Sabe o que vamos estudar por aqui?' img='/images/Estudaraqui.jpg' className='font-bold'>Olha só esses 3 jeitinhos que você pode estar estudando com a gente:</InitialSection>
      <InitialSection ordem={false} titulo='Redação' img='/images/Redacao.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={true} titulo='Linguagem' img='/images/Linguagem.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={false} titulo='Matemática' img='/images/Matematica.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
    
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
    
    </Layout2>
  )
}