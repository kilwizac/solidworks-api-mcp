---
type: method
interface: ITessellation
member: GetFacetFace
returns: System.Object
parameters:
  -
    name: FacetId
    type: System.Int32
    description: Facet ID of the facet from which to return the face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.IGetFacetFace2
keywords:
  - getfacetface
  - itessellation
  - tessellation
  - facet
  - face
  - id
  - int32
  - object
---

# ITessellation.GetFacetFace

Gets a face that corresponds to a facet.

## Signature

```csharp
System.Object GetFacetFace( 
   System.Int32
FacetId
)
```
## Parameters

- `FacetId` (System.Int32): Facet ID of the facet from which to return the face

## Return Value

Face to which that this facet belongs

## See Also

- `ITessellation.IGetFacetFace2`