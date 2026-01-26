---
type: method
interface: ITessellation
member: IGetFacetFins
returns: System.Int32
parameters:
  -
    name: FacetId
    type: System.Int32
    description: ID of the facet to use to return the fin IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetFacetFins
keywords:
  - igetfacetfins
  - itessellation
  - tessellation
  - facet
  - fins
  - id
  - int32
---

# ITessellation.IGetFacetFins

Gets all of the fin IDs of the fins that border this facet.

## Signature

```csharp
System.Int32 IGetFacetFins( 
   System.Int32
FacetId
)
```
## Parameters

- `FacetId` (System.Int32): ID of the facet to use to return the fin IDs

## Return Value

in-process, unmanaged C++: Pointer to an array of long or integer values that describe the fin IDs VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

A cache is created when you use
ITessellation::IGetFacetFinsCount
. This cache is released when you use ITessellation::IGetFacetFins. If you use ITessellation::IGetFacetFinsCount again, then the cache is refilled. Alternatively, you can use ITessellation::IGetFacetFins repeatedly.

## See Also

- `ITessellation.GetFacetFins`