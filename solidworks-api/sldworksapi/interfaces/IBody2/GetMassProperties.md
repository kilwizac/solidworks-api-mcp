---
type: method
interface: IBody2
member: GetMassProperties
returns: System.Object
parameters:
  -
    name: Density
    type: System.Double
    description: Density to use for the mass property calculations on this body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IGetMassProperties
keywords:
  - temporary
  - bodies
  - mass
  - properties
  - see
  - imassproperty
  - getmassproperties
  - ibody2
  - body2
  - density
  - double
  - object
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - vba
  - assembly
  - component
---

# IBody2.GetMassProperties

Gets the mass properties of this body.

## Signature

```csharp
System.Object GetMassProperties( 
   System.Double
Density
)
```
## Parameters

- `Density` (System.Double): Density to use for the mass property calculations on this body

## Return Value

Array of objects (see Remarks )

## Remarks

This method is intended for obtaining the mass properties of temporary objects but may also be used with the SOLIDWORKS
IBody2
object that is created by the user. To get the mass properties of the SOLIDWORKS IBody2 object created by the user, you can also use
IModelDocExtension::GetMassProperties
, which uses the density currently set for the body's material.
The return value is an array of doubles as follows:
Solid body
[
CenterOfMassX, CenterOfMassY, CenterOfMassZ, Volume, Area, Mass(Volume*density), MomXX, MomYY, MomZZ, MomXY, MomZX, MomYZ
]
Sheet body
[
CenterOfMassX, CenterOfMassY, CenterOfMassZ, Area, Circumference, Mass(Area*density), MomXX, MomYY, MomZZ, MomXY, MomZX, MomYZ
]
Wire body
[
CenterOfMassX, CenterOfMassY, CenterOfMassZ, Length, 0, Mass(Length*density), MomXX, MomYY, MomZZ, MomXY, MomZX, MomYZ
]
You can use
ISldWorks::GetUserPreferenceDoubleValue
and swMaterialPropertyDensity to get the density used by the SOLIDWORKS part. Consistent with all other SOLIDWORKS API functions, units are metric unless otherwise specified.
SOLIDWORKS returns information (such as the center of mass) in relation to where the body was created. For example, if you create a block in a part file that is centered at (0,0,0), then SOLIDWORKS returns the center of mass as (0,0,0). If you then use this part at some random location within an assembly, and the body is obtained from the assembly component object using
IComponent2::GetBody
, then SOLIDWORKS still returns the center of mass as (0,0,0). If you need to determine the body's center of mass in relation to the assembly coordinate system, you need to multiply the component transform and the center of mass coordinates (see
IComponent2::Transform2
).

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)
- Get Mass Properties of Assembly Component (VBA) (Get_Mass_Properties_of_Assembly_Component_Example_VB.htm)

## See Also

- `IBody2.IGetMassProperties`