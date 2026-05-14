param(
    [string]$Message = "Sync project changes"
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

git pull --rebase

$changes = git status --porcelain
if ($changes) {
    git add -A
    git commit -m $Message
    git push
} else {
    Write-Host "No local changes to sync."
}
