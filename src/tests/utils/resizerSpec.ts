import path from 'path';
import resizer from '../../utils/resizer';

describe('Test full image resize function', () => {
    let inPath = path.resolve(`assets/full/iceland.jpg`);
    let outPath = path.resolve(`assets/thumbs/iceland-thumb.jpg`);
    it(`should throw error`, async () => {
        await expectAsync(
            resizer.resizeImage(inPath, outPath, 200, 200)
        ).toBeRejectedWithError();
    });

    it(`should run without errors`, async () => {
        inPath = path.resolve(`assets/full/fjord.jpg`);
        outPath = path.resolve(`assets/thumbs/fjord-thumb.jpg`);
        expect(
            await resizer.resizeImage(inPath, outPath, 200, 200)
        ).toBeTruthy();
    });
});
