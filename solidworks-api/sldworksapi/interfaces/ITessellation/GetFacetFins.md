---
type: method
interface: ITessellation
member: GetFacetFins
returns: System.Object
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
  - ITessellation.IGetFacetFins
  - ITessellation.IGetFacetFinsCount
keywords:
  - getfacetfins
  - itessellation
  - tessellation
  - facet
  - fins
  - id
  - int32
  - object
  - tessellate
  - body
  - vb
  - net
  - vba
---

# ITessellation.GetFacetFins

Gets all of the fin IDs of the fins that border this facet.

## Signature

```csharp
System.Object GetFacetFins( 
   System.Int32
FacetId
)
```
## Parameters

- `FacetId` (System.Int32): ID of the facet to use to return the fin IDs

## Return Value

Array of long or integer values that describe the fin IDs

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Tessellate a Body (VB.NET) (Tessellate_a_Body_Example_VBNET.htm)
- Tessellate a Body (VBA) (Tessellate_a_Body_Example_VB.htm)

## See Also

- `ITessellation.IGetFacetFins`
- `ITessellation.IGetFacetFinsCount`