const LogicalTest = () => {
  const palindrom = []
  const data = ['092289', '992299', '12291', '982289', '22022022', '2301', '2013', '1001', '756564', '1011', '766567', '756546', '2002', '91019', '765567']

  const palindromCheck = (string) => {
    let newString = ''
    let status = false;
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i]
    }
    if (string === newString) {
      status = true
    }
    return status
  }

  for (let i = 0; i < data.length; i++) {
    if (palindromCheck(data[i])) {
      palindrom.push(data[i])
    }
  }
  console.log(palindrom);
  return (
    <div className='container'>
      <div>Terdapat array of strings dengan data sebagai berikut :</div>
      <div>[{data.toString()}]</div>
      <div>String palindrom adalah:</div>
      <div>[{palindrom.toString()}]</div>
    </div>
  )
}

export default LogicalTest