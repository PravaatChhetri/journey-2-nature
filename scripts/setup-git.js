import { execSync } from 'child_process';

async function setupGit() {
  try {
    // Initialize Git repository
    execSync('git init');
    console.log('✅ Git repository initialized');

    // Configure Git to use main as default branch
    execSync('git checkout -b main');
    console.log('✅ Created and switched to main branch');

    // Add remote origin with the provided URL
    execSync('git remote add origin https://github.com/PravaatChhetri/travel-with-journey-2-nature.git');
    console.log('✅ Remote origin added');

    // Configure Git user (if not already configured)
    try {
      execSync('git config user.email');
    } catch {
      execSync('git config user.email "git@example.com"');
      execSync('git config user.name "Travel with Journey 2 Nature"');
      console.log('✅ Git user configured');
    }

    // Add all files
    execSync('git add .');
    console.log('✅ Files staged for commit');

    // Create initial commit
    execSync('git commit -m "Initial commit: Travel with Journey 2 Nature website"');
    console.log('✅ Initial commit created');

    // Force push to remote repository
    execSync('git push -u origin main --force');
    console.log('✅ Code pushed to repository');

    console.log('\n🎉 Git setup completed successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n👉 If you encounter authentication issues, please:');
    console.log('1. Ensure you are logged into GitHub');
    console.log('2. Have the necessary permissions for the repository');
    console.log('3. Use a personal access token if required');
  }
}

setupGit();