---
type: method
interface: IBody2
member: GetSelectedFaces
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
  - IBody2.GetNextSelectedFace
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.GetSelectedFaceCount
  - IBody2.IGetFirstSelectedFace
  - IBody2.IGetNextSelectedFace
  - IBody2.IGetProcessedBodyWithSelFace
  - IBody2.IGetSelectedFaces
keywords:
  - face
  - see
  - also
  - iface2
  - body
  - bodies
  - ibody2
  - faces
  - iges
  - routines
  - getselectedfaces
  - body2
  - selected
  - object
  - processed
  - vb
  - net
  - vba
---

# IBody2.GetSelectedFaces

Gets the selected faces. For use with IBody2::GetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
System.Object GetSelectedFaces()
```
## Parameters

None.

## Return Value

Array of selected faces

## Remarks

Do not use this method for general selection handling. If you want to handle items selected by the user or items selected with
IModelDocExtension::SelectByID2
, use
ISelectionMgr::GetSelectedObject6
.

## Examples

- Get Selected Faces on Processed Body (C#) (Get_Selected_Faces_on_Process_Body_Example_CSharp.htm)
- Get Selected Faces on Processed Body (VB.NET) (Get_Selected_Faces_on_Process_Body_Example_VBNET.htm)
- Get Selected Faces on Processed Body (VBA) (Get_Selected_Faces_on_Process_Body_Example_VB.htm)

## See Also

- `IBody2.GetFirstSelectedFace`
- `IBody2.GetNextSelectedFace`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.IGetFirstSelectedFace`
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetProcessedBodyWithSelFace`
- `IBody2.IGetSelectedFaces`