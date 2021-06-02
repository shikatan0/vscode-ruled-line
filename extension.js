const vscode = require('vscode');


const activate = (context) => {
	const drawingRuledline = newDrawingRuledline()
	drawingRuledline()
	vscode.window.onDidChangeActiveTextEditor(drawingRuledline)
	vscode.workspace.onDidChangeTextDocument(drawingRuledline)
}

const deactivate = () => {}


const newDrawingRuledline = () => {
	const decorationType = vscode.window.createTextEditorDecorationType({
		isWholeLine: true,
		borderWidth: '0 0 1px 0',
		borderStyle: 'dashed',
		borderColor: 'rgba(255, 255, 255, 0.1)'
	})

	const drawingRuledline = () => {
		const editor = vscode.window.activeTextEditor

		const startPosition = editor.document.positionAt(0);
		const endPosition = editor.document.positionAt(editor.document.getText().length);
		const range = new vscode.Range(startPosition, endPosition);

		editor.setDecorations(decorationType, [range])
	}

	return drawingRuledline
}


module.exports = {
	activate,
	deactivate
}
