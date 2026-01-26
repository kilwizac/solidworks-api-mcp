---
type: method
interface: IBody2
member: GetNextSelectedFace
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related:
  - IBody2.GetFirstSelectedFace
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.GetSelectedFaceCount
  - IBody2.GetSelectedFaces
  - IBody2.IGetFirstSelectedFace
  - IBody2.IGetNextSelectedFace
  - IBody2.IGetProcessedBodyWithSelFace
keywords:
  - iges
  - routines
  - face
  - see
  - also
  - iface2
  - body
  - bodies
  - ibody2
  - faces
  - getnextselectedface
  - body2
  - next
  - selected
  - object
---

# IBody2.GetNextSelectedFace

Gets the next selected face. For use with IBody2::GetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
System.Object GetNextSelectedFace()
```
## Parameters

None.

## Return Value

Selected face

## Remarks

Do not use this method for general selection handling. If you want to handle items selected by the user or items selected with
IModelDocExtension::SelectByID2
, use
ISelectionMgr::GetSelectedObject6
.

## See Also

- `IBody2.GetFirstSelectedFace`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.GetSelectedFaces`
- `IBody2.IGetFirstSelectedFace`
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetProcessedBodyWithSelFace`