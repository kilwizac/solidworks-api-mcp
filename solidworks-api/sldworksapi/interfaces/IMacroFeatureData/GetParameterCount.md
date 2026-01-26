---
type: method
interface: IMacroFeatureData
member: GetParameterCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetParameters
  - IMacroFeatureData.SetStringByName
keywords:
  - getparametercount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parameter
  - count
  - int32
---

# IMacroFeatureData.GetParameterCount

Gets the number of user-defined parameters.

## Signature

```csharp
System.Int32 GetParameterCount()
```
## Parameters

None.

## Return Value

Number of user-defined parameters

## Remarks

Call this method before calling
IMacroFeatureData::IGetParameters
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetParameters`
- `IMacroFeatureData.SetStringByName`