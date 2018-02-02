/**
 * Created by Administrator on 2018/1/10.
 */
let fs = require('fs'),
	path = require('path'),
	routes = [],
	fileContext = `//routes自动生成的文件,指定router下的map文件夹\r\n`,
	exportArray = []

let targetFileName = path.join(__dirname, '../src/router/routesMaker.js')

function traversal(path) {
	let dirList = fs.readdirSync(path)
	dirList.forEach(fileName => {
		if(fs.statSync(path + '/' + fileName).isDirectory()){
			traversal(path + fileName)
		}else {
			routes.push(path + '/' + fileName)
		}
	})
}

function getAllRoutes() {
	traversal('./src/router/map')
	routes.forEach((route, i) => {
		route = route.split('./src/router/map').join('./map')
		fileContext += 'import route' + i + ' from "'+route + '"\r\n'
		exportArray.push('route' + i)
	})
	fileContext += `let routes = []\r\nlet myRoutes = routes.concat(${exportArray.join(',')})\r\nexport default myRoutes`
	fs.writeFileSync(targetFileName, fileContext, 'utf-8')
}

getAllRoutes()
