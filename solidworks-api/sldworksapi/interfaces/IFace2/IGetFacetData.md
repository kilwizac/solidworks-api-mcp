---
type: method
interface: IFace2
member: IGetFacetData
returns: void
parameters:
  -
    name: FacetMesh
    type: System.Int32
    description: 
  -
    name: NFacets
    type: System.Int32
    description: 
  -
    name: NStrips
    type: System.Int32
    description: 
  -
    name: StripVertexNums
    type: System.Int32
    description: 
  -
    name: VertexCoords
    type: System.Single
    description: 
  -
    name: NormalCoords
    type: System.Single
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - igetfacetdata
  - iface2
  - face2
  - facet
  - data
  - mesh
  - int32
  - facets
  - strips
  - strip
  - vertex
  - nums
  - coords
  - single
  - normal
  - void
---

# IFace2.IGetFacetData

Obsolete. Superseded by IFace2::GetTessNorms, IFace2::IGetTessNorms, IFace2::GetTessTextures, IFace2::IGetTessTextures, IFace2::GetTessTriangleCount, IFace2::GetTessTriangles, IFace2::IGetTessTriangles, IFace2::GetTessTriStripEdges, IFace2::IGetTessT

## Signature

```csharp
void IGetFacetData( 
   System.Int32
FacetMesh
,
   ref System.Int32
NFacets
,
   ref System.Int32
NStrips
,
   ref System.Int32
StripVertexNums
,
   ref System.Single
VertexCoords
,
   ref System.Single
NormalCoords
)
```
## Parameters

- `FacetMesh` (System.Int32): 
- `NFacets` (System.Int32): 
- `NStrips` (System.Int32): 
- `StripVertexNums` (System.Int32): 
- `VertexCoords` (System.Single): 
- `NormalCoords` (System.Single): 

## Return Value

Unknown.