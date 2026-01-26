---
type: method
interface: ISldWorks
member: GetFilePLMID
returns: System.String
parameters:
  -
    name: FilePath
    type: System.String
    description: Name of file
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
  - 3dexperience
  - getfileplmid
  - isldworks
  - sld
  - works
  - file
  - plmid
  - path
  - string
---

# ISldWorks.GetFilePLMID

Gets the Product Lifecycle Management (PLM) ID of the specified file stored in 3DEXPERIENCE.

## Signature

```csharp
System.String GetFilePLMID( 
   System.String
FilePath
)
```
## Parameters

- `FilePath` (System.String): Name of file

## Return Value

PLM ID

## Remarks

This method is valid only for
SOLIDWORKS Design Augmented
.