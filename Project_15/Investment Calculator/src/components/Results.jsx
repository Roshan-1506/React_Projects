import { calculateInvestmentResults } from '../util/Investment.js';

export default function Results( {input}){
    const resultsData = calculateInvestmentResults(input)

return <p> Results ...</p>
}