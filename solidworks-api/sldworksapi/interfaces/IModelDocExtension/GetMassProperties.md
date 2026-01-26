---
type: method
interface: IModelDocExtension
member: GetMassProperties
returns: System.Object
parameters:
  -
    name: Accuracy
    type: System.Int32
    description: 0 = as is 1 = default 2 = maximum
  -
    name: Status
    type: System.Int32
    description: Status of the mass property results as defined in swMassPropertiesStatus_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IMassProperty
  - IModelDocExtension.CreateMassProperty
  - IModelDocExtension.GetMassProperties2
  - IModelDocExtension.IGetMassProperties
keywords:
  - getmassproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - mass
  - properties
  - accuracy
  - int32
  - status
  - object
---

# IModelDocExtension.GetMassProperties

Obsolete. Superseded by IModelDocExtension::GetMassProperties2.

## Signature

```csharp
System.Object GetMassProperties( 
   System.Int32
Accuracy
,
   out System.Int32
Status
)
```
## Parameters

- `Accuracy` (System.Int32): 0 = as is 1 = default 2 = maximum
- `Status` (System.Int32): Status of the mass property results as defined in swMassPropertiesStatus_e

## Return Value

Array of size 13 (see Remarks )

## Remarks

The return value is a 0-based array of doubles as follows:
[
CenterOfMassX, CenterOfMassY, CenterOfMassZ, Volume, Area, Mass, MomXX, MomYY, MomZZ, MomXY, MomZX, MomYZ, Accuracy
]
You can use
ISldWorks::GetUserPreferenceDoubleValue
and swMaterialPropertyDensity to get the density of the SOLIDWORKS part. If the user did not explicitly set the density, then SOLIDWORKS uses a value of 1.0. You can also derive the density of the body by calculating:
Density = ( Mass / Volume )
This method returns metric units unless specified otherwise.
If this object is...
Then...
An assembly
SOLIDWORKS does not include any suppressed components in the mass property analysis. See
IComponent2::GetSuppression
to determine the state of each assembly component.
This method returns the moments of inertia (MOI) about the assembly center-of-gravity coordinate system aligned with the assembly axes.
A part
The calculated origin for the returned values are based on the default coordinate systems of the model document. They are not based on the selected coordinate system.
This method supports multibody parts.

## See Also

- `IMassProperty`
- `IModelDocExtension.CreateMassProperty`
- `IModelDocExtension.GetMassProperties2`
- `IModelDocExtension.IGetMassProperties`