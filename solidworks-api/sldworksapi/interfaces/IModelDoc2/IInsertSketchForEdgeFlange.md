---
type: method
interface: IModelDoc2
member: IInsertSketchForEdgeFlange
returns: Feature
parameters:
  -
    name: FlangeEdge
    type: Edge
    description: Edge to which to apply flange
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
related:
  - IModelDoc2.InsertSheetMetalMiterFlange
keywords:
  - edge
  - flanges
  - see
  - iedgeflangefeaturedata
  - sheet
  - metal
  - also
  - isheetmetalfeaturedata
  - feature
  - ifeature
  - flange
  - iinsertsketchforedgeflange
  - imodeldoc2
  - model
  - doc2
  - insert
  - sketch
  - angle
  - double
  - flip
  - dir
  - boolean
---

# IModelDoc2.IInsertSketchForEdgeFlange

Inserts a sketch for IFeatureManager::InsertSheetMetalEdgeFlange2 in this sheet metal part.

## Signature

```csharp
Feature IInsertSketchForEdgeFlange( 
   Edge
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

- `FlangeEdge` (Edge): Edge to which to apply flange
- `DAngle` (System.Double): Angle of flange
- `FlipDir` (System.Boolean): True reverses the offset direction of the flange, false does not

## Return Value

Sketch for the edge flagne, returned as a feature

## Remarks

After calling this method, you must create the profile for the flange on the appropriate plane. After creating the profile, call
IFeatureManager::InsertSheetMetalEdgeFlange2
to create the flange.

## See Also

- `IModelDoc2.InsertSheetMetalMiterFlange`