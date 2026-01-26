---
type: method
interface: IModelDoc2
member: SketchSplineByEqnParams2
returns: System.Boolean
parameters:
  -
    name: ParamsIn
    type: System.Object
    description: Array containing an array of doubles (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.CreateSplineByEqnParams
  - IModelDoc2.CreateSplinesByEqnParams
  - IModelDoc2.ICreateSplineByEqnParams
  - IModelDoc2.ICreateSplinesByEqnParams
  - IModelDoc2.ISketchSplineByEqnParams
keywords:
  - sketchsplinebyeqnparams2
  - imodeldoc2
  - model
  - doc2
  - sketch
  - spline
  - eqn
  - params2
  - params
  - object
  - boolean
  - vba
---

# IModelDoc2.SketchSplineByEqnParams2

Obsolete. Superseded by ISketchManager::CreateSplineByEqnParams.

## Signature

```csharp
System.Boolean SketchSplineByEqnParams2( 
   System.Object
ParamsIn
)
```
## Parameters

- `ParamsIn` (System.Object): Array containing an array of doubles (see Remarks )

## Return Value

True if created successfully, false if not

## Remarks

The parameters are provided as 3 arrays, which for OLE automation are packed into a single SafeArray packed as follows:
[
Dimension, Order, Number of control Points, Periodicity, knot1, knot2,...,ControlPoint1[Dimension], ControlPoint2[Dimension],...
]
Pass control point coordinates to this method in sketch space. The Z value is interpreted as 0. In certain situations, you must transform your b-curve parameters to sketch space with the help of
ISketch::ModelToSketchTransform
.
NOTE:
If the spline being generated is a closed spline, then it must be flagged as periodic. In addition, splines generated in sketches must be G1 continuous. If the data passed to this method does not generate a G1 continuous spline, then it is rejected and a spline is not created. If your
data is not G1 continuous, then you must split the spline into multiple G1 segments and call method for each segment.

## Examples

- Sketch a Spline (VBA) (Sketch_Spline_Example_VB.htm)

## See Also

- `IModelDoc2.CreateSplineByEqnParams`
- `IModelDoc2.CreateSplinesByEqnParams`
- `IModelDoc2.ICreateSplineByEqnParams`
- `IModelDoc2.ICreateSplinesByEqnParams`
- `IModelDoc2.ISketchSplineByEqnParams`