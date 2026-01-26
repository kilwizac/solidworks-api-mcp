---
type: method
interface: IVariableFilletFeatureData2
member: GetControlPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcontrolpointscount
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - control
  - points
  - count
  - int32
---

# IVariableFilletFeatureData2.GetControlPointsCount

Gets the number of intermediate control points on this variable fillet feature.

## Signature

```csharp
System.Int32 GetControlPointsCount()
```
## Parameters

None.

## Return Value

Number of intermediate control points

## Remarks

Call this method before calling
IVariableFilletFeatureData2::GetControlPointRadiusAtIndex
.