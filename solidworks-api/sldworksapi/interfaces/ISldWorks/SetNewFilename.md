---
type: method
interface: ISldWorks
member: SetNewFilename
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name for new SOLIDWORKS file
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
  - setnewfilename
  - isldworks
  - sld
  - works
  - new
  - filename
  - file
  - name
  - string
  - boolean
---

# ISldWorks.SetNewFilename

Sets the name of the new SOLIDWORKS file.

## Signature

```csharp
System.Boolean SetNewFilename( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name for new SOLIDWORKS file

## Return Value

True if the name of the new SOLIDWORKS file is set, false if not

## Remarks

Use with SldWorks
FileNewPreNotifyEventHandler
.