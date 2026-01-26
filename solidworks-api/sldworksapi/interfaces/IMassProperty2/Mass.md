---
type: property
interface: IMassProperty2
member: Mass
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassPropertyOverrideOptions.GetOverrideMassValue
  - IMassPropertyOverrideOptions.SetOverrideMassValue
keywords:
  - mass
  - imassproperty2
  - property2
  - double
readonly: true
---

# IMassProperty2.Mass

Gets the mass of selected components/bodies.

## Signature

```csharp
System.Double Mass {get;}
```
## Parameters

None.

## Return Value

Mass

## Remarks

If
IMassPropertyOverrideOptions::OverrideMass
is true or
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassPropertyOverrideOptions.GetOverrideMassValue`
- `IMassPropertyOverrideOptions.SetOverrideMassValue`