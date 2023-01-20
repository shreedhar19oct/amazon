const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'This Fitbit Versa smartwatch will keep a tab on your fitness goals and your style quotient. With its 15+ exercise modes, this smartwatch helps you maintain real-time stats when you’re working out. It also helps you access a variety of apps, so you can never have a dull moment anywhere. To top it off, it records your period cycle and symptoms, along with your sleep quality and activities, so you can keep a tab on your overall health.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;