---
type: method
interface: IGtol
member: SetPTZHeight
returns: void
parameters:
  -
    name: PtzHt
    type: System.String
    description: Height of the projected tolerance zone
  -
    name: DisplayIn
    type: System.Boolean
    description: True to display the projected zone tolerance, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetPTZHeight
keywords:
  - setptzheight
  - igtol
  - gtol
  - ptz
  - height
  - ht
  - string
  - display
  - boolean
  - void
---

# IGtol.SetPTZHeight

Obsolete. Superseded by IGtol::SetPTZHeight2.

## Signature

```csharp
void SetPTZHeight( 
   System.String
PtzHt
,
   System.Boolean
DisplayIn
)
```
## Parameters

- `PtzHt` (System.String): Height of the projected tolerance zone
- `DisplayIn` (System.Boolean): True to display the projected zone tolerance, false to not

## Return Value

Unknown.

## Remarks

The projected tolerance zone (PTZ) displays in the first tolerance window of the first control frame of the GTol. If PtzHt is not empty, its value is displayed after the PTZ symbol, which is a P enclosed in a circle.

## See Also

- `IGtol.GetPTZHeight`