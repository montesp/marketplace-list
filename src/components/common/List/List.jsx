import { ListItem } from '../ListItem/ListItem';
import './_List.scss';

function List() {
  return (
    <section className='list'>
      <ListItem/>
      <ListItem/>
      <ListItem/>

    </section>
  );
}

export { List };
