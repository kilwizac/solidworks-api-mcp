---
type: method
interface: IModelDoc2
member: InsertSketchForEdgeFlange
returns: System.Object
parameters:
  -
    name: FlangeEdge
    type: System.Object
    description: Edge with which to create an edge flange
  -
    name: DAngle
    type: System.Double
    description: Angle of flange
  -
    name: FlipDir
    type: System.Boolean
    description: True reverses the offset direction of the flange, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - sketches
  - ui
related: []
keywords:
  - edge
  - flanges
  - see
  - iedgeflangefeaturedata
  - insertsketchforedgeflange
  - imodeldoc2
  - model
  - doc2
  - insert
  - sketch
  - flange
  - object
  - angle
  - double
  - flip
  - dir
  - boolean
---

# IModelDoc2.InsertSketchForEdgeFlange

Inserts a profile sketch of an edge flange in this sheet metal part.

## Signature

```csharp
System.Object InsertSketchForEdgeFlange( 
   System.Object
FlangeEdge
,
   System.Double
DAngle
,
   System.Boolean
FlipDir
)
```
## Parameters

- `FlangeEdge` (System.Object): Edge with which to create an edge flange
- `DAngle` (System.Double): Angle of flange
- `FlipDir` (System.Boolean): True reverses the offset direction of the flange, false does not

## Return Value

Sketch for the edge flange, returned as a feature

## Remarks

After calling this method, you must create the profile for the flange on the appropriate plane. Then use
IFeatureManager::CreateDefinition
,
IEdgeFlangeFeatureData
, and
IFeatureManager::CreateFeature
to create the edge flange.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)