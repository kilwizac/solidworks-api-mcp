---
type: method
interface: IBody2
member: GetFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteBlends2
  - IBody2.EnumFaces
  - IBody2.GetFaces
  - IBody2.GetFirstFace
  - IBody2.IDeleteBlends2
  - IBody2.IDeleteFaces3
  - IBody2.IGetFaces
  - IBody2.IGetFirstFace
keywords:
  - bodies
  - see
  - also
  - ibody2
  - faces
  - face
  - iface2
  - body
  - getfacecount
  - body2
  - count
  - int32
  - process
  - vb
  - net
  - vba
  - fill
  - holes
  - part
---

# IBody2.GetFaceCount

Gets the number of faces in this body.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of faces

## Remarks

Call this method before calling
IBody2::IGetFaces
to determine the size of the array for that method.

## Examples

- Process Body (C#) (Process_Body_Example_CSharp.htm)
- Process Body (VB.NET) (Process_Body_Example_VBNET.htm)
- Process Body (VBA) (Process_Body_Example_VB.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)

## See Also

- `IBody2.DeleteBlends2`
- `IBody2.EnumFaces`
- `IBody2.GetFaces`
- `IBody2.GetFirstFace`
- `IBody2.IDeleteBlends2`
- `IBody2.IDeleteFaces3`
- `IBody2.IGetFaces`
- `IBody2.IGetFirstFace`