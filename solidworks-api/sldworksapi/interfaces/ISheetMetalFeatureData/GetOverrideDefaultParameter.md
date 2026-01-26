---
type: method
interface: ISheetMetalFeatureData
member: GetOverrideDefaultParameter
returns: System.Int32
parameters:
  -
    name: OverrideDefaultParameter
    type: System.Boolean
    description: True if the default parameters are overridden, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISheetMetalFeatureData.SetOverrideDefaultParameter
keywords:
  - getoverridedefaultparameter
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

# ISheetMetalFeatureData.GetOverrideDefaultParameter

Obsolete. Superseded by ISheetMetalFeatureData::GetOverrideDefaultParameter2.

## Signature

```csharp
System.Int32 GetOverrideDefaultParameter( 
   out System.Boolean
OverrideDefaultParameter
)
```
## Parameters

- `OverrideDefaultParameter` (System.Boolean): True if the default parameters are overridden, false if not

## Return Value

Result code as defined in swSheetMetalModifierError_e

## See Also

- `ISheetMetalFeatureData.SetOverrideDefaultParameter`