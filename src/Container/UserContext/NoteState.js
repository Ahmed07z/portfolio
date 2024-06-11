import React, { useContext, useState } from "react";
import Usercontext from "./NoteContext";
const NoteState = (props) => {
  const [userinfo, setUserinfo] = useState({
    name: "Ahmed Hassan",
    Profession: "Software Engineering",
    Skills: [
      "WordPress Development",
      "ReactJs Development",
      "Chatbot Development",
      "API Integrations",
      "Html",
      "Css",
      "States Management",
      "MongoDB",
      "Testing",
      "Canva",
      "SQA",
    ],
    SkillsIcon:[

    ],
    Contact:{
        email:'ahmedhassan0057@gmail.com',
        whatapp:'+923040444476',
        linkedin:'linkedin.com',
    },
    
  });
  return (
    <Usercontext.Provider>
        {props.children}
    </Usercontext.Provider>
  );
};
