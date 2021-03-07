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
        <div>
            <h2>Profile Page</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
        </div>
    );
}

export default ProfilePage;