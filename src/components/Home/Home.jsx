import './Home.scss';


function Home({children}) {
  return (
    <main className='main'>
      <section className='task-container'>
        {children}
      </section>
    </main>
  );
}

export { Home };
