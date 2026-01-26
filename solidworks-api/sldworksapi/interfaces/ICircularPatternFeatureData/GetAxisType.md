---
type: method
interface: ICircularPatternFeatureData
member: GetAxisType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.Axis
keywords:
  - getaxistype
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - axis
  - type
  - int32
---

# ICircularPatternFeatureData.GetAxisType

Gets the type of geometry used to determine the direction of this circular pattern.

## Signature

```csharp
System.Int32 GetAxisType()
```
## Parameters

None.

## Return Value

Geometry type used to create the circular pattern: 0 = reference axis 1 = edge 2 = dimension 3 = sketch line

## See Also

- `ICircularPatternFeatureData.Axis`