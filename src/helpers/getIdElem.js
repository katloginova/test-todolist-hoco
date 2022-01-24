export default function getIdElem ( elem, selector ) {
    return elem.closest( selector ).dataset.id;
}