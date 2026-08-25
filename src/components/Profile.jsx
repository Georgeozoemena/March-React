import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // Does side effects
  useEffect(() => {
    fetch(`https://dummyjson.com/quotes:${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setLoading(false) // Only when the data is fecthing completely, that the loading state should be false
    })
    ;
  }, [id]);

  return (
    <>
      <div>
        {loading? (<p>Loading...</p>) : users.map((user) => {
            return (
              <>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </>
            );
          })
        }
      </div>
    </>
  );
}
