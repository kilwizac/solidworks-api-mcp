---
type: method
interface: IModeler
member: ICreateWireBody
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of input entities ( curves or edges )
  -
    name: EntArr
    type: System.Object
    description: Array of input entities ( curves or edges )
  -
    name: Option
    type: System.Int32
    description: Option as defined in swCreateWireBodyOptions_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICurve.CreateWireBody
  - IEdge.CreateWireBody
  - IImportedCurveFeatureData.SetBody
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - ISketchSegment.CreateWireBody
keywords:
  - wire
  - bodies
  - see
  - also
  - ibody2
  - icreatewirebody
  - imodeler
  - modeler
  - create
  - body
  - count
  - int32
  - ent
  - arr
  - object
  - option
  - body2
---

# IModeler.ICreateWireBody

Creates a wire body from the input entities, which can be edges or curves.

## Signature

```csharp
Body2 ICreateWireBody( 
   System.Int32
Count
,
   ref System.Object
EntArr
,
   System.Int32
Option
)
```
## Parameters

- `Count` (System.Int32): Number of input entities ( curves or edges )
- `EntArr` (System.Object): Array of input entities ( curves or edges )
- `Option` (System.Int32): Option as defined in swCreateWireBodyOptions_e (see Remarks )

## Return Value

Unknown.

## Remarks

Wire bodies contain wires, loops, coedges, edges, and vertices. Wires typically represent profiles, construction lines, and center lines of swept shapes. Wires can also represent wire frames that, when surfaced, from shells.
The swCreateWireBodyMergeCurves option only works for curves with position and tangent continuity.

## See Also

- `ICurve.CreateWireBody`
- `IEdge.CreateWireBody`
- `IImportedCurveFeatureData.SetBody`
- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `ISketchSegment.CreateWireBody`