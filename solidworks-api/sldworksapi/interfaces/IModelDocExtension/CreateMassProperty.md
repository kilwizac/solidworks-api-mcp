---
type: property
interface: IModelDocExtension
member: CreateMassProperty
returns: MassProperty
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetMassProperties2
keywords:
  - createmassproperty
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - mass
  - insert
  - coordinate
  - center
  - vba
  - dimensions
  - mid
  - tolerance
  - properties
  - multibody
  - assembly
  - component
  - vb
  - net
readonly: null
---

# IModelDocExtension.CreateMassProperty

Obsolete. Superseded by IModelDocExtension::CreateMassProperty2.

## Signature

```csharp
MassProperty CreateMassProperty()
```
## Parameters

None.

## Return Value

IMassProperty object

## Remarks

The IMassProperty object obtains mass property information about one or more solid bodies in the document from which the IMassProperty object is obtained.
Only use solid bodies for the mass property calculations. You can specify the coordinate system about which the moments is calculated using
IMassProperty::SetCoordinateSystem
. If you do not use IMassProperty::SetCoordinateSystem, then the documents origin is the coordinate system.
The results of the mass property calculations vary based on whether or not
IMassProperty::AddBodies
or
IMassProperty::IAddBodies
is used.
If IMassProperty::AddBodies or IMassProperty::IAddBodies is...
Then...
Called and bodies are specified
These bodies can either be from a subset of the documents body list or from temporary bodies.
NOTE:
Each specified body should either come from the owning document or be a temporary body. If the body does not satisfy either case, then it is not used when calculating the mass properties.
Not called
Mass properties' calculations include all available bodies in the document.
Part
. All of the solid bodies are included in the calculations.
Assembly
. All of the bodies in all of the components are used in the calculations.
If the document from which the IMassProperty object came is an assembly, then any body from any of the child components can be used. To obtain the body, call
IComponent2::GetBodies2
. Your application does not need to make a copy of the body or apply a transform to the body.
IModelDocExtension::CreateMassProperty gets the recalculated up-to-date values regardless of the
IModelDocExtension::NeedsRebuild
status.

## Examples

- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)
- Set Dimensions to Mid-Tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)

## See Also

- `IModelDocExtension.GetMassProperties2`