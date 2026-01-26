---
type: method
interface: ISurfExtrudeFeatureData
member: SetReverseOffset
returns: void
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True sets the reverse offset setting in the forward direction, false sets it in the reverse direction
  -
    name: RevOffset
    type: System.Boolean
    description: True enables the reverse offset setting, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.GetReverseOffset
keywords:
  - setreverseoffset
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - reverse
  - offset
  - fwd
  - boolean
  - rev
  - void
---

# ISurfExtrudeFeatureData.SetReverseOffset

Sets the reverse offset direction setting for the end condition of this extruded surface.

## Signature

```csharp
void SetReverseOffset( 
   System.Boolean
Fwd
,
   System.Boolean
RevOffset
)
```
## Parameters

- `Fwd` (System.Boolean): True sets the reverse offset setting in the forward direction, false sets it in the reverse direction
- `RevOffset` (System.Boolean): True enables the reverse offset setting, false disables it

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetReverseOffset`