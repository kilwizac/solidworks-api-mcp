---
type: method
interface: IModeler
member: CheckInterferenceBetweenTwoBodies
returns: System.Boolean
parameters:
  -
    name: Body1
    type: System.Object
    description: First body in interference detection (see Remarks )
  -
    name: Body2
    type: System.Object
    description: Second body in interference detection (see Remarks )
  -
    name: CoincidentInterference
    type: System.Boolean
    description: True to treat coincidence as interference, false to not
  -
    name: Body1InterferedFaceArray
    type: System.Object
    description: Array of faces in the first body that interfered with the second body
  -
    name: Body2InterferedFaceArray
    type: System.Object
    description: Array of faces in the second body that interfered with the first body
  -
    name: IntersectedBodyArray
    type: System.Object
    description: Array of interfering bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IInterferenceDetectionMgr
  - IModeler.CheckInterference3
keywords:
  - check
  - interference
  - detection
  - checkinterferencebetweentwobodies
  - imodeler
  - modeler
  - between
  - two
  - bodies
  - body1
  - object
  - body2
  - coincident
  - boolean
  - interfered
  - face
  - array
  - intersected
  - body
  - vba
---

# IModeler.CheckInterferenceBetweenTwoBodies

Checks for interference between the specified bodies in an assembly.

## Signature

```csharp
System.Boolean CheckInterferenceBetweenTwoBodies( 
   System.Object
Body1
,
   System.Object
Body2
,
   System.Boolean
CoincidentInterference
,
   out System.Object
Body1InterferedFaceArray
,
   out System.Object
Body2InterferedFaceArray
,
   out System.Object
IntersectedBodyArray
)
```
## Parameters

- `Body1` (System.Object): First body in interference detection (see Remarks )
- `Body2` (System.Object): Second body in interference detection (see Remarks )
- `CoincidentInterference` (System.Boolean): True to treat coincidence as interference, false to not
- `Body1InterferedFaceArray` (System.Object): Array of faces in the first body that interfered with the second body
- `Body2InterferedFaceArray` (System.Object): Array of faces in the second body that interfered with the first body
- `IntersectedBodyArray` (System.Object): Array of interfering bodies

## Return Value

True if successful, false if not

## Remarks

Before calling this method, transform Body1 and Body2 to their proper positions in the coordinate space of the top-level assembly:
Select the assembly components.
Use
IComponent2::Transform2
to get the transform of each component.
Call IComponent2::GetBodies2 for each component.
Use
IBody2::ApplyTransform
on each body using the transforms in step 2.
Specify Body1 and Body1 with the bodies that have been transformed to their correct positions in the assembly.

## Examples

- Check for Interference Between Two Bodies (VBA) (Check_Interference_Between_Two_Bodies_Example_VB.htm)

## See Also

- `IInterferenceDetectionMgr`
- `IModeler.CheckInterference3`