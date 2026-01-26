---
type: method
interface: ITessellation
member: IGetFaceFacets2
returns: System.Int32
parameters:
  -
    name: FaceObj
    type: Face2
    description: Face from which you want to return the corresponding facet IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetFaceFacets
keywords:
  - igetfacefacets2
  - itessellation
  - tessellation
  - face
  - facets2
  - obj
  - face2
  - int32
---

# ITessellation.IGetFaceFacets2

Gets the facets IDs that correspond to a face.

## Signature

```csharp
System.Int32 IGetFaceFacets2( 
   Face2
FaceObj
)
```
## Parameters

- `FaceObj` (Face2): Face from which you want to return the corresponding facet IDs

## Return Value

in-process, unmanaged C++: Pointer to an array of longs or integers that describe the facet IDs that correspond to the face VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

ITessellation::NeedFaceFacetMap
must be set to true to return results.
Before calling this method, call
ITessellation::IGetFaceFacetsCount2
to fetch the raw facet data. ITessellation::IGetFaceFacets2 clears the cache of raw facet data.

## See Also

- `ITessellation.GetFaceFacets`