---
type: method
interface: ISldWorks
member: SetMissingReferencePathName
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Path and filename of the missing reference
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - external
  - references
  - file
  - management
  - setmissingreferencepathname
  - isldworks
  - sld
  - works
  - missing
  - reference
  - path
  - name
  - string
  - void
---

# ISldWorks.SetMissingReferencePathName

Sets the missing reference file name. Use with the SOLIDWORKS event ReferenceNotFoundNotify.

## Signature

```csharp
void SetMissingReferencePathName( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and filename of the missing reference

## Return Value

Unknown.

## Remarks

Use with the SOLIDWORKS event
ReferenceNotFoundNotify
.