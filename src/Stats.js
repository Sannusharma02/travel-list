export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        {" "}
        <em> Start adding some items to your packing list</em>
      </p>
    );
  const numitem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numitem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go->"
          : `You have ${numitem} items on your list, and already packed ${numPacked}(
          ${percentage}%)`}
      </em>
    </footer>
  );
}
