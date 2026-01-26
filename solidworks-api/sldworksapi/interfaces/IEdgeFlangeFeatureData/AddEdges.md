---
type: method
interface: IEdgeFlangeFeatureData
member: AddEdges
returns: System.Int32
parameters:
  -
    name: EdgeArray
    type: System.Object
    description: Array of edge s associated with SketchArray
  -
    name: SketchArray
    type: System.Object
    description: Array of sketch es associated with EdgeArray
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.Edges
  - IEdgeFlangeFeatureData.IGetEdges
  - IEdgeFlangeFeatureData.ISetEdges
  - IEdgeFlangeFeatureData.RemoveEdges
keywords:
  - addedges
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - add
  - edges
  - array
  - object
  - sketch
  - int32
---

# IEdgeFlangeFeatureData.AddEdges

Adds edges to this edge flange.

## Signature

```csharp
System.Int32 AddEdges( 
   System.Object
EdgeArray
,
   System.Object
SketchArray
)
```
## Parameters

- `EdgeArray` (System.Object): Array of edge s associated with SketchArray
- `SketchArray` (System.Object): Array of sketch es associated with EdgeArray

## Return Value

Error code as defined by swEdgeFlangeError_e

## Remarks

Before calling this method, call
IModelDoc2::InsertSketchForEdgeFlange
to associate the sketches with the edges.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.Edges`
- `IEdgeFlangeFeatureData.IGetEdges`
- `IEdgeFlangeFeatureData.ISetEdges`
- `IEdgeFlangeFeatureData.RemoveEdges`