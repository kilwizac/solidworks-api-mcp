---
type: method
interface: IBody2
member: IGetSelectedFaces
returns: Face2
parameters:
  -
    name: SelectedFaceCount
    type: System.Int32
    description: Number of selected faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related:
  - IBody2.GetFirstSelectedFace
  - IBody2.GetNextSelectedFace
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.GetSelectedFaceCount
  - IBody2.GetSelectedFaces
  - IBody2.IGetFirstSelectedFace
  - IBody2.IGetNextSelectedFace
  - IBody2.IGetProcessedBodyWithSelFace
keywords:
  - face
  - see
  - also
  - iface2
  - body
  - bodies
  - ibody2
  - faces
  - igetselectedfaces
  - body2
  - selected
  - count
  - int32
  - face2
---

# IBody2.IGetSelectedFaces

Gets the selected faces. For use with IBody2::GetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
Face2 IGetSelectedFaces( 
   System.Int32
SelectedFaceCount
)
```
## Parameters

- `SelectedFaceCount` (System.Int32): Number of selected faces

## Return Value

in-process, unmanaged C++: Pointer to an array of selected faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBody2::GetSelectedFaces
to get SelectedFaceCount.
Do not use this method for general selection handling. If you want to handle items selected by the user or items selected with
IModelDocExtension::SelectByID2
, use
ISelectionMgr::GetSelectedObject6
.

## See Also

- `IBody2.GetFirstSelectedFace`
- `IBody2.GetNextSelectedFace`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.GetSelectedFaces`
- `IBody2.IGetFirstSelectedFace`
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetProcessedBodyWithSelFace`