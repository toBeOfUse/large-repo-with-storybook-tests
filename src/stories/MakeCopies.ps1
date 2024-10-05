# Define the paths
$originalFile = "LotsOfStuff.stories.ts"
$destinationDir = "LotsOfStories"
$copiesCount = 400

# reset the destination directory by deleting and recreating it
Remove-Item -Recurse -Force $destinationDir
New-Item -Path $destinationDir -ItemType Directory

# Loop to create 5 copies of the file
for ($i = 1; $i -le $copiesCount; $i++) {
    # Define the destination file name
    $newFileName = "LotsOfStuff$i.stories.ts"
    $newFilePath = Join-Path $destinationDir $newFileName
    
    # Copy the original file to the new destination
    Copy-Item $originalFile -Destination $newFilePath

    # Replace the text inside the copied file
    (Get-Content $newFilePath) -replace "Pages/LotsOfStuff", "Pages/LotsOfStuff$i" | Set-Content $newFilePath
    (Get-Content $newFilePath) -replace "import LotsOfStuff from './LotsOfStuff';", "import LotsOfStuff from '../LotsOfStuff';" | Set-Content $newFilePath
}

Write-Host "$copiesCount copies have been successfully created in the $destinationDir directory."
