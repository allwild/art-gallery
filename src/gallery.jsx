import Tile from "./Tile"

export default function Gallery({pageSetter, page, setDetails}) {
  return (
    <>
        <h1>Gallery</h1>
        <Tile pageSetter={pageSetter} page={page} setDetails={setDetails}/>
    </>
  )
}
