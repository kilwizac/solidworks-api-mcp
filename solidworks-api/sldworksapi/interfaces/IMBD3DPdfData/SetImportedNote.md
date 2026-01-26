---
type: method
interface: IMBD3DPdfData
member: SetImportedNote
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the imported note to set (see Remarks )
  -
    name: Note
    type: System.Object
    description: INote
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related: []
keywords:
  - setimportednote
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - imported
  - note
  - name
  - string
  - object
  - boolean
---

# IMBD3DPdfData.SetImportedNote

Sets the specified imported note.

## Signature

```csharp
System.Boolean SetImportedNote( 
   System.String
Name
,
   System.Object
Note
)
```
## Parameters

- `Name` (System.String): Name of the imported note to set (see Remarks )
- `Note` (System.Object): INote

## Return Value

True if note set successfully, false if not

## Remarks

Use
IMBD3DPdfData::GetImportedNotes
to get the names of available imported note names you can use to set notes in this PDF.