---
type: method
interface: IBody2
member: IsTemporaryBody
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - temporary
  - bodies
  - istemporarybody
  - ibody2
  - body2
  - body
  - boolean
  - delete
  - faces
  - vba
  - create
  - loft
  - vb
  - net
  - blended
---

# IBody2.IsTemporaryBody

Gets whether the body is a temporary body.

## Signature

```csharp
System.Boolean IsTemporaryBody()
```
## Parameters

None.

## Return Value

True the body is a temporary body, false if not

## Remarks

You can select an entity from a temporary body. You can also assign colors to faces on temporary bodies and to entire temporary bodies. See
IBody2::Display3
and
IFace2::MaterialPropertyValues
or
IFace2::IMaterialPropertyValues
and
IBody2::MaterialPropertyValues2
or
IBody2::IMaterialPropertyValues2
.

## Examples

- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Create Loft Body (C#) (Create_Loft_Body_Example_CSharp.htm)
- Create Loft Body (VB.NET) (Create_Loft_Body_Example_VBNET.htm)
- Create Loft Body (VBA) (Create_Loft_Body_Example_VB.htm)
- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)