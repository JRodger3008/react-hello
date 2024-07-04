// Can be used to get full name of any user object. Reusable

function FullName(person) {
    return (
        person.firstName + ' ' + person.lastName
    )
};

export default FullName;