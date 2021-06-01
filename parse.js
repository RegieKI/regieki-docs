import fs from 'fs'
import path from 'path'
import markdown from 'markdown-it'
import include from 'markdown-it-include'

let out = {}

const run = async e => {
	const dir = await fs.readdirSync( '../' )
	const md = (new markdown( {html: true } )).use( include, './')

	for (let i = 0; i < dir.length; i++ ) {
		const name = dir[i]
		let readme = path.join( '../', name + '/README.md')
		if (await fs.existsSync( readme ) ) {

			out[name] = md.render( await (await fs.readFileSync( readme )).toString() )
		}
	}

	await fs.writeFileSync( 'static/data.json', JSON.stringify(out, null, '\t') )

	const dirs = ['fabrication', 'misc', 'stage']

	for( let i = 0; i < dirs.length; i++) {
		const imgs = await fs.readdirSync( 'media/' + dirs[i] )

		await fs.writeFileSync( 'media/' + dirs[i] + '/README.md', imgs.map( (src, idx) => {
			return `
[![${dirs[i]} ${idx}](${src})
			`
		}).join('\n') )
	}
}
 
run() 