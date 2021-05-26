import fs from 'fs'
import path from 'path'
import markdown from 'markdown-it'

let out = {}

const run = async e => {
	const dir = await fs.readdirSync( '../' )
	const md = new markdown()

	for (let i = 0; i < dir.length; i++ ) {
		const name = dir[i]
		let readme = path.join( '../', name + '/README.md') 
		if (await fs.existsSync( readme ) ) {

			out[name] = md.render( await (await fs.readFileSync( readme )).toString() )
		}
	}

	await fs.writeFileSync( 'static/data.json', JSON.stringify(out, null, '\t') )
}

run()