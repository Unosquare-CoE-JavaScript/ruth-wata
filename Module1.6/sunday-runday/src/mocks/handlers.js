import { rest } from "msw";


export const handlers = [
    rest.get('http://localhost:5000u/scoops', (req, res, ctx) =>{

    return rest(
        ctx.json([
            {name: 'Chocolate', inmagePath: '/images/chocolate.png'},
            {name: 'Chocolate', inmagePath: '/images/chocolate.png'}

        ])
    )
    }),
    rest.post('http://localhost:5000u/scoops', (req, res, ctx) =>{

    return rest(
        ctx.json([
            {name: 'Chocolate', inmagePath: '/images/chocolate.png'},
            {name: 'Chocolate', inmagePath: '/images/chocolate.png'}

        ])
    )
    })
]