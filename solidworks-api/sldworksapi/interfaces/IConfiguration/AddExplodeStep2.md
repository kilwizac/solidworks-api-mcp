---
type: method
interface: IConfiguration
member: AddExplodeStep2
returns: System.Object
parameters:
  -
    name: ExplDist
    type: System.Double
    description: Distance in meters to move the components in this explode step
  -
    name: ExplDirIndex
    type: System.Int32
    description: Explode direction manipulator index as defined in swExplodeDirectionIndex_e (see Remarks )
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the explode direction, false to not
  -
    name: ExplAng
    type: System.Double
    description: Angle in radians of component rotation (see Remarks )
  -
    name: RotAxisIndex
    type: System.Int32
    description: Rotation manipulator index as defined in swRotationAxisIndex_e (see Remarks )
  -
    name: ReverseAng
    type: System.Boolean
    description: True to reverse the direction of ExplAng, false to not
  -
    name: RotateAboutOrigin
    type: System.Boolean
    description: True if each component rotates about its origin, false if not (see Remarks )
  -
    name: AutoSpaceComponentsOnDrag
    type: System.Boolean
    description: True to automatically space components on drag, false to not (see Remarks )
  -
    name: Error
    type: System.Int32
    description: Error code as defined in swCreateExplodeStepError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AddRadialExplodeStep
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.GetNumberOfExplodeSteps
keywords:
  - addexplodestep2
  - iconfiguration
  - configuration
  - add
  - explode
  - step2
  - expl
  - dist
  - double
  - dir
  - index
  - int32
  - reverse
  - boolean
  - ang
  - rot
  - axis
  - rotate
  - about
  - origin
  - auto
  - space
  - components
  - drag
  - error
  - object
  - iexplodestep
---

# IConfiguration.AddExplodeStep2

Adds a regular (translate and rotate) explode step to the explode view of the active configuration.

## Signature

```csharp
System.Object AddExplodeStep2( 
   System.Double
ExplDist
,
   System.Int32
ExplDirIndex
,
   System.Boolean
ReverseDir
,
   System.Double
ExplAng
,
   System.Int32
RotAxisIndex
,
   System.Boolean
ReverseAng
,
   System.Boolean
RotateAboutOrigin
,
   System.Boolean
AutoSpaceComponentsOnDrag
,
   out System.Int32
Error
)
```
## Parameters

- `ExplDist` (System.Double): Distance in meters to move the components in this explode step
- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e (see Remarks )
- `ReverseDir` (System.Boolean): True to reverse the explode direction, false to not
- `ExplAng` (System.Double): Angle in radians of component rotation (see Remarks )
- `RotAxisIndex` (System.Int32): Rotation manipulator index as defined in swRotationAxisIndex_e (see Remarks )
- `ReverseAng` (System.Boolean): True to reverse the direction of ExplAng, false to not
- `RotateAboutOrigin` (System.Boolean): True if each component rotates about its origin, false if not (see Remarks )
- `AutoSpaceComponentsOnDrag` (System.Boolean): True to automatically space components on drag, false to not (see Remarks )
- `Error` (System.Int32): Error code as defined in swCreateExplodeStepError_e

## Return Value

Explode step

## Remarks

This method:
Is valid only for an active current explode view. To create an explode view, call
IAssemblyDoc::AutoExplode
or
IAssemblyDoc::CreateExplodedView
.
Always clears the selection list.
Does not work if the Explode PropertyManager is open.
Does not work if any component is being edited in the context of the assembly.
If AutoSpaceComponentsOnDrag is set to true, then RotateAboutOrigin is false and ExplAng is 0.0. Set AutoSpaceComponentsOnDrag to false to specify other values for RotateAboutOrigin and ExplAng.
Before calling this method, you must:
Use
IConfigurationManager::ActiveConfiguration
to get the active configuration for the assembly.
Call
IAssemblyDoc::ShowExploded2
to activate an explode view.
Call
IModelDocExtension::SelectByID2
to select:
Components to move with Mark = 1.
(Optionally) An explode direction entity (cylindrical
face
, conical face, linear
edge
, or
axis
) with Mark = 2. Either, both, or neither of the direction entity and ExplDirIndex can be set. If neither, then the Z-direction manipulator index is used.
(Optionally) A rotation axis with Mark = 32. Valid only if RotateAboutOrigin is set to false. Either, both, or neither of the rotation axis and RotAxisIndex can be set. If neither, then the XY ring index is used.
After calling this method, call
IModelDoc2::EditRebuild3
.
For C++, specify VARIANT_TRUE or VARIANT_FALSE for ReverseDir, ReverseAng, and RotateAboutOrigin.
To edit a regular explode step, see the
IExplodeStep
remarks.
To create an explode step for the explode view of a multibody part, see
IConfiguration::AddPartExplodeStep
.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)

## See Also

- `IConfiguration.AddRadialExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.GetNumberOfExplodeSteps`