---
type: method
interface: IBody2
member: GetFirstSelectedFace
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
  - IBody2.GetNextSelectedFace
  - IBody2.GetSelectedFaceCount
  - IBody2.IGetFirstSelectedFace
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
  - getfirstselectedface
  - body2
  - first
  - selected
  - object
---

# IBody2.GetFirstSelectedFace

Gets the first selected face on this body. For use with IBody2::GetProcessedBodyWithSelFace and intended for IGES routines.

## Signature

```csharp
System.Object GetFirstSelectedFace()
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

- `IBody2.GetNextSelectedFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.IGetFirstSelectedFace`