---
type: method
interface: IBody2
member: GetSelectedFaceCount
returns: System.Int32
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
  - IBody2.GetSelectedFaces
  - IBody2.IGetFirstSelectedFace
  - IBody2.IGetNextSelectedFace
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
  - getselectedfacecount
  - body2
  - selected
  - count
  - int32
  - processed
  - vb
  - net
  - vba
---

# IBody2.GetSelectedFaceCount

Gets the number of selected faces on this body. For use with IBody2::GetProcessedBodyWithSelFace and IBody2::IGetPrcoessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
System.Int32 GetSelectedFaceCount()
```
## Parameters

None.

## Return Value

Number of selected faces

## Remarks

Do not use this method for general selection handling. If you want to handle items selected by the user or items selected with
IModelDocExtension::SelectByID2
, use
ISelectionMgr::GetSelectedObjectCount2
.

## Examples

- Get Selected Faces on Processed Body (C#) (Get_Selected_Faces_on_Process_Body_Example_CSharp.htm)
- Get Selected Faces on Processed Body (VB.NET) (Get_Selected_Faces_on_Process_Body_Example_VBNET.htm)
- Get Selected Faces on Processed Body (VBA) (Get_Selected_Faces_on_Process_Body_Example_VB.htm)

## See Also

- `IBody2.GetFirstSelectedFace`
- `IBody2.GetNextSelectedFace`
- `IBody2.GetSelectedFaces`
- `IBody2.IGetFirstSelectedFace`
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetSelectedFaces`