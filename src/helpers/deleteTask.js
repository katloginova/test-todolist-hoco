export default function deleteTask ( id, list ) {
    return list.filter((item) => +item.id !== +id)
}