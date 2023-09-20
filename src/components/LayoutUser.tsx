import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
          <div className="bg-white w-72 rounded-md">
            <figure className="relative my-0 mt-3 p-5">
              <Image src="/images/FELIPEALVESRBG2.png" width={200} height={100} alt="imagemDoCurso" />
            </figure>
            <nav className="flex flex-col items-start w-full mt-8">
              {getMenuLinks(props.usuario)}
            </nav>
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