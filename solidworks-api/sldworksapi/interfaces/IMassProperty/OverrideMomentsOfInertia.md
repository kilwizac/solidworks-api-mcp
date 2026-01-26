---
type: property
interface: IMassProperty
member: OverrideMomentsOfInertia
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.ISetOverrideMomentsOfInertiaValue
  - IMassProperty.PrincipleMomentsOfInertia
  - IMassProperty.SetOverrideMomentsOfInertiaValue
keywords:
  - overridemomentsofinertia
  - imassproperty
  - mass
  - override
  - moments
  - inertia
  - boolean
  - properties
  - vba
  - vb
  - net
readonly: null
---

# IMassProperty.OverrideMomentsOfInertia

Gets or sets whether to override the calculated moments of inertia for the model.

## Signature

```csharp
System.Boolean OverrideMomentsOfInertia {get; set;}
```
## Parameters

None.

## Return Value

True to override the moments of inertia, false to use the calculated values

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)

## See Also

- `IMassProperty.ISetOverrideMomentsOfInertiaValue`
- `IMassProperty.PrincipleMomentsOfInertia`
- `IMassProperty.SetOverrideMomentsOfInertiaValue`