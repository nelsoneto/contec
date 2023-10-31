export default function Home() {
  return (
    <section className="flex items-center justify-center h-[110vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[25px]">Faça o login</h2>
        <form
          action=""
          method="post"
          className="flex flex-col gap-2 w-[100%] max-w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              className="p-[10px] bg-slate-900 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="p-[10px] bg-slate-900 rounded-md"
            />
          </div>
          <div>
            <p>
              Não possui conta? <span>Cadastre-se</span>
            </p>
          </div>
          <button
            type="submit"
            className="bg-slate-300 p-[10px] text-blue-700 font-medium rounded-sm"
          >
            Entrar
          </button>
          <fieldset>
            <legend>ou</legend>
            <div>Acesse com o seu:</div>
          </fieldset>
          <button>GitHub</button>
        </form>
      </div>
    </section>
  );
}
