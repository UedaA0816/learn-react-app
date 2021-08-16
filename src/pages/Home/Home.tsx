import React, { useCallback } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil"
import { titleState } from "../../atoms/TitleAtom"; 
import { Link } from "react-router-dom";

const Home:React.FC = () => {
  const title = useRecoilValue(titleState)
  const setTitle: SetterOrUpdater<string> = useSetRecoilState(titleState);
  
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );
  return (
    <div>
      <div>Home</div>
      <Link to="/">
      <div>Title:{title}</div>
      </Link>
      <Button onClick={()=>{console.log("home ok")}}>ok</Button>
      <TextField label="Standard" value={title} onChange={onChange}/>
    </div>
  )
}

export default Home