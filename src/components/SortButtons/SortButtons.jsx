import ButtonDefault from "../ButtonDefault/ButtonDefault";
import './style.css';

function SortButtons () {
    const titleBtns = [ 'all','done','todo' ];
    return (
        <div className="todolist-sort">
            { titleBtns?.map( ( title,key ) =>
                <ButtonDefault
                    key={key}
                    nameClass={ 'todolist-sort__btn' }
                    title={ title } />
            ) }
        </div>
    )
}

export default SortButtons;