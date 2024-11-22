// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { debug } from 'console';
import path from 'path';
import * as vscode from 'vscode';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "feature-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('feature-generator.newFeature', async () => {
		
		// get the current folder env
		const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('Please open a workspace first');
            return;
        }
		console.log(workspaceFolder.uri.fsPath);

		// Prompt for feature name
        const featureName = await vscode.window.showInputBox({
            prompt: 'Enter the name of the feature',
            placeHolder: 'e.g., user-authentication'
        });

		// check if feature name is valid
		if (!featureName) {
			vscode.window.showErrorMessage('Please enter a valid feature name');
			return;
		}
		try {
			// Create lib directory if it doesn't exist
            const libPath = path.join(workspaceFolder.uri.fsPath, 'lib');
            if (!fs.existsSync(libPath)) {
                fs.mkdirSync(libPath);
            }
            const featurePath = path.join(libPath, featureName);
            
            // Define the directory structure
            const directories = [
                featurePath,
                path.join(featurePath, 'data'),
                path.join(featurePath, 'data', 'models'),
                path.join(featurePath, 'data', 'repositories'),
				path.join(featurePath, 'data', 'datasources'),
                path.join(featurePath, 'domain'),
                path.join(featurePath, 'domain', 'entities'),
                path.join(featurePath, 'domain', 'repositories'),
                path.join(featurePath, 'domain', 'usecases'),
                path.join(featurePath, 'presentation'),
                path.join(featurePath, 'presentation', 'screens'),
                path.join(featurePath, 'presentation', 'widgets'),
                path.join(featurePath, 'presentation', 'controllers')
            ];

            // Create directories recursively
            for (const dir of directories) {
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
            }

			
		} catch (error) {
			console.error(error);
		}

		console.log('you want to create a feature name ' + featureName);

		vscode.window.showInformationMessage('The folders structure created for feature named ' + featureName);
	});

	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() {}
