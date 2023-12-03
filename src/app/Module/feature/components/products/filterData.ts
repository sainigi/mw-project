// export const color = [
//     "White",
//     "Black",
//     "Red",
//     "Marun",
//     "Beige",
//     "Pink",
//     "Green",
//     "Yellow"
// ]

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value:"white", label:"White"},
            {value:"beige", label:"Beige"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
            {value:"black", label:"Black"},
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
            {value:"XL", label:"XL"},
            {value:"XXL", label:"XXL"},
        ],
    }
];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options:[
            {value:"159-399", label:"₹159 To ₹399"},
            {value:"399-999", label:"₹399 To ₹999"},
            {value:"999-1999", label:"₹999 To ₹1999"},
            {value:"1999-2999", label:"₹1999 To ₹2999"},
            {value:"2999-4999", label:"₹2999 To ₹4999"},
            
        ]
    },
    {
        id: "discount",
        name: "Discount",
        options:[
            {value:"10", label:"10% And Above"},
            {value:"20", label:"20% And Above"},
            {value:"30", label:"30% And Above"},
            {value:"40", label:"40% And Above"},            
            {value:"50", label:"50% And Above"},            
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options:[
            {value:"in_stock", label:"10% And Above"},
            {value:"out_of_stock", label:"20% And Above"}           
        ]
    }
]