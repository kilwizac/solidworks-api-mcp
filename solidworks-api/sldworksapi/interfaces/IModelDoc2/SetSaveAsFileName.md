---
type: method
interface: IModelDoc2
member: SetSaveAsFileName
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Save As filename
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDocExtension.SaveAs
keywords:
  - document
  - save
  - setsaveasfilename
  - imodeldoc2
  - model
  - doc2
  - file
  - name
  - string
  - void
---

# IModelDoc2.SetSaveAsFileName

Sets the Save As filename from within the FileSaveAsNotify2 event handlers, thereby, bypassing the Save As dialog.

## Signature

```csharp
void SetSaveAsFileName( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Save As filename

## Return Value

Unknown.

## Remarks

Use this method from within the FileSaveAsNotify2 event handler. When setting the
Save As
filename using this method, S_false should be returned from the FileSaveAsNotify2 event handler. See
DAssemblyDocEvents FileSaveAsNotify2
,
DDrawingDocEvents FileSaveAsNotify2
, and
DPartDocEvents FileSaveAsNotify2
notifications.

## See Also

- `IModelDocExtension.SaveAs`