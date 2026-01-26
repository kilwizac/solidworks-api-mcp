---
type: method
interface: IFace2
member: IGetDecalProperties
returns: void
parameters:
  -
    name: PDecal
    type: Decal
    description: Decal whose properties to get
  -
    name: pFaceDecalProperties
    type: FaceDecalProperties
    description: in-process, unmanaged C++: Pointer to an array of decal properties VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetAllDecalProperties
  - IFace2.GetDecalsCount
  - IFace2.IGetAllDecalProperties
keywords:
  - igetdecalproperties
  - iface2
  - face2
  - decal
  - properties
  - face
  - void
---

# IFace2.IGetDecalProperties

Gets the properties of the specified decal on this face.

## Signature

```csharp
void IGetDecalProperties( 
   Decal
PDecal
,
   ref FaceDecalProperties
pFaceDecalProperties
)
```
## Parameters

- `PDecal` (Decal): Decal whose properties to get
- `pFaceDecalProperties` (FaceDecalProperties): in-process, unmanaged C++: Pointer to an array of decal properties VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IFace2.GetAllDecalProperties`
- `IFace2.GetDecalsCount`
- `IFace2.IGetAllDecalProperties`