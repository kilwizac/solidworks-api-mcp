---
type: method
interface: IMBD3DPdfData
member: GetImportedNotes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related: []
keywords:
  - getimportednotes
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - imported
  - notes
  - object
  - setimportednote
---

# IMBD3DPdfData.GetImportedNotes

Gets the imported note names from the theme of this MBD3DPdfData.

## Signature

```csharp
System.Object GetImportedNotes()
```
## Parameters

None.

## Return Value

Array of imported note names

## Remarks

Before calling this method, you need to use
IMBD3DPdfData::ThemeName
to set the theme of this MBD3DPdfData.

## Examples

- IMBD3DPdfData::SetImportedNote (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMBD3DPdfData~SetImportedNote)