---
type: method
interface: ICornerReliefFeatureData
member: RemoveCorner
returns: System.Boolean
parameters:
  -
    name: CornerIndex
    type: System.Int32
    description: One-based index of corner to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - removecorner
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - remove
  - index
  - int32
  - boolean
---

# ICornerReliefFeatureData.RemoveCorner

Removes the specified corner from this corner relief feature.

## Signature

```csharp
System.Boolean RemoveCorner( 
   System.Int32
CornerIndex
)
```
## Parameters

- `CornerIndex` (System.Int32): One-based index of corner to remove

## Return Value

True if specified corner successfully removed, false if not