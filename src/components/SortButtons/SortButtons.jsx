import ButtonDefault from "../ButtonDefault/ButtonDefault";
import './style.css';

function SortButtons ( props ) {
    const { titleBtns, onBtnClick } = props;

    return ( titleBtns.length > 0 ) && (
        <div className="todolist-sort">
            { titleBtns.map( ( title, key ) =>
                <ButtonDefault
                    key={ key }
                    nameClass={ 'todolist-sort__btn' }
                    title={ title }
                    onBtnClick={ onBtnClick }
                />
            ) }
        </div>
    )
}

export default SortButtons;