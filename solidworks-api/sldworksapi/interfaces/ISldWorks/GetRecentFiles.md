---
type: method
interface: ISldWorks
member: GetRecentFiles
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - getrecentfiles
  - isldworks
  - sld
  - works
  - recent
  - files
  - object
---

# ISldWorks.GetRecentFiles

Gets a list of the most recently used files.

## Signature

```csharp
System.Object GetRecentFiles()
```
## Parameters

None.

## Return Value

List of most recently used files (see Remarks )

## Remarks

The list is returned in pairs of files.
For each pair, the first item is the fully qualified path to the file.
The second item is just the filename, as it appears in the most recent used list in the SOLIDWORKS
File
menu.