---
type: method
interface: IModelDocExtension
member: GetMassProperties2
returns: System.Object
parameters:
  -
    name: Accuracy
    type: System.Int32
    description: 0 = as is 1 = default 2 = maximum
  -
    name: Status
    type: System.Int32
    description: Error code as defined in swMassPropertiesStatus_e
  -
    name: UseSelected
    type: System.Boolean
    description: True to return the mass properties of the selected components only, false to return the mass properties of the entire model, excluding suppressed components
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IMassProperty
  - IModelDocExtension.CreateMassProperty
keywords:
  - getmassproperties2
  - imodeldocextension
  - model
  - doc
  - extension
  - mass
  - properties2
  - accuracy
  - int32
  - status
  - use
  - selected
  - boolean
  - object
  - properties
  - vba
  - vb
  - net
---

# IModelDocExtension.GetMassProperties2

Obsolete. Superseded by IMassProperty2.

## Signature

```csharp
System.Object GetMassProperties2( 
   System.Int32
Accuracy
,
   out System.Int32
Status
,
   System.Boolean
UseSelected
)
```
## Parameters

- `Accuracy` (System.Int32): 0 = as is 1 = default 2 = maximum
- `Status` (System.Int32): Error code as defined in swMassPropertiesStatus_e
- `UseSelected` (System.Boolean): True to return the mass properties of the selected components only, false to return the mass properties of the entire model, excluding suppressed components

## Return Value

Array of size 12 (see Remarks )

## Remarks

If this model is...
Then pre-select...
An assembly
Components for which to get mass properties. This method returns the center of mass and moments of inertia in the coordinate system of the assembly.
A part
Solid bodies for which to get mass properties. The calculated origin for the returned values is based on the default coordinate system of the part. It is not based on the selected coordinate system.
The return value is a 0-based array of doubles as follows:
[
CenterOfMassX, CenterOfMassY, CenterOfMassZ, Volume, SurfaceArea, Mass, MomXX, MomYY, MomZZ, MomXY, MomZX, MomYZ
]
Where:
Mom
NN
=
NN-component
of the moment of inertia taken at the center of mass and aligned with the output coordinate system
You can use
ISldWorks::GetUserPreferenceDoubleValue
and swMaterialPropertyDensity to get the density of the SOLIDWORKS part. If the user did not explicitly set the density, then SOLIDWORKS uses a value of 1.0. You can also derive the density of the body by calculating:
Density = (
Mass
/
Volume
)
This method:
returns values in metric units.
supports multibody parts.

## Examples

- Get Mass Properties (VBA) (Get_Mass_Properties_of_ActiveDoc_Example_VB.htm)
- Get Mass Properties (VB.NET) (Get_Mass_Properties_of_ActiveDoc_Example_VBNET.htm)
- Get Mass Properties (C#) (Get_Mass_Properties_of_ActiveDoc_Example_CSharp.htm)

## See Also

- `IMassProperty`
- `IModelDocExtension.CreateMassProperty`