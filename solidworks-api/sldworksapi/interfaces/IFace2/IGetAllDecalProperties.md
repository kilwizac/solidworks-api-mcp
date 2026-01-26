---
type: method
interface: IFace2
member: IGetAllDecalProperties
returns: FaceDecalProperties
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of decals applied to this face
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
  - igetalldecalproperties
  - iface2
  - face2
  - all
  - decal
  - properties
  - count
  - int32
  - face
---

# IFace2.IGetAllDecalProperties

Gets the decal properties applied to this face.

## Signature

```csharp
FaceDecalProperties IGetAllDecalProperties( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of decals applied to this face

## Return Value

in-process, unmanaged C++: Pointer to an array of decal properties applied to this face VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IFace2::GetDecalsCount
to get the value of Count.

## See Also

- `IFace2.GetAllDecalProperties`
- `IFace2.IGetDecalProperties`