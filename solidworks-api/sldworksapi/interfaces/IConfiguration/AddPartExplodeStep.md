---
type: method
interface: IConfiguration
member: AddPartExplodeStep
returns: System.Object
parameters:
  -
    name: ExplodeView
    type: System.String
    description: Name of the explode view to which to add this explode step
  -
    name: ExplDist
    type: System.Double
    description: Distance in meters to move the selected bodies in this explode step
  -
    name: ExplDirIndex
    type: System.Int32
    description: Explode direction manipulator index as defined in swExplodeDirectionIndex_e (see Remarks )
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the explode direction, false to not
  -
    name: AutoSpaceBodiesOnDrag
    type: System.Boolean
    description: True to automatically space selected bodies on drag, false to not
  -
    name: Error
    type: System.Int32
    description: Error code as defined in swCreatePartExplodeStepError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related:
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetNumberOfPartExplodeSteps
  - IConfiguration.GetPartExplodeStep
keywords:
  - addpartexplodestep
  - iconfiguration
  - configuration
  - add
  - part
  - explode
  - step
  - view
  - string
  - expl
  - dist
  - double
  - dir
  - index
  - int32
  - reverse
  - boolean
  - auto
  - space
  - bodies
  - drag
  - error
  - object
  - ipartexplodestep
---

# IConfiguration.AddPartExplodeStep

Adds an explode step to the specified explode view of a multibody part.

## Signature

```csharp
System.Object AddPartExplodeStep( 
   System.String
ExplodeView
,
   System.Double
ExplDist
,
   System.Int32
ExplDirIndex
,
   System.Boolean
ReverseDir
,
   System.Boolean
AutoSpaceBodiesOnDrag
,
   out System.Int32
Error
)
```
## Parameters

- `ExplodeView` (System.String): Name of the explode view to which to add this explode step
- `ExplDist` (System.Double): Distance in meters to move the selected bodies in this explode step
- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e (see Remarks )
- `ReverseDir` (System.Boolean): True to reverse the explode direction, false to not
- `AutoSpaceBodiesOnDrag` (System.Boolean): True to automatically space selected bodies on drag, false to not
- `Error` (System.Int32): Error code as defined in swCreatePartExplodeStepError_e

## Return Value

IPartExplodeStep

## Remarks

This method:
Is valid only for an active, current explode view of a multibody part.
Always clears the selection list.
Does not work if the Explode PropertyManager is open.
Does not work if any body is being edited in the context of the part.
Before calling this method, you must:
Create an explode view in the active, current configuration of the multibody part. To create an explode view, call
IPartDoc::CreateExplodedView
.
Populate ExplodeView with
IConfiguration::GetCurrentPartExplodeViewName
.
Call
IPartDoc::ShowExploded
to activate the explode view to which to add an explode step.
Call
IModelDocExtension::SelectByID2
to select:
Bodies to move with Mark = 1.
(Optionally) An explode direction entity (cylindrical
face
, conical face, linear
edge
, or
axis
) with Mark = 2. Either, both, or neither of the direction entity and ExplDirIndex can be set. If neither, then the Z-direction manipulator index is used.
After calling this method, call
IModelDoc2::EditRebuild3
.
For C++, specify VARIANT_TRUE or VARIANT_FALSE for ReverseDir.
To edit an explode step, see the
IPartExplodeStep
remarks.
To create an explode step for the explode view of an assembly, see
IConfiguration::AddExplodeStep2
and
IConfiguration::AddRadialExplodeStep
.

## Examples

- IPartExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartExplodeStep)

## See Also

- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetNumberOfPartExplodeSteps`
- `IConfiguration.GetPartExplodeStep`