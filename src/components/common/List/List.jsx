import { ListItem } from '../ListItem/ListItem';
import './_List.scss';

function List({tasks, button}) {
  return (
    <section className='list'>
      {tasks.map(task => (
        <ListItem key={task} text={task} />
      ))}
    </section>
  );
}

export { List };
