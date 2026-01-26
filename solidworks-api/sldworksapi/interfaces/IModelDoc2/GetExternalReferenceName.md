---
type: method
interface: IModelDoc2
member: GetExternalReferenceName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.BreakAllExternalReferences
  - IModelDoc2.IListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferencesCount
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - dependent
  - documents
  - external
  - references
  - document
  - name
  - reference
  - getexternalreferencename
  - imodeldoc2
  - model
  - doc2
  - string
---

# IModelDoc2.GetExternalReferenceName

Gets the name of the externally referenced document (in the case of a join or mirrored part).

## Signature

```csharp
System.String GetExternalReferenceName()
```
## Parameters

None.

## Return Value

Full path of referenced document or NULL

## Remarks

If the model document does not have an externally referenced document, a NULL string is returned.
This example shows how to get the names of any externally referenced document for the open model.
'
------------------------------------------
Option Explicit
Sub main()
Dim swApp
As SldWorks.SldWorks
Dim swModel
As SldWorks.ModelDoc2
Set swApp = Application.SldWorks
Set swModel = swApp.ActiveDoc
Debug.Print "File = " & swModel.GetPathName
Debug.Print "
ExtRefName = " & swModel.
GetExternalReferenceName
End Sub
'------------------------------------------

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`