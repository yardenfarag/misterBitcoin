import { Sparklines, SparklinesLine } from 'react-sparklines'

export function Chart({ data, color }) {
    return (
        <div>
            <Sparklines data={data} limit={151} width={200} height={40} margin={0.5}>
                <SparklinesLine
                    style={{ stroke: color, fill: color, strokeWidth: 0.2 }}
                />
            </Sparklines>
        </div>
    )
}
