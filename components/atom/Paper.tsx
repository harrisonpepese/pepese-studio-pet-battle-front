import { ChildrenProp } from "@/types/childrenProp";
import { NextPage } from "next";

const PaperAtom: NextPage<ChildrenProp> = ({ children }) => {
  return (
    <div className="m-2 p-5 shadow overflow-hidden sm:rounded-lg border">
      {children}
    </div>
  );
};
export default PaperAtom;
