import Layout from '../components/Layout'
import InitialSection from '../components/InitialSection'

export default function Correcao(){
  return(
    <Layout>
      <InitialSection ordem={true} titulo='Sabe o que vamos estudar por aqui?' img='/images/Estudaraqui.jpg' className='font-bold'>Olha só esses 3 jeitinhos que você pode estar estudando com a gente:</InitialSection>
      <InitialSection ordem={false} titulo='Redação' img='/images/Redacao.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={true} titulo='Linguagem' img='/images/Linguagem.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={false} titulo='Matemática' img='/images/Matematica.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
    </Layout>
  )
}