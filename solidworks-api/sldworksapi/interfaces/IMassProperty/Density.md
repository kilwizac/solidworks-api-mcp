---
type: property
interface: IMassProperty
member: Density
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - density
  - imassproperty
  - mass
  - double
  - dimensions
  - mid
  - tolerance
  - vba
  - override
  - properties
  - vb
  - net
  - multibody
  - assembly
  - component
readonly: true
---

# IMassProperty.Density

Gets the density for this model.

## Signature

```csharp
System.Double Density {get;}
```
## Parameters

None.

## Return Value

Density

## Remarks

You can also:
Derive the density of the body by calculating
Density = ( Mass / Volume )
.
Use
ISldWorks::GetUserPreferenceDoubleValue
to get the density of the model.
This property returns metric units unless explicitly specified otherwise.

## Examples

- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)