import ListOfActivities from "./ListOfActivities";
function List() {
  const Listact = ["Wake-Up AT 7 am", "Have your Breakfast", "Go to Office"];
  return (
    <>
      <h3>List Of Activities</h3>
      {Listact.map(function (item) {
        return <ListOfActivities activity={item} />;
      })}
    </>
  );
}
export default List;
