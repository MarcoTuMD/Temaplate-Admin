import { useRouter } from "next/router";
import useAuth from "../../data/hook/useAuth";
import { iconeCasa, iconeAjustes, iconeSino, iconeSair } from "../Icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const { logout } = useAuth();
  const router = useRouter();
  console.log({ basePath: router.pathname });
  return (
    <aside className={`flex flex-col dark:bg-gray-900`}>
      <div
        className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem
          className={
            router.pathname === "/" ? "bg-gray-300 dark:bg-gray-800" : ""
          }
          url="/"
          texto="Home"
          icone={iconeCasa}
        />
        <MenuItem
          className={
            router.pathname === "/ajustes" ? "bg-gray-300 dark:bg-gray-800" : ""
          }
          url="/ajustes"
          texto="Ajustes"
          icone={iconeAjustes}
        />
        <MenuItem
          className={
            router.pathname === "/notificacoes"
              ? "bg-gray-300 dark:bg-gray-800"
              : ""
          }
          url="/notificacoes"
          texto="Notificações"
          icone={iconeSino}
        />
      </ul>
      <ul>
        <MenuItem
          onClick={logout}
          texto="Sair"
          icone={iconeSair}
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white hover:text-white`}
        />
      </ul>
    </aside>
  );
}
