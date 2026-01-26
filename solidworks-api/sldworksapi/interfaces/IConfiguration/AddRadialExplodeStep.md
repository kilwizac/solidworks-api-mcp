---
type: method
interface: IConfiguration
member: AddRadialExplodeStep
returns: System.Object
parameters:
  -
    name: ExplDist
    type: System.Double
    description: Distance in meters to move the components in this explode step
  -
    name: ExplAng
    type: System.Double
    description: Angle in radians of rotation about component origins
  -
    name: DivergeFromAxis
    type: System.Boolean
    description: True to move components at an angle from the selected explode direction, false to not (see Remarks )
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
  - IConfiguration.AddExplodeStep2
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.GetNumberOfExplodeSteps
keywords:
  - addradialexplodestep
  - iconfiguration
  - configuration
  - add
  - radial
  - explode
  - step
  - expl
  - dist
  - double
  - ang
  - diverge
  - axis
  - boolean
  - error
  - int32
  - object
---

# IConfiguration.AddRadialExplodeStep

Adds a radial explode step to the explode view of the active configuration.

## Signature

```csharp
System.Object AddRadialExplodeStep( 
   System.Double
ExplDist
,
   System.Double
ExplAng
,
   System.Boolean
DivergeFromAxis
,
   out System.Int32
Error
)
```
## Parameters

- `ExplDist` (System.Double): Distance in meters to move the components in this explode step
- `ExplAng` (System.Double): Angle in radians of rotation about component origins
- `DivergeFromAxis` (System.Boolean): True to move components at an angle from the selected explode direction, false to not (see Remarks )
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
An explode direction entity (cylindrical
face
, conical face, linear
edge
, or
axis
) with Mark = 34.
A diverge direction entity (cylindrical face, conical face, linear edge, or axis) with Mark = 64. The selected entity must form an angle with the direction entity. If DivergeFromAxis is set to true and an invalid diverge direction is selected, then DivergeFromAxis is set to false, and the direction entity is set to null. If DivergeFromAxis is set to false, then the direction entity is set to null.
After calling this method, call
IModelDoc2::EditRebuild3
.
For C++, specify VARIANT_TRUE or VARIANT_FALSE for ReverseDir and DivergeFromAxis.
To edit a radial explode step, see the
IExplodeStep
remarks.
To create an explode step for the explode view of a multibody part, see
IConfiguration::AddPartExplodeStep
.

## See Also

- `IConfiguration.AddExplodeStep2`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.GetNumberOfExplodeSteps`