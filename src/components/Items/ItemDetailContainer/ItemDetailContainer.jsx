import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "./ItemDetail/ItemDetail";
import The404 from "../../Errors/The404";

const ItemDetailContainer = (detail) => {
  const [unit, setUnit] = useState({});
  const [loading, setLoading] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryProd = doc(db, "productos", id);

    const getProdFs = async () => {
      const snapProd = await getDoc(queryProd);

      if (snapProd.exists()) {
        getDoc(queryProd)
          .then((res) => setUnit({ id: res.id, ...res.data() }))
          .catch((err) => console.log("err"))
          .finally(() => setLoading(1));
      } else {
        setLoading(2);
      }
    };
    getProdFs();
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      {(() => {
        switch (loading) {
          case 2:
            return <The404 />;

          case 1:
            return (
              <ItemDetail
                id={unit.id}
                image={unit.image}
                stock={unit.stock}
                categoryId={unit.categoryId}
                title={unit.title}
                price={unit.price}
                descripcion={unit.description}
              />
            );

          default:
            return <Spinner animation="grow" />;
        }
      })()}
    </div>
  );
};

export default ItemDetailContainer;
