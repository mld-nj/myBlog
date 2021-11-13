import ShowMd from "../../components/ShowMd/ShowMd";
import { useParams } from "react-router-dom";
const Passage = () => {
  const id = useParams();

  return (
    <div>
      <ShowMd passage={id.id}></ShowMd>
    </div>
  );
};
export default Passage;
