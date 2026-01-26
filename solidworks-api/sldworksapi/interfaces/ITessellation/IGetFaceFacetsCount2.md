---
type: method
interface: ITessellation
member: IGetFaceFacetsCount2
returns: System.Int32
parameters:
  -
    name: FaceObj
    type: Face2
    description: Face on which to count the facets
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetFaceFacets
keywords:
  - igetfacefacetscount2
  - itessellation
  - tessellation
  - face
  - facets
  - count2
  - obj
  - face2
  - int32
---

# ITessellation.IGetFaceFacetsCount2

Gets the number of facets corresponding to a face.

## Signature

```csharp
System.Int32 IGetFaceFacetsCount2( 
   Face2
FaceObj
)
```
## Parameters

- `FaceObj` (Face2): Face on which to count the facets

## Return Value

Number of facets

## Remarks

This method caches the raw facet data after determining the number of facets. A subsequent call to
ITessellation::IGetFaceFacets2
does not have to fetch the facet data again.

## See Also

- `ITessellation.GetFaceFacets`