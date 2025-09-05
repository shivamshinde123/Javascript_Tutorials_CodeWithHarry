// 96_modules.js  (ESM)
// Tip: add { "type": "module" } to package.json to silence the warning.


import pkg from 'pdf-node';                     // handles both ESM and CJS builds
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Resolve the correct export shape across versions
const generatePDF =
    (typeof pkg === 'function' ? pkg
        : pkg?.generatePDF ?? pkg?.default?.generatePDF);

if (typeof generatePDF !== 'function') {
    throw new Error('Could not find generatePDF export from pdf-node');
}

console.log('start');

async function createPDF() {
    // Read HTML template
    const html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

    // Sample data
    const users = [
        { name: 'John Doe',  age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
    ];

    // PDF options
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        header: {
            height: '15mm',
            contents: '<div style="text-align:center;">Confidential Report</div>'
        },
        footer: {
            height: '15mm',
            contents: {
                default: '<div style="text-align:center;color:#666;">Page {{page}} of {{pages}}</div>'
            }
        }
    };

    try {
        const result = await generatePDF({
            html,
            data: { users, date: new Date().toLocaleDateString() },
            path: './user-report.pdf',    // omit or set buffer:true if you want a Buffer
            type: 'pdf',
            pdfOptions: options
        });

        if (result && 'filename' in result) {
            console.log('PDF generated successfully:', result.filename);
        } else if (result && 'buffer' in result) {
            const out = path.join(__dirname, 'user-report.pdf');
            fs.writeFileSync(out, result.buffer);
            console.log('PDF generated successfully (buffer wrote to):', out);
        } else {
            console.log('PDF generated (no filename/buffer reported).');
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

createPDF();
