import { Sub } from "../interface/Subs";

interface Props {
    subs: Array<Sub>
}


const List = ({subs}: Props) => {
    return (
        <ul>
        {
          subs.map((sub) => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar de ${sub.nick}`} />
                <h4>{sub.nick} <small>{sub.subsMonths}</small></h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    );
    
}

export default List