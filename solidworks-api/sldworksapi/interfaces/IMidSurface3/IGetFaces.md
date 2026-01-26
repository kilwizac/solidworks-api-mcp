---
type: method
interface: IMidSurface3
member: IGetFaces
returns: Face2
parameters:
  -
    name: NumFaces
    type: System.Int32
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFaces
  - IMidSurface3.GetFirstFace
  - IMidSurface3.GetNextFace
  - IMidSurface3.IGetFirstFace
  - IMidSurface3.IGetNextFace
keywords:
  - face
  - see
  - also
  - iface2
  - midsurface
  - igetfaces
  - imidsurface3
  - mid
  - surface3
  - faces
  - num
  - int32
  - face2
---

# IMidSurface3.IGetFaces

Gets the faces in this midsurface feature.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
NumFaces
)
```
## Parameters

- `NumFaces` (System.Int32): Number of faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IMidSurface3::GetFaceCount
to get NumFaces.

## See Also

- `IMidSurface3.GetFaces`
- `IMidSurface3.GetFirstFace`
- `IMidSurface3.GetNextFace`
- `IMidSurface3.IGetFirstFace`
- `IMidSurface3.IGetNextFace`