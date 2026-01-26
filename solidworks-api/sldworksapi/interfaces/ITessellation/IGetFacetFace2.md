---
type: method
interface: ITessellation
member: IGetFacetFace2
returns: Face2
parameters:
  -
    name: FacetId
    type: System.Int32
    description: Facet ID of the facet from which you want to return the face pointer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetFacetFace
keywords:
  - igetfacetface2
  - itessellation
  - tessellation
  - facet
  - face2
  - id
  - int32
---

# ITessellation.IGetFacetFace2

Gets a face that corresponds to a facet.

## Signature

```csharp
Face2 IGetFacetFace2( 
   System.Int32
FacetId
)
```
## Parameters

- `FacetId` (System.Int32): Facet ID of the facet from which you want to return the face pointer

## Return Value

Face to which this facet belongs

## See Also

- `ITessellation.GetFacetFace`