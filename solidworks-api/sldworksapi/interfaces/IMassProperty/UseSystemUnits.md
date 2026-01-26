---
type: property
interface: IMassProperty
member: UseSystemUnits
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - usesystemunits
  - imassproperty
  - mass
  - use
  - units
  - boolean
  - override
  - properties
  - vba
  - propeties
  - vb
  - net
readonly: null
---

# IMassProperty.UseSystemUnits

Gets and sets whether to use system units or document units when calculating mass properties for this model.

## Signature

```csharp
System.Boolean UseSystemUnits {get; set;}
```
## Parameters

None.

## Return Value

True to use system units, false to use document units

## Remarks

The default value is True. Thus, system units (meters, radians, and kilograms) are used. All properties returning a value are adjusted accordingly.

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Propeties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Propeties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)