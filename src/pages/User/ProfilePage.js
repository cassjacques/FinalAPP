import { useEffect, useState } from 'react';


function ProfilePage() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);

        if (token) {
            fetch('http://localhost:4020/api/v1/users/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        return response.json();
                    }
                })
                .then((data) => {
                    console.log(data);
                    setProfile(data.profile);
                })
                .catch((err) => console.log(err));

        }
    }, []);

    return (
        <div className="card">
            <h2>Welcome, {profile.userName}</h2>
            <br />
            <br />
            <br />
            <br />
            <h2>Your Stats:</h2>
            <h2><strong>UserName:</strong> <p>{profile.userName}</p></h2>
            <h2><strong>City:</strong> <p>{profile.city}</p></h2>
            <h2><strong>Birthday:</strong> <p>{profile.birthday}</p></h2>

        </div>
    );
}

export default ProfilePage;