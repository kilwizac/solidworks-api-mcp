---
type: method
interface: ICavityFeatureData
member: GetComponentsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData.Components
  - ICavityFeatureData.ISetComponents
keywords:
  - getcomponentscount
  - icavityfeaturedata
  - cavity
  - feature
  - data
  - components
  - count
  - int32
---

# ICavityFeatureData.GetComponentsCount

Gets the number of design components in this cavity feature.

## Signature

```csharp
System.Int32 GetComponentsCount()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Call this method before calling
ICavityFeatureData::IGetComponents
.

## See Also

- `ICavityFeatureData.Components`
- `ICavityFeatureData.ISetComponents`