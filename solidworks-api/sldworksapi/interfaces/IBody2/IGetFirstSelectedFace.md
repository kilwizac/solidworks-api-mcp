---
type: method
interface: IBody2
member: IGetFirstSelectedFace
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
  - IBody2.GetFirstSelectedFace
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.GetSelectedFaceCount
  - IBody2.GetSelectedFaces
  - IBody2.IGetNextSelectedFace
  - IBody2.IGetProcessedBodyWithSelFace
  - IBody2.IGetSelectedFaces
keywords:
  - iges
  - routines
  - bodies
  - see
  - also
  - ibody2
  - faces
  - face
  - iface2
  - body
  - igetfirstselectedface
  - body2
  - first
  - selected
  - face2
---

# IBody2.IGetFirstSelectedFace

Gets the first selected face on this body. For use with IBody2::IGetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
Face2 IGetFirstSelectedFace()
```
## Parameters

None.

## Return Value

First selected face

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
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetProcessedBodyWithSelFace`
- `IBody2.IGetSelectedFaces`