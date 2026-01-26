---
type: method
interface: IMate2
member: GetSupplementalFaces
returns: System.Object
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Number of components in this mate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related:
  - IMate2.HasLoadBearingFaces
  - IMate2.IGetSupplementalFaces
  - IMate2.IsLoadBearingFacesBonded
keywords:
  - getsupplementalfaces
  - imate2
  - mate2
  - supplemental
  - faces
  - which
  - one
  - int32
  - object
---

# IMate2.GetSupplementalFaces

Gets the faces in this mate.

## Signature

```csharp
System.Object GetSupplementalFaces( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): Number of components in this mate

## Return Value

Array of faces in this mate

## See Also

- `IMate2.HasLoadBearingFaces`
- `IMate2.IGetSupplementalFaces`
- `IMate2.IsLoadBearingFacesBonded`