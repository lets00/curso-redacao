import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Live from "@/core/Live";

interface MenuItem {
  text: string;
  href: string;
}

interface MenuOptions {
  [key: string]: MenuItem[];
}

interface LayoutUserProps {
  usuario: string;
  children: React.ReactNode;
  className?: string;
  divisoes?: boolean;
}

export default function LayoutUser(props: LayoutUserProps) {
  const router = useRouter();
  const live = new Live('Nome da Live', 'ter - 18h', 'Felipe', new Date(), 'https://www.youtube.com/watch?v=Wpi4xzvxfSo', "id", false)

  function getMenuLinks(userType: string) {
    const menuOptions: MenuOptions = {
        aluno: [
            { text: 'Materiais', href: '/usuario/aluno' },
            { text: 'Turmas', href: '/usuario/aluno/turmas' },
            { text: 'Perfil', href: '/usuario/aluno/perfil' },
          ],
          funcionario: [
            { text: 'Materiais', href: '/usuario/funcionario/materiais' },
            { text: 'Turmas', href: '/usuario/funcionario/turmas' },
            { text: 'Live', href: '/usuario/funcionario/live' },
            { text: 'Listar Materiais', href: '/usuario/funcionario/listarMateriais' },
            { text: 'Perfil', href: '/usuario/funcionario' },
          ],
          root: [
            { text: 'Materiais', href: '/usuario/root/materiais' },
            { text: 'Turmas', href: '/usuario/root/turmas' },
            { text: 'Live', href: '/usuario/root/live' },
            { text: 'Funcionários', href: '/usuario/root/funcionarios' },
            { text: 'Alunos', href: '/usuario/root' },
          ],
    };

    const validUserTypes = Object.keys(menuOptions);

    if (!validUserTypes.includes(userType)) {
      // Se userType não for uma chave válida em menuOptions, você pode lidar com isso aqui
      // Por exemplo, redirecionar para uma página de erro
      return null;
    }

    return menuOptions[userType].map((option, index) => (
      <Link legacyBehavior href={option.href} key={index}>
        <a
          className={`text-black hover:bg-blue-50 pr-32 w-full py-2 pl-10 ${
            router.pathname === option.href ? 'bg-blue-100 border-l-4 border-blue-300' : ''
          }`}
        >
          {option.text}
        </a>
      </Link>
    ));
  }

  return (
    <div className="flex justify-center items-center h-screen text-black"> 
      <div className="bg-slate-200 m-8 rounded-xl w-11/12 h-5/6">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col bg-white w-72 rounded-md place-content-between">

            <section className='flex flex-col gap-10'>
              <figure className="flex items-center justify-center gap-3 relative my-0 mt-3 p-5">
                <figure className='flex justify-center items-center rounded-full p-0 ml-0 mr-0 bg-slate-900'>
                  <Image src="/images/logoLOGIN.png" width={40} height={40} alt="imagemDoCurso" />
                </figure>
                <h2>Curso FA.</h2>
              </figure>
              <nav className="flex flex-col items-start w-full mt-">
                {getMenuLinks(props.usuario)}
              </nav>
            </section>
            <section>
              <div className='flex ml-5 gap-3'>
                <Link href={"https://www.instagram.com/felipealvesredacao/"}><Image src="/images/instagram.png" width={26} height={25} alt="imagemDoCurso"/></Link>
                <Link href={"https://api.whatsapp.com/send/?phone=5587981640749&text=matr%C3%ADculas+23&type=phone_number&app_absent=0"}><Image src="/images/whatsapp.png" width={26} height={24} alt="imagemDoCurso"/></Link>
                <Link href={"https://www.youtube.com/@cursofelipealves29"}><Image src="/images/youtube.png" width={27} height={27} alt="imagemDoCurso"/></Link>
              </div>
              <div className='flex flex-col bg-blue-300 rounded-lg m-3 p-3 text-white'>
                <div className='flex flex-row items-center pb-1'>
                  <figure className={`flex justify-center items-center rounded-full p-2.5 ml-2 mr-2 ${live? "bg-red-600" : "bg-slate-300}"}`}/>
                  <h3 className="font-Montserrant">Live</h3>
                </div>
                {live? <Link href={live.link} className='bg-white p-2 rounded-lg text-black font-Montserrant text-center'>Participar</Link> : ''}
              </div>
            </section>

          </div>
          {props.divisoes ? (
            <div className={`w-full ${props.className}`}>{props.children}</div>
          ) : (
            <div className={`bg-white rounded-md w-full m-2 p-6 ${props.className}`}>{props.children}</div>
          )}
        </div>
      </div>
    </div>
  );
}