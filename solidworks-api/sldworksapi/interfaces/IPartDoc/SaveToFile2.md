---
type: method
interface: IPartDoc
member: SaveToFile2
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the part document (.sldprt)
  -
    name: Options
    type: System.Int32
    description: Relevant options indicating how to save the document as defined in swSaveAsOptions_e
  -
    name: Errors
    type: System.Int32
    description: Errors that caused the save to fail as defined in swFileSaveError_e
  -
    name: Warnings
    type: System.Int32
    description: Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related: []
keywords:
  - savetofile2
  - ipartdoc
  - part
  - doc
  - save
  - file2
  - name
  - string
  - options
  - int32
  - errors
  - warnings
  - boolean
---

# IPartDoc.SaveToFile2

Obsolete. Superseded by IPartDoc::SaveToFile3.

## Signature

```csharp
System.Boolean SaveToFile2( 
   System.String
Name
,
   System.Int32
Options
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `Name` (System.String): Name of the part document (.sldprt)
- `Options` (System.Int32): Relevant options indicating how to save the document as defined in swSaveAsOptions_e
- `Errors` (System.Int32): Errors that caused the save to fail as defined in swFileSaveError_e
- `Warnings` (System.Int32): Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e

## Return Value

True if the save is successful, false if not