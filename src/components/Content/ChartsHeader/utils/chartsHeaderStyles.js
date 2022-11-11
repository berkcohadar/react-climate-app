export const cities = [
    {
        label: "Amberley",
        value: "Amberley",
    },
    {
        label: "Albany Airport",
        value: "Albany-Airport",
    },
    {
        label: "Bendigo",
        value: "Bendigo",
    },
    {
        label: "Bridgetown",
        value: "Bridgetown",
    },
    {
        label: "Camden",
        value: "Camden",
    },
    {
        label: "Cerberus",
        value: "Cerberus",
    },
    {
        label: "Edinburgh",
        value: "Edinburgh",
    },
    {
        label: "Gosford",
        value: "Gosford",
    },
];

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        color: '#fff',
        textAlign: "start",
        fontSize: "20px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#1d2f70"
        }
    }),
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        minWidth: "200px",
        border: '1px solid rgba(255, 255, 255, 0.75)',
        "&:hover": {
            border: '1px solid rgba(255, 255, 255, 1)',
        }
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#fff",
        fontSize: "20px",
        textAlign: "start",
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        color: "#fff",
        backgroundColor: "#fff",
        fontSize: "20px",
        textAlign: "start",
    }),
}