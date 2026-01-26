---
type: method
interface: ITessellation
member: IGetFacetFinsCount
returns: System.Int32
parameters:
  -
    name: FacetId
    type: System.Int32
    description: Facet for which to count fins
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetFacetFins
keywords:
  - igetfacetfinscount
  - itessellation
  - tessellation
  - facet
  - fins
  - count
  - id
  - int32
---

# ITessellation.IGetFacetFinsCount

Gets the number of fins corresponding to a facet.

## Signature

```csharp
System.Int32 IGetFacetFinsCount( 
   System.Int32
FacetId
)
```
## Parameters

- `FacetId` (System.Int32): Facet for which to count fins

## Return Value

Number of fins corresponding to FacetId

## Remarks

A cache is created when you use this method. This cache is released when you use
ITessellation::IGetFacetFins
. If you use ITessellation::IGetFacetFinsCount again, then the cache is refilled. Alternatively, you can use ITessellation::IGetFacetFins repeatedly.

## See Also

- `ITessellation.GetFacetFins`