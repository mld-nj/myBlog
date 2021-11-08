import ShowMd from "../../components/ShowMd/ShowMd";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Passage = () => {
  const id = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <div>
      <ShowMd passage={id.id}></ShowMd>
    </div>
  );
};
export default Passage;
