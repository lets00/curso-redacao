import Layout from '../components/Layout'
import InitialSection from '../components/InitialSection'
import Link from 'next/link'

export default function Correcao(){
  return(
    <Layout className="text-black">
      <div>
        <InitialSection ordem={false} titulo='Quem Somos' img='/images/IMG_QUEMSOMOS.JPG'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
        <InitialSection ordem={true} titulo='Wellington' img='/images/IMG_3817.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
        <InitialSection ordem={false} titulo='Felipe Alves' img='/images/IMG_FELIPE.JPG'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
        <div className='flex flex-row rounded-xl bg-pink-500 p-20 text-white mt-16'>
          <h1 className='font-Montserrant'>Comece estudando com a gente agora</h1>
          <Link href="/cadastro" className="px-12 my-12 py-5 rounded-md text-black bg-white">CADASTRAR</Link>
        </div>
      </div>
    </Layout>
  )
}
