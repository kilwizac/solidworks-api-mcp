---
type: method
interface: IModelDoc2
member: SketchPolygon
returns: System.Boolean
parameters:
  -
    name: XCenter
    type: System.Double
    description: X component of the polygon's center
  -
    name: YCenter
    type: System.Double
    description: Y component of the polygon's center
  -
    name: XEdge
    type: System.Double
    description: X component of the first vertex on the polygon
  -
    name: YEdge
    type: System.Double
    description: Y component of the first vertex on the polygon
  -
    name: NSides
    type: System.Int32
    description: Number of sides for the polygon
  -
    name: BInscribed
    type: System.Boolean
    description: True to show an inscribed construction circle, false to show a circumscribed construction circle
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - sketchpolygon
  - imodeldoc2
  - model
  - doc2
  - sketch
  - polygon
  - center
  - double
  - edge
  - sides
  - int32
  - inscribed
  - boolean
---

# IModelDoc2.SketchPolygon

Obsolete. Superseded by ISketchManager::CreatePolygon.

## Signature

```csharp
System.Boolean SketchPolygon( 
   System.Double
XCenter
,
   System.Double
YCenter
,
   System.Double
XEdge
,
   System.Double
YEdge
,
   System.Int32
NSides
,
   System.Boolean
BInscribed
)
```
## Parameters

- `XCenter` (System.Double): X component of the polygon's center
- `YCenter` (System.Double): Y component of the polygon's center
- `XEdge` (System.Double): X component of the first vertex on the polygon
- `YEdge` (System.Double): Y component of the first vertex on the polygon
- `NSides` (System.Int32): Number of sides for the polygon
- `BInscribed` (System.Boolean): True to show an inscribed construction circle, false to show a circumscribed construction circle

## Return Value

True if polygon created, false if not

## Remarks

After using this method, the PropertyManager page is in edit mode for the polygon. To exit this PropertyManager page and complete the operation, use
IModelDoc2::SetPickMode
,
IModelDoc2::ClearSelection2
, or exit the sketch.