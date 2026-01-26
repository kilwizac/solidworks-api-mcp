---
type: method
interface: IFace
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
    type: System.Intptr
    description: 
  -
    name: VertexCoords
    type: System.Intptr
    description: 
  -
    name: NormalCoords
    type: System.Intptr
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - igetfacetdata
  - iface
  - face
  - facet
  - data
  - mesh
  - int32
  - facets
  - strips
  - strip
  - vertex
  - nums
  - intptr
  - coords
  - normal
  - void
---

# IFace.IGetFacetData

Obsolete. Superseded by IFace2::IGetTessNorms, IFace2::IGetTessTextures, IFace2::GetTessTriangleCount, IFace2::IGetTriangles, IFace2::IGetTessTriStripEdges, IFace2::IGetTessTriStrips, and IFace2::GetTessTriStripSize.

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
   System.IntPtr
StripVertexNums
,
   System.IntPtr
VertexCoords
,
   System.IntPtr
NormalCoords
)
```
## Parameters

- `FacetMesh` (System.Int32): 
- `NFacets` (System.Int32): 
- `NStrips` (System.Int32): 
- `StripVertexNums` (System.Intptr): 
- `VertexCoords` (System.Intptr): 
- `NormalCoords` (System.Intptr): 

## Return Value

Unknown.