export function formatDate (created_at) {
    const dateTime = created_at.split("T")
    const date = dateTime[0].split("-").reverse().join("/")
    const timeArr = dateTime[1].split(":")
    const time = timeArr.splice(0, 2).join(":")
    return `${date} at ${time}`
}