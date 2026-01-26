---
type: method
interface: IBomFeature
member: SetLinkToDisplayState
returns: System.Int32
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the Display State to link to the BOM
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.GetLinkToDisplayState
keywords:
  - setlinktodisplaystate
  - ibomfeature
  - bom
  - feature
  - link
  - display
  - state
  - name
  - string
  - int32
---

# IBomFeature.SetLinkToDisplayState

Sets the name of the Display State to which to link this BOM feature.

## Signature

```csharp
System.Int32 SetLinkToDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the Display State to link to the BOM

## Return Value

Return code as defined by swLinkBomToDisplayStateError_e

## See Also

- `IBomFeature.GetLinkToDisplayState`