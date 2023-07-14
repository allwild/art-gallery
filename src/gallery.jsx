import Tile from "./Tile";

export default function Gallery({
  pageSetter,
  page,
  setDetails,
  items,
  loading,
}) {
  return (
    <>
      <h1>Gallery</h1>
      <Tile
        page={page}
        setDetails={setDetails}
        items={items}
        loading={loading}
      />
    </>
  );
}
