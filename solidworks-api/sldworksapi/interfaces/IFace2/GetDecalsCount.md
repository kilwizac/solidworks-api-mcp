---
type: method
interface: IFace2
member: GetDecalsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetAllDecalProperties
  - IFace2.IGetDecalProperties
keywords:
  - getdecalscount
  - iface2
  - face2
  - decals
  - count
  - int32
  - add
  - decal
  - vb
  - net
  - vba
---

# IFace2.GetDecalsCount

Gets the number of decals applied to this face.

## Signature

```csharp
System.Int32 GetDecalsCount()
```
## Parameters

None.

## Return Value

Number of decals applied to this face

## Remarks

Call this method before calling
IFace2::IGetAllDecalProperties
to get the size of the array for that method.

## Examples

- Add Decal (C#) (Add_Decal_Example_CSharp.htm)
- Add Decal (VB.NET) (Add_Decal_Example_VBNET.htm)
- Add Decal (VBA) (Add_Decal_Example_VB.htm)

## See Also

- `IFace2.GetAllDecalProperties`
- `IFace2.IGetDecalProperties`