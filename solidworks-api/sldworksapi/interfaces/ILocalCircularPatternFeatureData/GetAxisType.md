---
type: method
interface: ILocalCircularPatternFeatureData
member: GetAxisType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.Axis
  - ILocalCircularPatternFeatureData.ReverseDirection
keywords:
  - getaxistype
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - axis
  - type
  - int32
---

# ILocalCircularPatternFeatureData.GetAxisType

Gets whether the circular axis is a reference axis, edge, or dimension for this circular component pattern feature.

## Signature

```csharp
System.Int32 GetAxisType()
```
## Parameters

None.

## Return Value

Axis type used to create the circular pattern: 0 = reference axis 1 = edge 2 = dimension

## See Also

- `ILocalCircularPatternFeatureData.Axis`
- `ILocalCircularPatternFeatureData.ReverseDirection`