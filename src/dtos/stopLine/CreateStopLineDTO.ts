export default interface ICreateStopLineRequestDTO{
    stopLines: Array<{
        stop_id: number,
        line_id: number
    }>
}