import Layout from '../components/Layout'
import InitialSection from '../components/InitialSection'

export default function Correcao(){
  return(
    <Layout>
      <InitialSection ordem={true} titulo='Quem Somos' img='/images/IMG_3817.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={false} titulo='Wellington' img='/images/IMG_3817.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
      <InitialSection ordem={true} titulo='Felipe Alves' img='/images/IMG_3817.jpg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
    </Layout>
  )
}