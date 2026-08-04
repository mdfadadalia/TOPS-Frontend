
import { useQuery } from "@apollo/client/react";
import { GET_STUDENTS } from "./query";

function App() {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error</h2>;

    return (
        <div>
            {data.students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.age}</p>
                </div>
            ))}
        </div>
    );
}

export default App;