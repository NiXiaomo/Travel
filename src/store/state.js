let defaultCity = '上海'
// 使用 try-catch 防止浏览器关闭缓存或使用隐私模式
try {
  localStorage.city && (defaultCity = localStorage.city)
} catch (e) {
}

export default {
  city: defaultCity
}
