---
type: method
interface: IBody2
member: IGetNextSelectedFace
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related:
  - IBody2.GetNextSelectedFace
  - IBody2.GetSelectedFaceCount
  - IBody2.GetSelectedFaces
  - IBody2.IGetFirstSelectedFace
  - IBody2.IGetSelectedFaces
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
  - igetnextselectedface
  - body2
  - next
  - selected
  - face2
---

# IBody2.IGetNextSelectedFace

Gets the next selected face. For use with IBody2::GetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
Face2 IGetNextSelectedFace()
```
## Parameters

None.

## Return Value

Pointer to the selected face

## Remarks

Do not use this method for general selection handling. If you want to handle items selected by the user or items selected with
IModelDocExtension::SelectByID2
, use
ISelectionMgr::GetSelectedObject6
.

## See Also

- `IBody2.GetNextSelectedFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.GetSelectedFaces`
- `IBody2.IGetFirstSelectedFace`
- `IBody2.IGetSelectedFaces`