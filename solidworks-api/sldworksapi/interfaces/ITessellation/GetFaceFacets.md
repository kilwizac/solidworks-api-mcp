---
type: method
interface: ITessellation
member: GetFaceFacets
returns: System.Object
parameters:
  -
    name: Facedisp
    type: System.Object
    description: Face from which to return the corresponding facet IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.IGetFaceFacets2
  - ITessellation.IGetFaceFacetsCount2
keywords:
  - getfacefacets
  - itessellation
  - tessellation
  - face
  - facets
  - facedisp
  - object
  - tessellate
  - body
  - vb
  - net
  - vba
---

# ITessellation.GetFaceFacets

Gets the facets IDs that correspond to a SOLIDWORKS face.

## Signature

```csharp
System.Object GetFaceFacets( 
   System.Object
Facedisp
)
```
## Parameters

- `Facedisp` (System.Object): Face from which to return the corresponding facet IDs

## Return Value

Array of longs or integers (see Long vs. Integer ) that describe the facet IDs that correspond to the face

## Remarks

ITessellation::NeedFaceFacetMap
must be set to true to return results.

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Tessellate a Body (VB.NET) (Tessellate_a_Body_Example_VBNET.htm)
- Tessellate a Body (VBA) (Tessellate_a_Body_Example_VB.htm)

## See Also

- `ITessellation.IGetFaceFacets2`
- `ITessellation.IGetFaceFacetsCount2`