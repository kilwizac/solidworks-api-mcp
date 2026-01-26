---
type: method
interface: IModeler
member: CreateWireBody
returns: Body2
parameters:
  -
    name: EntVar
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
  - IModeler.CreateSweptBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateToroidalSurface
  - IModeler.ICreateWireBody
  - ISketchSegment.CreateWireBody
keywords:
  - wire
  - bodies
  - see
  - also
  - ibody2
  - createwirebody
  - imodeler
  - modeler
  - create
  - body
  - ent
  - var
  - object
  - option
  - int32
  - body2
---

# IModeler.CreateWireBody

Creates a wire body from the input entities, which can be edges or curves.

## Signature

```csharp
Body2 CreateWireBody( 
   System.Object
EntVar
,
   System.Int32
Option
)
```
## Parameters

- `EntVar` (System.Object): Array of input entities ( curves or edges )
- `Option` (System.Int32): Option as defined in swCreateWireBodyOptions_e (see Remarks )

## Return Value

Newly created wire body

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
- `IModeler.CreateSweptBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateToroidalSurface`
- `IModeler.ICreateWireBody`
- `ISketchSegment.CreateWireBody`