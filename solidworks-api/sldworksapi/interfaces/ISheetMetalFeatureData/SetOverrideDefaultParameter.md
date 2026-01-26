---
type: method
interface: ISheetMetalFeatureData
member: SetOverrideDefaultParameter
returns: System.Int32
parameters:
  -
    name: OverrideDefaultParameter
    type: System.Boolean
    description: True to override the default parameters, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISheetMetalFeatureData.GetOverrideDefaultParameter
keywords:
  - setoverridedefaultparameter
  - isheetmetalfeaturedata
  - sheet
  - metal
  - feature
  - data
  - override
  - default
  - parameter
  - boolean
  - int32
---

# ISheetMetalFeatureData.SetOverrideDefaultParameter

Obsolete. Superseded by ISheetMetalFeatureData::SetOverrideDefaultParameter2.

## Signature

```csharp
System.Int32 SetOverrideDefaultParameter( 
   System.Boolean
OverrideDefaultParameter
)
```
## Parameters

- `OverrideDefaultParameter` (System.Boolean): True to override the default parameters, false to not

## Return Value

Result code as defined in swSheetMetalModifierError_e

## See Also

- `ISheetMetalFeatureData.GetOverrideDefaultParameter`