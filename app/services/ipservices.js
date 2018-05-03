const ips = {
  'Waylon Dalton': '196.207.168.0',
  'Justine Henderson': '215.153.37.16',
  'Abdullah Lang': '18.200.100.81',
  'Thalia Cobb': '92.58.194.51',
  'Mathias Little': '131.151.168.221',
  'Eddie Randolph': '83.78.236.244',
  'Angela Walker': '37.213.166.55',
  'Lia Shelton': '247.157.126.204',
  'Hadassah Hartman': '44.201.176.233',
  'Joanna Shaffer': '62.197.162.108',
  'Jonathon Sheppard': '95.76.145.118',
  'June Russo': '138.253.218.225',
  'Kaylie Hayes': '100.176.242.212',
  'Trenton Mcpherson': '118.36.110.166',
  'Waylon Dalton': '196.207.168.0'
};

let _ips = {};

for (let i in ips) {
  if (!_ips[i]) {
    _ips[i] = ips[i];
  }
}

export default () => {
  return _ips;
};
