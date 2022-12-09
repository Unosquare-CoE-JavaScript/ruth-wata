import { render, screen } from "@testing-library/react";
import Options from "../Options";



test('display image for each scoop option from server', () =>{

    render(<Options optioType='scoops'/>)

    // find images
    const scoopImages = screen.getAllBtRole('img', {name : /scoop$/i});
    expect(scoopImages).toHaveLength(2)

    // confirm alt text of images
    // @ts-ignore
    const altText = scoopImages.map(el => el.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})