import { createContext } from "react";

import React from 'react'

const UserContext = createContext({
    user : {
    names: "Dummy name",
    email: "dummy120@gmail.com",
}});

export default UserContext;
