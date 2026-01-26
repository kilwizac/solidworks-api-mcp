---
type: property
interface: IBoundaryBossFeatureData
member: TrimByD1
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.D1Curves
  - IBoundaryBossFeatureData.D2Curves
keywords:
  - trimbyd1
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - trim
  - d1
  - boolean
readonly: null
---

# IBoundaryBossFeatureData.TrimByD1

Gets whether to trim surfaces in Direction 1 when curves do not form a closed boundary feature.

## Signature

```csharp
System.Boolean TrimByD1 {get; set;}
```
## Parameters

None.

## Return Value

True to trim surfaces in Direction 1 when curves do not form a closed boundary feature, false to not

## Remarks

This property is only available when curves exist in both Direction 1 and Direction 2.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.D1Curves`
- `IBoundaryBossFeatureData.D2Curves`