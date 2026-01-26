---
type: method
interface: IMacroFeatureData
member: GetParentsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.IGetParents
  - IMacroFeatureData.ISetParents
  - IMacroFeatureData.Parents
keywords:
  - getparentscount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parents
  - count
  - int32
---

# IMacroFeatureData.GetParentsCount

Gets the number of parent features for this macro feature.

## Signature

```csharp
System.Int32 GetParentsCount()
```
## Parameters

None.

## Return Value

Number of parent features for this macro feature

## Remarks

Call this method before using
IMacroFeatureData::IGetParents
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.IGetParents`
- `IMacroFeatureData.ISetParents`
- `IMacroFeatureData.Parents`