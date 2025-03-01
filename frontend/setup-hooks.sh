#!/bin/bash

# Define the Git hooks directory
HOOKS_DIR=".git/hooks"
HOOK_FILE="$HOOKS_DIR/pre-push"
SOURCE_HOOK="git-hooks/pre-push"

# Ensure Git is initialized
if [ ! -d "$HOOKS_DIR" ]; then
    echo "❌ This is not a Git repository! Run 'git init' first."
    exit 1
fi

# Copy the hook from the repo to the Git hooks folder
cp "$SOURCE_HOOK" "$HOOK_FILE"

# Make the hook executable
chmod +x "$HOOK_FILE"

echo "✅ Git pre-push hook installed successfully! Only the owner can push to 'main'."


cp git-hooks/post-checkout .git/hooks/post-checkout
chmod +x .git/hooks/post-checkout
