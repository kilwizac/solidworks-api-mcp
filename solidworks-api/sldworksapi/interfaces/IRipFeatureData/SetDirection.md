---
type: method
interface: IRipFeatureData
member: SetDirection
returns: void
parameters:
  -
    name: Edge
    type: System.Object
    description: Rip feature edge
  -
    name: Dir
    type: System.Int32
    description: Direction of rip feature: 0 = this direction 1 = other direction 2 = both directions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRipFeatureData.GetDirection
keywords:
  - setdirection
  - iripfeaturedata
  - rip
  - feature
  - data
  - direction
  - edge
  - object
  - dir
  - int32
  - void
---

# IRipFeatureData.SetDirection

Sets the direction for this rip feature.

## Signature

```csharp
void SetDirection( 
   System.Object
Edge
,
   System.Int32
Dir
)
```
## Parameters

- `Edge` (System.Object): Rip feature edge
- `Dir` (System.Int32): Direction of rip feature: 0 = this direction 1 = other direction 2 = both directions

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRipFeatureData.GetDirection`