---
type: property
interface: ICornerReliefFeatureData
member: CornerType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - cornertype
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - type
  - int32
readonly: true
---

# ICornerReliefFeatureData.CornerType

Gets the bend type of this corner relief feature.

## Signature

```csharp
System.Int32 CornerType {get;}
```
## Parameters

None.

## Return Value

Corner relief bend type as defined by swCornerReliefBendType_e

## Remarks

This property cannot be changed after it is set by
ICornerReliefFeatureData::Intialize
.