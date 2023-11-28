import Layout from '../components/Layout'
import InitialSection from '../components/InitialSection'
import Link from 'next/link'

export default function Correcao(){
  return(
    <Layout className="text-black">
      
      <section>
        <InitialSection ordem={false} titulo='Quem Somos' img='/images/IMG_QUEMSOMOS.JPG'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid cumque iusto velit harum libero adipisci, quod nulla modi praesentium ab nobis nesciunt reprehenderit inventore, magni autem sint maxime beatae.</InitialSection>
        <InitialSection ordem={true} titulo='Wellington' img='/images/IMG_3817.jpg'>
          <p className='flex max-h-20 hover:max-h-96 transition-all duration-700 delay-100 ease-in-out overflow-hidden'>
            Olá, pessoas! Eu sou Wellington Oliveira, coidealizador deste Curso, graduado em Psicologia pelo Centro Universitário do Vale do Ipojuca, como bolsista 100% pelo Prouni, e, agora, estudante de Medicina da Universidade Federal de Alagoas. 
            <br/>Como amante da Língua Portuguesa e da escrita, conquistei, nos anos de 2019, 2020 e 2021, 960 pontos na Redação do Enem. Em 2022, por sua vez, conquistei 980 pontos na Redação, o que me garantiu, além de um mil técnico, a aprovação em Medicina na Federal. 
            <br/>Por fim, sou um leitor assíduo, amante das artes, em geral, e gosto muito de compartilhar o que aprendo e estou disposto a ajudar nossos estudantes no que for preciso em suas produções textuais e na vida. Inclusive, estarei com vocês nas correções dos textos de modo on-line. Vamos juntos em busca da aprovação!
          </p>
          <div className='flex justify-center pt-3'>
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
            </svg>
          </div>
        </InitialSection>
        
        <InitialSection ordem={false} titulo='Felipe Alves' img='/images/IMG_FELIPE.JPG'>
          <p className='flex max-h-20 hover:max-h-96 transition-all duration-700 delay-100 ease-in-out overflow-hidden'>
            Oi! Se você ainda não me conhece, prazer, eu sou o professor Felipe Alves, graduado em Letras - Português, Inglês e Respectivas Literaturas, pela Universidade Federal Rural de Pernambuco (UFRPE/UAG), e pós-graduado em Produção Textual, pela Farese. 
            <br/>Durante minha trajetória acadêmica, fui pesquisador do Programa de Bolsas de Iniciação Científica (PIBIC/CNPq), bolsista do Programa de Bolsas de Iniciação à Docência (PIBID/CAPES), professor estagiário na Rede Municipal de Educação de Garanhuns e no Serviço Social do Comércio (SESC-PE). 
            <br/>Além disso, após formado, já atuei, profissionalmente, como professor do Colégio Diocesano de Garanhuns, na área de Redação e Português. Também como professor da Rede Estadual de Pernambuco, corretor de bancas de concursos públicos e de vestibulares, corretor de plataformas digitais de ensino e coautor de materiais didáticos para cursinhos.
            <br/>Atualmente, por sua vez, além de dirigir o Curso Felipe Alves, na área administrativa, também ministro as aulas de Linguagens e Redação e, claro, corrijo as redações e elaboro parte do material didático utilizado, já que, aqui, tudo é autoral. 
            É importante mencionar, ainda, que, nesta área, já coleciono mais de 08 anos de experiência! Ademais, estou em constante estudo para, claro, desenvolver estratégias que ajudem nossos estudantes cada vez mais e melhor!
          </p>
          <div className='flex justify-center pt-3'>
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
            </svg>
          </div>
          </InitialSection>
      </section>

      <section className='flex flex-row rounded-xl bg-pink-500 p-20 text-white mt-16'>
        <h1 className='font-Montserrant'>Comece estudando com a gente agora</h1>
        <Link href="/cadastro" className="px-12 my-12 py-5 rounded-md text-black bg-white">CADASTRAR</Link>
      </section>
    </Layout>
  )
}
