import { memo } from "react";
import Items from "../Items/Items";

const ItemList = memo(
  ({ itemsProd }) => {
    return (
      <>
        {itemsProd.map((prod) => (
          <Items card={prod} key={prod.id} />
        ))}
      </>
    );
  },
  (oldProd, newProd) => oldProd.itemsProd.length === newProd.itemsProd.length
);

export default ItemList;
