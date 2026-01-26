---
type: property
interface: IMassPropertyOverrideOptions
member: SetOverrideMassValue
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: New mass value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.Mass
keywords:
  - setoverridemassvalue
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - value
  - double
  - boolean
  - imassproperty2
readonly: null
---

# IMassPropertyOverrideOptions.SetOverrideMassValue

Overrides the calculated mass of the model currently being edited.

## Signature

```csharp
System.Boolean SetOverrideMassValue( 
   System.Double
Value
)
```
## Parameters

- `Value` (System.Double): New mass value

## Return Value

True if the mass is successfully overridden, false if not

## Remarks

This method is valid only if
IMassPropertyOverrideOptions::OverrideMass
is set to true.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.Mass`