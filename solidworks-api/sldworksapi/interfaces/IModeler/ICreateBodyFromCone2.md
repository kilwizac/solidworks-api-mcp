---
type: method
interface: IModeler
member: ICreateBodyFromCone2
returns: Body2
parameters:
  -
    name: ConeDimArray
    type: System.Double
    description: Array of 9 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
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
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - temporary
  - bodies
  - see
  - also
  - ibody2
  - cone
  - dimensions
  - icreatebodyfromcone2
  - imodeler
  - modeler
  - create
  - body
  - cone2
  - dim
  - array
  - double
  - body2
---

# IModeler.ICreateBodyFromCone2

Creates a temporary body from cone dimensions.

## Signature

```csharp
Body2 ICreateBodyFromCone2( 
   ref System.Double
ConeDimArray
)
```
## Parameters

- `ConeDimArray` (System.Double): Array of 9 doubles (see Remarks )

## Return Value

Body

## Remarks

The ConeArray argument is the following array of doubles:
[
coneFaceCenter[3], coneAxis[3], coneBaseRadius, coneTopRadius, coneHeight
]
where:
coneFaceCenter[3]
XYZ location that represents the center of one of the cone faces
coneAxis[3]
XYZ direction; the cone is extruded along this vector from the
coneFaceCenter
location, a distance of
coneHeight
coneBaseRadius
Cone radius at the
coneFaceCenter
plane
coneTopRadius
Cone radius at
coneHeight
from the
coneFaceCenter
along the axis
coneHeight
Length to extrude along the
coneAxis
direction; if
coneHeight
is 0, then a sheet body is created of dimension
coneBaseRadius
and normal is defined by
coneAxis

## See Also

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
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`