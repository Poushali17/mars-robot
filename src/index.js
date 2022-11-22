// Mars-Robot problem solution - Codec test
import readline from 'readline';

// method to calculate robot final position in Mars
const calculateRobotFinalPosition = () => {
    console.log('Hey welcome to Mars !!')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let initialXAxisPlateau = 1;
    let initialYAxisPlateau = 1;
    let initialPosition = 'North';
    const cardinalPoints = ['North', 'East', 'South', 'West'];
    rl.question('Please enter plateau grid size: ', (size) => {
        rl.question('Please enter command: ', (command) => {
            const xAxisPlateau = size.split(/[xX]+/)[0];
            const yAxisPlateau = size.split(/[xX]+/)[1];
            command.split('').forEach((el) => {
                let index;
                switch (el) {
                    case 'L':
                        index =
                            initialPosition === 'North'
                                ? 3
                                : cardinalPoints.indexOf(initialPosition) - 1
                        initialPosition = cardinalPoints[index]
                        break;
                    case 'R':
                        index =
                            initialPosition === 'West'
                                ? 0
                                : cardinalPoints.indexOf(initialPosition) + 1
                        initialPosition = cardinalPoints[index]
                        break;
                    case 'F':
                        switch (initialPosition) {
                            case 'North':
                                initialYAxisPlateau = initialYAxisPlateau < yAxisPlateau
                                    ? initialYAxisPlateau + 1
                                    : initialYAxisPlateau
                                break;
                            case 'East':
                                initialXAxisPlateau = initialXAxisPlateau < xAxisPlateau
                                    ? initialXAxisPlateau + 1
                                    : initialXAxisPlateau
                                break;
                            case 'South':
                                initialYAxisPlateau = initialYAxisPlateau < yAxisPlateau && initialYAxisPlateau > 1
                                    ? initialYAxisPlateau - 1
                                    : initialYAxisPlateau
                                break;
                            case 'West':
                                initialXAxisPlateau = initialXAxisPlateau < xAxisPlateau && initialXAxisPlateau > 1
                                    ? initialXAxisPlateau - 1
                                    : initialXAxisPlateau
                                break;

                            default:
                                throw new Error(
                                    'There must be something wrong with robot orientation'
                                );
                        }
                }

            });
            console.log(`The final position of the Robot in Mars : ${initialXAxisPlateau},${initialYAxisPlateau},${initialPosition}`);
            console.log('Please Note:\n', 'Considering the grid origin (0,0), the max limit should be the plateau grid size. ie. for plateau grid size 3x4, the limit is X=3, Y=4.\n',
                'If the robot reaches the limit of the plateau and wants to move within the plateau size, we will allow to do that.');
        })
    });
}

calculateRobotFinalPosition();
