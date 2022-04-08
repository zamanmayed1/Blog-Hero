import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
const auth = getAuth();

const Profile = () => {
          const user = auth.currentUser;
          return (
                    <div>
                              <h1>Profile</h1>
                              <p>{user?.email}</p>
                    </div>
          );
};

export default Profile;