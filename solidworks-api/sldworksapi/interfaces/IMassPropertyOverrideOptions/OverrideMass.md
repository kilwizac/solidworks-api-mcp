---
type: property
interface: IMassPropertyOverrideOptions
member: OverrideMass
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.Mass
  - IMassPropertyOverrideOptions.GetOverrideMassValue
keywords:
  - overridemass
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - boolean
  - imassproperty2
readonly: null
---

# IMassPropertyOverrideOptions.OverrideMass

Gets or sets whether to override the calculated mass value for the model currently being edited.

## Signature

```csharp
System.Boolean OverrideMass {get; set;}
```
## Parameters

None.

## Return Value

True to override the calculated mass value, false to not

## Remarks

After setting this property to true, call
IMassPropertyOverrideOptions::SetOverrideMassValue
.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.Mass`
- `IMassPropertyOverrideOptions.GetOverrideMassValue`