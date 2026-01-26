---
type: method
interface: IModeler
member: CreateSweptBody
returns: Body2
parameters:
  -
    name: PModDoc
    type: ModelDoc2
    description: Model document
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the swept protrusion to the next tangent edge, false does not
  -
    name: Alignment
    type: System.Boolean
    description: True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve and it cannot break through the two end faces of the body
  -
    name: TwistCtrlOption
    type: System.Int16
    description: Twist control options as defined by swTwistControlType_e
  -
    name: KeepTangency
    type: System.Boolean
    description: If the sweep section has tangent segments, then True to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
  -
    name: BAdvancedSmoothing
    type: System.Boolean
    description: If the sweep section has circular or elliptical arcs, then True to approximate the sections and smooth the surfaces, false to not
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type as defined by swTangencyType_e
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type as defined by swTangencyType_e
  -
    name: IsThinBody
    type: System.Boolean
    description: True if this feature is a thin body, false if not
  -
    name: Thickness1
    type: System.Double
    description: Thickness value for the first direction
  -
    name: Thickness2
    type: System.Double
    description: Thickness value for the second direction
  -
    name: ThinType
    type: System.Int16
    description: Thin wall type as defined by swThinWallType_e
  -
    name: PathAlign
    type: System.Int16
    description: Align path type (see Remarks )
  -
    name: TwistAngle
    type: System.Double
    description: If TwistCtrlOption set to swTwistControlConstantTwistAlongPath, then specify end twist angle
  -
    name: BMergeSmoothFaces
    type: System.Boolean
    description: True to merge smooth faces, false to not
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
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - body
  - bodies
  - ibody2
  - swept
  - createsweptbody
  - imodeler
  - modeler
  - create
  - mod
  - doc
  - model
  - doc2
  - propagate
  - boolean
  - alignment
  - twist
  - ctrl
  - option
  - int16
  - keep
  - tangency
  - advanced
  - smoothing
  - start
  - matching
  - type
  - end
  - thin
  - thickness1
  - double
  - thickness2
  - path
  - align
  - angle
  - merge
  - smooth
  - faces
  - body2
---

# IModeler.CreateSweptBody

Creates a swept body.

## Signature

```csharp
Body2 CreateSweptBody( 
   ModelDoc2
PModDoc
,
   System.Boolean
Propagate
,
   System.Boolean
Alignment
,
   System.Int16
TwistCtrlOption
,
   System.Boolean
KeepTangency
,
   System.Boolean
BAdvancedSmoothing
,
   System.Int16
StartMatchingType
,
   System.Int16
EndMatchingType
,
   System.Boolean
IsThinBody
,
   System.Double
Thickness1
,
   System.Double
Thickness2
,
   System.Int16
ThinType
,
   System.Int16
PathAlign
,
   System.Double
TwistAngle
,
   System.Boolean
BMergeSmoothFaces
)
```
## Parameters

- `PModDoc` (ModelDoc2): Model document
- `Propagate` (System.Boolean): True propagates the swept protrusion to the next tangent edge, false does not
- `Alignment` (System.Boolean): True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve and it cannot break through the two end faces of the body
- `TwistCtrlOption` (System.Int16): Twist control options as defined by swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, then True to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, then True to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int16): Tangency type as defined by swTangencyType_e
- `EndMatchingType` (System.Int16): Tangency type as defined by swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type as defined by swThinWallType_e
- `PathAlign` (System.Int16): Align path type (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption set to swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not

## Return Value

Swept body

## Remarks

Use
IModelDocExtension::SelectByID2
to select the profile and sweep curves. The mark for:
1 = Profile selection
2 = Guide curve selection, if provided
4 = Sweep path
The PathAlign argument is available when twistCtrlOption is set to 0 (follow path) and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`