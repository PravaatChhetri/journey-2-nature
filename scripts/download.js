import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

// Create output directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Create a file to stream archive data to
const output = fs.createWriteStream('dist/journey2nature-project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('Project has been archived successfully!');
  console.log('Total bytes: ' + archive.pointer());
  console.log('Archive has been finalized and the output file descriptor has closed.');
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

// Good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files and directories
const filesToExclude = [
  'node_modules',
  'dist',
  '.git',
  '.env',
  '.DS_Store'
];

function addDirectoryToArchive(dirPath, archivePath = '') {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    // Skip excluded directories and files
    if (filesToExclude.includes(file)) {
      return;
    }

    if (stats.isDirectory()) {
      addDirectoryToArchive(filePath, path.join(archivePath, file));
    } else {
      archive.file(filePath, { name: path.join(archivePath, file) });
    }
  });
}

// Add all project files
addDirectoryToArchive('.');

// Finalize the archive
archive.finalize();